---
name: 프로젝트 코드 패턴 및 아키텍처
description: claude-nextjs-starters 프로젝트의 주요 패턴, 안티패턴, 구조적 특성
type: project
---

## 아키텍처 요약

- Next.js 16 App Router 기반 대시보드 스타터킷
- 라우트 그룹: `(dashboard)` — Sidebar + Header 레이아웃 공유
- 퍼블릭 페이지: `/`, `/about` — Header + Footer 레이아웃

## 반복적으로 발견된 코드 패턴

### 통계 카드 패턴 (반복 중복)

`dashboard/page.tsx`, `users/page.tsx`, `analytics/page.tsx` 모두 동일한 통계 카드 구조를 직접 구현함.
공통 `StatCard` 컴포넌트로 추출 필요.

### 목록 아이템 패턴 (반복 중복)

`dashboard/page.tsx`의 최근 활동 목록, `users/page.tsx`의 사용자 목록, `analytics/page.tsx`의 인기 페이지 목록이
모두 유사한 구조 (아이콘/아바타 + 텍스트 + 우측 배지/값). 공통화 가능.

### key={index} 안티패턴

`dashboard/page.tsx:106`, `users/page.tsx:69`, `analytics/page.tsx:60`에서 배열 index를 key로 사용.
고유 식별자(id, href 등)를 key로 사용해야 함.

## 타입 관련 이슈

### any 타입 사용 (프로젝트 규칙 위반)

`hooks/page.tsx:314-316`: `useHover` ref 타입 불일치로 `as any` 캐스팅 사용.
`eslint-disable @typescript-eslint/no-explicit-any` 주석으로 회피 중.

### 불필요한 타입 캐스팅

`form/page.tsx:109, 172, 282`: `submitted as Record<string, unknown>` 캐스팅.
`LoginFormValues`는 이미 `Record<string, unknown>` 할당 가능하므로 불필요.

## 모바일 반응형 미흡

### Sidebar 모바일 지원 없음

`layout/sidebar.tsx:60`: `hidden ... md:block` — 모바일에서 사이드바가 완전히 숨겨지고 열 수 있는 방법 없음.
`(dashboard)/layout.tsx`의 헤더에 모바일 햄버거 메뉴 없음.

## 데이터 관리 규칙 미준수

- `users/page.tsx`: 사용자 목록 데이터가 하드코딩. CLAUDE.md 규칙상 TanStack Query 사용 필요.
- `analytics/page.tsx`: 분석 데이터 하드코딩. TanStack Query 미사용.

## 성능 관련

- `footer.tsx`: `new Date().getFullYear()` — 서버 컴포넌트에서 사용 중이므로 빌드 타임에 고정됨. 런타임 갱신이 필요하다면 클라이언트 처리 필요.
- `theme-toggle.tsx`: `useEffect + useState(mounted)` 패턴으로 hydration mismatch 방지 — 올바른 접근.

## 잘된 패턴

- `cn()` 함수 일관성 있게 활용
- React Hook Form + Zod 패턴 올바르게 적용 (`form/page.tsx`)
- `SidebarNavGroup` 분리로 사이드바 로직 모듈화
- `PageHeader` 재사용 컴포넌트 활용 일관성
- CSS 변수 기반 shadcn/ui 테마 시스템 준수
- 주석 한국어 작성 규칙 준수

**Why:** 2026-03-13 전체 프로젝트 코드 리뷰에서 도출된 패턴
**How to apply:** 향후 리뷰 시 이 파일을 참조하여 동일 이슈 반복 여부 확인
