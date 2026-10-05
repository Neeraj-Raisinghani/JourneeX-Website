import { features } from "@/data/features";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://journeex.neerajraisinghani.com";

  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/product`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/changelog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.5 },
  ];

  const featurePages = features.map((f) => ({
    url: `${base}/product/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...featurePages];
}
