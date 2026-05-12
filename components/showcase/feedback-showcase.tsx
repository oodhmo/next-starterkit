"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react";

export function FeedbackShowcase() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Alert</CardTitle>
          <CardDescription>4가지 variant 알림 메시지</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>안내</AlertTitle>
            <AlertDescription>
              일반 안내 메시지입니다. 기본 정보를 제공합니다.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>오류</AlertTitle>
            <AlertDescription>
              오류가 발생했습니다. 다시 시도해주세요.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Toast (Sonner)</CardTitle>
          <CardDescription>다양한 토스트 알림 유형</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() => toast("기본 메시지입니다")}
          >
            기본
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.success("성공!", { description: "작업이 완료되었습니다." })
            }
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            성공
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.error("오류 발생", { description: "다시 시도해주세요." })
            }
          >
            <AlertCircle className="mr-2 h-4 w-4" />
            오류
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.warning("주의", { description: "확인이 필요합니다." })
            }
          >
            <TriangleAlert className="mr-2 h-4 w-4" />
            경고
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.promise(
                new Promise((resolve) => setTimeout(resolve, 2000)),
                {
                  loading: "처리 중...",
                  success: "완료되었습니다!",
                  error: "실패했습니다",
                }
              )
            }
          >
            Promise
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skeleton</CardTitle>
          <CardDescription>콘텐츠 로딩 상태 표시</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
          <Skeleton className="h-[120px] w-full rounded-lg" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AlertDialog</CardTitle>
          <CardDescription>확인/취소가 필요한 위험 작업용 다이얼로그</CardDescription>
        </CardHeader>
        <CardContent>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">계정 삭제</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
                <AlertDialogDescription>
                  이 작업은 되돌릴 수 없습니다. 계정과 모든 데이터가 영구적으로
                  삭제됩니다.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>취소</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => toast.success("계정이 삭제되었습니다")}
                >
                  삭제
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </div>
  );
}
