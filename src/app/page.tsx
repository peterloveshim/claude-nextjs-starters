import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { homeFeatures } from "@/mock/about";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* 히어로 섹션 */}
        <section className="container mx-auto max-w-screen-xl px-4 py-24 text-center md:py-36">
          <Badge variant="secondary" className="mb-4">
            🚀 Next.js 16 스타터킷
          </Badge>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            모던 웹 개발을{" "}
            <span className="text-primary">빠르게</span> 시작하세요
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Next.js 16, TypeScript, shadcn/ui, Tailwind CSS로 구성된 프로덕션 레디
            스타터킷입니다. 설정 없이 바로 개발을 시작할 수 있습니다.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/dashboard">
                대시보드 보기
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com" target="_blank">
                <Code2 className="mr-2 size-4" />
                GitHub 보기
              </Link>
            </Button>
          </div>
        </section>

        {/* 기능 섹션 */}
        <section id="features" className="border-t bg-muted/40 py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                모든 것이 준비되어 있습니다
              </h2>
              <p className="mt-3 text-muted-foreground">
                프로덕션 환경에 필요한 모든 기능이 내장되어 있습니다.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {homeFeatures.map((feature) => {
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
                      <CardDescription className="text-sm leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              지금 바로 시작하세요
            </h2>
            <p className="mt-3 text-muted-foreground">
              복잡한 설정 없이 바로 개발에 집중하세요.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link href="/dashboard">
                시작하기
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
