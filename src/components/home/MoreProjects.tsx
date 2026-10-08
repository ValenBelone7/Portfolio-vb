import { laboratorio, otherProjects } from "@/content/projects";
import type { Dictionary, Locale } from "@/i18n";
import { ProjectLinks, Section, Tags } from "../ui";

export function MoreProjects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="more-projects" title={dict.sections.more}>
      {/* Laboratorio va aparte: es prueba de criterio y método, no un proyecto más. */}
      <article className="rounded-xl border border-accent/40 bg-surface p-6 sm:p-8">
        <p className="font-mono text-xs tracking-wide text-accent uppercase">{dict.sections.method}</p>
        <h3 className="mt-2 text-xl font-semibold">{laboratorio.name}</h3>
        <p className="mt-3 max-w-3xl leading-relaxed text-muted">{laboratorio.summary[locale]}</p>
        <div className="mt-5">
          <ProjectLinks links={laboratorio.links} dict={dict} />
        </div>
      </article>

      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((p) => (
          <li key={p.name}>
            <article className="flex h-full flex-col gap-4 rounded-xl border border-border bg-surface p-6">
              <div>
                <p className="font-mono text-xs tracking-wide text-muted uppercase">
                  {p.upcoming ? dict.project.upcoming : p.kind[locale]}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{p.name}</h3>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted">{p.summary[locale]}</p>
              <Tags items={p.stack} />
              {p.links.length > 0 ? (
                <ProjectLinks links={p.links} dict={dict} />
              ) : (
                !p.upcoming && <p className="font-mono text-xs text-muted">{dict.project.noPublicDemo}</p>
              )}
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
