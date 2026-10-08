import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // Hay un root layout por idioma: el 404 de URLs desconocidas necesita su propio documento.
    globalNotFound: true,
  },
  // El CV viejo puede seguir enlazado desde LinkedIn u otros sitios.
  async redirects() {
    return [
      {
        source: "/CV_Valentin_Belone_Desarrollador_Software.pdf",
        destination: "/CV_Valentin_Belone_Backend.pdf",
        permanent: true,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
