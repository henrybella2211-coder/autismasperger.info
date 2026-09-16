import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/guides",
    "/about",
    "/contact",
    "/privacy-policy",
    "/cookie-policy",
    "/terms",
    "/editorial-policy",
    "/age-notice",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date("2026-09-15"),
  }));

  const articleRoutes = ARTICLES.map((article) => ({
    url: `${SITE.url}/guides/${article.slug}`,
    lastModified: new Date(article.lastUpdatedISO),
  }));

  return [...staticRoutes, ...articleRoutes];
}
