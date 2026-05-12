import Link from "next/link";
import { Code2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold">
              <Code2 className="h-5 w-5 text-primary" />
              <span>{SITE_NAME}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Next.js v15 App Router 기반 프로덕션 레디 스타터킷
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">기술 스택</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "Next.js", href: "https://nextjs.org" },
                { label: "TailwindCSS v4", href: "https://tailwindcss.com" },
                { label: "shadcn/ui", href: "https://ui.shadcn.com" },
                { label: "Lucide Icons", href: "https://lucide.dev" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">리소스</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "문서", href: "/docs" },
                { label: "컴포넌트", href: "/components" },
                { label: "GitHub", href: "https://github.com" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {SITE_NAME}. MIT License.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js v15 + TailwindCSS v4
          </p>
        </div>
      </div>
    </footer>
  );
}
