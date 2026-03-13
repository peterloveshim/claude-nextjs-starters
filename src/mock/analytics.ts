import { BarChart3, TrendingUp, Eye, MousePointerClick } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// 분석 통계 카드 타입
export interface AnalyticsStat {
  id: number;
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

// 인기 페이지 타입
export interface TopPage {
  id: number;
  page: string;
  views: string;
  rate: string;
}

// 분석 통계 Mock 데이터
export const analyticsStats: AnalyticsStat[] = [
  { id: 1, title: "총 방문자", value: "48,291", change: "+15.3%", icon: Eye },
  { id: 2, title: "페이지 뷰", value: "142,850", change: "+9.7%", icon: BarChart3 },
  { id: 3, title: "평균 체류시간", value: "3분 24초", change: "+5.1%", icon: TrendingUp },
  { id: 4, title: "클릭률", value: "4.62%", change: "+2.3%", icon: MousePointerClick },
];

// 인기 페이지 Mock 데이터
export const topPages: TopPage[] = [
  { id: 1, page: "/dashboard", views: "12,450", rate: "26.4%" },
  { id: 2, page: "/", views: "10,231", rate: "21.8%" },
  { id: 3, page: "/dashboard/users", views: "7,890", rate: "16.8%" },
  { id: 4, page: "/about", views: "5,320", rate: "11.3%" },
  { id: 5, page: "/dashboard/analytics", views: "4,100", rate: "8.7%" },
];
