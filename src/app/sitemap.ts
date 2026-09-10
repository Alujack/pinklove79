import type { MetadataRoute } from "next";
import { nav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = nav.map((item) => item.href);
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route, site.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
