import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import { featuredProjects } from "@/content/projects";
import { iconFor } from "@/content/tech-map";
import { getDictionary, localizePath, type Locale } from "@/i18n";
import { NavLinks } from "../layout/NavLinks";
import { ScreenshotCarousel } from "../media/ScreenshotCarousel";
import { Reveal } from "../motion/Reveal";
import { SpotlightCard } from "../motion/SpotlightCard";
import { TechLogo } from "../TechLogo";
import { Arrow, ProjectLinks } from "../ui";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28">
      <Reveal>
        <h2 id={`${id}-title`} className="mb-6 font-display text-3xl font-semibold tracking-tight">
          {title}
        </h2>
        {children}
      </Reveal>
    </section>
  );
}

function CheckList({ items, cols = false }: { items: string[]; cols?: boolean }) {
  return (
    <ul className={`grid gap-3 ${cols ? "md:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="glass flex gap-3 rounded-2xl p-4 text-sm leading-relaxed text-muted">
          <svg
            className="mt-0.5 size-4 shrink-0 text-accent"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
          <span>{item}</span>
        </li>
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
  const shots = study.screenshots.map((s) => ({ src: s.src, alt: s.alt[locale] }));
  const product = project.links.find((l) => l.kind === "product");

  const toc = [
    { id: "problem", label: t.problem },
    { id: "result", label: t.result },
    { id: "solution", label: t.solution },
    { id: "role", label: t.role },
    { id: "architecture", label: t.architecture },
    { id: "challenges", label: t.challenges },
  ].map((i) => ({ ...i, href: `#${i.id}` }));

  return (
    <article className="mx-auto max-w-6xl px-4 pt-10 pb-24 sm:px-6">
      <Link
        href={`${localizePath("/", locale)}#projects`}
        className="group glass inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm text-muted transition-colors hover:text-fg"
      >
        <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
          ←
        </span>
        {t.back}
      </Link>

      <header className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-center">
        <div className="animate-rise">
          <p className="font-mono text-xs tracking-[0.15em] text-accent uppercase">{project.kind[locale]}</p>
          <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight sm:text-6xl">{project.name}</h1>
          <p className="mt-3 text-xl text-muted">{project.subtitle[locale]}</p>
          <p className="mt-6 inline-block rounded-xl bg-accent/12 px-3 py-2 font-mono text-xs leading-relaxed text-accent ring-1 ring-accent/30">
            {project.highlight[locale]}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => {
              const icon = iconFor(s);
              return (
                <li
                  key={s}
                  className="group glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs text-muted"
                >
                  {icon && <TechLogo icon={icon} brand className="size-3.5" />}
                  {s}
                </li>
              );
            })}
          </ul>
          <div className="mt-8">
            <ProjectLinks links={project.links} dict={dict} />
          </div>
          <p className="mt-4 font-mono text-xs text-muted">{project.privateCode[locale]}</p>
        </div>

        <div className="animate-rise [animation-delay:150ms]">
          <ScreenshotCarousel
            shots={shots}
            device={study.screenshots[0].device}
            labels={dict.carousel}
            address={product ? new URL(product.href).host : undefined}
            priority
          />
          <p className="mt-3 text-xs text-muted">{study.screenshotsNote[locale]}</p>
        </div>
      </header>

      <div className="mt-20 grid gap-12 lg:grid-cols-[12rem_1fr]">
        <aside className="hidden lg:block">
          <nav aria-label={t.toc} className="sticky top-28">
            <NavLinks items={toc} vertical />
          </nav>
        </aside>

        <div className="space-y-20">
          <div className="grid gap-5 md:grid-cols-2">
            <section id="problem" aria-labelledby="problem-title" className="scroll-mt-28">
              <Reveal className="h-full">
                <SpotlightCard className="glass h-full rounded-3xl p-6 sm:p-8">
                  <h2 id="problem-title" className="font-mono text-xs tracking-[0.15em] text-accent uppercase">
                    {t.problem}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-pretty">{study.problem[locale]}</p>
                </SpotlightCard>
              </Reveal>
            </section>
            <section id="result" aria-labelledby="result-title" className="scroll-mt-28 md:order-none">
              <Reveal className="h-full" delay={0.08}>
                <SpotlightCard className="h-full rounded-3xl border border-accent/40 bg-accent/8 p-6 backdrop-blur-xl sm:p-8">
                  <h2 id="result-title" className="font-mono text-xs tracking-[0.15em] text-accent uppercase">
                    {t.result}
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {study.result[locale].map((r) => (
                      <li key={r} className="flex gap-3 text-lg leading-snug">
                        <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-accent" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            </section>
          </div>

          <Block id="solution" title={t.solution}>
            <CheckList items={study.solution[locale]} cols={study.solution[locale].length > 2} />
            {study.subsection && (
              <div className="mt-10">
                <h3 className="mb-4 font-display text-xl font-semibold">{study.subsection.title[locale]}</h3>
                <CheckList items={study.subsection.items[locale]} cols />
              </div>
            )}
          </Block>

          <Block id="role" title={t.role}>
            <p className="max-w-3xl text-lg leading-relaxed text-pretty text-muted">{study.role.summary[locale]}</p>
            {study.role.groups && (
              <div className={`mt-8 grid gap-5 ${study.role.groups.length > 1 ? "lg:grid-cols-2" : ""}`}>
                {study.role.groups.map((group) => (
                  <div key={group.title.es} className="glass rounded-3xl p-6">
                    <h3 className="font-display text-lg font-semibold">{group.title[locale]}</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                      {group.items[locale].map((item) => (
                        <li key={item} className="flex gap-3">
                          <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rotate-45 bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            {study.role.note && (
              <p className="mt-6 max-w-3xl border-l-2 border-accent/50 pl-4 text-sm leading-relaxed text-muted">
                {study.role.note[locale]}
              </p>
            )}
          </Block>

          <Block id="architecture" title={t.architecture}>
            <div className="space-y-6">
              {study.architectures.map((arch, i) => (
                <div key={i} className="glass rounded-3xl p-6 sm:p-8">
                  {arch.title && <h3 className="mb-6 font-display text-lg font-semibold">{arch.title[locale]}</h3>}
                  <ArchitectureDiagram arch={arch} locale={locale} />
                </div>
              ))}
            </div>
          </Block>

          <Block id="challenges" title={t.challenges}>
            <ol className="grid gap-5 md:grid-cols-2">
              {study.challenges.map((c, i) => (
                <li key={c.title.es} className="md:[&:last-child:nth-child(odd)]:col-span-2">
                  <SpotlightCard className="glass h-full rounded-3xl p-6 sm:p-7">
                    <span
                      aria-hidden="true"
                      className="font-display text-4xl leading-none font-bold text-transparent [-webkit-text-stroke:1.2px_var(--accent)]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold">{c.title[locale]}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{c.body[locale]}</p>
                  </SpotlightCard>
                </li>
              ))}
            </ol>
          </Block>
        </div>
      </div>

      <nav aria-label={t.others} className="mt-24">
        <h2 className="mb-6 font-display text-2xl font-semibold">{t.others}</h2>
        <ul className="grid gap-5 sm:grid-cols-2">
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                href={localizePath(`/proyectos/${p.slug}`, locale)}
                className="group glass flex items-center justify-between gap-4 rounded-3xl p-6 transition-colors hover:border-accent/60"
              >
                <span>
                  <span className="block font-display text-xl font-semibold">{p.name}</span>
                  <span className="mt-1 block text-sm text-muted">{p.subtitle[locale]}</span>
                </span>
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-fg transition-transform group-hover:rotate-45">
                  <Arrow className="group-hover:translate-0!" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
}
