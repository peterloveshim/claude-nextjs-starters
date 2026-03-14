import { Users, TrendingUp, ShoppingCart, DollarSign } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageHeader } from '@/components/common/page-header'
import { StatCard } from '@/components/common/stat-card'
import { Button } from '@/components/ui/button'

// 통계 카드 데이터
const statsCards = [
  {
    title: '총 사용자',
    value: '12,345',
    change: '+12.5%',
    isPositive: true,
    icon: Users,
    description: '지난달 대비',
  },
  {
    title: '월 매출',
    value: '₩45,231,000',
    change: '+8.2%',
    isPositive: true,
    icon: DollarSign,
    description: '지난달 대비',
  },
  {
    title: '신규 주문',
    value: '2,350',
    change: '-3.1%',
    isPositive: false,
    icon: ShoppingCart,
    description: '지난달 대비',
  },
  {
    title: '전환율',
    value: '3.24%',
    change: '+1.8%',
    isPositive: true,
    icon: TrendingUp,
    description: '지난달 대비',
  },
]

// 최근 활동 데이터 (id 추가로 key={index} 제거)
const recentActivities = [
  {
    id: 1,
    user: '김민준',
    action: '새 계정을 생성했습니다',
    time: '방금 전',
    status: '완료',
  },
  {
    id: 2,
    user: '이서연',
    action: '프리미엄 플랜으로 업그레이드했습니다',
    time: '5분 전',
    status: '완료',
  },
  {
    id: 3,
    user: '박지호',
    action: '결제가 실패했습니다',
    time: '10분 전',
    status: '실패',
  },
  {
    id: 4,
    user: '최수아',
    action: '비밀번호를 변경했습니다',
    time: '1시간 전',
    status: '완료',
  },
  {
    id: 5,
    user: '정도윤',
    action: '지원 티켓을 제출했습니다',
    time: '2시간 전',
    status: '대기중',
  },
]

const statusVariantMap: Record<
  string,
  'default' | 'destructive' | 'secondary'
> = {
  완료: 'default',
  실패: 'destructive',
  대기중: 'secondary',
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="대시보드" description="전체 현황을 한눈에 확인하세요.">
        <Button size="sm">보고서 내보내기</Button>
      </PageHeader>

      {/* 통계 카드 그리드 (StatCard 공통 컴포넌트 사용) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statsCards.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            change={stat.change}
            isPositive={stat.isPositive}
            description={stat.description}
          />
        ))}
      </div>

      {/* 최근 활동 */}
      <Card>
        <CardHeader>
          <CardTitle>최근 활동</CardTitle>
          <CardDescription>최근 발생한 사용자 활동 목록입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* id를 key로 사용하여 안정적인 렌더링 */}
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  {/* 아바타 - charAt(0)으로 noUncheckedIndexedAccess 대응 */}
                  <div className="bg-primary/10 text-primary flex size-9 items-center justify-center rounded-full text-sm font-medium">
                    {activity.user.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{activity.user}</p>
                    <p className="text-muted-foreground text-xs">
                      {activity.action}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground hidden text-xs sm:block">
                    {activity.time}
                  </span>
                  {/* Record 접근 시 undefined 대비 fallback 추가 */}
                  <Badge
                    variant={statusVariantMap[activity.status] ?? 'secondary'}
                  >
                    {activity.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
