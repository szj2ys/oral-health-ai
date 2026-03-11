// AI分析服务

const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";

export interface AnalysisIssue {
  type: string;
  location: string;
  severity: "轻微" | "轻度" | "中度" | "重度";
  confidence: number;
}

export interface AnalysisResult {
  overallScore: number;
  issues: AnalysisIssue[];
  recommendations: string[];
  notes: string;
}

/**
 * 使用Claude API分析口腔照片
 */
export async function analyzeOralImage(
  imageBase64: string
): Promise<AnalysisResult> {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY not configured");
  }

  const response = await fetch(ANTHROPIC_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-3-5-sonnet-20241022", // 使用最新的Sonnet模型
      max_tokens: 2048,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: "image/jpeg",
                data: imageBase64,
              },
            },
            {
              type: "text",
              text: `你是一位专业的口腔健康分析AI助手。请仔细分析这张口腔照片，识别可能存在的口腔健康问题。

## 分析维度
请重点关注以下口腔健康问题：
1. **龋齿（蛀牙）**：牙齿表面的黑点、黑洞、蛀蚀痕迹
2. **牙龈红肿/出血**：牙龈颜色异常发红、肿胀、出血迹象
3. **牙结石**：牙齿表面黄色或棕色的硬质沉积物
4. **牙菌斑**：牙齿表面软性的细菌沉积，通常呈白色或黄色
5. **牙齿排列问题**：牙齿拥挤、错位、间隙异常
6. **牙齿变色**：牙齿发黄、发黑、白斑等颜色异常
7. **口腔溃疡**：口腔黏膜上的溃疡、破损
8. **舌苔异常**：舌头表面的异常表现

## 输出要求
请以JSON格式返回分析结果，格式如下：

{
  "overallScore": 75,  // 0-100的整数，口腔健康综合评分，100为最佳
  "issues": [
    {
      "type": "牙龈红肿",  // 问题类型，从上述分析维度中选择
      "location": "左下磨牙区牙龈",  // 具体位置描述
      "severity": "轻度",  // 严重程度：轻微、轻度、中度、重度
      "confidence": 0.85  // 0-1之间的小数，表示AI识别的置信度
    }
  ],
  "recommendations": [
    "建议每天使用软毛牙刷，采用正确的巴氏刷牙法",
    "每天使用牙线清洁牙缝",
    "建议每半年进行一次专业洗牙"
  ],
  "notes": "整体口腔状况良好，注意日常口腔卫生维护即可"
}

## 注意事项
- 如果照片质量不佳或无法清晰识别，请在notes中说明
- severity只能是"轻微"、"轻度"、"中度"、"重度"其中之一
- confidence表示你对识别的把握程度，不确定时应该给出较低的值
- 如果没有发现明显问题，issues可以为空数组
- overallScore应该基于发现的问题数量和严重程度综合评定
- recommendations应该具体、可操作，针对发现的问题给出建议`,
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(
      `Claude API error: ${error.error?.message || response.statusText}`
    );
  }

  const data = await response.json();
  const content = data.content?.[0]?.text;

  if (!content) {
    throw new Error("Empty response from Claude API");
  }

  // 解析JSON响应
  return parseAnalysisResponse(content);
}

/**
 * 解析AI响应，支持多种JSON格式
 */
function parseAnalysisResponse(content: string): AnalysisResult {
  // 尝试直接解析JSON
  try {
    const result = JSON.parse(content);
    return validateAndNormalizeResult(result);
  } catch {
    // 如果直接解析失败，尝试从文本中提取JSON
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        const result = JSON.parse(jsonMatch[0]);
        return validateAndNormalizeResult(result);
      } catch {
        // 提取失败，继续执行
      }
    }
  }

  // 解析失败，使用备用解析
  console.warn("Failed to parse AI response as JSON:", content);
  return parseFallbackResponse(content);
}

/**
 * 验证和规范化分析结果
 */
function validateAndNormalizeResult(result: unknown): AnalysisResult {
  if (!result || typeof result !== "object") {
    throw new Error("Invalid analysis result format");
  }

  const r = result as Record<string, unknown>;

  // 验证并规范化overallScore
  let overallScore = 70;
  if (typeof r.overallScore === "number") {
    overallScore = Math.max(0, Math.min(100, Math.round(r.overallScore)));
  }

  // 验证并规范化issues
  const issues: AnalysisIssue[] = [];
  if (Array.isArray(r.issues)) {
    for (const issue of r.issues) {
      if (issue && typeof issue === "object") {
        const normalizedIssue: AnalysisIssue = {
          type: String(issue.type || "未知问题"),
          location: String(issue.location || "未指定位置"),
          severity: validateSeverity(issue.severity),
          confidence: normalizeConfidence(issue.confidence),
        };
        issues.push(normalizedIssue);
      }
    }
  }

  // 验证并规范化recommendations
  const recommendations: string[] = [];
  if (Array.isArray(r.recommendations)) {
    for (const rec of r.recommendations) {
      if (typeof rec === "string" && rec.trim()) {
        recommendations.push(rec.trim());
      }
    }
  }

  // 如果没有推荐，提供默认建议
  if (recommendations.length === 0) {
    recommendations.push("保持良好的口腔卫生习惯，每天刷牙两次");
    recommendations.push("定期进行口腔健康检查");
  }

  // 验证并规范化notes
  const notes =
    typeof r.notes === "string" && r.notes.trim()
      ? r.notes.trim()
      : "分析完成，请参考上述结果和建议。";

  return {
    overallScore,
    issues,
    recommendations,
    notes,
  };
}

