import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/shop", "/workshops", "/greenhouse", "/sympathy", "/delivery", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${site.url}${r}`, changeFrequency: "weekly", priority: r === "" ? 1 : 0.7 }));
}
