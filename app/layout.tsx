import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Next Starter",
    template: "%s | Next Starter",
  },
  description: "Next.js v15 + TypeScript + TailwindCSS v4 + shadcn/ui 스타터킷",
  keywords: ["Next.js", "TypeScript", "TailwindCSS", "shadcn/ui"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "Next Starter",
    description: "Next.js v15 + TypeScript + TailwindCSS v4 + shadcn/ui 스타터킷",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <NextTopLoader showSpinner={false} color="#000000" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
          <Toaster theme="system" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
