import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 服务器端渲染模式（支持API路由）
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
