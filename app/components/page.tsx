import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FormShowcase } from "@/components/showcase/form-showcase";
import { FeedbackShowcase } from "@/components/showcase/feedback-showcase";
import { OverlayShowcase } from "@/components/showcase/overlay-showcase";
import { DataShowcase } from "@/components/showcase/data-showcase";

export const metadata: Metadata = {
  title: "컴포넌트",
  description: "shadcn/ui 컴포넌트 쇼케이스",
};

export default function ComponentsPage() {
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
                <BreadcrumbPage>컴포넌트</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">컴포넌트 쇼케이스</h1>
            <p className="mt-2 text-muted-foreground">
              shadcn/ui 컴포넌트의 실제 사용 예제입니다.
            </p>
          </div>

          <Tabs defaultValue="form">
            <TabsList className="mb-6 flex h-auto flex-wrap gap-1">
              <TabsTrigger value="form">폼 &amp; 입력</TabsTrigger>
              <TabsTrigger value="feedback">피드백</TabsTrigger>
              <TabsTrigger value="overlay">오버레이</TabsTrigger>
              <TabsTrigger value="data">데이터</TabsTrigger>
            </TabsList>

            <TabsContent value="form">
              <FormShowcase />
            </TabsContent>

            <TabsContent value="feedback">
              <FeedbackShowcase />
            </TabsContent>

            <TabsContent value="overlay">
              <OverlayShowcase />
            </TabsContent>

            <TabsContent value="data">
              <DataShowcase />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}
