import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// 통계 카드 Props 타입
interface StatCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  change?: string;        // 변화율 (예: "+12.5%")
  isPositive?: boolean;   // 긍정적 변화 여부 (색상 결정)
  description?: string;   // 부가 설명 (예: "지난달 대비")
}

// 재사용 가능한 통계 카드 컴포넌트
// 대시보드, 사용자, 분석 페이지에서 공통으로 사용
export function StatCard({
  title,
  value,
  icon: Icon,
  change,
  isPositive,
  description,
}: StatCardProps) {
  const TrendIcon = isPositive ? ArrowUpRight : ArrowDownRight;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {/* 변화율이 있을 때만 트렌드 표시 */}
        {change && (
          <div className="mt-1 flex items-center gap-1 text-xs">
            <TrendIcon
              className={`size-3 ${isPositive ? "text-green-500" : "text-red-500"}`}
            />
            <span className={isPositive ? "text-green-500" : "text-red-500"}>
              {change}
            </span>
            {description && (
              <span className="text-muted-foreground">{description}</span>
            )}
          </div>
        )}
        {/* 변화율 없이 설명만 있을 때 */}
        {!change && description && (
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
