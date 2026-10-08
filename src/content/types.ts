import type { Locale } from "@/i18n/config";

/** Un valor con su versión en cada idioma. */
export type Localized<T = string> = Record<Locale, T>;

export type ProjectLink = {
  kind: "product" | "demo" | "caseStudy" | "repo";
  href: string;
  /** Para proyectos con más de un repo (p. ej. "API" / "Web"). */
  label?: string;
};

export type FeaturedProject = {
  slug: string;
  /** Título (≤ 60) y descripción (≤ 160) para buscadores y previsualizaciones. */
  seo: { title: Localized; description: Localized };
  name: string;
  subtitle: Localized;
  kind: Localized;
  summary: Localized;
  highlight: Localized;
  stack: string[];
  links: ProjectLink[];
  privateCode: Localized;
};

export type Project = {
  name: string;
  kind: Localized;
  summary: Localized;
  stack: string[];
  links: ProjectLink[];
  upcoming?: boolean;
};

export type Experience = {
  role: Localized;
  company: string;
  companyUrl?: string;
  context?: Localized;
  dates: Localized;
  location: Localized;
  bullets: Localized<string[]>;
};
