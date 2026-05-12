import Link from "next/link";
import { Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_NAME } from "@/lib/constants";

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="inline-flex flex-col items-center gap-2 transition-opacity hover:opacity-80"
          >
            <Code2 className="h-10 w-10 text-primary" />
            <span className="text-2xl font-bold">{SITE_NAME}</span>
          </Link>
          {title && (
            <h1 className="mt-4 text-xl font-semibold">{title}</h1>
          )}
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <Card>
          <CardContent className="pt-6">{children}</CardContent>
        </Card>
      </div>
    </div>
  );
}
