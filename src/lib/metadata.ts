import type { Metadata, Viewport } from "next";
import { profile } from "@/content/profile";
import { getDictionary, localizePath, type Locale } from "@/i18n";

/** Metadatos base de cada idioma. `path` es la ruta sin prefijo de idioma. */
export function buildMetadata(locale: Locale, path = "/"): Metadata {
  const dict = getDictionary(locale);
  const url = localizePath(path, locale);

  return {
    metadataBase: new URL(profile.siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    authors: [{ name: profile.name, url: profile.siteUrl }],
    alternates: {
      canonical: url,
      languages: {
        es: localizePath(path, "es"),
        en: localizePath(path, "en"),
        "x-default": localizePath(path, "es"),
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: profile.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: locale === "es" ? "es_AR" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_AR",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#090e1a" },
  ],
};
