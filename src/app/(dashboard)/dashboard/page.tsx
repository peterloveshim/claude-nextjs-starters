import { Users, TrendingUp, ShoppingCart, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";

// 통계 카드 데이터
const statsCards = [
  {
    title: "총 사용자",
    value: "12,345",
    change: "+12.5%",
    isPositive: true,
    icon: Users,
    description: "지난달 대비",
  },
  {
    title: "월 매출",
    value: "₩45,231,000",
    change: "+8.2%",
    isPositive: true,
    icon: DollarSign,
    description: "지난달 대비",
  },
  {
    title: "신규 주문",
    value: "2,350",
    change: "-3.1%",
    isPositive: false,
    icon: ShoppingCart,
    description: "지난달 대비",
  },
  {
    title: "전환율",
    value: "3.24%",
    change: "+1.8%",
    isPositive: true,
    icon: TrendingUp,
    description: "지난달 대비",
  },
];

// 최근 활동 데이터
const recentActivities = [
  { user: "김민준", action: "새 계정을 생성했습니다", time: "방금 전", status: "완료" },
  { user: "이서연", action: "프리미엄 플랜으로 업그레이드했습니다", time: "5분 전", status: "완료" },
  { user: "박지호", action: "결제가 실패했습니다", time: "10분 전", status: "실패" },
  { user: "최수아", action: "비밀번호를 변경했습니다", time: "1시간 전", status: "완료" },
  { user: "정도윤", action: "지원 티켓을 제출했습니다", time: "2시간 전", status: "대기중" },
];

const statusVariantMap: Record<string, "default" | "destructive" | "secondary"> = {
  완료: "default",
  실패: "destructive",
  대기중: "secondary",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="대시보드" description="전체 현황을 한눈에 확인하세요.">
        <Button size="sm">보고서 내보내기</Button>
      </PageHeader>

      {/* 통계 카드 그리드 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statsCards.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.isPositive ? ArrowUpRight : ArrowDownRight;

          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="mt-1 flex items-center gap-1 text-xs">
                  <TrendIcon
                    className={`size-3 ${stat.isPositive ? "text-green-500" : "text-red-500"}`}
                  />
                  <span className={stat.isPositive ? "text-green-500" : "text-red-500"}>
                    {stat.change}
                  </span>
                  <span className="text-muted-foreground">{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 최근 활동 */}
      <Card>
        <CardHeader>
          <CardTitle>최근 활동</CardTitle>
          <CardDescription>최근 발생한 사용자 활동 목록입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  {/* 아바타 */}
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                    {activity.user[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{activity.user}</p>
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden text-xs text-muted-foreground sm:block">
                    {activity.time}
                  </span>
                  <Badge variant={statusVariantMap[activity.status]}>
                    {activity.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
