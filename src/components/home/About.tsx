import Image from "next/image";
import photo from "@/assets/valentin-belone.webp";
import { about, education, languages } from "@/content/about";
import { profile } from "@/content/profile";
import type { Dictionary, Locale } from "@/i18n";
import { Section } from "../ui";

export function About({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="about" title={dict.sections.about}>
      <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-4 leading-relaxed text-muted">
          <Image
            src={photo}
            alt={profile.name}
            placeholder="blur"
            sizes="160px"
            className="mb-8 size-40 rounded-2xl border border-border object-cover"
          />
          {about[locale].map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold">{dict.sections.education}</h3>
            <p className="mt-2">{education.degree[locale]}</p>
            <p className="text-sm text-muted">{education.institution}</p>
            <p className="mt-1 font-mono text-xs text-muted">{education.dates[locale]}</p>
            <p className="mt-2 text-sm text-muted">{education.status[locale]}</p>
            <p className="mt-4 text-sm font-medium">{dict.project.subjects}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted marker:text-accent">
              {education.subjects[locale].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">{dict.sections.languages}</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              {languages[locale].map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
