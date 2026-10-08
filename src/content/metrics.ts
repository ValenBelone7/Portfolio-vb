import type { Localized } from "./types";

type Metric = {
  label: Localized;
  /** Número animado, o texto fijo cuando el dato es un rango. */
  value: { kind: "number"; n: number; prefix?: Localized; suffix?: Localized } | { kind: "text"; text: string };
};

// Fuente: PORTFOLIO_CONTEXT.md, sección 3. Usar los valores exactamente así.
export const metrics: Metric[] = [
  {
    value: { kind: "number", n: 4 },
    label: {
      es: "sistemas de gestión en producción para clientes",
      en: "management systems in production for clients",
    },
  },
  {
    value: { kind: "text", text: "300–400" },
    label: {
      es: "contratos de alquiler activos administrados por Contrata",
      en: "active rental contracts managed with Contrata",
    },
  },
  {
    value: { kind: "number", n: 1400, prefix: { es: "+", en: "" }, suffix: { es: "", en: "+" } },
    label: {
      es: "usuarios verificados en la mini app de Criptodery",
      en: "verified users in the Criptodery Mini App",
    },
  },
  {
    value: { kind: "number", n: 21 },
    label: {
      es: "variables de mercado en el índice de riesgo de Criptodery",
      en: "market variables in Criptodery's risk index",
    },
  },
];
