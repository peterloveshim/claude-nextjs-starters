'use client'

import { useQuery } from '@tanstack/react-query'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { PageHeader } from '@/components/common/page-header'
import { StatCard } from '@/components/common/stat-card'
import { Button } from '@/components/ui/button'
import { analyticsStats, topPages } from '@/mock/analytics'

// Mock 데이터를 비동기로 반환하는 fetcher (실제 API로 교체 가능)
async function fetchAnalyticsStats() {
  return analyticsStats
}

async function fetchTopPages() {
  return topPages
}

export default function AnalyticsPage() {
  // TanStack Query로 분석 통계 데이터 페칭
  const { data: stats = [] } = useQuery({
    queryKey: ['analyticsStats'],
    queryFn: fetchAnalyticsStats,
  })

  // TanStack Query로 인기 페이지 데이터 페칭
  const { data: pages = [] } = useQuery({
    queryKey: ['topPages'],
    queryFn: fetchTopPages,
  })

  return (
    <div className="space-y-6">
      <PageHeader title="분석" description="방문자 및 사용 현황을 분석하세요.">
        <Button size="sm">보고서 내보내기</Button>
      </PageHeader>

      {/* 통계 카드 (StatCard 공통 컴포넌트 사용) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            change={stat.change}
            isPositive={true}
            description="지난달 대비"
          />
        ))}
      </div>

      {/* 인기 페이지 */}
      <Card>
        <CardHeader>
          <CardTitle>인기 페이지</CardTitle>
          <CardDescription>가장 많이 방문한 페이지 목록입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* id를 key로 사용하여 안정적인 렌더링 */}
            {pages.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  {/* 순위 배지 */}
                  <div className="bg-primary/10 text-primary flex size-9 items-center justify-center rounded-full text-sm font-bold">
                    {item.id}
                  </div>
                  <p className="text-sm font-medium">{item.page}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground hidden text-xs sm:block">
                    {item.views} 뷰
                  </span>
                  <span className="text-sm font-semibold">{item.rate}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
