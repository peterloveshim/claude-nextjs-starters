// 내비게이션 링크 타입
export interface NavLink {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

// 푸터 개별 링크 타입
export interface FooterLink {
  label: string
  href: string
}

// 푸터 링크 섹션 타입
export interface FooterLinks {
  product: FooterLink[]
  company: FooterLink[]
  legal: FooterLink[]
}

// 사이트 메타데이터 타입
export interface SiteConfig {
  name: string
  description: string
  url: string
  author: string
}
