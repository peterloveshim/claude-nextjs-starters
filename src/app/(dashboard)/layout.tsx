import { Sidebar } from '@/components/layout/sidebar'
import { DashboardHeader } from '@/components/layout/dashboard-header'

// 대시보드 공통 레이아웃
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      {/* 데스크탑용 사이드바 (모바일에서는 숨김) */}
      <Sidebar />
      <div className="flex flex-1 flex-col">
        {/* 대시보드 헤더 (모바일 햄버거 + 테마 토글) */}
        <DashboardHeader />
        {/* 페이지 콘텐츠 */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
