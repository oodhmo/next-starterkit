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
        <aside className="hidden w-64 shrink-0 border-r bg-background md:flex md:flex-col">
          {sidebar}
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-20 py-8">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
