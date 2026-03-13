"use client";

import { ThemeToggle } from "@/components/common/theme-toggle";
import { MobileSidebarTrigger } from "@/components/layout/sidebar";

// 대시보드 상단 헤더 컴포넌트
// - 모바일: 햄버거 메뉴(좌) + 테마 토글(우)
// - 데스크탑: 테마 토글만 표시(우)
export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b bg-background px-4 md:justify-end">
      {/* 모바일에서만 햄버거 버튼 표시 */}
      <MobileSidebarTrigger className="md:hidden" />
      <ThemeToggle />
    </header>
  );
}
