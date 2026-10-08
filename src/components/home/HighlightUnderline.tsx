/** Trazo a mano alzada que se dibuja debajo de la palabra destacada del hero (CSS). */
export function HighlightUnderline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 20"
      preserveAspectRatio="none"
      className="absolute -bottom-2 left-0 h-3 w-full overflow-visible text-accent"
    >
      <path
        d="M2 14 C 60 4, 120 4, 180 10 S 270 16, 298 6"
        pathLength={1}
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="1"
        strokeDashoffset="1"
        className="animate-draw motion-reduce:[stroke-dashoffset:0]"
      />
    </svg>
  );
}
