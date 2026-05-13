# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개요

Next.js v15 App Router + React 19 + TypeScript v5 + TailwindCSS v4 + shadcn/ui 기반 프로덕션 레디 스타터킷.

## 명령어

```bash
npm run dev       # 개발 서버 (Turbopack)
npm run build     # 프로덕션 빌드
npm run start     # 프로덕션 서버 실행
npm run lint      # ESLint 검사

# shadcn/ui 컴포넌트 추가
npx shadcn@latest add <component-name>
```

테스트 설정은 없음. 린트는 `npm run lint`로 확인.

## 아키텍처

```
app/                      # Next.js App Router
  layout.tsx              # 루트 레이아웃 (ThemeProvider, TooltipProvider, Toaster)
  page.tsx                # 홈 페이지
  globals.css             # TailwindCSS v4 테마 토큰 + @plugin "tailwindcss-animate"
  components/page.tsx     # shadcn/ui 컴포넌트 쇼케이스 (/components 라우트)
  docs/page.tsx           # 시작하기 문서 (/docs 라우트)
components/
  ui/                     # shadcn/ui 컴포넌트 26개 (직접 수정 가능)
  layout/
    header.tsx            # Sheet 기반 모바일 메뉴
    footer.tsx
    sidebar-layout.tsx    # 사이드바 슬롯 레이아웃 (SidebarLayoutProps: children + sidebar)
    auth-layout.tsx       # 인증 중앙 정렬 레이아웃 (title, description prop)
  showcase/               # 쇼케이스 Client Components (form/feedback/overlay/data)
  docs/
    copy-button.tsx       # useCopyToClipboard 기반 복사 버튼
  theme-toggle.tsx
hooks/                    # 커스텀 훅 (모두 "use client")
lib/
  utils.ts                # cn(), isNullish(), delay(), chunk(), compact()
  constants.ts            # SITE_NAME, NAV_LINKS, TECH_STACK, BREAKPOINTS
types/
  index.ts                # 공통 타입 (ApiResponse<T>, BaseEntity, WithChildren 등)
```

## TailwindCSS v4 핵심 사항

`tailwind.config` 파일이 **없다**. 모든 테마 토큰은 `app/globals.css`의 `@theme inline` 블록에서 관리한다.

- 색상 토큰: `:root`와 `.dark` 클래스에 **oklch** 함수로 CSS 변수 정의
- 다크모드: `@custom-variant dark (&:is(.dark *))` — `.dark` 클래스 기반
- 애니메이션: `@plugin "tailwindcss-animate"` (Sheet/Dialog 등 애니메이션 의존)
- 새 토큰 추가 시 `@theme inline` 블록에 `--color-*` 형태로 추가

## shadcn/ui 설정

`components.json` 기준:
- 스타일: `new-york`, CSS 변수 사용, 아이콘: `lucide-react`
- `components/ui/` 컴포넌트는 직접 수정 가능

**설치된 컴포넌트 (26개):** alert, alert-dialog, avatar, badge, breadcrumb, button, card, checkbox, dialog, dropdown-menu, form, input, label, pagination, popover, radio-group, select, separator, sheet, skeleton, sonner, switch, table, tabs, textarea, tooltip

## 폼 관리 (zod v4 + react-hook-form)

Zod **v4** 사용 중. v3와 API 차이 주의:
- `required_error` 파라미터 **없음** → `z.string().min(1, "메시지")` 또는 `{ error: "메시지" }` 사용
- `.default()` 사용 시 `zodResolver` 타입 추론 문제 발생 → `useForm`의 `defaultValues`로 대체

```typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "2자 이상 입력"),
});
const form = useForm<z.infer<typeof schema>>({
  resolver: zodResolver(schema),
  defaultValues: { name: "" },
});
```

## 다크모드 & 전역 프로바이더

`app/layout.tsx`의 레이어 구조:
```
ThemeProvider → TooltipProvider → {children} + <Toaster />
```

- `Toaster`는 `ThemeProvider` 내부에 있어야 다크모드 적용 (`theme="system"`)
- `TooltipProvider`가 전역 래핑되므로 개별 컴포넌트에서 추가 래핑 불필요

## 훅

### usehooks-ts (외부 라이브러리)

`"use client"` 환경에서 사용. import 경로: `usehooks-ts`

| 훅 | 시그니처 | 반환 |
|----|---------|------|
| `useLocalStorage<T>` | `(key, initialValue)` | `[value, setValue, removeValue]` |
| `useMediaQuery` | `(query)` | `boolean` |

### 커스텀 훅 (3개, hooks/)

모두 `"use client"` 전용:

| 훅 | 시그니처 | 반환 |
|----|---------|------|
| `useDebounce<T>` | `(value, delay?)` | `T` (기본 300ms) |
| `useCopyToClipboard` | `(resetDelay?)` | `{ copied, copy }` (기본 2000ms) |
| `useIntersectionObserver<T>` | `(options?)` | `[ref, isIntersecting]` |

`useIntersectionObserver`의 `freezeOnceVisible: true` 옵션: 뷰포트 진입 후 관찰 중단 (lazy-load 패턴).

## 경로 별칭

`@/*` → 프로젝트 루트 (`./`)

## 환경 변수

`.env.example` 참조. 필수 변수:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Next Starter
```

# 워크플로우
- 중간 단계에서는 테스트 실행 생략
- 전체 테스트 스위트가 아닌 빌드/타입체크만 실행
- 최종 검증 단계에서만 테스트 실행