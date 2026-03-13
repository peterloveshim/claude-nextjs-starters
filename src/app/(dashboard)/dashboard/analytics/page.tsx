import { BarChart3, TrendingUp, Eye, MousePointerClick } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";

// 분석 통계 데이터
const statsCards = [
  { title: "총 방문자", value: "48,291", change: "+15.3%", icon: Eye },
  { title: "페이지 뷰", value: "142,850", change: "+9.7%", icon: BarChart3 },
  { title: "평균 체류시간", value: "3분 24초", change: "+5.1%", icon: TrendingUp },
  { title: "클릭률", value: "4.62%", change: "+2.3%", icon: MousePointerClick },
];

// 인기 페이지 데이터
const topPages = [
  { page: "/dashboard", views: "12,450", rate: "26.4%" },
  { page: "/", views: "10,231", rate: "21.8%" },
  { page: "/dashboard/users", views: "7,890", rate: "16.8%" },
  { page: "/about", views: "5,320", rate: "11.3%" },
  { page: "/dashboard/analytics", views: "4,100", rate: "8.7%" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="분석" description="방문자 및 사용 현황을 분석하세요.">
        <Button size="sm">보고서 내보내기</Button>
      </PageHeader>

      {/* 통계 카드 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statsCards.map((stat) => {
          const Icon = stat.icon;
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
                <p className="mt-1 text-xs text-green-500">{stat.change} 지난달 대비</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 인기 페이지 */}
      <Card>
        <CardHeader>
          <CardTitle>인기 페이지</CardTitle>
          <CardDescription>가장 많이 방문한 페이지 목록입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPages.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  {/* 순위 */}
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium">{item.page}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden text-xs text-muted-foreground sm:block">
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
  );
}
