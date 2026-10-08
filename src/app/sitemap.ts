import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { locales, localizePath } from "@/i18n/config";

// Una entrada por página e idioma, con sus alternativas hreflang.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...featuredProjects.map((p) => `/proyectos/${p.slug}`)];
  const abs = (path: string) => `${profile.siteUrl}${path === "/" ? "" : path}`;

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: abs(localizePath(path, locale)),
      lastModified: profile.updated,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, abs(localizePath(path, l))])),
      },
    })),
  );
}
