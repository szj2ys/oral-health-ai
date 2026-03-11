# 部署指南

## Vercel 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/oral-health-ai)

## 手动部署步骤

### 1. 环境变量配置

在 Vercel Dashboard 中配置以下环境变量：

#### 必需变量

| 变量名 | 说明 | 获取方式 |
|--------|------|----------|
| `ANTHROPIC_API_KEY` | Claude API 密钥 | [Anthropic Console](https://console.anthropic.com/) |
| `DATABASE_URL` | PostgreSQL 连接字符串 | [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) 或其他 PostgreSQL 提供商 |

#### 可选变量

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `NEXT_PUBLIC_APP_URL` | 应用 URL | 自动检测 |

### 2. 数据库设置

#### 使用 Vercel Postgres（推荐）

1. 在 Vercel Dashboard 中添加 Vercel Postgres 集成
2. 连接后会自动设置 `DATABASE_URL`
3. 运行迁移：
   ```bash
   npx prisma migrate deploy
   ```

#### 使用其他 PostgreSQL 提供商

1. 设置 `DATABASE_URL` 环境变量：
   ```
   postgresql://username:password@host:port/database?schema=public
   ```
2. 运行迁移

### 3. 构建配置

Vercel 会自动检测 Next.js 项目，构建命令：
```bash
npm run build
```

### 4. 部署后验证

访问部署后的 URL，检查以下功能：

- [ ] 首页正常加载
- [ ] 能上传照片并获取 AI 分析结果
- [ ] 历史记录可以正常保存和查看
- [ ] sitemap.xml 可访问
- [ ] robots.txt 可访问

## 域名配置

### 自定义域名

1. 在 Vercel Dashboard 进入项目设置
2. 选择 "Domains"
3. 添加你的域名并配置 DNS

### 环境变量更新

如果使用自定义域名，更新 `NEXT_PUBLIC_APP_URL`：
```
https://yourdomain.com
```

## 故障排查

### 数据库连接失败

检查 `DATABASE_URL` 格式是否正确：
```
postgresql://username:password@host:port/database?schema=public&sslmode=require
```

### AI 分析失败

检查 `ANTHROPIC_API_KEY` 是否有效：
```bash
curl https://api.anthropic.com/v1/messages \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{"model": "claude-3-5-sonnet-20241022", "max_tokens": 100, "messages": [{"role": "user", "content": "Hello"}]}'
```

### 构建失败

1. 检查 Node.js 版本 >= 18
2. 检查 `prisma/schema.prisma` 语法
3. 运行 `npx prisma generate` 重新生成客户端

## 更新部署

代码更新后，Vercel 会自动重新部署（如果启用了 Git 集成）。

手动重新部署：
```bash
vercel --prod
```

## 监控

- 使用 Vercel Analytics 监控访问量
- 使用 Vercel Logs 查看服务器日志
- 配置错误监控（如 Sentry）
