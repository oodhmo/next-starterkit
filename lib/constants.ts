export const SITE_NAME = "Next Starter";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const GITHUB_URL = "https://github.com/oodhmo/next-starterkit";
export const SITE_DESCRIPTION =
  "Next.js v15 + TypeScript + TailwindCSS v4 + shadcn/ui 스타터킷";

export const NAV_LINKS = [
  { label: "홈", href: "/" },
  { label: "컴포넌트", href: "/components" },
  { label: "문서", href: "/docs" },
] as const;

export const TECH_STACK = [
  { name: "Next.js", version: "v15" },
  { name: "React", version: "v19" },
  { name: "TypeScript", version: "v5" },
  { name: "TailwindCSS", version: "v4" },
  { name: "shadcn/ui", version: "latest" },
  { name: "lucide-react", version: "v0.468" },
  { name: "next-themes", version: "v0.4" },
] as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
