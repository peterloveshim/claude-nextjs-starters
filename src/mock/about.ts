import {
  Zap,
  Shield,
  Palette,
  Layers,
  Code2,
  Smartphone,
  Server,
  Cloud,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// 기술 스택 타입 정의
export type TechStack = {
  name: string
  description: string
  badge: string
}

// 주요 기능 타입 정의
export type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

// 팀 멤버 타입 정의
export type TeamMember = {
  name: string
  role: string
  description: string
  icon: LucideIcon // 팀별 개별 아이콘
}

// 기술 스택 목록
export const techStack: TechStack[] = [
  {
    name: 'Next.js 16',
    description: 'App Router 기반의 최신 React 프레임워크',
    badge: '프레임워크',
  },
  {
    name: 'TypeScript',
    description: '완전한 타입 안전성으로 안정적인 개발',
    badge: '언어',
  },
  {
    name: 'Tailwind CSS v4',
    description: '유틸리티 퍼스트 CSS 프레임워크',
    badge: '스타일',
  },
  {
    name: 'shadcn/ui',
    description: '접근성 높은 커스터마이징 가능한 UI 컴포넌트',
    badge: 'UI',
  },
  {
    name: 'Radix UI',
    description: 'headless 접근성 중심 컴포넌트 라이브러리',
    badge: 'UI',
  },
  {
    name: 'React Hook Form + Zod',
    description: '타입 안전한 폼 유효성 검사',
    badge: '폼',
  },
  {
    name: 'Zustand',
    description: '간결하고 빠른 상태 관리 라이브러리',
    badge: '상태관리',
  },
  {
    name: 'TanStack Query',
    description: '서버 상태 관리 및 데이터 페칭',
    badge: '데이터',
  },
]

// 주요 기능 목록
export const features: Feature[] = [
  {
    icon: Zap,
    title: '빠른 시작',
    description: '복잡한 설정 없이 클론 후 바로 개발을 시작할 수 있습니다.',
  },
  {
    icon: Shield,
    title: '타입 안전성',
    description:
      'TypeScript와 Zod를 활용한 엔드투엔드 타입 안전성을 보장합니다.',
  },
  {
    icon: Palette,
    title: '다크 모드',
    description:
      '시스템 설정에 따라 자동으로 전환되는 다크/라이트 모드를 지원합니다.',
  },
  {
    icon: Layers,
    title: '확장 가능한 구조',
    description:
      '대규모 애플리케이션으로 쉽게 확장할 수 있는 모듈화된 폴더 구조.',
  },
  {
    icon: Code2,
    title: '개발자 경험',
    description:
      'ESLint, TypeScript 엄격 모드, 일관된 코딩 컨벤션으로 좋은 DX를 제공합니다.',
  },
  {
    icon: Smartphone,
    title: '반응형 디자인',
    description:
      '모바일부터 데스크탑까지 모든 화면 크기에 완벽하게 대응합니다.',
  },
]

// 팀 멤버 목록 (팀별 개별 아이콘 추가)
export const team: TeamMember[] = [
  {
    name: '프론트엔드 팀',
    role: 'UI/UX 개발',
    description: 'React와 Next.js를 활용한 모던 웹 인터페이스 개발',
    icon: Code2,
  },
  {
    name: '백엔드 팀',
    role: 'API 개발',
    description: '안정적이고 확장 가능한 서버 사이드 아키텍처 구축',
    icon: Server,
  },
  {
    name: 'DevOps 팀',
    role: '인프라 & 배포',
    description: 'CI/CD 파이프라인 구축 및 클라우드 인프라 관리',
    icon: Cloud,
  },
]

// 홈 페이지용 기능 소개 목록 (page.tsx에서 import하여 사용)
export const homeFeatures: Feature[] = [
  {
    icon: Zap,
    title: 'Next.js 16 App Router',
    description: '최신 App Router와 서버 컴포넌트로 뛰어난 성능을 제공합니다.',
  },
  {
    icon: Shield,
    title: 'TypeScript',
    description: '완전한 타입 안전성으로 버그를 사전에 방지합니다.',
  },
  {
    icon: Palette,
    title: 'shadcn/ui + Tailwind CSS',
    description: '아름답고 접근성 높은 UI 컴포넌트와 유틸리티 퍼스트 CSS.',
  },
  {
    icon: Layers,
    title: '확장 가능한 구조',
    description: '대규모 애플리케이션으로 쉽게 확장할 수 있는 폴더 구조.',
  },
  {
    icon: Code2,
    title: '다크 모드',
    description: 'next-themes를 활용한 시스템 설정 기반 다크/라이트 모드 지원.',
  },
  {
    icon: Smartphone,
    title: '반응형 디자인',
    description: '모바일부터 데스크탑까지 모든 화면 크기에 최적화된 레이아웃.',
  },
]
