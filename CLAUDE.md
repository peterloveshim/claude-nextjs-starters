# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개발 명령어

```bash
npm run dev      # 개발 서버 시작 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 검사
```

shadcn/ui 컴포넌트 추가:

```bash
npx shadcn@latest add <component-name>
```

## 프로젝트 아키텍처

### 라우팅 구조

- **App Router** 기반 (Next.js 16)
- `(dashboard)` 라우트 그룹으로 대시보드 레이아웃 공유
- 대시보드 서브메뉴: ui, form, hooks, layouts, users, analytics, docs, settings

### 폴더 역할

- `src/app/` — 페이지 및 레이아웃 (파일 기반 라우팅)
- `src/components/ui/` — shadcn/ui 프리미티브 컴포넌트 (수정 금지, CLI로 관리)
- `src/components/common/` — 공통 재사용 컴포넌트 (PageHeader, ThemeToggle 등)
- `src/components/layout/` — 레이아웃 컴포넌트 (Sidebar, Header, Footer)
- `src/lib/constants.ts` — 사이트 설정, 네비게이션 링크 등 상수 정의
- `src/lib/utils.ts` — `cn()` 유틸 함수 (Tailwind 클래스 병합)
- `src/providers/` — 전역 Provider 컴포넌트
- `src/types/` — TypeScript 공통 타입 정의

### 기술 스택 패턴

**폼 처리**: React Hook Form + Zod 조합

```typescript
const schema = z.object({ ... })
const form = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema) })
```

**테마**: `ThemeProvider`(next-themes) → 클래스 기반 다크/라이트 모드, `ThemeToggle` 컴포넌트로 토글

**스타일링**: Tailwind CSS v4 + shadcn/ui CSS 변수. `cn()` 함수로 조건부 클래스 병합

**경로 별칭**: `@/*` → `src/*`

## 중요 규칙

- `any` 타입 사용 금지
- shadcn/ui 컴포넌트는 `src/components/ui/`에서 직접 수정하지 않고 CLI(`npx shadcn@latest add`)로 추가
- 전역 상태는 `Zustand` 사용
- 목록 데이터 패칭은 `TanStack Query` 사용
