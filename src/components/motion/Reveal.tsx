type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Desplazamiento inicial en px. */
  y?: number;
  /** "span" para usarlo dentro de contenido en línea (p. ej. un <h1>). */
  as?: "div" | "span";
};

/**
 * Aparece con un fade hacia arriba la primera vez que entra en pantalla.
 * Solo marca el elemento: la animación es CSS y el observer es RevealScript.
 */
export function Reveal({ children, className, delay = 0, y = 24, as = "div" }: Props) {
  const Tag = as;
  return (
    <Tag
      data-reveal=""
      className={as === "span" ? `block ${className ?? ""}` : className}
      style={{ "--reveal-delay": `${delay}s`, "--reveal-y": `${y}px` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
