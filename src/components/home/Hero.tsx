import { profile } from "@/content/profile";
import type { Dictionary, Locale } from "@/i18n";
import { Magnetic } from "../motion/Magnetic";
import { buttonGhost } from "../ui";
import { StackIllustration } from "./StackIllustration";

/**
 * Hero: la palabra "BACKEND" gigante queda detrás del diagrama isométrico del stack
 * (composición de la referencia "Egipto"), con frase, datos y acciones abajo a la izquierda.
 */
export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative isolate overflow-hidden bg-stage pt-20 text-chalk sm:pt-24 lg:min-h-[max(48rem,100svh)]">
      {/* Fila superior: especialidad y disponibilidad. */}
      <div className="shell relative z-20 flex animate-rise flex-wrap items-center justify-between gap-3 pt-6">
        <p className="eyebrow text-chalk/80">{dict.hero.eyebrow}</p>
        <p className="eyebrow flex items-center gap-2.5 text-chalk/80">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-signal opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-signal" />
          </span>
          {dict.hero.available}
        </p>
      </div>

      {/* Palabra gigante: queda por detrás del diagrama (referencia "Egipto"). */}
      <h1 className="relative z-0 mt-10 lg:absolute lg:inset-x-0 lg:top-[19%] lg:mt-0">
        <span className="shell block font-mono text-sm tracking-[0.18em] text-chalk/80 uppercase">
          {dict.hero.nameLine}
        </span>
        <span className="shell mt-3 block font-display text-[clamp(3.2rem,18.5vw,18rem)] leading-[0.85] font-bold text-chalk uppercase">
          {dict.hero.giant}
        </span>
      </h1>

      {/* Diagrama del stack por delante de la palabra. */}
      <div className="relative z-10 mx-auto -mt-[9vw] w-full max-w-xl px-4 lg:absolute lg:top-[25%] lg:right-[3%] lg:mt-0 lg:w-[40%] lg:max-w-[560px] lg:px-0">
        <StackIllustration locale={locale} />
      </div>

      {/* Abajo a la izquierda: frase, datos y acciones. */}
      <div className="shell relative z-20 mt-6 grid items-end gap-10 pb-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:grid-cols-12 lg:pb-12">
        <div className="min-w-0 animate-rise [animation-delay:200ms] lg:col-span-5">
          <p className="max-w-xl text-2xl leading-snug text-balance sm:text-[1.75rem]">
            {dict.hero.titleBefore} <em className="text-signal">{dict.hero.titleHighlight}</em> {dict.hero.titleAfter}
          </p>

          <dl className="mt-7 flex flex-wrap items-end gap-x-6 gap-y-4 sm:gap-x-10">
            {dict.hero.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-2 h-[2.8em] max-w-[7.5rem] font-mono text-[11px] leading-snug tracking-[0.04em] text-chalk/75">
                  {s.label}
                </dt>
                <dd className="font-display text-[1.75rem] leading-none font-bold whitespace-nowrap text-signal sm:text-4xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex h-12 items-center gap-3 rounded-lg bg-chalk pr-1.5 pl-5 font-mono text-xs tracking-[0.12em] text-stage uppercase transition-colors hover:bg-signal"
              >
                {dict.hero.viewProjects}
                <span className="inline-flex size-9 items-center justify-center rounded-md bg-stage text-chalk transition-transform group-hover:translate-y-0.5">
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
              className={`${buttonGhost} border-chalk/35 hover:border-signal hover:text-signal`}
            >
              {dict.hero.downloadCv}
            </a>
          </div>
          <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs tracking-[0.1em] uppercase">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline pb-0.5 text-chalk/85 hover:text-chalk"
            >
              GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline pb-0.5 text-chalk/85 hover:text-chalk"
            >
              LinkedIn ↗
            </a>
            <span className="tracking-normal text-chalk/70 normal-case">{dict.hero.location}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
