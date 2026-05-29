import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CopyButton } from "@/components/docs/copy-button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TECH_STACK, GITHUB_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "문서",
  description: "Next Starter 시작하기 가이드",
};

const folderStructure = `next-starterkit/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # 루트 레이아웃 (ThemeProvider, Toaster)
│   ├── page.tsx          # 홈 페이지
│   ├── components/       # 컴포넌트 쇼케이스
│   └── docs/             # 문서 페이지
├── components/
│   ├── ui/               # shadcn/ui 컴포넌트 (26개)
│   ├── layout/           # Header, Footer, SidebarLayout, AuthLayout
│   ├── showcase/         # 쇼케이스 컴포넌트
│   └── docs/             # CopyButton
├── hooks/                # 커스텀 훅 (3개)
├── lib/                  # utils.ts, constants.ts
└── types/                # 공통 타입`;

const hooks = [
  {
    name: "useLocalStorage<T>",
    signature: "(key, initialValue)",
    returns: "[value, setValue, removeValue]",
    desc: "localStorage 연동 상태 관리",
    source: "usehooks-ts",
  },
  {
    name: "useMediaQuery",
    signature: "(query)",
    returns: "boolean",
    desc: "CSS 미디어 쿼리 결과 반환",
    source: "usehooks-ts",
  },
  {
    name: "useDebounce<T>",
    signature: "(value, delay?)",
    returns: "T",
    desc: "값 디바운싱, 기본 300ms",
  },
  {
    name: "useCopyToClipboard",
    signature: "(resetDelay?)",
    returns: "{ copied, copy }",
    desc: "클립보드 복사, 기본 2000ms 후 초기화",
  },
  {
    name: "useIntersectionObserver<T>",
    signature: "(options?)",
    returns: "[ref, isIntersecting]",
    desc: "뷰포트 진입 감지, freezeOnceVisible 옵션",
  },
];

interface CodeBlockProps {
  code: string;
  lang?: string;
}

function CodeBlock({ code, lang = "bash" }: CodeBlockProps) {
  return (
    <div className="relative rounded-lg border bg-muted/50">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <span className="text-xs text-muted-foreground">{lang}</span>
        <CopyButton text={code} />
      </div>
      <pre className="overflow-x-auto p-4 text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="page-container py-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">홈</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>문서</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">시작하기</h1>
            <p className="mt-2 text-muted-foreground">
              Next Starter를 사용해 프로젝트를 빠르게 시작하세요.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="mb-4 text-xl font-semibold">기술 스택</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>라이브러리</TableHead>
                    <TableHead>버전</TableHead>
                    <TableHead>용도</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {TECH_STACK.map((tech) => (
                    <TableRow key={tech.name}>
                      <TableCell className="font-medium">{tech.name}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{tech.version}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {tech.name === "Next.js" && "App Router 기반 풀스택 프레임워크"}
                        {tech.name === "React" && "UI 라이브러리"}
                        {tech.name === "TypeScript" && "정적 타입 언어"}
                        {tech.name === "TailwindCSS" && "유틸리티 CSS 프레임워크 (v4 CSS-first)"}
                        {tech.name === "shadcn/ui" && "복사-붙여넣기 방식 컴포넌트"}
                        {tech.name === "lucide-react" && "SVG 아이콘 라이브러리"}
                        {tech.name === "next-themes" && "다크모드 테마 관리"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </section>

            <Separator />

            <section>
              <h2 className="mb-4 text-xl font-semibold">빠른 시작</h2>
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-sm text-muted-foreground">1. 저장소 클론</p>
                  <CodeBlock code={`git clone ${GITHUB_URL}.git`} />
                </div>
                <div>
                  <p className="mb-2 text-sm text-muted-foreground">2. 의존성 설치</p>
                  <CodeBlock code="npm install" />
                </div>
                <div>
                  <p className="mb-2 text-sm text-muted-foreground">3. 환경 변수 설정</p>
                  <CodeBlock code="cp .env.example .env.local" />
                </div>
                <div>
                  <p className="mb-2 text-sm text-muted-foreground">4. 개발 서버 실행</p>
                  <CodeBlock code="npm run dev" />
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="mb-4 text-xl font-semibold">폴더 구조</h2>
              <CodeBlock code={folderStructure} lang="text" />
            </section>

            <Separator />

            <section>
              <h2 className="mb-4 text-xl font-semibold">훅 API</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {hooks.map((hook) => (
                  <Card key={hook.name}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="font-mono text-base">{hook.name}</CardTitle>
                        {hook.source && (
                          <Badge variant="outline" className="text-xs">
                            {hook.source}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="rounded bg-muted/50 px-3 py-2 font-mono text-xs">
                        {hook.name}{hook.signature} → {hook.returns}
                      </div>
                      <p className="text-muted-foreground">{hook.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="mb-4 text-xl font-semibold">shadcn/ui 컴포넌트 추가</h2>
              <CodeBlock code="npx shadcn@latest add [component-name]" />
              <p className="mt-3 text-sm text-muted-foreground">
                전체 컴포넌트 목록은{" "}
                <a
                  href="https://ui.shadcn.com/docs/components"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  shadcn/ui 공식 문서
                </a>
                에서 확인하세요.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
