import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { getDictionary, type Locale } from "@/i18n";

export const ogSize = { width: 1200, height: 630 };

type Slide = { eyebrow: string; title: string; subtitle: string; footerLeft: string; footerRight: string };

function render({ eyebrow, title, subtitle, footerLeft, footerRight }: Slide) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background:
          "radial-gradient(circle at 85% 15%, rgba(231,111,60,0.35), transparent 45%), linear-gradient(135deg, #800020 0%, #5C0017 100%)",
        color: "#FBF3EF",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#F4C2C2" }}>
        <div style={{ width: 14, height: 14, borderRadius: 7, background: "#F4C2C2" }} />
        {eyebrow}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>{title}</div>
        <div style={{ fontSize: 44, color: "#F4C2C2", marginTop: 12 }}>{subtitle}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 40, fontSize: 26, color: "#F4C2C2" }}>
        <div style={{ display: "flex" }}>{footerLeft}</div>
        <div style={{ display: "flex" }}>{footerRight}</div>
      </div>
    </div>,
    ogSize,
  );
}

/** Imagen de la página principal: nombre, rol y stack. */
export function renderOgImage(locale: Locale) {
  const dict = getDictionary(locale);
  return render({
    eyebrow: dict.hero.available,
    title: profile.name,
    subtitle: dict.hero.role,
    footerLeft: "Python · Django · Django REST Framework · PostgreSQL",
    footerRight: "belone-dev.com.ar",
  });
}

/** Imagen de un caso de estudio: proyecto, descripción y su dato principal. */
export function renderProjectOgImage(locale: Locale, slug: string) {
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!project) return renderOgImage(locale);
  return render({
    eyebrow: project.kind[locale],
    title: project.name,
    subtitle: project.subtitle[locale],
    footerLeft: project.highlight[locale],
    footerRight: "belone-dev.com.ar",
  });
}
