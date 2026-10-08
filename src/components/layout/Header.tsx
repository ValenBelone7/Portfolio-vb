import { localizePath, type Dictionary, type Locale } from "@/i18n";
import { HeaderFrame } from "./HeaderFrame";
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
  ].map((i) => ({ ...i, href: `${home}#${i.id}` }));

  return (
    <HeaderFrame>
      <div className="flex h-14 items-center justify-between gap-4 pr-2 pl-3">
        <a href={home} className="group flex items-center gap-2.5 font-mono text-sm">
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-full bg-signal font-display text-[10px] font-bold text-stage transition-transform duration-500 group-hover:rotate-[360deg]"
          >
            VB
          </span>
          <span className="sr-only sm:not-sr-only">valentin.belone</span>
        </a>

        <nav aria-label={dict.nav.label} className="hidden lg:block">
          <NavLinks items={items} variant="bar" />
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitch text={dict.language.switchTo} label={dict.language.switchLabel} />
          <ThemeToggle label={dict.theme.toggle} />
          <a
            href={`${home}#contact`}
            className="ml-1 hidden h-9 items-center gap-2 rounded-full bg-signal px-4 font-mono text-xs text-stage transition-[gap] hover:gap-3 sm:inline-flex"
          >
            {dict.nav.talk}
            <span aria-hidden="true">→</span>
          </a>
          <MobileNav
            items={[...items, { id: "contact", label: dict.nav.contact, href: `${home}#contact` }]}
            openLabel={dict.nav.openMenu}
            closeLabel={dict.nav.closeMenu}
          />
        </div>
      </div>
      <ScrollProgress />
    </HeaderFrame>
  );
}
