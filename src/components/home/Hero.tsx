import Image from "next/image";
import cutout from "@/assets/valentin-belone-recorte.webp";
import { caseStudies } from "@/content/case-studies";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { localizePath, type Dictionary, type Locale } from "@/i18n";
import { Magnetic } from "../motion/Magnetic";
import { buttonGhost } from "../ui";
import { HeroProjects } from "./HeroProjects";

/**
 * Hero editorial sobre borgoña: el apellido gigante queda detrás de la figura
 * recortada (referencias "Egipto" y paleta), con datos y acciones abajo a la
 * izquierda y los proyectos en producción rotando abajo a la derecha.
 */
export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const projects = featuredProjects.map((p) => {
    const shot = caseStudies[p.slug].screenshots[0];
    return {
      name: p.name,
      kind: p.subtitle[locale],
      href: localizePath(`/proyectos/${p.slug}`, locale),
      image: shot.src,
      alt: shot.alt[locale],
    };
  });

  return (
    <section className="relative isolate overflow-hidden bg-wine text-cream lg:min-h-[max(46rem,calc(100svh-4rem))]">
      {/* Fila superior: especialidad y disponibilidad. */}
      <div className="shell relative z-20 flex animate-rise flex-wrap items-center justify-between gap-3 pt-6">
        <p className="eyebrow text-cream/80">{dict.hero.eyebrow}</p>
        <p className="eyebrow flex items-center gap-2.5 text-cream/80">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-blush opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-blush" />
          </span>
          {dict.hero.available}
        </p>
      </div>

      {/* Nombre gigante: queda por detrás de la figura. */}
      <h1 className="relative z-0 mt-8 flex justify-center leading-none lg:absolute lg:inset-x-0 lg:top-[9%] lg:mt-0">
        <span className="inline-block">
          <span className="block pl-[0.06em] font-display text-[clamp(2.5rem,6.5vw,6rem)] text-blush italic">
            Valentín
          </span>
          <span className="mt-[0.06em] block font-display text-[clamp(7rem,27vw,27rem)] leading-[0.8] tracking-[-0.02em]">
            Belone
          </span>
        </span>
        <span className="sr-only"> — {dict.hero.role}</span>
      </h1>

      {/* Figura recortada en blanco y negro, por delante del nombre. */}
      <div className="relative z-10 mx-auto -mt-[13vw] w-[60%] max-w-xs sm:max-w-sm lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:h-[70%] lg:w-auto lg:max-w-none lg:-translate-x-1/2">
        <Image
          src={cutout}
          alt={profile.name}
          priority
          sizes="(min-width: 1024px) 480px, 78vw"
          className="h-auto w-full mask-[linear-gradient(to_bottom,black_75%,transparent)] lg:h-full lg:w-auto"
        />
      </div>

      {/* Abajo: frase, datos y acciones a la izquierda; proyectos a la derecha. */}
      <div className="shell relative z-20 -mt-10 grid items-end gap-10 pb-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:grid-cols-12 lg:pb-12">
        <div className="animate-rise [animation-delay:200ms] lg:col-span-4">
          <p className="font-display text-3xl leading-[1.08] text-balance sm:text-4xl">
            {dict.hero.titleBefore} <em className="text-blush">{dict.hero.titleHighlight}</em> {dict.hero.titleAfter}
          </p>

          <dl className="mt-7 flex gap-x-5 sm:gap-x-8">
            {dict.hero.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-1.5 max-w-[7.5rem] font-mono text-[11px] leading-snug tracking-[0.04em] text-cream/75">
                  {s.label}
                </dt>
                <dd className="font-display text-[2rem] leading-none whitespace-nowrap sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex h-12 items-center gap-3 rounded-lg bg-cream pr-1.5 pl-5 font-mono text-xs tracking-[0.12em] text-wine uppercase transition-colors hover:bg-blush"
              >
                {dict.hero.viewProjects}
                <span className="inline-flex size-9 items-center justify-center rounded-md bg-wine text-cream transition-transform group-hover:translate-y-0.5">
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </span>
              </a>
            </Magnetic>
            <a
              href={profile.cvPath}
              download
              className={`${buttonGhost} border-cream/35 hover:border-blush hover:text-blush`}
            >
              {dict.hero.downloadCv}
            </a>
          </div>
          <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs tracking-[0.1em] uppercase">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline pb-0.5 text-cream/85 hover:text-cream"
            >
              GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline pb-0.5 text-cream/85 hover:text-cream"
            >
              LinkedIn ↗
            </a>
            <span className="tracking-normal text-cream/70 normal-case">{dict.hero.location}</span>
          </p>
        </div>

        <div className="flex animate-rise justify-start [animation-delay:350ms] lg:col-span-4 lg:col-start-9 lg:justify-end">
          <HeroProjects
            items={projects}
            label={dict.hero.inProduction}
            prev={dict.hero.prevProject}
            next={dict.hero.nextProject}
          />
        </div>
      </div>
    </section>
  );
}
