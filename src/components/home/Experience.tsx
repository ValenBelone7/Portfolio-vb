import { experience } from "@/content/experience";
import type { Dictionary, Locale } from "@/i18n";
import { Section } from "../ui";

export function Experience({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="experience" title={dict.sections.experience}>
      <ol className="relative border-l border-border">
        {experience.map((job) => (
          <li key={job.company} className="relative pb-12 pl-6 last:pb-0 sm:pl-8">
            <span className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-accent" aria-hidden="true" />
            <p className="font-mono text-xs text-muted">
              {job.dates[locale]} · {job.location[locale]}
            </p>
            <h3 className="mt-1 text-lg font-semibold">
              {job.role[locale]} ·{" "}
              {job.companyUrl ? (
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-4"
                >
                  {job.company}
                </a>
              ) : (
                <span className="text-accent">{job.company}</span>
              )}
            </h3>
            {job.context && <p className="mt-2 max-w-3xl text-muted">{job.context[locale]}</p>}
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
              {job.bullets[locale].map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
