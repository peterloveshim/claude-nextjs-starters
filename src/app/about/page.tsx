import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Zap,
  Shield,
  Palette,
  Layers,
  Code2,
  Smartphone,
  Users,
  Target,
  Rocket,
} from "lucide-react";

const techStack = [
  { name: "Next.js 16", description: "App Router 기반의 최신 React 프레임워크", badge: "프레임워크" },
  { name: "TypeScript", description: "완전한 타입 안전성으로 안정적인 개발", badge: "언어" },
  { name: "Tailwind CSS v4", description: "유틸리티 퍼스트 CSS 프레임워크", badge: "스타일" },
  { name: "shadcn/ui", description: "접근성 높은 커스터마이징 가능한 UI 컴포넌트", badge: "UI" },
  { name: "Radix UI", description: "headless 접근성 중심 컴포넌트 라이브러리", badge: "UI" },
  { name: "React Hook Form + Zod", description: "타입 안전한 폼 유효성 검사", badge: "폼" },
  { name: "Zustand", description: "간결하고 빠른 상태 관리 라이브러리", badge: "상태관리" },
  { name: "TanStack Query", description: "서버 상태 관리 및 데이터 페칭", badge: "데이터" },
];

const features = [
  {
    icon: Zap,
    title: "빠른 시작",
    description: "복잡한 설정 없이 클론 후 바로 개발을 시작할 수 있습니다.",
  },
  {
    icon: Shield,
    title: "타입 안전성",
    description: "TypeScript와 Zod를 활용한 엔드투엔드 타입 안전성을 보장합니다.",
  },
  {
    icon: Palette,
    title: "다크 모드",
    description: "시스템 설정에 따라 자동으로 전환되는 다크/라이트 모드를 지원합니다.",
  },
  {
    icon: Layers,
    title: "확장 가능한 구조",
    description: "대규모 애플리케이션으로 쉽게 확장할 수 있는 모듈화된 폴더 구조.",
  },
  {
    icon: Code2,
    title: "개발자 경험",
    description: "ESLint, TypeScript 엄격 모드, 일관된 코딩 컨벤션으로 좋은 DX를 제공합니다.",
  },
  {
    icon: Smartphone,
    title: "반응형 디자인",
    description: "모바일부터 데스크탑까지 모든 화면 크기에 완벽하게 대응합니다.",
  },
];

const team = [
  {
    name: "프론트엔드 팀",
    role: "UI/UX 개발",
    description: "React와 Next.js를 활용한 모던 웹 인터페이스 개발",
  },
  {
    name: "백엔드 팀",
    role: "API 개발",
    description: "안정적이고 확장 가능한 서버 사이드 아키텍처 구축",
  },
  {
    name: "DevOps 팀",
    role: "인프라 & 배포",
    description: "CI/CD 파이프라인 구축 및 클라우드 인프라 관리",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* 히어로 섹션 */}
        <section className="container mx-auto max-w-screen-xl px-4 py-24 text-center md:py-32">
          <Badge variant="secondary" className="mb-4">
            <Target className="mr-1 size-3" />
            소개
          </Badge>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            프로덕션 레디{" "}
            <span className="text-primary">스타터킷</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            이 프로젝트는 Next.js 16, TypeScript, shadcn/ui를 기반으로 한 모던 웹 개발
            스타터킷입니다. 복잡한 초기 설정 없이 바로 개발에 집중할 수 있도록
            설계되었습니다.
          </p>
        </section>

        {/* 주요 기능 섹션 */}
        <section className="border-t bg-muted/40 py-20">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-3">
                <Rocket className="mr-1 size-3" />
                주요 기능
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">
                개발에 필요한 모든 것
              </h2>
              <p className="mt-3 text-muted-foreground">
                프로덕션 환경에서 바로 사용할 수 있는 기능들이 포함되어 있습니다.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="transition-shadow hover:shadow-md">
                    <CardHeader>
                      <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* 기술 스택 섹션 */}
        <section className="py-20">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-3">
                <Code2 className="mr-1 size-3" />
                기술 스택
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">
                검증된 기술로 구성
              </h2>
              <p className="mt-3 text-muted-foreground">
                업계에서 널리 사용되는 안정적이고 현대적인 기술 스택을 채택했습니다.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {techStack.map((tech) => (
                <Card key={tech.name} className="transition-shadow hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-base">{tech.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {tech.badge}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {tech.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 팀 섹션 */}
        <section className="border-t bg-muted/40 py-20">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-3">
                <Users className="mr-1 size-3" />
                팀 소개
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">
                함께 만들어갑니다
              </h2>
              <p className="mt-3 text-muted-foreground">
                다양한 분야의 전문가들이 협력하여 최고의 개발 경험을 제공합니다.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {team.map((member) => (
                <Card key={member.name} className="text-center transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="mx-auto mb-3 flex size-16 items-center justify-center rounded-full bg-primary/10">
                      <Users className="size-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto w-fit">
                      {member.role}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {member.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
