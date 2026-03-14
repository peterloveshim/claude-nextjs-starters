import { NavLink, SiteConfig, FooterLinks } from '@/types'
import {
  LayoutDashboard,
  Home,
  Settings,
  Users,
  BarChart3,
  FileText,
  Blocks,
  FormInput,
  LayoutTemplate,
  Puzzle,
} from 'lucide-react'

// 사이트 기본 설정
export const siteConfig: SiteConfig = {
  name: 'MyApp',
  description: 'Next.js 16 + TypeScript + shadcn/ui 스타터킷',
  url: 'https://myapp.com',
  author: 'Developer',
}

// 헤더 내비게이션 링크
export const navLinks: NavLink[] = [
  { label: '홈', href: '/' },
  { label: '대시보드', href: '/dashboard' },
  { label: '소개', href: '/about' },
]

// 사이드바 내비게이션 링크
export const sidebarLinks: NavLink[] = [
  { label: '대시보드', href: '/dashboard', icon: LayoutDashboard },
  { label: '홈', href: '/', icon: Home },
  { label: '사용자', href: '/dashboard/users', icon: Users },
  { label: '분석', href: '/dashboard/analytics', icon: BarChart3 },
  { label: '문서', href: '/dashboard/docs', icon: FileText },
  { label: '설정', href: '/dashboard/settings', icon: Settings },
]

// 예제 사이드바 링크
export const exampleLinks: NavLink[] = [
  { label: 'UI 컴포넌트', href: '/dashboard/ui', icon: Blocks },
  { label: '폼 예제', href: '/dashboard/form', icon: FormInput },
  { label: '레이아웃', href: '/dashboard/layouts', icon: LayoutTemplate },
  { label: '훅 예제', href: '/dashboard/hooks', icon: Puzzle },
]

// 푸터 링크 (FooterLinks 타입 명시)
export const footerLinks: FooterLinks = {
  product: [
    { label: '기능', href: '#features' },
    { label: '가격', href: '#pricing' },
    { label: '로드맵', href: '#roadmap' },
  ],
  company: [
    { label: '소개', href: '/about' },
    { label: '블로그', href: '/blog' },
    { label: '채용', href: '/careers' },
  ],
  legal: [
    { label: '개인정보처리방침', href: '/privacy' },
    { label: '이용약관', href: '/terms' },
  ],
}
