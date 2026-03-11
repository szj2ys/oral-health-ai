import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  title: {
    default: "居家口腔健康AI初筛 - 智能口腔检查工具",
    template: "%s | 张二口腔AI",
  },
  description:
    "免费使用AI技术在家进行口腔健康初筛，智能识别龋齿、牙龈红肿、牙结石等口腔问题。无需预约，手机拍照即可获得专业级口腔健康评估报告。",
  keywords: [
    "口腔健康检测",
    "AI口腔检查",
    "牙齿健康自测",
    "牙龈问题检测",
    "口腔初筛",
    "手机口腔检查",
    "口腔AI诊断",
    "牙齿问题识别",
    "口腔健康评估",
    "智能口腔检测",
  ],
  authors: [{ name: "张二口腔AI" }],
  creator: "张二口腔AI",
  publisher: "张二口腔AI",
  metadataBase: new URL("https://oral-health-ai.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://oral-health-ai.vercel.app",
    siteName: "张二口腔AI",
    title: "居家口腔健康AI初筛 - 智能口腔检查工具",
    description:
      "免费使用AI技术在家进行口腔健康初筛，智能识别龋齿、牙龈红肿、牙结石等口腔问题。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "张二口腔AI - 居家口腔健康初筛",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "居家口腔健康AI初筛 - 智能口腔检查工具",
    description:
      "免费使用AI技术在家进行口腔健康初筛，智能识别龋齿、牙龈红肿、牙结石等口腔问题。",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // 添加搜索引擎验证代码（部署后填写）
    // google: 'your-google-verification-code',
    // baidu: 'your-baidu-verification-code',
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
