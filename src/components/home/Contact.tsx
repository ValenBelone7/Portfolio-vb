import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n";
import { Reveal } from "../motion/Reveal";
import { CopyEmail } from "./CopyEmail";

/**
 * Cierre en borgoña, espejo del hero: "Hablemos" gigante, el email como link
 * principal y los demás canales en filas. Sin formulario: el mail y LinkedIn son
 * lo que un recruiter usa, y no depende de un servicio externo.
 */
export function Contact({ dict }: { dict: Dictionary }) {
  const rows = [
    { label: "LinkedIn", value: "in/valentin-belone", href: profile.linkedin },
    { label: "GitHub", value: "ValenBelone7", href: profile.github },
    { label: "CV", value: dict.hero.downloadCv, href: profile.cvPath, download: true },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-stage text-chalk">
      <div className="shell py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow mb-6 flex items-center gap-3 text-signal" aria-hidden="true">
            <span>06</span>
            <span className="h-px w-10 bg-signal/60" />
            <span>{dict.sections.contact}</span>
          </p>
          <h2 id="contact-title" className="font-display text-[clamp(2.8rem,10vw,9.5rem)] leading-[0.9] font-bold">
            {dict.contact.heading}
            <span className="text-signal italic">.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <p className="max-w-lg text-lg leading-relaxed text-chalk/80">{dict.sections.contactIntro}</p>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline mt-8 inline-block pb-1 font-display text-[clamp(1.1rem,3.3vw,2.9rem)] leading-tight whitespace-nowrap hover:text-signal"
            >
              {profile.email}
            </a>
            <div className="mt-6">
              <CopyEmail email={profile.email} copyLabel={dict.contact.copy} copiedLabel={dict.contact.copied} />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
            <ul className="border-t border-chalk/20">
              {rows.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    {...(r.download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex items-center justify-between gap-4 border-b border-chalk/20 py-5 transition-colors hover:text-signal"
                  >
                    <span className="font-display text-3xl">{r.label}</span>
                    <span className="flex items-center gap-3 font-mono text-xs text-chalk/75 group-hover:text-signal">
                      {r.value}
                      <svg
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        aria-hidden="true"
                      >
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
