import Image from "next/image";
import photo from "@/assets/valentin-belone.webp";
import { about, education, languages } from "@/content/about";
import { profile } from "@/content/profile";
import type { Dictionary, Locale } from "@/i18n";
import { Reveal } from "../motion/Reveal";
import { TiltCard } from "../motion/TiltCard";
import { Section } from "../ui";

export function About({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [lead, ...rest] = about[locale];

  return (
    <Section id="about" index="05" title={dict.sections.about}>
      <div className="grid gap-12 lg:grid-cols-[22rem_1fr] lg:gap-16">
        <Reveal>
          <TiltCard max={8} className="rounded-[2rem]">
            <div className="glass relative overflow-hidden rounded-[2rem] p-3">
              <Image
                src={photo}
                alt={profile.name}
                placeholder="blur"
                sizes="(min-width: 1024px) 352px, 90vw"
                className="aspect-square w-full rounded-[1.5rem] object-cover"
              />
              <div className="glass-strong absolute right-6 bottom-6 left-6 flex items-center justify-between rounded-2xl px-4 py-3 text-sm">
                <span className="font-display font-semibold">{profile.name}</span>
                <span className="font-mono text-xs text-muted">Córdoba, AR</span>
              </div>
            </div>
          </TiltCard>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-display text-xl leading-snug text-pretty sm:text-2xl">{lead}</p>
          </Reveal>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-pretty text-muted">
            {rest.map((p, i) => (
              <Reveal key={p} delay={0.05 * (i + 1)}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-[1.4fr_1fr]">
            <Reveal className="h-full">
              <div className="glass h-full rounded-3xl p-6">
                <h3 className="font-mono text-xs tracking-[0.15em] text-accent uppercase">{dict.sections.education}</h3>
                <p className="mt-3 font-display text-lg font-semibold">{education.degree[locale]}</p>
                <p className="text-sm text-muted">{education.institution}</p>
                <p className="mt-1 font-mono text-xs text-muted">{education.dates[locale]}</p>
                <p className="mt-3 text-sm text-muted">{education.status[locale]}</p>
                <p className="mt-4 text-sm font-medium">{dict.project.subjects}</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {education.subjects[locale].map((s) => (
                    <li key={s} className="rounded-full border border-glass-border px-2.5 py-1 text-xs text-muted">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal className="h-full" delay={0.08}>
              <div className="glass h-full rounded-3xl p-6">
                <h3 className="font-mono text-xs tracking-[0.15em] text-accent uppercase">{dict.sections.languages}</h3>
                <ul className="mt-3 space-y-3 text-sm text-muted">
                  {languages[locale].map((l) => {
                    const [name, ...detail] = l.split(":");
                    return (
                      <li key={l}>
                        <span className="font-display text-base font-semibold text-fg">{name}</span>
                        <span className="block">{detail.join(":").trim()}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
