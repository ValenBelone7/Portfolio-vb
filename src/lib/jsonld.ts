import photo from "@/assets/valentin-belone-bn.webp";
import { education } from "@/content/about";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { skills } from "@/content/skills";
import { getDictionary, localizePath, type Locale } from "@/i18n";

// Datos estructurados schema.org. Todo sale del contenido del sitio (PORTFOLIO_CONTEXT.md).

const abs = (path: string) => `${profile.siteUrl}${path === "/" ? "" : path}`;
const PERSON_ID = `${profile.siteUrl}/#person`;
const WEBSITE_ID = `${profile.siteUrl}/#website`;

function person(locale: Locale) {
  const dict = getDictionary(locale);
  const knowsAbout = skills
    .filter((g) => g.id !== "learning")
    .flatMap((g) => g.items.map((i) => (typeof i.label === "string" ? i.label : i.label[locale])));
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: profile.name,
    givenName: "Valentín",
    familyName: "Belone",
    jobTitle: dict.hero.role,
    description: dict.meta.description,
    url: abs(localizePath("/", locale)),
    image: abs(photo.src),
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressRegion: "Córdoba", addressCountry: "AR" },
    worksFor: [
      { "@type": "Organization", name: profile.agency.name, url: profile.agency.url },
      { "@type": "Organization", name: "Criptodery" },
    ],
    alumniOf: { "@type": "EducationalOrganization", name: education.institution },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: education.degree[locale],
      credentialCategory: "degree",
    },
    knowsAbout,
    knowsLanguage: [
      { "@type": "Language", name: "Español", alternateName: "es" },
      { "@type": "Language", name: "English", alternateName: "en" },
    ],
    sameAs: [profile.github, profile.linkedin],
  };
}

function website() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: profile.siteUrl,
    name: profile.name,
    inLanguage: ["es", "en"],
    publisher: { "@id": PERSON_ID },
  };
}

/** Página principal: perfil profesional (ProfilePage) de la persona. */
export function homeJsonLd(locale: Locale) {
  const dict = getDictionary(locale);
  const url = abs(localizePath("/", locale));
  return {
    "@context": "https://schema.org",
    "@graph": [
      website(),
      {
        "@type": "ProfilePage",
        "@id": `${url}#profile`,
        url,
        name: dict.meta.title,
        description: dict.meta.description,
        inLanguage: locale,
        isPartOf: { "@id": WEBSITE_ID },
        dateModified: profile.updated,
        mainEntity: person(locale),
      },
    ],
  };
}

/** Caso de estudio: migas de pan y la obra en sí. */
export function caseStudyJsonLd(locale: Locale, slug: string) {
  const dict = getDictionary(locale);
  const project = featuredProjects.find((p) => p.slug === slug)!;
  const home = abs(localizePath("/", locale));
  const url = abs(localizePath(`/proyectos/${slug}`, locale));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: profile.name, item: home },
          { "@type": "ListItem", position: 2, name: dict.nav.projects, item: `${home}#projects` },
          { "@type": "ListItem", position: 3, name: project.name, item: url },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `${url}#case-study`,
        url,
        name: project.seo.title[locale],
        headline: `${project.name} — ${project.subtitle[locale]}`,
        description: project.seo.description[locale],
        inLanguage: locale,
        dateModified: profile.updated,
        keywords: project.stack.join(", "),
        author: { "@id": PERSON_ID, "@type": "Person", name: profile.name, url: profile.siteUrl },
        isPartOf: { "@id": WEBSITE_ID },
      },
    ],
  };
}
