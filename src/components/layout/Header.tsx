import { localizePath, type Dictionary, type Locale } from "@/i18n";
import { LanguageSwitch } from "./LanguageSwitch";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const home = localizePath("/", locale);
  // Anclas absolutas para que funcionen también desde los casos de estudio.
  const anchor = (id: string) => `${home}#${id}`;
  const items = [
    { href: anchor("projects"), label: dict.nav.projects },
    { href: anchor("experience"), label: dict.nav.experience },
    { href: anchor("skills"), label: dict.nav.skills },
    { href: anchor("about"), label: dict.nav.about },
    { href: anchor("contact"), label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href={home} className="font-mono text-sm font-semibold tracking-tight">
          valentin<span className="text-accent">.</span>belone
        </a>

        <nav aria-label={dict.nav.label} className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-muted transition-colors hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch text={dict.language.switchTo} label={dict.language.switchLabel} />
          <ThemeToggle label={dict.theme.toggle} />
          <MobileNav items={items} openLabel={dict.nav.openMenu} closeLabel={dict.nav.closeMenu} />
        </div>
      </div>
    </header>
  );
}
