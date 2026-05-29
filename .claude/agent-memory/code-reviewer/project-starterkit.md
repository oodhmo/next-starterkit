---
name: project-starterkit
description: Next.js v15 스타터킷 프로젝트 컨텍스트 및 아키텍처 결정 사항
metadata:
  type: project
---

Next.js v15 App Router + React 19 + TypeScript v5 + TailwindCSS v4 + shadcn/ui 기반 프로덕션 레디 스타터킷 프로젝트.

**Why:** 새 프로젝트 부트스트래핑 시간을 줄이기 위한 템플릿 목적.

**How to apply:** 리뷰 시 스타터킷으로서의 교육적/참조 목적을 감안해 과도한 추상화보다 명확성을 우선하는 피드백 제공.

## 핵심 아키텍처 결정
- TailwindCSS v4: `tailwind.config` 없음, `app/globals.css`의 `@theme inline` 블록에서만 토큰 관리
- Zod v4 사용: `required_error` 없음, `min(1, "...")` 패턴 사용
- 다크모드: `next-themes` + `.dark` 클래스 기반, `suppressHydrationWarning` 필수
- `Toaster`는 `ThemeProvider` 내부에 위치해야 다크모드 적용됨
- `TooltipProvider` 전역 래핑으로 개별 컴포넌트에서 추가 래핑 불필요
- 경로 별칭: `@/*` → 프로젝트 루트

## 발견된 반복 패턴
- 모든 페이지에서 `px-20` 패딩 사용 (Header, Footer, 각 page.tsx) — 공통 상수화 미적용
- `Toaster`가 `TooltipProvider` 외부에 위치해 tooltip 컨텍스트 밖에 있음
- `footer.tsx`에서 `new Date().getFullYear()` — Server Component이므로 빌드 시 연도가 정적으로 고정됨
- `header.tsx` GitHub URL이 상수(`GITHUB_URL`)가 아닌 하드코딩된 `https://github.com` 사용
- `theme-toggle.tsx`에서 `theme === "dark"` 비교 시 `system` 테마 처리 누락 — 토글 후 예상치 못한 동작 가능
- `use-copy-to-clipboard.ts`에서 `setTimeout` 반환값 미정리 (cleanup 없음)
- `app/page.tsx`의 Form 데모에서 로그인 버튼에 `type="submit"` 없음 — `<form>` 미사용이라 실제 문제 없으나 패턴 혼재
- `data-showcase.tsx`의 `Pagination`에서 페이지 4가 표시되지 않음 (1,2,3,...,5 구조)
- `sidebar-layout.tsx`의 `SidebarLayout` — sidebar가 모바일에서 숨겨지지만 모바일 대체 UI 없음
