import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import { featuredProjects } from "@/content/projects";
import { getDictionary, localizePath, type Locale } from "@/i18n";
import { ProjectLinks, Tags } from "../ui";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-10">
      <h2 className="mb-5 text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="max-w-3xl list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function CaseStudyPage({ locale, slug }: { locale: Locale; slug: string }) {
  const dict = getDictionary(locale);
  const t = dict.caseStudy;
  const project = featuredProjects.find((p) => p.slug === slug)!;
  const study = caseStudies[slug];
  const others = featuredProjects.filter((p) => p.slug !== slug);
  const desktop = study.screenshots.filter((s) => s.device === "desktop");
  const mobile = study.screenshots.filter((s) => s.device === "mobile");

  return (
    <article className="mx-auto max-w-5xl px-4 pt-12 pb-20 sm:px-6">
      <Link href={`${localizePath("/", locale)}#projects`} className="font-mono text-sm text-muted hover:text-fg">
        ← {t.back}
      </Link>

      <header className="mt-8 pb-10">
        <p className="font-mono text-xs tracking-wide text-muted uppercase">{project.kind[locale]}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">{project.name}</h1>
        <p className="mt-2 text-lg text-muted">{project.subtitle[locale]}</p>
        <p className="mt-4 font-mono text-sm text-accent">{project.highlight[locale]}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <ProjectLinks links={project.links} dict={dict} />
          <span className="font-mono text-xs text-muted">{project.privateCode[locale]}</span>
        </div>
      </header>

      <Block title={t.problem}>
        <p className="max-w-3xl leading-relaxed text-muted">{study.problem[locale]}</p>
      </Block>

      <Block title={t.solution}>
        <List items={study.solution[locale]} />
        {study.subsection && (
          <>
            <h3 className="mt-8 mb-4 font-semibold">{study.subsection.title[locale]}</h3>
            <List items={study.subsection.items[locale]} />
          </>
        )}
      </Block>

      <Block title={t.role}>
        <p className="max-w-3xl leading-relaxed text-muted">{study.role.summary[locale]}</p>
        {study.role.groups?.map((group) => (
          <div key={group.title.es}>
            <h3 className="mt-8 mb-4 font-semibold">{group.title[locale]}</h3>
            <List items={group.items[locale]} />
          </div>
        ))}
        {study.role.note && <p className="mt-8 max-w-3xl leading-relaxed text-muted">{study.role.note[locale]}</p>}
      </Block>

      <Block title={t.stack}>
        <Tags items={project.stack} />
      </Block>

      <Block title={t.architecture}>
        <div className="space-y-12">
          {study.architectures.map((arch, i) => (
            <div key={i}>
              {arch.title && <h3 className="mb-5 font-semibold">{arch.title[locale]}</h3>}
              <ArchitectureDiagram arch={arch} locale={locale} />
            </div>
          ))}
        </div>
      </Block>

      <Block title={t.challenges}>
        <div className="max-w-3xl space-y-8">
          {study.challenges.map((c) => (
            <div key={c.title.es}>
              <h3 className="mb-2 font-semibold">{c.title[locale]}</h3>
              <p className="leading-relaxed text-muted">{c.body[locale]}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block title={t.result}>
        <List items={study.result[locale]} />
      </Block>

      <Block title={t.screenshots}>
        <p className="mb-6 text-sm text-muted">{study.screenshotsNote[locale]}</p>
        {desktop.length > 0 && (
          <div className="space-y-8">
            {desktop.map((shot) => (
              <figure key={shot.src.src}>
                <Image
                  src={shot.src}
                  alt={shot.alt[locale]}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 976px, 100vw"
                  className="mx-auto h-auto w-auto max-w-full rounded-lg border border-border"
                />
                <figcaption className="mt-2 text-center text-sm text-muted">{shot.alt[locale]}</figcaption>
              </figure>
            ))}
          </div>
        )}
        {mobile.length > 0 && (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {mobile.map((shot) => (
              <figure key={shot.src.src}>
                <Image
                  src={shot.src}
                  alt={shot.alt[locale]}
                  placeholder="blur"
                  sizes="(min-width: 640px) 300px, 50vw"
                  className="h-auto w-full rounded-xl border border-border"
                />
                <figcaption className="mt-2 text-sm text-muted">{shot.alt[locale]}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </Block>

      <nav aria-label={t.others} className="border-t border-border pt-10">
        <h2 className="mb-4 text-sm font-medium text-muted">{t.others}</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                href={localizePath(`/proyectos/${p.slug}`, locale)}
                className="block rounded-lg border border-border bg-surface px-5 py-4 transition-colors hover:border-accent"
              >
                <span className="font-semibold">{p.name}</span>
                <span className="block text-sm text-muted">{p.subtitle[locale]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
}
