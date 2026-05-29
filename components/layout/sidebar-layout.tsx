import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

interface SidebarLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export function SidebarLayout({ children, sidebar }: SidebarLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        {/* TODO: 모바일에서 사이드바 대체 UI 필요 (예: Sheet/드로어) */}
        <aside className="hidden w-64 shrink-0 border-r bg-background md:flex md:flex-col">
          {sidebar}
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="page-container py-8">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
