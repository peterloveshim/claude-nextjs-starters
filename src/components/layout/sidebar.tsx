"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig, sidebarLinks, exampleLinks } from "@/lib/constants";
import { NavLink } from "@/types";

// 섹션별 네비게이션 그룹 컴포넌트
interface SidebarNavGroupProps {
  label?: string;   // 섹션 제목 (선택)
  links: NavLink[]; // 링크 목록
  pathname: string; // 현재 경로
}

function SidebarNavGroup({ label, links, pathname }: SidebarNavGroupProps) {
  return (
    <div>
      {label && (
        <p className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
          {label}
        </p>
      )}
      <ul className="space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          // 정확히 일치하거나, "/" 가 아닌 경로의 하위 경로일 때도 활성화
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {Icon && <Icon className="size-4 shrink-0" />}
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// 대시보드 사이드바 컴포넌트
export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 shrink-0 border-r bg-background md:block">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Zap className="size-5 text-primary" />
          <span>{siteConfig.name}</span>
        </Link>
      </div>

      <nav className="flex flex-col gap-4 p-3">
        <SidebarNavGroup links={sidebarLinks} pathname={pathname} />
        <SidebarNavGroup label="예제" links={exampleLinks} pathname={pathname} />
      </nav>
    </aside>
  );
}
