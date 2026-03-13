import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://oral-health-ai.vercel.app";

  // Core pages
  const corePages = [
    { url: `${baseUrl}/`, priority: 1.0, freq: "weekly" },
    { url: `${baseUrl}/scan/`, priority: 0.9, freq: "weekly" },
    { url: `${baseUrl}/history/`, priority: 0.8, freq: "daily" },
    { url: `${baseUrl}/faq/`, priority: 0.7, freq: "monthly" },
    { url: `${baseUrl}/guide/`, priority: 0.8, freq: "weekly" },
    { url: `${baseUrl}/privacy/`, priority: 0.5, freq: "yearly" },
  ];

  // SEO guide pages
  const guidePages = [
    "gum-bleeding",
    "teeth-whitening",
    "dental-calculus",
    "tooth-decay",
    "bad-breath",
    "sensitive-teeth",
    "wisdom-teeth",
    "mouth-ulcers",
    "braces-care",
    "children-oral-health",
    "gum-recession",
    "teeth-grinding",
    "dental-implants",
    "dry-mouth",
    "elderly-oral-care",
  ].map((slug) => ({
    url: `${baseUrl}/guide/${slug}/`,
    priority: 0.7,
    freq: "monthly",
  }));

  return [...corePages, ...guidePages].map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.freq as "weekly" | "daily" | "monthly",
    priority: page.priority,
  }));
}
