import photo from "@/assets/valentin-belone-bn.webp";
import { profile } from "@/content/profile";
import { getDictionary, localizePath, type Locale } from "@/i18n";

/** Datos estructurados schema.org/Person para buscadores. */
export function PersonJsonLd({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: dict.hero.role,
    description: dict.meta.description,
    url: `${profile.siteUrl}${localizePath("/", locale) === "/" ? "" : localizePath("/", locale)}`,
    email: `mailto:${profile.email}`,
    image: `${profile.siteUrl}${photo.src}`,
    address: { "@type": "PostalAddress", addressRegion: "Córdoba", addressCountry: "AR" },
    worksFor: { "@type": "Organization", name: profile.agency.name, url: profile.agency.url },
    knowsAbout: ["Python", "Django", "Django REST Framework", "PostgreSQL", "REST APIs"],
    sameAs: [profile.github, profile.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      // Se escapa "<" para que el JSON no pueda cerrar el <script>.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