/**
 * 验证严重程度
 */
function validateSeverity(severity: unknown): "轻微" | "轻度" | "中度" | "重度" {
  const validSeverities = ["轻微", "轻度", "中度", "重度"];
  if (typeof severity === "string" && validSeverities.includes(severity)) {
    return severity as "轻微" | "轻度" | "中度" | "重度";
  }
  // 尝试匹配英文或其他变体
  const severityMap: Record<string, "轻微" | "轻度" | "中度" | "重度"> = {
    minor: "轻微",
    mild: "轻度",
    moderate: "中度",
    severe: "重度",
    light: "轻微",
    medium: "中度",
    heavy: "重度",
  };
  if (typeof severity === "string") {
    const lower = severity.toLowerCase();
    if (severityMap[lower]) {
      return severityMap[lower];
    }
  }
  return "轻度"; // 默认值
}

/**
 * 规范化置信度
 */
function normalizeConfidence(confidence: unknown): number {
  if (typeof confidence === "number") {
    return Math.max(0, Math.min(1, confidence));
  }
  if (typeof confidence === "string") {
    const parsed = parseFloat(confidence);
    if (!isNaN(parsed)) {
      return Math.max(0, Math.min(1, parsed));
    }
  }
  return 0.7; // 默认值
}

/**
 * 备用解析：当JSON解析失败时，尝试从文本中提取信息
 */
function parseFallbackResponse(content: string): AnalysisResult {
  const text = content.toLowerCase();

  // 简单的关键词匹配
  const hasCavity = text.includes("龋齿") || text.includes("蛀牙");
  const hasGumIssue =
    text.includes("牙龈") && (text.includes("红肿") || text.includes("出血"));
  const hasTartar = text.includes("牙结石");
  const hasPlaque = text.includes("牙菌斑");

  const issues: AnalysisIssue[] = [];

  if (hasCavity) {
    issues.push({
      type: "龋齿",
      location: "牙齿表面",
      severity: "轻度",
      confidence: 0.6,
    });
  }

  if (hasGumIssue) {
    issues.push({
      type: "牙龈问题",
      location: "牙龈",
      severity: "轻度",
      confidence: 0.6,
    });
  }

  if (hasTartar) {
    issues.push({
      type: "牙结石",
      location: "牙齿表面",
      severity: "轻度",
      confidence: 0.6,
    });
  }

  if (hasPlaque) {
    issues.push({
      type: "牙菌斑",
      location: "牙齿表面",
      severity: "轻微",
      confidence: 0.6,
    });
  }

  // 计算总分
  const overallScore = Math.max(50, 100 - issues.length * 10);

  return {
    overallScore,
    issues,
    recommendations: [
      "建议定期进行口腔检查",
      "保持良好的口腔卫生习惯",
      "如有不适请及时就医",
    ],
    notes: "AI分析可能不够准确，建议咨询专业牙医。",
  };
}

/**
 * 生成模拟分析结果（用于开发测试或降级场景）
 */
export function generateMockAnalysis(): AnalysisResult {
  const mockIssues: AnalysisIssue[] = [
    {
      type: "牙龈轻微红肿",
      location: "左下磨牙区",
      severity: "轻微",
      confidence: 0.82,
    },
    {
      type: "轻度牙菌斑",
      location: "门牙内侧",
      severity: "轻度",
      confidence: 0.75,
    },
  ];

  return {
    overallScore: 76,
    issues: mockIssues,
    recommendations: [
      "建议加强牙龈清洁，使用软毛牙刷",
      "每天使用牙线清洁牙缝",
      "建议3个月内预约牙医检查",
      "注意控制糖分摄入",
    ],
    notes: "整体口腔状况良好，建议保持日常护理习惯",
  };
}

/**
 * 使用阿里云视觉智能API分析口腔照片
 */
export async function analyzeWithAliyun(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _imageBase64: string
): Promise<AnalysisResult> {
  // TODO: 集成阿里云视觉智能API
  throw new Error("Aliyun API not implemented");
}

/**
 * 使用腾讯云视觉智能API分析口腔照片
 */
export async function analyzeWithTencent(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _imageBase64: string
): Promise<AnalysisResult> {
  // TODO: 集成腾讯云视觉智能API
  throw new Error("Tencent API not implemented");
}
