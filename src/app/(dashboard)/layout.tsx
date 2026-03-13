import { ThemeToggle } from "@/components/common/theme-toggle";
import { Sidebar } from "@/components/layout/sidebar";

// 대시보드 공통 레이아웃
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        {/* 대시보드 헤더 */}
        <header className="sticky top-0 z-40 flex h-14 items-center justify-end border-b bg-background px-4">
          <ThemeToggle />
        </header>
        {/* 페이지 콘텐츠 */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
