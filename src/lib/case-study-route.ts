import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { featuredProjects } from "@/content/projects";
import { getDictionary, type Locale } from "@/i18n";
import { buildMetadata } from "./metadata";

// Compartido por /proyectos/[slug] y /en/proyectos/[slug].

export function caseStudyParams() {
  return featuredProjects.map((p) => ({ slug: p.slug }));
}

export function findProject(slug: string) {
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!project) notFound();
  return project;
}

export function caseStudyMetadata(locale: Locale, slug: string): Metadata {
  const project = findProject(slug);
  const base = buildMetadata(locale, `/proyectos/${slug}`);
  const title = project.seo.title[locale];
  const description = project.seo.description[locale];
  const role = getDictionary(locale).hero.role;

  return {
    ...base,
    title,
    description,
    openGraph: { ...base.openGraph, type: "article", title, description },
    twitter: { ...base.twitter, title, description },
    keywords: [...project.stack, role],
  };
}
