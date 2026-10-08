import Image from "next/image";
import photo from "@/assets/valentin-belone-bn.webp";
import { about, education, languages } from "@/content/about";
import { profile } from "@/content/profile";
import type { Dictionary, Locale } from "@/i18n";
import { Reveal } from "../motion/Reveal";

/** Sobre mí con aire de revista: retrato en B/N, cita grande y datos en filas. */
export function About({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [lead, ...rest] = about[locale];
  // La primera oración va como cita; el resto del párrafo sigue en texto normal.
  const cut = lead.indexOf(". ") + 1;
  const quote = lead.slice(0, cut);
  const leadRest = lead.slice(cut).trim();

  return (
    <section id="about" aria-labelledby="about-title" className="shell py-20 sm:py-28">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-28">
            <figure className="relative mr-4 sm:mr-6">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 aspect-[4/5] translate-x-4 translate-y-4 bg-blush sm:translate-x-6 sm:translate-y-6"
              />
              <Image
                src={photo}
                alt={profile.name}
                placeholder="blur"
                sizes="(min-width: 1024px) 520px, 92vw"
                className="relative aspect-[4/5] w-full object-cover"
              />
              <figcaption className="eyebrow relative mt-10 flex justify-between text-muted sm:mt-12">
                <span>{profile.name}</span>
                <span>Córdoba, AR</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="eyebrow mb-5 flex items-center gap-3 text-accent" aria-hidden="true">
              <span>05</span>
              <span className="h-px w-10 bg-accent/50" />
            </p>
            <h2 id="about-title" className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-[5.25rem]">
              {dict.sections.about}
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <blockquote className="mt-10 border-l-2 border-accent pl-6 font-display text-3xl leading-[1.15] text-pretty sm:text-4xl">
              {quote}
            </blockquote>
          </Reveal>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-pretty text-muted">
            <Reveal delay={0.08}>
              <p>{leadRest}</p>
            </Reveal>
            {rest.map((p, i) => (
              <Reveal key={p} delay={0.1 + 0.04 * i}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <dl className="mt-12 border-t border-line">
              <div className="grid gap-2 border-b border-line py-6 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="eyebrow pt-1 text-muted">{dict.sections.education}</dt>
                <dd>
                  <p className="font-display text-2xl leading-tight">{education.degree[locale]}</p>
                  <p className="mt-1 text-muted">
                    {education.institution} · <span className="font-mono text-sm">{education.dates[locale]}</span>
                  </p>
                  <p className="mt-2 text-muted">{education.status[locale]}</p>
                  <p className="mt-3 text-muted">
                    <span className="eyebrow mr-2 text-fg">{dict.project.subjects}</span>
                    <span className="italic">{education.subjects[locale].join(", ")}.</span>
                  </p>
                </dd>
              </div>
              <div className="grid gap-2 border-b border-line py-6 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="eyebrow pt-1 text-muted">{dict.sections.languages}</dt>
                <dd className="space-y-2">
                  {languages[locale].map((l) => {
                    const [name, ...detail] = l.split(":");
                    return (
                      <p key={l}>
                        <span className="font-display text-2xl">{name}</span>
                        <span className="text-muted"> — {detail.join(":").trim()}</span>
                      </p>
                    );
                  })}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
