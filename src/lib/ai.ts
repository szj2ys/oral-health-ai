// AI分析服务

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';

export interface AnalysisResult {
  overallScore: number;
  issues: Array<{
    type: string;
    location: string;
    severity: '轻微' | '轻度' | '中度' | '重度';
    confidence: number;
  }>;
  recommendations: string[];
  notes: string;
}

/**
 * 使用Claude API分析口腔照片
 */
export async function analyzeOralImage(imageBase64: string): Promise<AnalysisResult> {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not configured');
  }

  const response = await fetch(ANTHROPIC_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-3-opus-20240229',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: 'image/jpeg',
                data: imageBase64,
              },
            },
            {
              type: 'text',
              text: `请分析这张口腔照片，识别以下问题：
1. 龋齿（蛀牙）
2. 牙龈红肿/出血
3. 牙结石
4. 牙齿排列问题
5. 其他异常

请以JSON格式返回：
{
  "overallScore": 0-100的评分,
  "issues": [
    {
      "type": "问题类型",
      "location": "位置描述",
      "severity": "轻微/轻度/中度/重度",
      "confidence": 0-1的置信度
    }
  ],
  "recommendations": ["建议1", "建议2", ...],
  "notes": "其他说明"
}`,
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Claude API error: ${error.error?.message || response.statusText}`);
  }

  const data = await response.json();
  const content = data.content[0].text;

  // 解析JSON响应
  try {
    const result = JSON.parse(content);
    return result as AnalysisResult;
  } catch (e) {
    // 如果返回的不是标准JSON，尝试提取
    console.warn('AI response is not standard JSON:', content);
    throw new Error('Failed to parse AI response');
  }
}

/**
 * 使用阿里云视觉智能API分析口腔照片
 */
export async function analyzeWithAliyun(imageBase64: string): Promise<AnalysisResult> {
  // TODO: 集成阿里云视觉智能API
  throw new Error('Aliyun API not implemented');
}

/**
 * 使用腾讯云视觉智能API分析口腔照片
 */
export async function analyzeWithTencent(imageBase64: string): Promise<AnalysisResult> {
  // TODO: 集成腾讯云视觉智能API
  throw new Error('Tencent API not implemented');
}
