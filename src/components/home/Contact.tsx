import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n";
import { Reveal } from "../motion/Reveal";
import { TechLogo } from "../TechLogo";
import { Arrow } from "../ui";
import { ContactForm } from "./ContactForm";
import { CopyEmail } from "./CopyEmail";

export function Contact({ dict }: { dict: Dictionary }) {
  // Sin teléfono: no se muestra en el sitio.
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2.5rem] p-6 sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-40 size-[28rem] rounded-full bg-[radial-gradient(circle,var(--glow-1),transparent_65%)] blur-2xl"
          />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <p
                className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent"
                aria-hidden="true"
              >
                <span>06</span>
                <span className="h-px w-10 bg-accent/50" />
              </p>
              <h2 id="contact-title" className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
                {dict.contact.heading}
              </h2>
              <p className="mt-5 max-w-md text-lg text-pretty text-muted">{dict.sections.contactIntro}</p>

              <div className="mt-10 flex flex-col items-start gap-3">
                <CopyEmail email={profile.email} copyLabel={dict.contact.copy} copiedLabel={dict.contact.copied} />
                <div className="flex flex-wrap gap-3">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass inline-flex h-12 items-center gap-2 rounded-full px-5 text-sm transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    LinkedIn
                    <Arrow />
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass inline-flex h-12 items-center gap-2 rounded-full px-5 text-sm transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    <TechLogo icon="github" className="size-4" />
                    GitHub
                    <Arrow />
                  </a>
                </div>
              </div>
            </div>

            <ContactForm t={dict.contact} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
