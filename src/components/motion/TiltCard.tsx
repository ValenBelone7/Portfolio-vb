"use client";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Inclinación máxima en grados. */
  max?: number;
};

/**
 * Tarjeta con inclinación 3D según la posición del cursor y brillo que lo sigue
 * (utilidades `tilt` y `spotlight` de globals.css). Solo con mouse.
 */
export function TiltCard({ children, className, max = 6 }: Props) {
  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--rx", `${(0.5 - y) * 2 * max}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 2 * max}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  }

  function onPointerLeave(e: React.PointerEvent<HTMLDivElement>) {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  }

  return (
    <div className="h-full perspective-[1200px]">
      <div
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className={`spotlight tilt h-full ${className ?? ""}`}
      >
        {children}
      </div>
    </div>
  );
}
