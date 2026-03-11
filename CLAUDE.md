# 居家口腔健康AI初筛 - 开发规范

## 项目概述

这是一个基于Next.js的居家口腔健康AI初筛平台，帮助用户通过手机拍照进行口腔健康自测。

## 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4
- **UI组件**: shadcn/ui (推荐)
- **数据库**: PostgreSQL + Prisma
- **AI**: Claude API / 多模态模型
- **部署**: Vercel

## 开发规范

### 代码风格

- 使用TypeScript严格模式
- 函数式组件，避免class组件
- 使用React Server Components默认
- 客户端组件使用"use client"指令

### 文件命名

- 组件: PascalCase (e.g., `CameraView.tsx`)
- 工具函数: camelCase (e.g., `formatDate.ts`)
- 页面路由: kebab-case (e.g., `oral-scan/page.tsx`)
- API路由: kebab-case (e.g., `api/analyze/route.ts`)

### 目录结构

```
src/
├── app/                    # App Router路由
│   ├── (marketing)/        # 营销页面组
│   ├── (dashboard)/        # 用户后台组
│   ├── api/               # API路由
│   └── layout.tsx         # 根布局
├── components/
│   ├── ui/                # shadcn/ui组件
│   ├── forms/             # 表单组件
│   ├── scan/              # 扫描相关组件
│   └── reports/           # 报告相关组件
├── lib/
│   ├── utils.ts           # 工具函数
│   ├── ai.ts              # AI相关逻辑
│   └── db.ts              # 数据库客户端
├── hooks/                 # 自定义React hooks
├── types/                 # TypeScript类型定义
└── styles/                # 全局样式
```

### 数据库规范

- 使用Prisma ORM
- 所有表名使用snake_case
- 模型名使用PascalCase
- 字段名使用camelCase
- 敏感数据加密存储

### API规范

- RESTful API设计
- 使用Zod进行输入验证
- 统一的错误处理
- 响应格式:
  ```json
  {
    "success": true,
    "data": {...},
    "message": "..."
  }
  ```

### AI集成

- 口腔图片分析使用多模态模型
- 结果需要医疗免责声明
- 敏感数据脱敏处理

## 安全规范

1. 健康数据加密存储
2. 图片上传限制大小和类型
3. 防止SQL注入（使用Prisma）
4. XSS防护（Next.js自动处理）
5. CSRF防护

## Git提交规范

```
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式调整
refactor: 重构
test: 测试相关
chore: 构建/工具相关
```

## 部署

- 主分支自动部署到Vercel
- 环境变量在Vercel Dashboard配置
- 数据库使用Vercel Postgres或Supabase
