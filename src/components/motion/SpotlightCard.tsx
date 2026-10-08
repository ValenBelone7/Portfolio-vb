"use client";

/** Tarjeta con brillo que sigue al cursor, sin inclinación (para grillas densas). */
export function SpotlightCard({ children, className }: { children: React.ReactNode; className?: string }) {
  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div onPointerMove={onPointerMove} className={`spotlight ${className ?? ""}`}>
      {children}
    </div>
  );
}
