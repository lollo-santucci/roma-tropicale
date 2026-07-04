import type { MetadataRoute } from "next";
import { EVENT_WORKSHOPS } from "@/lib/content";
import { ARCHIVED_SLUGS } from "@/content/events-archive";

const BASE_URL = "https://ilsitodi.romatropicale.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/academy`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/events`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/membership`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/merch`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contacts`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const workshopRoutes: MetadataRoute.Sitemap = EVENT_WORKSHOPS.map((w) => ({
    url: `${BASE_URL}/events/${w.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const archiveRoutes: MetadataRoute.Sitemap = ARCHIVED_SLUGS.map((slug) => ({
    url: `${BASE_URL}/events/archive/${slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...workshopRoutes, ...archiveRoutes];
}
