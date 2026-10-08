/**
 * Fondo fijo de todo el sitio: dos brillos que se desplazan lento, una grilla
 * sutil y grano. Es lo que el vidrio deja ver por detrás.
 */
export function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="absolute -top-1/4 -left-1/4 size-[70vmax] animate-drift rounded-full bg-[radial-gradient(circle,var(--glow-1),transparent_62%)] will-change-transform" />
      <div className="absolute -right-1/4 -bottom-1/3 size-[75vmax] animate-drift-slow rounded-full bg-[radial-gradient(circle,var(--glow-2),transparent_62%)] will-change-transform" />
      <div className="absolute inset-0 bg-[linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_top,black,transparent_75%)] bg-size-[64px_64px]" />
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
