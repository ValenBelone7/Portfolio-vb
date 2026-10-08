import type { Localized } from "./types";

// Fuente: PORTFOLIO_CONTEXT.md, sección 3. Usar los valores exactamente así.
export const metrics: { value: Localized; label: Localized }[] = [
  {
    value: { es: "4", en: "4" },
    label: {
      es: "sistemas de gestión en producción para clientes",
      en: "management systems in production for clients",
    },
  },
  {
    value: { es: "300–400", en: "300–400" },
    label: {
      es: "contratos de alquiler activos administrados por Contrata",
      en: "active rental contracts managed with Contrata",
    },
  },
  {
    value: { es: "+1.400", en: "1,400+" },
    label: {
      es: "usuarios verificados en la mini app de Criptodery",
      en: "verified users in the Criptodery Mini App",
    },
  },
  {
    value: { es: "21", en: "21" },
    label: {
      es: "variables de mercado en el índice de riesgo de Criptodery",
      en: "market variables in Criptodery's risk index",
    },
  },
];
