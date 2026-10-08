import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import { featuredProjects } from "@/content/projects";
import { localizePath, type Dictionary, type Locale } from "@/i18n";
import { ScreenshotCarousel } from "../media/ScreenshotCarousel";
import { Reveal } from "../motion/Reveal";
import { SpotlightCard } from "../motion/SpotlightCard";
import { buttonPrimary, ProjectLinks, Section, Tags } from "../ui";

export function FeaturedProjects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="projects" index="01" title={dict.sections.featured} intro={dict.sections.featuredIntro} wide>
      <ol className="space-y-10 sm:space-y-14">
        {featuredProjects.map((p, i) => {
          const study = caseStudies[p.slug];
          const shots = study.screenshots.map((s) => ({ src: s.src, alt: s.alt[locale] }));
          const device = study.screenshots[0].device;
          const product = p.links.find((l) => l.kind === "product");
          const flip = i % 2 === 1;

          return (
            <li key={p.slug}>
              <Reveal>
                <SpotlightCard className="panel rounded-[2rem] p-5 sm:p-8 lg:p-10">
                  <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                    <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                      <ScreenshotCarousel
                        shots={shots}
                        device={device}
                        labels={dict.carousel}
                        address={product ? new URL(product.href).host : undefined}
                      />
                    </div>

                    <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                      <div className="flex items-baseline gap-4">
                        <span
                          aria-hidden="true"
                          className="font-display text-6xl leading-none text-transparent [-webkit-text-stroke:1.5px_var(--accent)]"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="font-mono text-xs tracking-[0.15em] text-muted uppercase">{p.kind[locale]}</p>
                      </div>
                      <h3 className="mt-5 font-display text-3xl sm:text-4xl">{p.name}</h3>
                      <p className="mt-1 text-lg text-muted">{p.subtitle[locale]}</p>
                      <p className="mt-5 inline-block rounded-xl bg-accent/12 px-3 py-2 font-mono text-xs leading-relaxed text-accent ring-1 ring-accent/30">
                        {p.highlight[locale]}
                      </p>
                      <p className="mt-5 leading-relaxed text-pretty text-muted">{p.summary[locale]}</p>
                      <Tags items={p.stack} className="mt-6" />
                      <div className="mt-8 flex flex-wrap items-center gap-2">
                        <Link href={localizePath(`/proyectos/${p.slug}`, locale)} className={buttonPrimary}>
                          {dict.project.readCaseStudy}
                          <span className="sr-only">: {p.name}</span>
                          <svg
                            className="size-4 transition-transform group-hover:translate-x-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14M13 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <ProjectLinks links={p.links} dict={dict} />
                      </div>
                      <p className="mt-4 font-mono text-xs text-muted">{p.privateCode[locale]}</p>
                    </div>
                  </article>
                </SpotlightCard>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
