import { Users, UserPlus, UserCheck, UserX } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// 사용자 통계 카드 타입
export interface UserStat {
  id: number;
  title: string;
  value: string;
  icon: LucideIcon;
}

// 사용자 타입
export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

// 사용자 통계 Mock 데이터
export const userStats: UserStat[] = [
  { id: 1, title: "전체 사용자", value: "12,345", icon: Users },
  { id: 2, title: "신규 가입", value: "324", icon: UserPlus },
  { id: 3, title: "활성 사용자", value: "9,210", icon: UserCheck },
  { id: 4, title: "비활성 사용자", value: "3,135", icon: UserX },
];

// 사용자 목록 Mock 데이터
export const users: User[] = [
  { id: 1, name: "김민준", email: "minjun@example.com", role: "관리자", status: "활성" },
  { id: 2, name: "이서연", email: "seoyeon@example.com", role: "사용자", status: "활성" },
  { id: 3, name: "박지호", email: "jiho@example.com", role: "사용자", status: "비활성" },
  { id: 4, name: "최수아", email: "sua@example.com", role: "편집자", status: "활성" },
  { id: 5, name: "정도윤", email: "doyun@example.com", role: "사용자", status: "활성" },
];
