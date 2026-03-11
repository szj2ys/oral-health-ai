// 用户类型
export interface User {
  id: string;
  email: string;
  phone?: string;
  name?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

// 家庭成员类型
export interface FamilyMember {
  id: string;
  userId: string;
  name: string;
  relation: '配偶' | '子女' | '父母' | '其他';
  birthDate?: Date;
}

// 检测问题类型
export interface OralIssue {
  type: string;
  location: string;
  severity: '轻微' | '轻度' | '中度' | '重度';
  confidence: number;
}

// 检测记录类型
export interface Scan {
  id: string;
  userId?: string;
  familyMemberId?: string;
  imageUrl: string;
  status: ScanStatus;
  overallScore?: number;
  issues?: OralIssue[];
  recommendations?: string[];
  createdAt: Date;
  updatedAt: Date;
}

// 检测状态
export type ScanStatus =
  | 'PENDING'
  | 'UPLOADING'
  | 'PREPROCESSING'
  | 'ANALYZING'
  | 'COMPLETED'
  | 'FAILED';

// AI分析结果类型
export interface AnalysisResult {
  overallScore: number;
  issues: OralIssue[];
  recommendations: string[];
  notes: string;
}

// API响应类型
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: {
    code: string;
    message: string;
    details?: Record<string, any>;
  };
}

// 健康趋势数据
export interface HealthTrend {
  date: string;
  score: number;
  issues: number;
}
