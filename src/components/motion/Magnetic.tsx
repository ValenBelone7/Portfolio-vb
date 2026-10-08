"use client";

/** Envuelve un botón para que se acerque levemente al cursor (utilidad `magnetic`). */
export function Magnetic({ children, strength = 0.25 }: { children: React.ReactNode; strength?: number }) {
  function onPointerMove(e: React.PointerEvent<HTMLSpanElement>) {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--tx", `${(e.clientX - (rect.left + rect.width / 2)) * strength}px`);
    el.style.setProperty("--ty", `${(e.clientY - (rect.top + rect.height / 2)) * strength}px`);
  }

  function reset(e: React.PointerEvent<HTMLSpanElement>) {
    e.currentTarget.style.setProperty("--tx", "0px");
    e.currentTarget.style.setProperty("--ty", "0px");
  }

  return (
    <span className="magnetic inline-block" onPointerMove={onPointerMove} onPointerLeave={reset}>
      {children}
    </span>
  );
}
