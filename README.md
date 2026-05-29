# Next Starter Kit

![Next Starter Kit](./app/next_starter_kit.png)

Next.js v15 App Router 기반 프로덕션 레디 스타터킷. 새 프로젝트를 시작할 때마다 반복되는 기초 설정을 없애고, 비즈니스 로직에 바로 집중할 수 있도록 만들었습니다.

## 포함된 기술

| 기술 | 버전 | 역할 |
|------|------|------|
| [Next.js](https://nextjs.org) | v15 | 풀스택 프레임워크 (App Router + Turbopack) |
| [React](https://react.dev) | v19 | UI 라이브러리 |
| [TypeScript](https://www.typescriptlang.org) | v5 | 정적 타입 |
| [TailwindCSS](https://tailwindcss.com) | v4 | 유틸리티 CSS (설정 파일 없음, CSS 변수 기반) |
| [shadcn/ui](https://ui.shadcn.com) | latest | 컴포넌트 라이브러리 (26개 사전 설치) |
| [next-themes](https://github.com/pacocoursey/next-themes) | v0.4 | 다크모드 |
| [Zod](https://zod.dev) | v4 | 스키마 검증 |
| [react-hook-form](https://react-hook-form.com) | v7 | 폼 상태 관리 |
| [lucide-react](https://lucide.dev) | v0.468 | 아이콘 |
| [sonner](https://sonner.emilkowal.ski) | v2 | 토스트 알림 |
| [usehooks-ts](https://usehooks-ts.com) | v3 | 유틸리티 훅 |

## 빠른 시작

### 1. 저장소 복제

```bash
git clone https://github.com/oodhmo/next-starterkit.git my-project
cd my-project
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

```bash
cp .env.example .env.local
```

`.env.local`을 열어 프로젝트에 맞게 수정합니다:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=My Project
```

### 4. 개발 서버 실행

```bash
npm run dev
```

`http://localhost:3000`에서 확인합니다.

## 스크립트

```bash
npm run dev       # 개발 서버 실행 (Turbopack)
npm run build     # 프로덕션 빌드
npm run start     # 프로덕션 서버 실행
npm run lint      # ESLint 검사
```

shadcn/ui 컴포넌트 추가:

```bash
npx shadcn@latest add <component-name>
```

## 폴더 구조

```
next-starterkit/
├── app/
│   ├── layout.tsx              # 루트 레이아웃 (ThemeProvider, TooltipProvider, Toaster)
│   ├── page.tsx                # 홈 페이지
│   ├── globals.css             # TailwindCSS v4 테마 토큰
│   ├── components/page.tsx     # 컴포넌트 쇼케이스 (/components)
│   └── docs/page.tsx           # 시작하기 문서 (/docs)
├── components/
│   ├── ui/                     # shadcn/ui 컴포넌트 (직접 수정 가능)
│   ├── layout/
│   │   ├── header.tsx          # 헤더 (모바일 메뉴 포함)
│   │   ├── footer.tsx          # 푸터
│   │   ├── sidebar-layout.tsx  # 사이드바 슬롯 레이아웃
│   │   └── auth-layout.tsx     # 인증 페이지 레이아웃
│   ├── showcase/               # 컴포넌트 쇼케이스용 클라이언트 컴포넌트
│   ├── docs/
│   │   └── copy-button.tsx     # 코드 복사 버튼
│   └── theme-toggle.tsx        # 다크/라이트 모드 토글
├── hooks/
│   ├── use-debounce.ts         # 디바운스 훅
│   ├── use-copy-to-clipboard.ts
│   └── use-intersection-observer.ts
├── lib/
│   ├── utils.ts                # cn(), isNullish(), delay(), chunk(), compact()
│   └── constants.ts            # SITE_NAME, NAV_LINKS, TECH_STACK, BREAKPOINTS
├── types/
│   └── index.ts                # 공통 타입 (ApiResponse<T>, BaseEntity 등)
├── .env.example                # 환경 변수 템플릿
└── components.json             # shadcn/ui 설정
```

## 커스터마이징

### 사이트 정보 변경

`lib/constants.ts`에서 사이트 이름, 네비게이션 링크, 기타 상수를 수정합니다:

```ts
export const SITE_NAME = "My Project";
export const NAV_LINKS = [
  { label: "홈", href: "/" },
  { label: "대시보드", href: "/dashboard" },
];
```

### 색상 테마 변경

TailwindCSS v4는 `tailwind.config` 파일이 없습니다. 모든 테마 토큰은 `app/globals.css`의 `@theme inline` 블록에서 관리합니다:

```css
/* app/globals.css */
@theme inline {
  --color-primary: oklch(0.6 0.2 250);   /* 원하는 oklch 값으로 변경 */
}

:root {
  --primary: oklch(0.6 0.2 250);
}
.dark {
  --primary: oklch(0.7 0.2 250);
}
```

### shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add accordion
```

`components/ui/` 안의 컴포넌트는 직접 수정할 수 있습니다.

### 새 레이아웃 적용

`sidebar-layout.tsx`와 `auth-layout.tsx`는 슬롯 기반 레이아웃 컴포넌트입니다:

```tsx
// 사이드바 레이아웃
import { SidebarLayout } from "@/components/layout/sidebar-layout";

<SidebarLayout sidebar={<MySidebar />}>
  <main>메인 콘텐츠</main>
</SidebarLayout>

// 인증 페이지 레이아웃
import { AuthLayout } from "@/components/layout/auth-layout";

<AuthLayout title="로그인" description="계정에 로그인하세요">
  <LoginForm />
</AuthLayout>
```

### 폼 작성

Zod v4 + react-hook-form 조합을 기본 패턴으로 사용합니다:

```tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("올바른 이메일을 입력하세요"),
  password: z.string().min(8, "8자 이상 입력하세요"),
});

type FormValues = z.infer<typeof schema>;

function LoginForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });
  // ...
}
```

> **Zod v4 주의:** `required_error` 파라미터가 없습니다. 필수 필드 에러 메시지는 `.min(1, "메시지")`로 지정하세요.

### 환경 변수 추가

`.env.example`에 새 변수를 추가하고 `lib/constants.ts`나 서버 코드에서 참조합니다:

```env
# .env.example
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
```

## 새 프로젝트에 적용하기

이 스타터킷을 기반으로 새 프로젝트를 시작하는 순서입니다:

1. **저장소 복제 후 git 초기화**
   ```bash
   git clone https://github.com/oodhmo/next-starterkit.git my-project
   cd my-project
   rm -rf .git && git init
   ```

2. **`package.json` 이름 변경**
   ```json
   { "name": "my-project" }
   ```

3. **`lib/constants.ts` 수정** — 사이트 이름, URL, 네비게이션 링크

4. **`app/globals.css` 색상 토큰 수정** — 브랜드 색상 적용

5. **불필요한 쇼케이스 페이지 제거**
   - `app/components/page.tsx`, `app/docs/page.tsx`, `components/showcase/` 삭제

6. **필요한 shadcn/ui 컴포넌트 추가**
   ```bash
   npx shadcn@latest add [component]
   ```

7. **`.env.example` 기반으로 `.env.local` 작성** 후 개발 시작

## 라이선스

MIT
