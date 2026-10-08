import Image from "next/image";
import bust from "@/assets/valentin-belone-busto.webp";
import { about, education, facts } from "@/content/about";
import { profile } from "@/content/profile";
import type { Dictionary, Locale } from "@/i18n";
import { Reveal } from "../motion/Reveal";

// Datos que ya aparecen en el hero (rol, stack) quedan afuera de la fila final.
const SHORT_FACTS = new Set(["Base", "Busco", "Hoy", "Idiomas"]);

/**
 * Sobre mí según la referencia "about me": usuario arriba, texto justificado,
 * "sobre mí" gigante con el busto en B/N encajado en el hueco, formación y firma.
 */
export function About({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [intro, interests, closing] = about[locale];
  const [top, bottom] = dict.sections.aboutGiant;
  const educationLine =
    locale === "es"
      ? `${education.degree.es} en el ${education.institution}, ${education.dates.es}. ${education.status.es}`
      : `${education.degree.en} at ${education.institution}, ${education.dates.en}. ${education.status.en}`;

  return (
    <section id="about" aria-labelledby="about-title" className="bg-stage text-chalk">
      <div className="shell py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mx-auto block w-fit pb-0.5 font-mono text-sm text-signal"
            >
              @ValenBelone7
            </a>
            <div className="mt-8 space-y-4 text-lg leading-relaxed hyphens-auto sm:text-justify sm:text-xl">
              <p>{intro}</p>
              <p className="text-chalk/80">{interests}</p>
            </div>
          </Reveal>

          {/* "sobre / mí" gigante con el busto encajado abajo a la izquierda. */}
          <div className="relative mt-14 sm:mt-20">
            <Reveal y={40}>
              <h2
                id="about-title"
                className="text-right font-display text-[clamp(4.2rem,16vw,13rem)] leading-[0.92] font-bold text-signal lowercase"
              >
                <span className="block">{top}</span> <span className="block">{bottom}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15} y={30} className="absolute bottom-0 left-0 w-[46%] sm:left-[2%] sm:w-[40%]">
              <Image
                src={bust}
                alt={profile.name}
                sizes="(min-width: 896px) 360px, 46vw"
                className="h-auto w-full mask-[linear-gradient(to_bottom,black_88%,transparent)]"
              />
            </Reveal>
          </div>

          <Reveal className="mt-14 space-y-4 text-lg leading-relaxed hyphens-auto sm:text-justify sm:mt-20 sm:text-xl">
            <p>{closing}</p>
            <p className="text-chalk/80">{educationLine}</p>
          </Reveal>

          {/* Firma: se "escribe" de izquierda a derecha al entrar en pantalla. */}
          <Reveal className="mt-10 flex justify-end">
            <p
              aria-hidden="true"
              className="font-signature text-6xl leading-none text-chalk sm:text-7xl [[data-in]_&]:animate-[write_1.8s_ease-out_0.3s_both] [[data-js]_&]:[clip-path:inset(0_100%_0_0)]"
            >
              {profile.name}
            </p>
          </Reveal>

          <Reveal>
            <dl className="mt-14 grid gap-x-8 gap-y-5 border-t border-chalk/15 pt-8 sm:grid-cols-2">
              {facts
                .filter((f) => SHORT_FACTS.has(f.key.es))
                .map((f) => (
                  <div key={f.key.es}>
                    <dt className="font-mono text-[11px] tracking-[0.14em] text-chalk/60 uppercase">{f.key[locale]}</dt>
                    <dd className="mt-1 font-mono text-sm">{f.value[locale]}</dd>
                  </div>
                ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
