import type { ProjectLink } from "@/content/types";
import type { Dictionary } from "@/i18n";
import { Reveal } from "./motion/Reveal";

export function Section({
  id,
  index,
  title,
  intro,
  children,
  className,
}: {
  id: string;
  /** Numeración visible ("01"), decorativa. */
  index?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 ${className ?? ""}`}
    >
      <Reveal>
        {index && (
          <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent" aria-hidden="true">
            <span>{index}</span>
            <span className="h-px w-10 bg-accent/50" />
          </p>
        )}
        <h2 id={`${id}-title`} className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-lg text-pretty text-muted">{intro}</p>}
      </Reveal>
      <div className="mt-12 sm:mt-16">{children}</div>
    </section>
  );
}

export function Tags({ items, className }: { items: string[]; className?: string }) {
  if (items.length === 0) return null;
  return (
    <ul className={`flex flex-wrap gap-2 ${className ?? ""}`}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-glass-border bg-glass px-3 py-1 font-mono text-xs text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      className={`size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className ?? ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export const buttonPrimary =
  "group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-fg shadow-[0_10px_30px_-10px_var(--accent)] transition-[transform,box-shadow] hover:shadow-[0_14px_40px_-8px_var(--accent)] active:scale-[0.97]";

export const buttonGhost =
  "group glass inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium transition-colors hover:border-accent/60 hover:text-accent active:scale-[0.97]";

export function ProjectLinks({ links, dict }: { links: ProjectLink[]; dict: Dictionary }) {
  if (links.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-sm transition-colors hover:border-accent/60 hover:text-accent"
          >
            {link.label ?? dict.project[link.kind]}
            <Arrow />
          </a>
        </li>
      ))}
    </ul>
  );
}
