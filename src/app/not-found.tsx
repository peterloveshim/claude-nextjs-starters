import Link from 'next/link'
import { ArrowLeft, SearchX } from 'lucide-react'
import { Button } from '@/components/ui/button'

// 404 Not Found 페이지
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <div className="bg-muted flex size-20 items-center justify-center rounded-full">
        <SearchX className="text-muted-foreground size-10" />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-xl font-semibold">페이지를 찾을 수 없습니다</h2>
        <p className="text-muted-foreground max-w-sm text-sm">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
      </div>
      <Button asChild>
        <Link href="/">
          <ArrowLeft className="mr-2 size-4" />
          홈으로 돌아가기
        </Link>
      </Button>
    </div>
  )
}
