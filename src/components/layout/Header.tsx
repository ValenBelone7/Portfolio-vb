import { localizePath, type Dictionary, type Locale } from "@/i18n";
import { LanguageSwitch } from "./LanguageSwitch";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";
import { ScrollProgress } from "./ScrollProgress";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const home = localizePath("/", locale);
  // Anclas absolutas para que funcionen también desde los casos de estudio.
  const items = [
    { id: "projects", label: dict.nav.projects },
    { id: "experience", label: dict.nav.experience },
    { id: "skills", label: dict.nav.skills },
    { id: "about", label: dict.nav.about },
    { id: "contact", label: dict.nav.contact },
  ].map((i) => ({ ...i, href: `${home}#${i.id}` }));

  return (
    <header className="sticky top-3 z-40 px-3 sm:top-4 sm:px-6">
      <div className="glass-strong relative mx-auto flex h-14 bg-[color-mix(in_srgb,var(--bg)_78%,transparent)] max-w-6xl items-center justify-between gap-4 rounded-full pr-2 pl-5 shadow-[0_8px_32px_-12px_rgb(0_0_0/0.35)]">
        <a href={home} className="group font-display text-lg font-semibold tracking-tight">
          valentín
          <span className="inline-block text-accent transition-transform duration-300 group-hover:scale-150">.</span>
          belone
        </a>

        <nav aria-label={dict.nav.label} className="hidden lg:block">
          <NavLinks items={items} />
        </nav>

        <div className="flex items-center gap-1.5">
          <LanguageSwitch text={dict.language.switchTo} label={dict.language.switchLabel} />
          <ThemeToggle label={dict.theme.toggle} />
          <MobileNav items={items} openLabel={dict.nav.openMenu} closeLabel={dict.nav.closeMenu} />
        </div>
        <ScrollProgress />
      </div>
    </header>
  );
}
