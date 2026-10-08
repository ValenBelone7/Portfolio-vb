import type { Locale } from "@/i18n";

type Layer = { y: number; label: string; tech: string; core?: boolean };

const W = 320; // ancho de la losa (vértice izquierdo a derecho)
const H = 184; // alto de la cara superior (proporción isométrica ~30°)
const T = 26; // espesor
const CX = 240; // centro horizontal

function slabPaths(y: number) {
  const l = CX - W / 2;
  const r = CX + W / 2;
  const top = `M${CX} ${y} L${r} ${y + H / 2} L${CX} ${y + H} L${l} ${y + H / 2} Z`;
  const left = `M${l} ${y + H / 2} L${CX} ${y + H} L${CX} ${y + H + T} L${l} ${y + H / 2 + T} Z`;
  const right = `M${CX} ${y + H} L${r} ${y + H / 2} L${r} ${y + H / 2 + T} L${CX} ${y + H + T} Z`;
  return { top, left, right };
}

/**
 * Diagrama isométrico del stack: cliente → API/lógica → datos, con peticiones que
 * bajan por la izquierda y respuestas que suben por la derecha. Reemplaza la foto
 * del hero: muestra el trabajo en lugar de la persona. Animación solo CSS.
 */
export function StackIllustration({ locale }: { locale: Locale }) {
  const layers: Layer[] = [
    { y: 14, label: locale === "es" ? "01 · cliente" : "01 · client", tech: "React · Next.js" },
    {
      y: 156,
      label: locale === "es" ? "02 · api y lógica" : "02 · api & logic",
      tech: "Django REST · JWT",
      core: true,
    },
    { y: 298, label: locale === "es" ? "03 · datos" : "03 · data", tech: "PostgreSQL" },
  ];
  const l = CX - W / 2;
  const r = CX + W / 2;

  return (
    <svg
      viewBox="0 0 480 520"
      role="img"
      aria-label={
        locale === "es"
          ? "Diagrama del stack: cliente React y Next.js, API con Django REST Framework y JWT, base de datos PostgreSQL"
          : "Stack diagram: React and Next.js client, Django REST Framework API with JWT, PostgreSQL database"
      }
      className="h-auto w-full overflow-visible"
    >
      <defs>
        <linearGradient id="slab-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2a323d" />
          <stop offset="1" stopColor="#181d24" />
        </linearGradient>
        <linearGradient id="slab-core" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2d3a1a" />
          <stop offset="1" stopColor="#181d24" />
        </linearGradient>
        <pattern id="slab-grid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M16 0H0V16" fill="none" stroke="#e9ecef" strokeOpacity="0.06" />
        </pattern>
      </defs>

      <g className="animate-[float_7s_ease-in-out_infinite]">
        {/* Conectores entre capas: peticiones a la izquierda, respuestas a la derecha. */}
        {layers.slice(0, -1).map((layer, i) => {
          const from = layer.y + H / 2 + T;
          const to = layers[i + 1].y + H / 2;
          const travel = `${to - from - 6}px`;
          return (
            <g key={`c${i}`}>
              <line x1={l} y1={from} x2={l} y2={to} stroke="#e9ecef" strokeOpacity="0.35" strokeDasharray="3 5" />
              <line x1={r} y1={from} x2={r} y2={to} stroke="#e9ecef" strokeOpacity="0.35" strokeDasharray="3 5" />
              <rect
                x={l - 3}
                y={from}
                width="6"
                height="6"
                fill="#c6f432"
                className="animate-[packet-down_2.4s_linear_infinite]"
                style={{ animationDelay: `${i * 0.8}s`, ["--travel" as string]: travel }}
              />
              <rect
                x={r - 3}
                y={to - 6}
                width="6"
                height="6"
                fill="#e9ecef"
                className="animate-[packet-up_2.4s_linear_infinite]"
                style={{ animationDelay: `${1.2 + i * 0.8}s`, ["--travel" as string]: travel }}
              />
            </g>
          );
        })}

        {/* Capas de abajo hacia arriba para que se superpongan bien. */}
        {[...layers].reverse().map((layer) => {
          const p = slabPaths(layer.y);
          const cy = layer.y + H / 2;
          return (
            <g key={layer.label}>
              <path d={p.left} fill="#11151a" stroke="#e9ecef" strokeOpacity="0.18" />
              <path d={p.right} fill="#0b0e12" stroke="#e9ecef" strokeOpacity="0.18" />
              <path d={p.top} fill={layer.core ? "url(#slab-core)" : "url(#slab-top)"} />
              <path d={p.top} fill="url(#slab-grid)" />
              <path
                d={p.top}
                fill="none"
                stroke={layer.core ? "#c6f432" : "#e9ecef"}
                strokeOpacity={layer.core ? 0.95 : 0.45}
                strokeWidth={layer.core ? 1.6 : 1}
              />
              {/* Texto apoyado sobre la cara superior (proyección isométrica). */}
              <g transform={`matrix(0.866 0.5 -0.866 0.5 ${CX} ${cy})`}>
                <text
                  x="0"
                  y="-12"
                  textAnchor="middle"
                  fill={layer.core ? "#c6f432" : "#8b95a3"}
                  fontSize="13"
                  letterSpacing="1.5"
                  className="font-mono uppercase"
                >
                  {layer.label}
                </text>
                <text x="0" y="14" textAnchor="middle" fill="#e9ecef" fontSize="18" className="font-mono">
                  {layer.tech}
                </text>
              </g>
            </g>
          );
        })}

        {/* Respuesta exitosa flotando junto a la capa de API. */}
        <g className="animate-[blip_4.8s_ease-in-out_infinite]">
          <line
            x1={r - 30}
            y1={layers[1].y + H / 2 - 30}
            x2={r - 6}
            y2={layers[1].y + H / 2 - 6}
            stroke="#c6f432"
            strokeOpacity="0.7"
          />
          <rect x={r - 96} y={layers[1].y + H / 2 - 62} width="104" height="30" rx="15" fill="#c6f432" />
          <text
            x={r - 44}
            y={layers[1].y + H / 2 - 42}
            textAnchor="middle"
            fill="#0b0d10"
            fontSize="13"
            fontWeight="500"
            className="font-mono"
          >
            200 OK
          </text>
        </g>
      </g>
    </svg>
  );
}
