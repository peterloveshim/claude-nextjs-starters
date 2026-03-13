import { Users, UserPlus, UserCheck, UserX } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";

// 사용자 통계 데이터
const statsCards = [
  { title: "전체 사용자", value: "12,345", icon: Users },
  { title: "신규 가입", value: "324", icon: UserPlus },
  { title: "활성 사용자", value: "9,210", icon: UserCheck },
  { title: "비활성 사용자", value: "3,135", icon: UserX },
];

// 사용자 목록 데이터
const users = [
  { name: "김민준", email: "minjun@example.com", role: "관리자", status: "활성" },
  { name: "이서연", email: "seoyeon@example.com", role: "사용자", status: "활성" },
  { name: "박지호", email: "jiho@example.com", role: "사용자", status: "비활성" },
  { name: "최수아", email: "sua@example.com", role: "편집자", status: "활성" },
  { name: "정도윤", email: "doyun@example.com", role: "사용자", status: "활성" },
];

const statusVariantMap: Record<string, "default" | "secondary"> = {
  활성: "default",
  비활성: "secondary",
};

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="사용자" description="사용자 목록 및 현황을 관리하세요.">
        <Button size="sm">
          <UserPlus className="mr-2 size-4" />
          사용자 추가
        </Button>
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
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 사용자 목록 */}
      <Card>
        <CardHeader>
          <CardTitle>사용자 목록</CardTitle>
          <CardDescription>전체 등록된 사용자 목록입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  {/* 아바타 */}
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                    {user.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden text-xs text-muted-foreground sm:block">{user.role}</span>
                  <Badge variant={statusVariantMap[user.status]}>{user.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
