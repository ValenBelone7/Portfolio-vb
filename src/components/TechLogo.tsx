import { techIcons, type TechIcon } from "@/content/tech-icons";

/** Colores de marca muy oscuros (Next.js, GitHub, JWT, Django) no se ven en modo oscuro. */
function isDark(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.12;
}

/**
 * Logo de Simple Icons. Por defecto toma el color del texto; con `brand` pasa al
 * color de la marca al hacer hover sobre el ancestro `.group`.
 */
export function TechLogo({ icon, className, brand = false }: { icon: TechIcon; className?: string; brand?: boolean }) {
  const { path, hex } = techIcons[icon];
  const style = brand && !isDark(hex) ? ({ "--brand": hex } as React.CSSProperties) : undefined;
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={style}
      className={`fill-current transition-colors duration-300 ${style ? "group-hover:fill-(--brand)" : ""} ${className ?? ""}`}
    >
      <path d={path} />
    </svg>
  );
}
