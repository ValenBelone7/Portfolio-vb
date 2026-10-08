// Adaptado de Magic UI (MIT): https://magicui.design/docs/components/marquee

type Props = {
  children: React.ReactNode;
  reverse?: boolean;
  /** Duración de una vuelta. */
  duration?: string;
  repeat?: number;
  className?: string;
};

/** Cinta infinita. Se pausa al pasar el mouse; las copias son decorativas (aria-hidden). */
export function Marquee({ children, reverse = false, duration = "40s", repeat = 3, className }: Props) {
  return (
    <div
      className={`group flex gap-(--gap) overflow-hidden [--gap:1rem] ${className ?? ""}`}
      style={{ "--duration": duration } as React.CSSProperties}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <div
          key={i}
          aria-hidden={i > 0 || undefined}
          className={`flex shrink-0 animate-marquee justify-around gap-(--gap) group-hover:[animation-play-state:paused] ${
            reverse ? "[animation-direction:reverse]" : ""
          }`}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
