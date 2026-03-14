import { cn } from '@/lib/utils'

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

// 페이지 상단 헤더 컴포넌트
export function PageHeader({
  title,
  description,
  className,
  children,
}: PageHeaderProps) {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </div>
  )
}
