#!/bin/bash

# 项目启动脚本

echo "🦷 居家口腔健康AI初筛 - 启动脚本"
echo "=================================="

# 检查Node版本
echo "📋 检查环境..."
node_version=$(node -v)
echo "Node版本: $node_version"

# 安装依赖
echo ""
echo "📦 安装依赖..."
npm install

# 检查环境变量
echo ""
echo "🔧 检查配置..."
if [ ! -f .env.local ]; then
    echo "⚠️  未找到 .env.local 文件，创建模板..."
    cat > .env.local << EOF
# 数据库
DATABASE_URL="postgresql://user:password@localhost:5432/oral_health_ai"

# AI服务 - Claude API
ANTHROPIC_API_KEY="your-anthropic-api-key"

# 可选：其他AI服务
# OPENAI_API_KEY="your-openai-api-key"
# ALIYUN_VISION_API_KEY="your-aliyun-key"

# 存储
BLOB_READ_WRITE_TOKEN="your-vercel-blob-token"

# 认证
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-min-32-chars"
EOF
    echo "✅ 已创建 .env.local 模板，请填写你的API密钥"
fi

# 数据库迁移（如果安装了Prisma）
if [ -f prisma/schema.prisma ]; then
    echo ""
    echo "🗄️  检查数据库..."
    npx prisma generate
fi

# 启动开发服务器
echo ""
echo "🚀 启动开发服务器..."
echo ""
npm run dev
