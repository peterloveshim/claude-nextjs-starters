"use client";

import { useState } from "react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AlertCircle, Info, CheckCircle2, ChevronDown } from "lucide-react";

export default function UIShowcasePage() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [progressValue] = useState(65);
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div className="space-y-6">
      <PageHeader
        title="UI 컴포넌트"
        description="shadcn/ui 컴포넌트 쇼케이스 — 모든 컴포넌트의 변형과 상태를 확인하세요."
      />

      <Tabs defaultValue="buttons" className="space-y-4">
        <TabsList className="flex-wrap h-auto gap-1">
          <TabsTrigger value="buttons">버튼</TabsTrigger>
          <TabsTrigger value="form-elements">폼 요소</TabsTrigger>
          <TabsTrigger value="data-display">데이터 표시</TabsTrigger>
          <TabsTrigger value="overlays">오버레이</TabsTrigger>
          <TabsTrigger value="layout">레이아웃</TabsTrigger>
          <TabsTrigger value="feedback">피드백</TabsTrigger>
        </TabsList>

        {/* 버튼 변형 */}
        <TabsContent value="buttons">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">버튼 Variant</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button variant="default">기본</Button>
                <Button variant="secondary">보조</Button>
                <Button variant="outline">외곽선</Button>
                <Button variant="ghost">고스트</Button>
                <Button variant="destructive">삭제</Button>
                <Button variant="link">링크</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">버튼 크기</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center gap-3">
                <Button size="lg">Large</Button>
                <Button size="default">Default</Button>
                <Button size="sm">Small</Button>
                <Button size="xs">XSmall</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">버튼 상태</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button>활성화</Button>
                <Button disabled>비활성화</Button>
                <Button variant="outline" disabled>비활성화 (outline)</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 폼 요소 */}
        <TabsContent value="form-elements">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Input</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="기본 입력 필드" />
                <Input placeholder="비활성화" disabled />
                <Input type="password" placeholder="비밀번호" />
                <Input type="email" placeholder="이메일 주소" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Select</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="역할 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">관리자</SelectItem>
                    <SelectItem value="editor">편집자</SelectItem>
                    <SelectItem value="viewer">뷰어</SelectItem>
                  </SelectContent>
                </Select>
                <Select disabled>
                  <SelectTrigger>
                    <SelectValue placeholder="비활성화" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">옵션</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Checkbox & Switch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Checkbox id="check1" defaultChecked />
                  <Label htmlFor="check1">체크됨</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="check2" />
                  <Label htmlFor="check2">체크 안됨</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="check3" disabled />
                  <Label htmlFor="check3" className="text-muted-foreground">비활성화</Label>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <Switch checked={switchOn} onCheckedChange={setSwitchOn} id="switch1" />
                  <Label htmlFor="switch1">{switchOn ? "켜짐" : "꺼짐"}</Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">RadioGroup</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="option1" className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="option1" id="r1" />
                    <Label htmlFor="r1">옵션 1</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="option2" id="r2" />
                    <Label htmlFor="r2">옵션 2</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="option3" id="r3" />
                    <Label htmlFor="r3">옵션 3</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Textarea</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Textarea placeholder="내용을 입력하세요..." />
                <Textarea placeholder="비활성화" disabled />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Slider</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>값</span>
                    <span className="font-medium">{sliderValue[0]}</span>
                  </div>
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 데이터 표시 */}
        <TabsContent value="data-display">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Badge</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge variant="default">기본</Badge>
                <Badge variant="secondary">보조</Badge>
                <Badge variant="outline">외곽선</Badge>
                <Badge variant="destructive">삭제</Badge>
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">성공</Badge>
                <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">경고</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avatar</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar className="size-12">
                  <AvatarFallback className="text-base">CD</AvatarFallback>
                </Avatar>
                <Avatar className="size-16">
                  <AvatarFallback className="text-lg">EF</AvatarFallback>
                </Avatar>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Skeleton</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
                <Skeleton className="h-32 w-full" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>진행률</span>
                    <span>{progressValue}%</span>
                  </div>
                  <Progress value={progressValue} />
                </div>
                <Progress value={30} className="h-2" />
                <Progress value={80} className="h-3" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 오버레이 */}
        <TabsContent value="overlays">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Dialog</CardTitle>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">다이얼로그 열기</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>다이얼로그 제목</DialogTitle>
                      <DialogDescription>
                        이것은 다이얼로그 설명 텍스트입니다. 사용자에게 중요한 정보를 전달합니다.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-sm text-muted-foreground">다이얼로그 본문 내용이 여기에 표시됩니다.</p>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">취소</Button>
                      <Button>확인</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Tooltip</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm">위에 표시</Button>
                  </TooltipTrigger>
                  <TooltipContent>툴팁 메시지</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm">정보</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>더 자세한 설명을 여기에 작성합니다.</p>
                  </TooltipContent>
                </Tooltip>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">DropdownMenu</CardTitle>
              </CardHeader>
              <CardContent>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      메뉴 열기 <ChevronDown className="ml-2 size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>계정</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>프로필</DropdownMenuItem>
                    <DropdownMenuItem>설정</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">로그아웃</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 레이아웃 */}
        <TabsContent value="layout">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Separator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm">위 콘텐츠</p>
                  <Separator />
                  <p className="text-sm">아래 콘텐츠</p>
                </div>
                <div className="flex h-8 items-center gap-4">
                  <span className="text-sm">왼쪽</span>
                  <Separator orientation="vertical" />
                  <span className="text-sm">오른쪽</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Accordion</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>섹션 1</AccordionTrigger>
                    <AccordionContent>
                      첫 번째 섹션의 내용입니다. 자세한 정보를 여기에 작성합니다.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>섹션 2</AccordionTrigger>
                    <AccordionContent>
                      두 번째 섹션의 내용입니다. 추가적인 정보를 제공합니다.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>섹션 3</AccordionTrigger>
                    <AccordionContent>
                      세 번째 섹션의 내용입니다.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-base">Tabs (중첩)</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="tab1">
                  <TabsList>
                    <TabsTrigger value="tab1">탭 1</TabsTrigger>
                    <TabsTrigger value="tab2">탭 2</TabsTrigger>
                    <TabsTrigger value="tab3">탭 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="mt-4">
                    <p className="text-sm text-muted-foreground">첫 번째 탭의 내용입니다.</p>
                  </TabsContent>
                  <TabsContent value="tab2" className="mt-4">
                    <p className="text-sm text-muted-foreground">두 번째 탭의 내용입니다.</p>
                  </TabsContent>
                  <TabsContent value="tab3" className="mt-4">
                    <p className="text-sm text-muted-foreground">세 번째 탭의 내용입니다.</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 피드백 */}
        <TabsContent value="feedback">
          <div className="space-y-4">
            <Alert>
              <Info className="size-4" />
              <AlertTitle>정보</AlertTitle>
              <AlertDescription>
                일반 정보 메시지입니다. 사용자에게 알림을 제공합니다.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle className="size-4" />
              <AlertTitle>오류</AlertTitle>
              <AlertDescription>
                오류가 발생했습니다. 다시 시도하거나 관리자에게 문의하세요.
              </AlertDescription>
            </Alert>

            <Alert className="border-green-500/50 bg-green-50 text-green-800 dark:bg-green-950/20 dark:text-green-400">
              <CheckCircle2 className="size-4 text-green-600 dark:text-green-400" />
              <AlertTitle>성공</AlertTitle>
              <AlertDescription>
                작업이 성공적으로 완료되었습니다.
              </AlertDescription>
            </Alert>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
