import Link from 'next/link'
import { Zap } from 'lucide-react'
import { siteConfig, footerLinks } from '@/lib/constants'

// 푸터 컴포넌트
export function Footer() {
  // 빌드 타임에 연도가 고정됩니다 (서버 컴포넌트)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto max-w-screen-xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* 브랜드 섹션 */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Zap className="text-primary size-5" />
              <span>{siteConfig.name}</span>
            </Link>
            <p className="text-muted-foreground mt-3 text-sm">
              {siteConfig.description}
            </p>
          </div>

          {/* 제품 링크 */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">제품</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 회사 링크 */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">회사</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 법적 링크 */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">법적 고지</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="mt-8 border-t pt-6">
          <p className="text-muted-foreground text-center text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
