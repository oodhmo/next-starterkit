import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Code2,
  Github,
  Package,
  Palette,
  Rocket,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import { GITHUB_URL, SITE_NAME, TECH_STACK } from "@/lib/constants";

const features = [
  {
    icon: Rocket,
    title: "Next.js v15",
    description: "App Router + React 19 + Turbopack으로 최고의 개발 경험",
    badge: "v15.1",
  },
  {
    icon: Palette,
    title: "TailwindCSS v4",
    description: "tailwind.config 없이 CSS-first 설정. @theme inline으로 토큰 관리",
    badge: "v4.0",
  },
  {
    icon: Package,
    title: "shadcn/ui",
    description: "복사-붙여넣기 방식의 접근성 높은 UI 컴포넌트",
    badge: "최신",
  },
  {
    icon: Zap,
    title: "TypeScript",
    description: "strict 모드, 경로 별칭(@/*), 완전한 타입 안전성",
    badge: "v5",
  },
  {
    icon: Shield,
    title: "다크모드",
    description: "next-themes + CSS 변수로 flash-free 테마 전환",
    badge: "시스템 연동",
  },
  {
    icon: Code2,
    title: "개발 도구",
    description: "커스텀 훅 3종 + 유틸리티 함수 + 상수 관리 구조 포함",
    badge: "포함",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="page-container py-24 text-center">
          <Badge variant="outline" className="mb-4">
            <Star className="mr-1 h-3 w-3" />
            프로덕션 레디 스타터킷
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            {SITE_NAME}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Next.js v15 · TypeScript · TailwindCSS v4 · shadcn/ui · lucide-react
            <br />
            웹개발을 즉시 시작할 수 있는 최적화된 스타터킷
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/docs">
                시작하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </section>

        <Separator />

        {/* Tech Stack Badges */}
        <section className="page-container py-10">
          <div className="flex flex-wrap justify-center gap-2">
            {TECH_STACK.map((tech) => (
              <Badge key={tech.name} variant="secondary" className="text-sm">
                {tech.name} {tech.version}
              </Badge>
            ))}
          </div>
        </section>

        <Separator />

        {/* Features Grid */}
        <section className="page-container py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">
            포함된 기술 스택
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Icon className="h-8 w-8 text-primary" />
                      <Badge variant="secondary">{feature.badge}</Badge>
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        <Separator />

        {/* Component Demo */}
        <section className="page-container py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">
            컴포넌트 미리보기
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Button */}
            <Card>
              <CardHeader>
                <CardTitle>Button</CardTitle>
                <CardDescription>variant와 size 조합</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button>기본</Button>
                <Button variant="secondary">보조</Button>
                <Button variant="outline">아웃라인</Button>
                <Button variant="ghost">고스트</Button>
                <Button variant="destructive">삭제</Button>
                <Button variant="link">링크</Button>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </CardFooter>
            </Card>

            {/* Badge */}
            <Card>
              <CardHeader>
                <CardTitle>Badge</CardTitle>
                <CardDescription>상태 표시용 배지</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Badge>기본</Badge>
                <Badge variant="secondary">보조</Badge>
                <Badge variant="outline">아웃라인</Badge>
                <Badge variant="destructive">경고</Badge>
              </CardContent>
            </Card>

            {/* Input + Label */}
            <Card>
              <CardHeader>
                <CardTitle>Form</CardTitle>
                <CardDescription>Input + Label 조합</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="hello@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">비밀번호</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
                <Button className="w-full">로그인</Button>
              </CardContent>
            </Card>

            {/* Card Anatomy */}
            <Card>
              <CardHeader>
                <CardTitle>Card</CardTitle>
                <CardDescription>Header / Content / Footer 구조</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Card는 Header, Content, Footer로 구성됩니다. shadcn/ui의
                  Card는 CSS 변수 기반으로 다크모드를 자동 지원합니다.
                </p>
              </CardContent>
              <CardFooter className="justify-between">
                <span className="text-sm text-muted-foreground">
                  Footer 영역
                </span>
                <Button size="sm" variant="outline">
                  자세히
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
