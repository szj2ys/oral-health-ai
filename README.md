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
- **AI**: 多模态AI模型（图像识别 + 自然语言处理）
- **数据库**: PostgreSQL + Prisma ORM
- **存储**: 云对象存储（口腔照片）
- **部署**: Vercel

## 项目结构

```
oral-health-ai/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── page.tsx         # 首页
│   │   ├── layout.tsx       # 根布局
│   │   ├── scan/            # 口腔扫描功能
│   │   ├── report/          # 健康报告
│   │   ├── history/         # 历史记录
│   │   └── api/             # API路由
│   ├── components/          # 公共组件
│   ├── lib/                 # 工具函数
│   ├── types/               # TypeScript类型
│   └── styles/              # 样式文件
├── docs/                    # 项目文档
│   ├── prd.md              # 产品需求文档
│   ├──竞品分析.md          # 竞品调研报告
│   └── 技术架构.md         # 技术架构文档
├── public/                  # 静态资源
└── prisma/                  # 数据库模型
```

## 开发计划

### Phase 1: MVP（4周）
- [ ] 基础页面框架
- [ ] 口腔拍照引导功能
- [ ] AI分析流程（集成第三方API）
- [ ] 简单健康报告

### Phase 2: 功能完善（4周）
- [ ] 用户系统
- [ ] 健康档案
- [ ] 历史记录追踪
- [ ] 报告分享功能

### Phase 3: 商业化（4周）
- [ ] 医生对接平台
- [ ] 付费报告
- [ ] 健康提醒系统

## 快速开始

```bash
# 安装依赖
npm install

# 开发环境
npm run dev

# 构建
npm run build
```

## 团队成员

- **张二**: 项目负责人

## 许可证

MIT License
