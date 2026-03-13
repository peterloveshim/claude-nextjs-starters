import { Settings, User, Bell, Shield, Palette } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// 설정 섹션 데이터
const settingSections = [
  {
    icon: User,
    title: "프로필 설정",
    description: "이름, 이메일 등 기본 정보를 수정합니다.",
    items: ["이름", "이메일 주소", "프로필 사진", "소개"],
  },
  {
    icon: Bell,
    title: "알림 설정",
    description: "알림 수신 방법 및 빈도를 설정합니다.",
    items: ["이메일 알림", "푸시 알림", "주간 리포트", "마케팅 수신"],
  },
  {
    icon: Shield,
    title: "보안",
    description: "비밀번호 변경 및 보안 설정을 관리합니다.",
    items: ["비밀번호 변경", "2단계 인증", "로그인 기록", "연결된 기기"],
  },
  {
    icon: Palette,
    title: "외관",
    description: "테마 및 화면 표시 방식을 설정합니다.",
    items: ["테마 선택 (다크/라이트)", "언어", "타임존", "날짜 형식"],
  },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="설정" description="계정 및 앱 설정을 관리하세요.">
        <Button size="sm">
          <Settings className="mr-2 size-4" />
          변경사항 저장
        </Button>
      </PageHeader>

      {/* 설정 섹션 목록 */}
      <div className="space-y-4">
        {settingSections.map((section) => {
          const Icon = section.icon;
          return (
            <Card key={section.title}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{section.title}</CardTitle>
                    <CardDescription className="text-xs">{section.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.items.map((item, index) => (
                    <div key={item}>
                      <div className="flex items-center justify-between py-1">
                        <span className="text-sm">{item}</span>
                        <Button variant="ghost" size="sm" className="text-xs">
                          수정
                        </Button>
                      </div>
                      {/* 마지막 항목 이외에 구분선 표시 */}
                      {index < section.items.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
