import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n";

export function Footer({ dict }: { dict: Dictionary }) {
  const links = [
    { href: profile.github, label: "GitHub" },
    { href: profile.linkedin, label: "LinkedIn" },
    { href: `mailto:${profile.email}`, label: "Email" },
  ];

  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pt-10 pb-10 sm:px-6">
      <div className="flex flex-col gap-4 border-t border-glass-border pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-display text-fg">{profile.name}</span> · {dict.footer.role}
        </p>
        <ul className="flex gap-6 font-mono text-xs">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="underline-offset-4 transition-colors hover:text-accent hover:underline"
                rel="noopener noreferrer"
                target={link.href.startsWith("http") ? "_blank" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
