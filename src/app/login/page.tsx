'use client'

// 폼 유효성 검사를 위한 라이브러리들 가져오기
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Lock } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// shadcn/ui 컴포넌트 가져오기
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

// ✅ Zod로 유효성 검사 규칙 정의
// 마치 '이 박스에는 이런 내용만 넣을 수 있어요'라는 규칙표 같은 것입니다
const loginSchema = z.object({
  // 이메일: 빈칸이면 안 되고, 이메일 형식(@가 포함된 형태)이어야 함
  email: z.string().email('올바른 이메일 형식을 입력하세요.'),
  // 비밀번호: 최소 8글자 이상이어야 함
  password: z.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다.'),
})

// 스키마에서 TypeScript 타입 자동 생성
type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  // useForm: 폼 상태를 관리하는 훅
  // zodResolver: Zod 규칙을 React Hook Form에 연결해주는 다리 역할
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    // 폼 초기값 설정 (처음에는 빈 문자열)
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // 폼 제출 시 실행되는 함수
  // data: 유효성 검사를 통과한 폼 데이터
  function onSubmit(data: LoginFormValues) {
    // 실제 서비스에서는 여기서 로그인 API를 호출합니다
    console.log('로그인 시도:', data)
    alert(`로그인 성공!\n이메일: ${data.email}`)
  }

  return (
    // 전체 화면을 채우고 내용을 가로/세로 중앙에 배치
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      {/* 카드 너비 제한: 모바일에서는 전체 너비, PC에서는 최대 448px */}
      <div className="w-full max-w-md">
        <Card className="shadow-lg">
          {/* 카드 상단: 제목과 설명 */}
          <CardHeader className="space-y-1 pb-6 text-center">
            {/* 서비스 로고/아이콘 영역 */}
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <Lock className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">로그인</h1>
            <p className="text-sm text-muted-foreground">
              계정에 로그인하여 서비스를 이용하세요
            </p>
          </CardHeader>

          {/* Form 컴포넌트: shadcn/ui의 폼 컨텍스트를 제공합니다 */}
          <Form {...form}>
            {/* HTML form 태그: 제출 시 onSubmit 함수 실행 */}
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                {/* ── 이메일 입력 필드 ── */}
                <FormField
                  control={form.control} // 폼 제어권을 FormField에 전달
                  name="email" // loginSchema의 'email' 필드와 연결
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        {/* 이메일 입력창 + 왼쪽 아이콘 */}
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            type="email"
                            placeholder="example@email.com"
                            className="pl-9" // 왼쪽에 아이콘 공간 확보
                            {...field} // 입력값, onChange, onBlur 등을 자동 연결
                          />
                        </div>
                      </FormControl>
                      {/* 유효성 검사 실패 시 에러 메시지가 여기에 표시됩니다 */}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* ── 비밀번호 입력 필드 ── */}
                <FormField
                  control={form.control}
                  name="password" // loginSchema의 'password' 필드와 연결
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>비밀번호</FormLabel>
                        {/* 비밀번호 찾기 링크 */}
                        <Link
                          href="/forgot-password"
                          className="text-xs text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                        >
                          비밀번호를 잊으셨나요?
                        </Link>
                      </div>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            type="password"
                            placeholder="8자 이상 입력하세요"
                            className="pl-9"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>

              {/* 카드 하단: 로그인 버튼 + 회원가입 링크 */}
              <CardFooter className="flex flex-col gap-4 pt-2">
                {/* 로그인 버튼: w-full로 카드 너비에 꽉 채움 */}
                <Button
                  type="submit"
                  className="w-full"
                  // 폼 제출 중일 때 버튼 비활성화 (중복 클릭 방지)
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? '로그인 중...' : '로그인 하기'}
                </Button>

                {/* 회원가입 안내 링크 */}
                <p className="text-center text-sm text-muted-foreground">
                  계정이 없으신가요?{' '}
                  <Link
                    href="/signup"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    회원가입
                  </Link>
                </p>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  )
}
