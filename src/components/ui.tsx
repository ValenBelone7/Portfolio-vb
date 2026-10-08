import type { ProjectLink } from "@/content/types";
import type { Dictionary } from "@/i18n";

export function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function Tags({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProjectLinks({ links, dict }: { links: ProjectLink[]; dict: Dictionary }) {
  if (links.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            {link.label ?? dict.project[link.kind]} ↗
          </a>
        </li>
      ))}
    </ul>
  );
}
