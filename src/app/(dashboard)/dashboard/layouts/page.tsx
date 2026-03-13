"use client";

import { PageHeader } from "@/components/common/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BookOpen, Star, MessageSquare, Settings, Bell, User, BarChart2, FileText, ChevronRight } from "lucide-react";

// ─── 더미 데이터 ──────────────────────────────────────────
const blogPosts = [
  {
    id: 1,
    title: "Next.js 16 App Router 완벽 가이드",
    excerpt: "새로운 App Router를 사용하여 더 나은 성능과 개발 경험을 얻는 방법을 알아봅니다.",
    category: "Next.js",
    readTime: "8분",
    date: "2026-03-10",
  },
  {
    id: 2,
    title: "TypeScript로 안전한 코드 작성하기",
    excerpt: "타입 시스템을 최대한 활용하여 런타임 오류를 사전에 방지하는 패턴을 소개합니다.",
    category: "TypeScript",
    readTime: "6분",
    date: "2026-03-08",
  },
  {
    id: 3,
    title: "Tailwind CSS v4 새로운 기능",
    excerpt: "Tailwind CSS 4버전에서 추가된 새로운 기능들과 마이그레이션 방법을 알아봅니다.",
    category: "CSS",
    readTime: "5분",
    date: "2026-03-05",
  },
];

const settingsMenu = [
  { icon: User, label: "프로필", description: "개인 정보 및 계정 설정" },
  { icon: Bell, label: "알림", description: "알림 및 이메일 환경설정" },
  { icon: Settings, label: "보안", description: "비밀번호 및 보안 설정" },
  { icon: BarChart2, label: "통계", description: "사용량 통계 및 분석" },
  { icon: FileText, label: "청구서", description: "결제 내역 및 구독 관리" },
];

const cards = [
  { id: 1, title: "프로젝트 A", description: "웹 애플리케이션 개발", tags: ["React", "Node.js"], height: "tall" },
  { id: 2, title: "프로젝트 B", description: "모바일 앱 UI/UX", tags: ["Figma"], height: "short" },
  { id: 3, title: "프로젝트 C", description: "데이터 시각화 대시보드", tags: ["D3.js", "Python"], height: "medium" },
  { id: 4, title: "프로젝트 D", description: "머신러닝 파이프라인 구축 및 최적화", tags: ["Python", "TensorFlow", "AWS"], height: "tall" },
  { id: 5, title: "프로젝트 E", description: "REST API 설계", tags: ["Go"], height: "short" },
  { id: 6, title: "프로젝트 F", description: "보안 감사 및 취약점 분석 리포트", tags: ["Security", "OWASP"], height: "medium" },
];

// ─── 레이아웃 1: Centered Content ─────────────────────────
function CenteredLayout() {
  return (
    <div className="mx-auto max-w-2xl space-y-12">
      {/* 헤더 */}
      <div className="space-y-2">
        <Badge variant="secondary">블로그</Badge>
        <h2 className="text-2xl font-bold tracking-tight">최신 글</h2>
        <p className="text-muted-foreground">웹 개발과 관련된 최신 글을 확인하세요.</p>
      </div>

      <Separator />

      {/* 글 목록 */}
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="group space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">{post.category}</Badge>
              <span className="text-xs text-muted-foreground">{post.date}</span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground">
                <BookOpen className="mr-1 inline size-3" />
                {post.readTime}
              </span>
            </div>
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors cursor-pointer">
              {post.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                <Star className="size-3" /> 24
              </button>
              <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                <MessageSquare className="size-3" /> 6
              </button>
            </div>
            <Separator />
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button variant="outline">더 보기</Button>
      </div>
    </div>
  );
}

// ─── 레이아웃 2: Split Panel ───────────────────────────────
function SplitPanelLayout() {
  return (
    <div className="flex gap-0 overflow-hidden rounded-lg border">
      {/* 좌측 패널 */}
      <aside className="w-64 shrink-0 border-r bg-muted/30 p-4">
        <div className="mb-6 space-y-1">
          <h3 className="font-semibold">설정</h3>
          <p className="text-xs text-muted-foreground">계정 환경설정 관리</p>
        </div>
        <nav className="space-y-1">
          {settingsMenu.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                  idx === 0
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="size-4 shrink-0" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* 우측 콘텐츠 */}
      <main className="flex-1 p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">프로필 설정</h3>
            <p className="text-sm text-muted-foreground">개인 정보를 관리합니다.</p>
          </div>
          <Separator />

          {/* 프로필 미리보기 */}
          <div className="flex items-center gap-4">
            <Avatar className="size-16">
              <AvatarFallback className="text-xl">홍</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="font-medium">홍길동</p>
              <p className="text-sm text-muted-foreground">hong@example.com</p>
              <Button size="sm" variant="outline">사진 변경</Button>
            </div>
          </div>

          <Separator />

          {/* 정보 카드들 */}
          <div className="grid gap-4 sm:grid-cols-2">
            {settingsMenu.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className="flex items-center justify-between rounded-lg border p-4 text-left transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-md bg-primary/10">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="size-4 text-muted-foreground" />
                </button>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── 레이아웃 3: Masonry Grid ─────────────────────────────
function MasonryLayout() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">프로젝트</h3>
          <p className="text-sm text-muted-foreground">진행 중인 프로젝트 목록</p>
        </div>
        <Button size="sm">새 프로젝트</Button>
      </div>

      {/* Masonry 그리드 (columns-2/3) */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {cards.map((card) => (
          <div key={card.id} className="mb-4 break-inside-avoid">
            <Card className="transition-shadow hover:shadow-md">
              {/* 색상 헤더 (높이 다양화) */}
              <div
                className={`rounded-t-lg bg-gradient-to-br from-primary/20 to-primary/5 ${
                  card.height === "tall" ? "h-32" : card.height === "medium" ? "h-20" : "h-12"
                }`}
              />
              <CardHeader className="pb-2 pt-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">{card.title}</CardTitle>
                  <button className="text-muted-foreground hover:text-foreground">
                    <Star className="size-4" />
                  </button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="text-sm">{card.description}</CardDescription>
                <div className="flex flex-wrap gap-1">
                  {card.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 메인 페이지 ──────────────────────────────────────────
export default function LayoutsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="레이아웃 예제"
        description="자주 사용되는 3가지 레이아웃 패턴을 실제 콘텐츠와 함께 확인하세요."
      />

      <Tabs defaultValue="centered">
        <TabsList>
          <TabsTrigger value="centered">Centered Content</TabsTrigger>
          <TabsTrigger value="split">Split Panel</TabsTrigger>
          <TabsTrigger value="masonry">Masonry Grid</TabsTrigger>
        </TabsList>

        <TabsContent value="centered" className="mt-6">
          <div className="rounded-lg border bg-background p-6 md:p-10">
            <CenteredLayout />
          </div>
        </TabsContent>

        <TabsContent value="split" className="mt-6">
          <SplitPanelLayout />
        </TabsContent>

        <TabsContent value="masonry" className="mt-6">
          <div className="rounded-lg border bg-background p-6">
            <MasonryLayout />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
