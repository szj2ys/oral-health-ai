/**
 * 口腔健康分析结果类型定义
 */

export interface AnalysisIssue {
  /** 问题类型，如"龋齿"、"牙龈红肿"等 */
  type: string;
  /** 问题位置描述，如"左下磨牙区" */
  location: string;
  /** 严重程度 */
  severity: "轻微" | "轻度" | "中度" | "重度";
  /** AI识别的置信度，0-1之间 */
  confidence: number;
}

export interface AnalysisResult {
  /** 口腔健康综合评分，0-100 */
  overallScore: number;
  /** 发现的问题列表 */
  issues: AnalysisIssue[];
  /** 护理建议列表 */
  recommendations: string[];
  /** 备注说明 */
  notes: string;
}

export interface AnalysisResponse {
  /** 是否成功 */
  success: boolean;
  /** 分析结果数据 */
  data?: AnalysisResult;
  /** 响应元数据 */
  meta?: {
    /** 是否使用了真实AI */
    usedRealAI: boolean;
    /** 是否降级到模拟数据 */
    fallback: boolean;
    /** 错误信息（如果有） */
    error: string | null;
  };
  /** 响应消息 */
  message: string;
  /** 错误信息 */
  error?: {
    code: string;
    message: string;
  };
}

export interface AnalysisRequest {
  /** Base64编码的图片数据 */
  imageBase64: string;
  /** 是否强制使用模拟数据 */
  useMock?: boolean;
}
