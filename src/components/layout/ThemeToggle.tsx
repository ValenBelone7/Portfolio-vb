"use client";

export function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    const apply = () => {
      root.dataset.theme = next;
    };
    // Transición suave entre temas donde el navegador lo soporta.
    if ("startViewTransition" in document && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Sin storage (modo privado, etc.): el cambio vale solo para esta visita.
    }
  }

  // Los íconos se alternan por CSS según data-theme, así el HTML del servidor
  // y el del cliente coinciden y no hace falta estado.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="group inline-flex size-10 items-center justify-center rounded-full text-cream/75 transition-colors hover:bg-cream/10 hover:text-cream"
    >
      <svg
        className="size-[18px] transition-transform duration-500 group-hover:-rotate-12 dark:hidden"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg
        className="hidden size-[18px] transition-transform duration-700 group-hover:rotate-90 dark:block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
