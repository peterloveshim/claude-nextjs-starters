#!/usr/bin/env bash
# Claude Code → Slack 알림 스크립트
#
# 사용법:
#   echo '<JSON>' | bash .claude/slack-notify.sh <이벤트타입>
#
# 이벤트 타입:
#   Notification  - 파일 삭제 등 사용자 승인이 필요한 권한 요청
#   Stop          - Claude Code 작업/응답 완료
#
# Claude Code hooks에서 자동 호출될 때:
#   - $1 : 이벤트 타입 (Notification | Stop)
#   - stdin : Claude Code가 이벤트 JSON을 자동으로 파이프

set -euo pipefail

# 스크립트 위치 기준으로 경로를 결정 (어느 디렉토리에서 호출해도 동작)
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# ── 웹훅 URL 로드 ──────────────────────────────────────────────────────────
# .claude/slack-env 파일에서 SLACK_WEBHOOK_URL 환경변수를 읽어옴
if [[ -f "$SCRIPT_DIR/slack-env" ]]; then
  source "$SCRIPT_DIR/slack-env"
fi

# URL이 없거나 placeholder 상태면 조용히 종료
# → hook 실패로 인해 Claude 작업이 중단되는 일을 방지
if [[ -z "${SLACK_WEBHOOK_URL:-}" ]] || \
   [[ "$SLACK_WEBHOOK_URL" == *"YOUR/WEBHOOK/URL"* ]]; then
  exit 0
fi

# ── 이벤트 타입 파싱 ────────────────────────────────────────────────────────
EVENT_TYPE="${1:-unknown}"

# stdin에서 JSON 읽기 (Claude Code가 자동으로 파이프해줌)
INPUT_JSON=$(cat)

# 디버그: 실제 수신 JSON을 파일에 기록 (확인 후 삭제)
echo "[$(date)] EVENT=$EVENT_TYPE JSON=$INPUT_JSON" >> "$SCRIPT_DIR/slack-debug.log"

# 프로젝트 경로: $HOME을 ~로 축약 (어느 프로젝트에서 온 알림인지 식별)
PROJECT_DIR="${PWD/$HOME/\~}"

# 날짜+시각 (가독성을 위해 전체 날짜 포함)
DATE_TIME=$(date "+%Y-%m-%d %H:%M")

# ── 이벤트별 메시지 구성 ─────────────────────────────────────────────────────
case "$EVENT_TYPE" in
  Notification)
    # 권한 요청: 제목과 메시지를 JSON에서 추출
    TITLE=$(echo "$INPUT_JSON" | jq -r '.title // "Claude Code 알림"')
    MESSAGE=$(echo "$INPUT_JSON" | jq -r '.message // "(내용 없음)"')
    STATUS_TEXT="🔔  *권한 요청*"
    COLOR="#FF9800"  # 주황색 - 주의/확인 필요
    ;;

  Stop)
    # stop_reason에 따라 상태 메시지·색상·이모지를 다르게 표시
    STOP_REASON=$(echo "$INPUT_JSON" | jq -r '.stop_reason // "unknown"')
    case "$STOP_REASON" in
      end_turn)
        STATUS_TEXT="✅  *작업이 완료되었습니다*"
        COLOR="#4CAF50"   # 초록 - 정상 완료
        ;;
      error)
        STATUS_TEXT="❌  *오류가 발생했습니다*"
        COLOR="#F44336"   # 빨강 - 오류
        ;;
      interrupt)
        STATUS_TEXT="⏸️  *작업이 중단되었습니다*"
        COLOR="#9E9E9E"   # 회색 - 사용자 중단
        ;;
      *)
        STATUS_TEXT="❓  *Claude Code 종료*"
        COLOR="#607D8B"   # 블루그레이 - 알 수 없는 종료
        ;;
    esac
    ;;

  *)
    # 알 수 없는 이벤트는 무시
    exit 0
    ;;
esac

# ── Slack Block Kit 페이로드 구성 ────────────────────────────────────────────
# jq로 JSON을 안전하게 생성 (문자열 이스케이프 자동 처리)
#
# 블록 구조:
#   [header]        "Claude Code" 고정 타이틀
#   [section mrkdwn] 이모지 + 볼드 상태 메시지
#   [section fields] 키-값 쌍을 2열 그리드로 표시 (Slack 자동 처리)
if [[ "$EVENT_TYPE" == "Stop" ]]; then
  # Stop 이벤트: 이벤트 / 종료 이유 / 프로젝트 / 시각 → 2열 fields 그리드
  PAYLOAD=$(jq -n \
    --arg status "$STATUS_TEXT" \
    --arg event "$EVENT_TYPE" \
    --arg reason "$STOP_REASON" \
    --arg project "$PROJECT_DIR" \
    --arg datetime "$DATE_TIME" \
    --arg color "$COLOR" \
    '{
      attachments: [{
        color: $color,
        blocks: [
          {
            type: "header",
            text: { type: "plain_text", text: "Claude Code", emoji: true }
          },
          {
            type: "section",
            text: { type: "mrkdwn", text: $status }
          },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: ("*이벤트*\n" + $event) },
              { type: "mrkdwn", text: ("*종료 이유*\n" + $reason) },
              { type: "mrkdwn", text: ("*프로젝트*\n" + $project) },
              { type: "mrkdwn", text: ("*시각*\n" + $datetime) }
            ]
          }
        ]
      }]
    }')
else
  # Notification 이벤트: 이벤트 / 제목 / 내용 / 프로젝트 / 시각 → 2열 fields 그리드
  PAYLOAD=$(jq -n \
    --arg status "$STATUS_TEXT" \
    --arg event "$EVENT_TYPE" \
    --arg title "$TITLE" \
    --arg message "$MESSAGE" \
    --arg project "$PROJECT_DIR" \
    --arg datetime "$DATE_TIME" \
    --arg color "$COLOR" \
    '{
      attachments: [{
        color: $color,
        blocks: [
          {
            type: "header",
            text: { type: "plain_text", text: "Claude Code", emoji: true }
          },
          {
            type: "section",
            text: { type: "mrkdwn", text: $status }
          },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: ("*이벤트*\n" + $event) },
              { type: "mrkdwn", text: ("*제목*\n" + $title) },
              { type: "mrkdwn", text: ("*내용*\n" + $message) },
              { type: "mrkdwn", text: ("*프로젝트*\n" + $project) },
              { type: "mrkdwn", text: ("*시각*\n" + $datetime) }
            ]
          }
        ]
      }]
    }')
fi

# ── Slack으로 전송 ────────────────────────────────────────────────────────────
# -s: silent (진행상황 숨김), -o /dev/null: 응답 본문 버림
curl -s -o /dev/null \
  -X POST \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD" \
  "$SLACK_WEBHOOK_URL"
