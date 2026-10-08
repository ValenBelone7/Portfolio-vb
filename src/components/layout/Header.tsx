import { localizePath, type Dictionary, type Locale } from "@/i18n";
import { LanguageSwitch } from "./LanguageSwitch";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";
import { ScrollProgress } from "./ScrollProgress";
import { ThemeToggle } from "./ThemeToggle";

/** Barra borgoña de borde a borde: continúa el hero y queda fija arriba. */
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
    <header className="sticky top-0 z-40 bg-wine text-cream">
      <div className="shell relative flex h-16 items-center justify-between gap-6">
        <a href={home} className="group font-display text-2xl leading-none">
          Valentín <span className="italic text-blush">Belone</span>
        </a>

        <nav aria-label={dict.nav.label} className="hidden lg:block">
          <NavLinks items={items} variant="bar" />
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitch text={dict.language.switchTo} label={dict.language.switchLabel} />
          <ThemeToggle label={dict.theme.toggle} />
          <a
            href={`${home}#contact`}
            className="ml-2 hidden h-9 items-center rounded-md bg-cream px-4 font-mono text-[11px] tracking-[0.14em] text-wine uppercase transition-colors hover:bg-blush sm:inline-flex"
          >
            {dict.nav.talk}
          </a>
          <MobileNav
            items={[...items, { id: "contact", label: dict.nav.contact, href: `${home}#contact` }]}
            openLabel={dict.nav.openMenu}
            closeLabel={dict.nav.closeMenu}
          />
        </div>
        <ScrollProgress />
      </div>
    </header>
  );
}
