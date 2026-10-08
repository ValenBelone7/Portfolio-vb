import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n";

export function Footer({ dict }: { dict: Dictionary }) {
  const links = [
    { href: profile.github, label: "GitHub" },
    { href: profile.linkedin, label: "LinkedIn" },
    { href: `mailto:${profile.email}`, label: "Email" },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          {profile.name} · {dict.footer.role}
        </p>
        <ul className="flex gap-5 font-mono text-xs">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-fg"
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
