"use client";

import Script from "next/script";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * JSON-LD结构化数据组件
 * 用于向搜索引擎提供结构化数据
 * 注意：数据应来自受信任的来源，避免XSS风险
 */
export function JsonLd({ data }: JsonLdProps) {
  // 确保数据是有效的JSON，防止XSS
  const sanitizedData = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <Script
      id={`jsonld-${Math.random().toString(36).substr(2, 9)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitizedData }}
    />
  );
}

/**
 * 网站结构化数据
 */
export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "张二口腔AI",
    url: "https://oral-health-ai.vercel.app",
    description:
      "免费使用AI技术在家进行口腔健康初筛，智能识别龋齿、牙龈红肿、牙结石等口腔问题。",
    inLanguage: "zh-CN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://oral-health-ai.vercel.app/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd data={data} />;
}

/**
 * 网页结构化数据
 */
export function WebPageJsonLd({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    inLanguage: "zh-CN",
    isPartOf: {
      "@type": "WebSite",
      name: "张二口腔AI",
      url: "https://oral-health-ai.vercel.app",
    },
  };

  return <JsonLd data={data} />;
}

/**
 * 健康主题网页结构化数据
 */
export function MedicalWebPageJsonLd({
  title,
  description,
  url,
  lastReviewed,
}: {
  title: string;
  description: string;
  url: string;
  lastReviewed?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description: description,
    url: url,
    inLanguage: "zh-CN",
    lastReviewed: lastReviewed || new Date().toISOString().split("T")[0],
    reviewedBy: {
      "@type": "Organization",
      name: "张二口腔AI",
    },
    disclaimer:
      "本工具仅供参考，不能替代专业医生的诊断。如有严重不适，请及时就医。",
    isPartOf: {
      "@type": "WebSite",
      name: "张二口腔AI",
      url: "https://oral-health-ai.vercel.app",
    },
  };

  return <JsonLd data={data} />;
}

/**
 * 软件应用结构化数据
 */
export function SoftwareApplicationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "张二口腔AI",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CNY",
    },
    description:
      "使用AI技术在家进行口腔健康初筛，智能识别龋齿、牙龈红肿、牙结石等口腔问题。",
    featureList: [
      "智能拍照引导",
      "AI智能分析",
      "专业健康报告",
      "健康档案追踪",
    ],
  };

  return <JsonLd data={data} />;
}

/**
 * 文章结构化数据
 */
export function ArticleJsonLd({
  title,
  description,
  url,
  publishedAt,
  modifiedAt,
  author = "张二口腔AI",
}: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  modifiedAt?: string;
  author?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: `https://oral-health-ai.vercel.app${url}`,
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "张二口腔AI",
      logo: {
        "@type": "ImageObject",
        url: "https://oral-health-ai.vercel.app/icon-192x192.svg",
      },
    },
    inLanguage: "zh-CN",
  };

  return <JsonLd data={data} />;
}

/**
 * 组织结构化数据
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "张二口腔AI",
    url: "https://oral-health-ai.vercel.app",
    description: "基于AI技术的居家口腔健康初筛平台",
  };

  return <JsonLd data={data} />;
}
