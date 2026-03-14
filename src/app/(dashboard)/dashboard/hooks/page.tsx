'use client'

import React, { useRef, useState } from 'react'
import {
  useLocalStorage,
  useDebounceValue,
  useToggle,
  useCounter,
  useCopyToClipboard,
  useWindowSize,
  useMediaQuery,
  useHover,
} from 'usehooks-ts'
import { cn } from '@/lib/utils'
import { PageHeader } from '@/components/common/page-header'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import {
  Monitor,
  Copy,
  Check,
  Plus,
  Minus,
  RotateCcw,
  Search,
  MousePointer2,
} from 'lucide-react'

// ─── useLocalStorage 데모 ────────────────────────────────
function LocalStorageDemo() {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>(
    'demo-theme',
    'light'
  )
  const [name, setName] = useLocalStorage<string>('demo-name', '')

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Badge variant="outline" className="font-mono text-xs">
            useLocalStorage
          </Badge>
          로컬 스토리지
        </CardTitle>
        <CardDescription>
          브라우저를 새로고침해도 값이 유지됩니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>이름 (새로고침 후 유지)</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요"
          />
          {name && (
            <p className="text-muted-foreground text-sm">
              저장됨: <strong>{name}</strong>
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <Switch
            checked={theme === 'dark'}
            onCheckedChange={(v) => setTheme(v ? 'dark' : 'light')}
          />
          <Label>
            테마: <strong>{theme === 'dark' ? '다크' : '라이트'}</strong>
          </Label>
        </div>
      </CardContent>
    </Card>
  )
}

// ─── useDebounce 데모 ────────────────────────────────────
function DebounceDemo() {
  // useLocalStorage 대신 useState 사용 (디바운스 데모 목적에 충실)
  const [value, setValue] = useState<string>('')
  const [debouncedValue] = useDebounceValue(value, 500)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Badge variant="outline" className="font-mono text-xs">
            useDebounce
          </Badge>
          디바운스
        </CardTitle>
        <CardDescription>
          입력 후 500ms 뒤에 디바운스 값이 업데이트됩니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="검색어 입력..."
            className="pl-9"
          />
        </div>
        <div className="bg-muted/50 space-y-1 rounded-md p-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">현재 값:</span>
            <span className="font-medium">{value || '—'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">디바운스 값:</span>
            <span className="text-primary font-medium">
              {debouncedValue || '—'}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// ─── useToggle 데모 ───────────────────────────────────────
function ToggleDemo() {
  const [value, toggle] = useToggle(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Badge variant="outline" className="font-mono text-xs">
            useToggle
          </Badge>
          토글
        </CardTitle>
        <CardDescription>불리언 값을 간편하게 토글합니다.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className={cn(
            'rounded-lg border p-6 text-center transition-all',
            value ? 'bg-primary/10 border-primary/30' : 'bg-muted/30'
          )}
        >
          <div
            className={cn(
              'mx-auto mb-2 flex size-12 items-center justify-center rounded-full transition-all',
              value ? 'bg-primary text-primary-foreground' : 'bg-muted'
            )}
          >
            <span className="text-xl">{value ? '✓' : '○'}</span>
          </div>
          <p className="font-medium">{value ? '활성화됨' : '비활성화됨'}</p>
        </div>
        <Button
          onClick={toggle}
          variant={value ? 'default' : 'outline'}
          className="w-full"
        >
          {value ? '끄기' : '켜기'}
        </Button>
      </CardContent>
    </Card>
  )
}

// ─── useCounter 데모 ─────────────────────────────────────
function CounterDemo() {
  const { count, increment, decrement, reset } = useCounter(0)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Badge variant="outline" className="font-mono text-xs">
            useCounter
          </Badge>
          카운터
        </CardTitle>
        <CardDescription>
          증가/감소/초기화 기능이 내장된 카운터입니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center">
          <span
            className={cn(
              'text-5xl font-bold tabular-nums transition-colors',
              count > 0 ? 'text-primary' : count < 0 ? 'text-destructive' : ''
            )}
          >
            {count}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button size="icon" variant="outline" onClick={decrement}>
            <Minus className="size-4" />
          </Button>
          <Button size="sm" variant="ghost" onClick={reset}>
            <RotateCcw className="mr-1 size-4" /> 초기화
          </Button>
          <Button size="icon" variant="outline" onClick={increment}>
            <Plus className="size-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ─── useCopyToClipboard 데모 ─────────────────────────────
function CopyToClipboardDemo() {
  const [copiedText, copy] = useCopyToClipboard()

  const snippets = [
    { label: 'API URL', value: 'https://api.example.com/v1' },
    { label: 'API Key', value: 'sk-abc123def456ghi789' },
    { label: 'Snippet', value: 'npm create next-app@latest' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Badge variant="outline" className="font-mono text-xs">
            useCopyToClipboard
          </Badge>
          클립보드 복사
        </CardTitle>
        <CardDescription>
          클릭 시 텍스트를 클립보드에 복사합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {snippets.map((s) => (
          <div
            key={s.label}
            className="bg-muted/30 flex items-center justify-between rounded-md border px-3 py-2"
          >
            <div className="min-w-0">
              <p className="text-muted-foreground text-xs">{s.label}</p>
              <p className="truncate font-mono text-sm">{s.value}</p>
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="ml-2 shrink-0"
              onClick={() => copy(s.value)}
            >
              {copiedText === s.value ? (
                <Check className="size-4 text-green-500" />
              ) : (
                <Copy className="size-4" />
              )}
            </Button>
          </div>
        ))}
        {copiedText && (
          <p className="text-muted-foreground text-xs">
            복사됨: <span className="text-primary font-mono">{copiedText}</span>
          </p>
        )}
      </CardContent>
    </Card>
  )
}

// ─── useWindowSize 데모 ──────────────────────────────────
function WindowSizeDemo() {
  const { width, height } = useWindowSize()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Badge variant="outline" className="font-mono text-xs">
            useWindowSize
          </Badge>
          창 크기
        </CardTitle>
        <CardDescription>
          현재 브라우저 창의 크기를 실시간으로 표시합니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center gap-6">
          <div className="text-center">
            <Monitor className="text-primary mx-auto mb-2 size-8" />
            <div className="flex gap-3">
              <div className="bg-muted/50 rounded-md px-4 py-3 text-center">
                <p className="text-muted-foreground text-xs">너비</p>
                <p className="text-primary text-2xl font-bold tabular-nums">
                  {width}
                </p>
                <p className="text-muted-foreground text-xs">px</p>
              </div>
              <div className="bg-muted/50 rounded-md px-4 py-3 text-center">
                <p className="text-muted-foreground text-xs">높이</p>
                <p className="text-primary text-2xl font-bold tabular-nums">
                  {height}
                </p>
                <p className="text-muted-foreground text-xs">px</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// ─── useMediaQuery 데모 ──────────────────────────────────
function MediaQueryDemo() {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)')
  const isDesktop = useMediaQuery('(min-width: 1025px)')
  const isDark = useMediaQuery('(prefers-color-scheme: dark)')

  const breakpoints = [
    { label: '모바일 (≤640px)', active: isMobile },
    { label: '태블릿 (641-1024px)', active: isTablet },
    { label: '데스크탑 (≥1025px)', active: isDesktop },
    { label: '다크 모드 선호', active: isDark },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Badge variant="outline" className="font-mono text-xs">
            useMediaQuery
          </Badge>
          미디어 쿼리
        </CardTitle>
        <CardDescription>
          현재 활성화된 브레이크포인트를 감지합니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {breakpoints.map((bp) => (
            <div
              key={bp.label}
              className={cn(
                'flex items-center justify-between rounded-md px-3 py-2 transition-colors',
                bp.active ? 'bg-primary/10' : 'bg-muted/30'
              )}
            >
              <span
                className={cn(
                  'text-sm',
                  bp.active
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground'
                )}
              >
                {bp.label}
              </span>
              <Badge variant={bp.active ? 'default' : 'secondary'}>
                {bp.active ? '활성' : '비활성'}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// ─── useHover 데모 ───────────────────────────────────────
function HoverDemo() {
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLButtonElement>(null)
  // HTMLDivElement/HTMLButtonElement 모두 HTMLElement를 상속하므로 안전한 캐스팅
  const isHovering1 = useHover(ref1 as React.RefObject<HTMLElement>)
  const isHovering2 = useHover(ref2 as React.RefObject<HTMLElement>)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Badge variant="outline" className="font-mono text-xs">
            useHover
          </Badge>
          호버 감지
        </CardTitle>
        <CardDescription>
          요소에 마우스를 올리면 상태가 변경됩니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div
          ref={ref1}
          className={cn(
            'flex cursor-default items-center justify-between rounded-lg border-2 p-4 transition-all',
            isHovering1
              ? 'border-primary bg-primary/5'
              : 'bg-muted/30 border-transparent'
          )}
        >
          <div className="flex items-center gap-2">
            <MousePointer2
              className={cn(
                'size-5 transition-colors',
                isHovering1 ? 'text-primary' : 'text-muted-foreground'
              )}
            />
            <span className="text-sm font-medium">카드 영역</span>
          </div>
          <Badge variant={isHovering1 ? 'default' : 'secondary'}>
            {isHovering1 ? '호버 중' : '대기 중'}
          </Badge>
        </div>

        <Button
          ref={ref2}
          variant={isHovering2 ? 'default' : 'outline'}
          className="w-full transition-all"
        >
          {isHovering2 ? '🎉 호버 중!' : '버튼에 마우스를 올려보세요'}
        </Button>
      </CardContent>
    </Card>
  )
}

// ─── 메인 페이지 ──────────────────────────────────────────
export default function HooksPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="훅 예제"
        description="usehooks-ts에서 제공하는 유용한 커스텀 훅들의 실제 동작을 확인하세요."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <LocalStorageDemo />
        <DebounceDemo />
        <ToggleDemo />
        <CounterDemo />
        <CopyToClipboardDemo />
        <WindowSizeDemo />
        <MediaQueryDemo />
        <HoverDemo />
      </div>
    </div>
  )
}
