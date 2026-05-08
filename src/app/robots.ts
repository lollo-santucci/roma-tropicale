import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin-tropicale", "/admin-tropicale/", "/api/"],
      },
    ],
    sitemap: "https://ilsitodi.romatropicale.com/sitemap.xml",
  };
}
