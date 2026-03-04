import type { MetadataRoute } from "next";
import { templates } from "@/data/templates";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tenereflow.example.com";
  const routes = ["", "/services", "/seo", "/templates", "/case-studies", "/pricing", "/about", "/contact"];

  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...templates.map((template) => ({ url: `${base}/templates/${template.slug}`, lastModified: new Date(template.createdAt) }))
  ];
}
