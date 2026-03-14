'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Zap, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig, sidebarLinks, exampleLinks } from '@/lib/constants'
import { NavLink } from '@/types'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

// 섹션별 네비게이션 그룹 컴포넌트
interface SidebarNavGroupProps {
  label?: string // 섹션 제목 (선택)
  links: NavLink[] // 링크 목록
  pathname: string // 현재 경로
}

function SidebarNavGroup({ label, links, pathname }: SidebarNavGroupProps) {
  return (
    <div>
      {label && (
        <p className="text-muted-foreground/60 mb-1 px-3 text-xs font-semibold tracking-wider uppercase">
          {label}
        </p>
      )}
      <ul className="space-y-1">
        {links.map((link) => {
          const Icon = link.icon
          // 정확히 일치하거나, "/" 가 아닌 경로의 하위 경로일 때도 활성화
          const isActive =
            pathname === link.href ||
            (link.href !== '/' && pathname.startsWith(link.href))

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                {Icon && <Icon className="size-4 shrink-0" />}
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// 사이드바 내용 (데스크탑/모바일 공통)
function SidebarContent() {
  const pathname = usePathname()

  return (
    <>
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Zap className="text-primary size-5" />
          <span>{siteConfig.name}</span>
        </Link>
      </div>
      <nav className="flex flex-col gap-4 p-3">
        <SidebarNavGroup links={sidebarLinks} pathname={pathname} />
        <SidebarNavGroup
          label="예제"
          links={exampleLinks}
          pathname={pathname}
        />
      </nav>
    </>
  )
}

// 데스크탑용 고정 사이드바 (md 이상에서만 표시)
export function Sidebar() {
  return (
    <aside className="bg-background hidden w-60 shrink-0 border-r md:block">
      <SidebarContent />
    </aside>
  )
}

// 모바일용 햄버거 버튼 + Sheet 슬라이드 메뉴
export function MobileSidebarTrigger({ className }: { className?: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className={className}>
          <Menu className="size-5" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      {/* 좌측에서 슬라이드인 하는 모바일 네비게이션 */}
      <SheetContent side="left" className="w-60 p-0">
        {/* 스크린 리더 접근성을 위한 제목 (시각적으로는 숨김) */}
        <SheetHeader className="sr-only">
          <SheetTitle>내비게이션 메뉴</SheetTitle>
        </SheetHeader>
        <SidebarContent />
      </SheetContent>
    </Sheet>
  )
}
