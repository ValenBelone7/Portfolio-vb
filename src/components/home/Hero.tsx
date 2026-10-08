import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n";

export function Hero({ dict }: { dict: Dictionary }) {
  const secondary =
    "inline-flex h-11 items-center rounded-md border border-border px-5 text-sm font-medium transition-colors hover:border-accent hover:text-accent";

  return (
    <section className="mx-auto max-w-5xl px-4 pt-20 pb-16 sm:px-6 sm:pt-28">
      <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
        <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
        {dict.hero.available}
      </p>

      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>
      <p className="mt-3 font-mono text-lg text-accent sm:text-xl">{dict.hero.role} · Python · Django · PostgreSQL</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{dict.hero.tagline}</p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex h-11 items-center rounded-md bg-accent px-5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
        >
          {dict.hero.viewProjects}
        </a>
        <a href={profile.cvPath} download className={secondary}>
          {dict.hero.downloadCv}
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className={secondary}>
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={secondary}>
          LinkedIn
        </a>
      </div>
    </section>
  );
}
