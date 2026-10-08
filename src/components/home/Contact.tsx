import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n";
import { Section } from "../ui";
import { ContactForm } from "./ContactForm";

export function Contact({ dict }: { dict: Dictionary }) {
  // Sin teléfono: no se muestra en el sitio.
  const channels = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "LinkedIn", value: "linkedin.com/in/valentin-belone", href: profile.linkedin },
    { label: "GitHub", value: "github.com/ValenBelone7", href: profile.github },
  ];

  return (
    <Section id="contact" title={dict.sections.contact} intro={dict.sections.contactIntro}>
      <div className="grid gap-12 lg:grid-cols-2">
        <ul className="space-y-3">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex flex-col rounded-lg border border-border bg-surface px-5 py-4 transition-colors hover:border-accent"
              >
                <span className="text-sm text-muted">{c.label}</span>
                <span className="font-mono text-sm break-all">{c.value}</span>
              </a>
            </li>
          ))}
        </ul>
        <ContactForm t={dict.contact} />
      </div>
    </Section>
  );
}
