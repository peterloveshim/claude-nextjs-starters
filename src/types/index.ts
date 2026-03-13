// 내비게이션 링크 타입
export interface NavLink {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

// 사이트 메타데이터 타입
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
}
