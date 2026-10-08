import { experience } from "@/content/experience";
import type { Dictionary, Locale } from "@/i18n";
import { Reveal } from "../motion/Reveal";
import { ScrollLine } from "../motion/ScrollLine";
import { Section } from "../ui";

export function Experience({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="experience" index="03" title={dict.sections.experience}>
      <ol className="relative space-y-10">
        <ScrollLine className="left-[7px] lg:left-[calc(16rem+7px)]" />
        {experience.map((job) => (
          <li key={job.company} className="relative grid gap-4 pl-10 lg:grid-cols-[16rem_1fr] lg:gap-0 lg:pl-0">
            <span
              aria-hidden="true"
              className="absolute top-2 left-0 flex size-[15px] items-center justify-center rounded-full border border-accent/60 bg-bg lg:left-64"
            >
              <span className="size-[7px] rounded-full bg-accent" />
            </span>

            <Reveal className="lg:pt-1 lg:pr-10 lg:text-right">
              <p className="font-mono text-sm text-accent">{job.dates[locale]}</p>
              <p className="mt-1 text-sm text-muted">{job.location[locale]}</p>
            </Reveal>

            <Reveal delay={0.08} className="lg:pl-10">
              <div className="glass rounded-3xl p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8">
                <h3 className="font-display text-2xl font-semibold tracking-tight">{job.role[locale]}</h3>
                <p className="mt-1 text-lg">
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span className="text-accent">{job.company}</span>
                  )}
                </p>
                {job.context && <p className="mt-4 leading-relaxed text-muted">{job.context[locale]}</p>}
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
                  {job.bullets[locale].map((b) => (
                    <li key={b} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rotate-45 bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
