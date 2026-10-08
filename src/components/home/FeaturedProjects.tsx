import Link from "next/link";
import { featuredProjects } from "@/content/projects";
import { localizePath, type Dictionary, type Locale } from "@/i18n";
import { ProjectLinks, Section, Tags } from "../ui";

export function FeaturedProjects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="projects" title={dict.sections.featured} intro={dict.sections.featuredIntro}>
      <ul className="grid gap-6">
        {featuredProjects.map((p) => (
          <li key={p.slug}>
            <article className="rounded-xl border border-border bg-surface p-6 sm:p-8">
              <p className="font-mono text-xs tracking-wide text-muted uppercase">{p.kind[locale]}</p>
              <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                {p.name} <span className="font-normal text-muted">— {p.subtitle[locale]}</span>
              </h3>
              <p className="mt-2 font-mono text-sm text-accent">{p.highlight[locale]}</p>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted">{p.summary[locale]}</p>
              <div className="mt-5">
                <Tags items={p.stack} />
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href={localizePath(`/proyectos/${p.slug}`, locale)}
                  className="inline-flex h-10 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
                >
                  {dict.project.readCaseStudy}
                  <span className="sr-only">: {p.name}</span>
                </Link>
                <ProjectLinks links={p.links} dict={dict} />
                <span className="font-mono text-xs text-muted">{p.privateCode[locale]}</span>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
