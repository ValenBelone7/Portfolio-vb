import { laboratorio, otherProjects } from "@/content/projects";
import type { Project } from "@/content/types";
import type { Dictionary, Locale } from "@/i18n";
import { Reveal } from "../motion/Reveal";
import { SpotlightCard } from "../motion/SpotlightCard";
import { ProjectLinks, Section, Tags } from "../ui";

function ProjectTile({ p, locale, dict }: { p: Project; locale: Locale; dict: Dictionary }) {
  return (
    <SpotlightCard className="panel flex h-full flex-col gap-4 rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
      <div>
        <p className="font-mono text-[11px] tracking-[0.15em] text-muted uppercase">{p.kind[locale]}</p>
        <h3 className="mt-2 font-display text-xl">{p.name}</h3>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-muted">{p.summary[locale]}</p>
      <Tags items={p.stack} />
      {p.links.length > 0 ? (
        <ProjectLinks links={p.links} dict={dict} />
      ) : (
        <p className="font-mono text-xs text-muted">{dict.project.noPublicDemo}</p>
      )}
    </SpotlightCard>
  );
}

/** Tarjeta "en desarrollo": borde punteado, todavía sin links. */
function UpcomingTile({ p, locale, dict }: { p: Project; locale: Locale; dict: Dictionary }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-3xl border border-dashed border-accent/50 p-6 sm:p-8">
      <p className="eyebrow inline-flex w-fit items-center gap-2 text-accent">
        <span className="size-1.5 animate-pulse rounded-full bg-accent" />
        {dict.project.upcoming}
      </p>
      <h3 className="font-display text-3xl">{p.name}</h3>
      <p className="max-w-xl leading-relaxed text-muted">{p.summary[locale]}</p>
    </div>
  );
}

export function MoreProjects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const regular = otherProjects.filter((p) => !p.upcoming);
  const upcoming = otherProjects.filter((p) => p.upcoming);
  const [first, ...rest] = regular;

  return (
    <Section id="more-projects" index="02" title={dict.sections.more} wide>
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {/* Laboratorio va aparte: es prueba de criterio y método, no un proyecto más. */}
        <li className="md:col-span-2">
          <Reveal className="h-full">
            <SpotlightCard className="panel relative h-full overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-[11px] tracking-[0.15em] text-accent uppercase">{dict.sections.method}</p>
                <span className="rounded-full border border-accent/40 px-2.5 py-0.5 font-mono text-[11px] text-accent">
                  {dict.project.noAi}
                </span>
              </div>
              <h3 className="mt-3 font-display text-3xl">{laboratorio.name}</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{laboratorio.summary[locale]}</p>
              <ol className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs" aria-label={laboratorio.name}>
                {dict.project.labSteps.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="rounded-lg border border-line bg-surface px-2.5 py-1.5 text-fg">{step}</span>
                    {i < dict.project.labSteps.length - 1 && (
                      <span className="text-accent" aria-hidden="true">
                        →
                      </span>
                    )}
                  </li>
                ))}
              </ol>
              <div className="mt-6">
                <ProjectLinks links={laboratorio.links} dict={dict} />
              </div>
            </SpotlightCard>
          </Reveal>
        </li>
        {first && (
          <li>
            <Reveal className="h-full" delay={0.08}>
              <ProjectTile p={first} locale={locale} dict={dict} />
            </Reveal>
          </li>
        )}
        {rest.map((p, i) => (
          <li key={p.name}>
            <Reveal className="h-full" delay={0.06 * (i % 3)}>
              <ProjectTile p={p} locale={locale} dict={dict} />
            </Reveal>
          </li>
        ))}
        {upcoming.map((p) => (
          <li key={p.name} className="md:col-span-2">
            <Reveal className="h-full">
              <UpcomingTile p={p} locale={locale} dict={dict} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
