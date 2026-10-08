import Image from "next/image";
import photo from "@/assets/valentin-belone-bn.webp";
import { about, education, facts } from "@/content/about";
import { profile } from "@/content/profile";
import type { Dictionary, Locale } from "@/i18n";
import { Reveal } from "../motion/Reveal";
import { Section } from "../ui";

/** Sobre mí como ficha técnica: datos concretos primero, después los párrafos. */
export function About({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="about" index="05" title={dict.sections.about}>
      <Reveal>
        <div className="panel overflow-hidden rounded-2xl">
          <div className="flex items-center gap-4 border-b border-line p-5 sm:p-6">
            <Image
              src={photo}
              alt={profile.name}
              placeholder="blur"
              sizes="72px"
              className="size-16 shrink-0 rounded-xl object-cover object-top sm:size-[72px]"
            />
            <div>
              <p className="font-display text-xl">{profile.name}</p>
              <p className="font-mono text-sm text-accent">{dict.hero.role}</p>
            </div>
          </div>
          <dl className="divide-y divide-line">
            {facts.map((f) => (
              <div key={f.key.es} className="grid gap-1 px-5 py-3.5 sm:grid-cols-[9rem_1fr] sm:gap-6 sm:px-6">
                <dt className="font-mono text-xs tracking-[0.08em] text-muted uppercase">{f.key[locale]}</dt>
                <dd className="font-mono text-sm">{f.value[locale]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      <div className="mt-10 space-y-5 text-lg leading-relaxed text-pretty">
        {about[locale].map((p, i) => (
          <Reveal key={p} delay={0.04 * i}>
            <p className={i === 0 ? "" : "text-muted"}>{p}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 border-t border-line pt-6">
          <p className="eyebrow text-muted">{dict.project.subjects}</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {education.subjects[locale].map((s) => (
              <li key={s} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
