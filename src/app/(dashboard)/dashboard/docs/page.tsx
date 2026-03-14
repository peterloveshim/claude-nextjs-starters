import { FileText, BookOpen, Code2, Lightbulb } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { PageHeader } from '@/components/common/page-header'

// 문서 카테고리 데이터
const docCategories = [
  {
    title: '시작하기',
    description: '프로젝트 설치 및 기본 설정 방법을 안내합니다.',
    icon: Lightbulb,
    articles: ['설치 가이드', '환경 설정', '첫 번째 페이지 만들기'],
  },
  {
    title: '컴포넌트',
    description: '제공되는 UI 컴포넌트의 사용법을 설명합니다.',
    icon: Code2,
    articles: ['Button', 'Card', 'Form', 'Dialog', 'Tabs'],
  },
  {
    title: '가이드',
    description: '주제별 심화 가이드를 제공합니다.',
    icon: BookOpen,
    articles: [
      '다크 모드 설정',
      '반응형 레이아웃',
      '상태 관리',
      '폼 유효성 검사',
    ],
  },
  {
    title: 'API 레퍼런스',
    description: '훅, 유틸리티 함수 등의 API 레퍼런스입니다.',
    icon: FileText,
    articles: ['useTheme', 'cn 유틸리티', 'siteConfig', '타입 정의'],
  },
]

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="문서"
        description="프로젝트 사용 방법 및 가이드를 확인하세요."
      />

      {/* 문서 카테고리 그리드 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {docCategories.map((category) => {
          const Icon = category.icon
          return (
            <Card
              key={category.title}
              className="cursor-pointer transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 flex size-10 items-center justify-center rounded-lg">
                    <Icon className="text-primary size-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="mt-1 text-xs">
                      {category.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.articles.map((article) => (
                    <li
                      key={article}
                      className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm"
                    >
                      <FileText className="size-3 shrink-0" />
                      {article}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
