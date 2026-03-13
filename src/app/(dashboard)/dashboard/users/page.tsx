"use client";

import { useQuery } from "@tanstack/react-query";
import { UserPlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/common/page-header";
import { StatCard } from "@/components/common/stat-card";
import { Button } from "@/components/ui/button";
import { userStats, users } from "@/mock/users";

const statusVariantMap: Record<string, "default" | "secondary"> = {
  활성: "default",
  비활성: "secondary",
};

// Mock 데이터를 비동기로 반환하는 fetcher (실제 API로 교체 가능)
async function fetchUsers() {
  return users;
}

async function fetchUserStats() {
  return userStats;
}

export default function UsersPage() {
  // TanStack Query로 사용자 통계 데이터 페칭
  const { data: stats = [] } = useQuery({
    queryKey: ["userStats"],
    queryFn: fetchUserStats,
  });

  // TanStack Query로 사용자 목록 데이터 페칭
  const { data: userList = [] } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return (
    <div className="space-y-6">
      <PageHeader title="사용자" description="사용자 목록 및 현황을 관리하세요.">
        <Button size="sm">
          <UserPlus className="mr-2 size-4" />
          사용자 추가
        </Button>
      </PageHeader>

      {/* 통계 카드 (StatCard 공통 컴포넌트 사용) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* 사용자 목록 */}
      <Card>
        <CardHeader>
          <CardTitle>사용자 목록</CardTitle>
          <CardDescription>전체 등록된 사용자 목록입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* id를 key로 사용하여 안정적인 렌더링 */}
            {userList.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  {/* 아바타 - charAt(0)으로 noUncheckedIndexedAccess 대응 */}
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden text-xs text-muted-foreground sm:block">{user.role}</span>
                  {/* Record 접근 시 undefined 대비 fallback 추가 */}
                  <Badge variant={statusVariantMap[user.status] ?? "secondary"}>{user.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
