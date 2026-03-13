"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CheckCircle2, AlertCircle } from "lucide-react";

// ─── 로그인 폼 스키마 ───────────────────────────────────────
const loginSchema = z.object({
  email: z.string().email("올바른 이메일 형식을 입력하세요."),
  password: z.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다."),
});
type LoginFormValues = z.infer<typeof loginSchema>;

// ─── 회원가입 폼 스키마 ─────────────────────────────────────
const signupSchema = z
  .object({
    name: z.string().min(2, "이름은 최소 2자 이상이어야 합니다."),
    email: z.string().email("올바른 이메일 형식을 입력하세요."),
    password: z.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다."),
    confirmPassword: z.string(),
    terms: z.boolean().refine((val) => val === true, "약관에 동의해야 합니다."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });
type SignupFormValues = z.infer<typeof signupSchema>;

// ─── 프로필 수정 폼 스키마 ──────────────────────────────────
const profileSchema = z.object({
  name: z.string().min(2, "이름은 최소 2자 이상이어야 합니다."),
  bio: z.string().max(200, "소개는 최대 200자까지 입력할 수 있습니다.").optional(),
  url: z
    .string()
    .url("올바른 URL 형식을 입력하세요.")
    .optional()
    .or(z.literal("")),
  role: z.string().min(1, "역할을 선택해주세요."),
});
type ProfileFormValues = z.infer<typeof profileSchema>;

// ─── 결과 표시 컴포넌트 (제네릭으로 as 캐스팅 불필요) ────────
function SubmitResult<T extends object>({
  data,
  onReset,
}: {
  data: T;
  onReset: () => void;
}) {
  return (
    <div className="space-y-3">
      <Alert className="border-green-500/50 bg-green-50 dark:bg-green-950/20">
        <CheckCircle2 className="size-4 text-green-600 dark:text-green-400" />
        <AlertTitle className="text-green-800 dark:text-green-400">폼 제출 성공</AlertTitle>
        <AlertDescription className="text-green-700 dark:text-green-500">
          유효성 검사를 통과했습니다.
        </AlertDescription>
      </Alert>
      <Card className="bg-muted/40">
        <CardContent className="pt-4">
          <pre className="overflow-auto text-xs">
            {JSON.stringify(data, null, 2)}
          </pre>
        </CardContent>
      </Card>
      <Button variant="outline" size="sm" onClick={onReset}>
        다시 시도
      </Button>
    </div>
  );
}

// ─── 로그인 폼 ────────────────────────────────────────────
function LoginForm() {
  const [submitted, setSubmitted] = useState<LoginFormValues | null>(null);
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "onChange",
  });

  function onSubmit(values: LoginFormValues) {
    setSubmitted(values);
  }

  if (submitted) {
    return (
      <SubmitResult
        data={submitted}
        onReset={() => {
          setSubmitted(null);
          form.reset();
        }}
      />
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input type="password" placeholder="최소 8자" {...field} />
              </FormControl>
              <FormDescription>영문, 숫자 조합을 권장합니다.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          로그인
        </Button>
      </form>
    </Form>
  );
}

// ─── 회원가입 폼 ──────────────────────────────────────────
function SignupForm() {
  const [submitted, setSubmitted] = useState<SignupFormValues | null>(null);
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "", terms: false },
    mode: "onChange",
  });

  function onSubmit(values: SignupFormValues) {
    setSubmitted(values);
  }

  if (submitted) {
    return (
      <SubmitResult
        data={submitted}
        onReset={() => {
          setSubmitted(null);
          form.reset();
        }}
      />
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이름</FormLabel>
              <FormControl>
                <Input placeholder="홍길동" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input type="password" placeholder="최소 8자" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호 확인</FormLabel>
              <FormControl>
                <Input type="password" placeholder="비밀번호 재입력" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex items-start gap-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1">
                <FormLabel>이용약관 동의</FormLabel>
                <FormDescription>
                  서비스 이용약관 및 개인정보처리방침에 동의합니다.
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          회원가입
        </Button>
      </form>
    </Form>
  );
}

// ─── 프로필 수정 폼 ───────────────────────────────────────
function ProfileForm() {
  const [submitted, setSubmitted] = useState<ProfileFormValues | null>(null);
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: "홍길동", bio: "", url: "", role: "" },
    mode: "onChange",
  });

  const bioValue = form.watch("bio") ?? "";

  function onSubmit(values: ProfileFormValues) {
    setSubmitted(values);
  }

  if (submitted) {
    return (
      <SubmitResult
        data={submitted}
        onReset={() => {
          setSubmitted(null);
          form.reset();
        }}
      />
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이름</FormLabel>
              <FormControl>
                <Input placeholder="홍길동" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>소개</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="자신을 소개해주세요. (선택사항)"
                  className="resize-none"
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {bioValue.length}/200자
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>웹사이트 URL (선택)</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>역할</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="역할 선택" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="admin">관리자</SelectItem>
                  <SelectItem value="developer">개발자</SelectItem>
                  <SelectItem value="designer">디자이너</SelectItem>
                  <SelectItem value="viewer">뷰어</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          저장
        </Button>
      </form>
    </Form>
  );
}

// ─── 메인 페이지 ──────────────────────────────────────────
export default function FormExamplePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="폼 예제"
        description="React Hook Form + Zod를 활용한 타입 안전 폼 구현 예제입니다."
      />

      <Alert>
        <AlertCircle className="size-4" />
        <AlertTitle>실시간 유효성 검사</AlertTitle>
        <AlertDescription>
          입력 중 실시간으로 유효성 검사가 수행됩니다. 각 필드의 오류 메시지를 확인하세요.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="login">
        <TabsList>
          <TabsTrigger value="login">로그인 폼</TabsTrigger>
          <TabsTrigger value="signup">회원가입 폼</TabsTrigger>
          <TabsTrigger value="profile">프로필 수정</TabsTrigger>
        </TabsList>

        <TabsContent value="login" className="mt-6">
          <div className="mx-auto max-w-md">
            <Card>
              <CardHeader>
                <CardTitle>로그인</CardTitle>
                <CardDescription>
                  이메일과 비밀번호로 로그인하세요.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LoginForm />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="signup" className="mt-6">
          <div className="mx-auto max-w-md">
            <Card>
              <CardHeader>
                <CardTitle>회원가입</CardTitle>
                <CardDescription>
                  새 계정을 만드세요. 약관 동의가 필요합니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SignupForm />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="profile" className="mt-6">
          <div className="mx-auto max-w-md">
            <Card>
              <CardHeader>
                <CardTitle>프로필 수정</CardTitle>
                <CardDescription>
                  개인 정보를 업데이트하세요.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProfileForm />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
