# 居家口腔健康AI初筛

> 基于Next.js和AI技术的居家口腔健康管理平台

## 项目简介

本项目是一个面向个人用户的居家口腔健康AI初筛平台，用户通过手机拍摄口腔照片，AI自动分析口腔健康状况，提供初步健康评估和建议。

## 产品核心价值

1. **便捷初筛**：无需预约，随时随地进行口腔健康自测
2. **AI智能分析**：基于深度学习的口腔问题识别
3. **健康档案**：长期追踪口腔健康变化
4. **专业对接**：连接专业口腔医生，提供后续诊疗建议

## 技术栈

- **前端**: Next.js 15 + React 19 + TypeScript + Tailwind CSS
- **后端**: Next.js API Routes + Server Actions
- **AI**: Claude API / GPT-4V 多模态分析
- **数据库**: PostgreSQL + Prisma ORM
- **存储**: Vercel Blob（口腔照片）
- **部署**: Vercel

## 项目结构

```
oral-health-ai/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── page.tsx         # 首页
│   │   ├── layout.tsx       # 根布局
│   │   ├── scan/            # 口腔扫描功能
│   │   ├── history/         # 历史记录
│   │   └── api/             # API路由
│   │       ├── analyze/     # AI分析API
│   │       ├── upload/      # 文件上传API
│   │       └── history/     # 历史记录API
│   ├── components/          # 公共组件
│   ├── lib/                 # 工具函数
│   │   ├── ai.ts           # AI服务
│   │   ├── db.ts           # 数据库客户端
│   │   └── utils.ts        # 工具函数
│   ├── types/               # TypeScript类型
│   └── hooks/               # 自定义Hooks
├── docs/                    # 项目文档
│   ├── PRD.md              # 产品需求文档
│   ├── 技术架构.md         # 技术架构设计
│   └── 竞品分析.md         # 竞品调研报告
├── prisma/                  # 数据库模型
│   └── schema.prisma       # Prisma Schema
├── scripts/                 # 脚本
│   └── setup.sh            # 项目启动脚本
└── public/                  # 静态资源
```

## 快速开始

### 1. 克隆项目

```bash
git clone <your-repo-url>
cd oral-health-ai
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

```bash
cp .env.example .env.local
# 编辑 .env.local 填写你的API密钥
```

必需的环境变量：
- `ANTHROPIC_API_KEY` - Claude API密钥（用于AI分析）
- `DATABASE_URL` - PostgreSQL数据库连接字符串
- `NEXTAUTH_SECRET` - NextAuth密钥（用于认证）

### 4. 初始化数据库

```bash
npx prisma generate
npx prisma db push
```

### 5. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 或使用启动脚本

```bash
./scripts/setup.sh
```

## 功能模块

### ✅ 已实现

- [x] 首页 Landing Page（SEO优化）
- [x] 口腔检测流程（拍照 → AI分析 → 报告）
- [x] 真实AI分析（Claude API多模态）
- [x] 历史记录页面（数据库存储）
- [x] 报告分享功能（公开链接）
- [x] 健康趋势可视化（recharts图表）
- [x] SEO内容页面（3+健康指南）
- [x] FAQ常见问题页面
- [x] 用户引导教程（首次使用）
- [x] API速率限制（安全防护）
- [x] Sentry错误监控
- [x] Vercel分析统计
- [x] CI/CD自动化（GitHub Actions）
- [x] 响应式设计（移动端优先）

### 📋 计划中

- [ ] 家庭账户支持
- [ ] 医生对接平台
- [ ] 付费会员系统
- [ ] 微信小程序
- [ ] APP开发

## API文档

### AI分析

**POST** `/api/analyze`

请求体：
```json
{
  "imageBase64": "base64编码的图片",
  "useRealAI": false  // 是否使用真实AI（需要API密钥）
}
```

响应：
```json
{
  "success": true,
  "data": {
    "overallScore": 78,
    "issues": [
      {
        "type": "牙龈红肿",
        "location": "左下磨牙区",
        "severity": "轻微",
        "confidence": 0.82
      }
    ],
    "recommendations": ["建议1", "建议2"],
    "notes": "整体状况良好"
  }
}
```

### 文件上传

**POST** `/api/upload`

Content-Type: `multipart/form-data`

字段：`file` (图片文件)

### 历史记录

**GET** `/api/history?limit=10&offset=0`

**DELETE** `/api/history?id=xxx`

## 开发规范

详见 [CLAUDE.md](./CLAUDE.md)

## 部署

### Vercel一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### 手动部署

```bash
# 构建
npm run build

# 部署到Vercel
vercel --prod
```

## 文档

- [产品需求文档 (PRD)](./docs/PRD.md)
- [技术架构文档](./docs/技术架构.md)
- [竞品分析报告](./docs/竞品分析.md)

## 竞品洞察

**市场机会**：C端AI口腔健康市场基本空白，存在明确的机会窗口。

**差异化优势**：
1. C端可用性（现有产品都是B端工具）
2. 价格亲民（基础功能免费）
3. 本地化（针对亚洲人口腔特征优化）
4. 全周期管理（从初筛到诊疗的闭环）

## 团队成员

- **张二**: 项目负责人

## 许可证

MIT License

## 免责声明

本工具仅供参考，不能替代专业医生的诊断。如有严重不适，请及时就医。
