"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Dictionary } from "@/i18n";
import { Lightbox, type Shot } from "./Lightbox";

type Props = {
  shots: Shot[];
  device: "desktop" | "mobile";
  labels: Dictionary["carousel"];
  /** Texto de la barra del navegador simulado (solo desktop). */
  address?: string;
  /** Imagen prioritaria (la primera captura visible al cargar). */
  priority?: boolean;
};

/**
 * Carrusel de capturas: se arrastra, avanza solo (se pausa al interactuar o con el
 * mouse encima) y abre cada captura en grande. Desktop va en un marco de navegador;
 * mobile muestra varias pantallas a la vez en marcos de teléfono.
 */
export function ScreenshotCarousel({ shots, device, labels, address, priority }: Props) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: device === "mobile" ? "start" : "center" }, [
    Autoplay({ delay: 4500, stopOnInteraction: true, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const onSelect = useCallback(() => embla && setSelected(embla.selectedScrollSnap()), [embla]);
  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla, onSelect]);

  // Sin autoplay si el sistema pide reducir movimiento.
  useEffect(() => {
    if (embla && matchMedia("(prefers-reduced-motion: reduce)").matches) embla.plugins().autoplay?.stop();
  }, [embla]);

  const arrow =
    "panel-strong inline-flex size-10 items-center justify-center rounded-full text-fg transition-transform hover:scale-105 active:scale-95";

  const slides = (
    <div ref={emblaRef} className="overflow-hidden" aria-roledescription="carousel">
      <div className={`flex touch-pan-y ${device === "mobile" ? "-ml-4" : ""}`}>
        {shots.map((shot, i) => (
          <div
            key={shot.src.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} ${labels.of} ${shots.length}`}
            className={
              device === "mobile"
                ? "min-w-0 shrink-0 grow-0 basis-1/2 pl-4 sm:basis-1/3"
                : "min-w-0 shrink-0 grow-0 basis-full"
            }
          >
            <button
              type="button"
              onClick={() => setLightbox(i)}
              aria-label={`${labels.open}: ${shot.alt}`}
              className={`group/shot relative block w-full cursor-zoom-in overflow-hidden ${
                device === "mobile" ? "rounded-[1.75rem] border-[6px] border-[#0B0D10] shadow-xl" : "aspect-[16/10]"
              }`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                placeholder="blur"
                priority={priority && i === 0}
                sizes={device === "mobile" ? "(min-width: 640px) 240px, 45vw" : "(min-width: 1024px) 680px, 100vw"}
                className={`transition-transform duration-700 group-hover/shot:scale-[1.03] ${
                  device === "mobile" ? "h-auto w-full" : "h-full w-full object-contain"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {device === "desktop" ? (
        <div className="overflow-hidden rounded-2xl border border-line bg-[#0B0D10] shadow-[0_30px_60px_-25px_rgb(0_0_0/0.55)]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#C6F432]" />
            <span className="size-2.5 rounded-full bg-white/25" />
            <span className="size-2.5 rounded-full bg-white/25" />
            {address && (
              <span className="mx-auto truncate rounded-full bg-white/5 px-4 py-1 font-mono text-[11px] text-[#8B95A3]">
                {address}
              </span>
            )}
          </div>
          {slides}
        </div>
      ) : (
        slides
      )}

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          {shots.map((shot, i) => (
            <button
              key={shot.src.src}
              type="button"
              onClick={() => embla?.scrollTo(i)}
              aria-label={`${labels.goTo} ${i + 1}`}
              aria-current={selected === i ? "true" : undefined}
              className="group/dot flex h-6 min-w-6 items-center justify-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  selected === i ? "w-7 bg-accent" : "w-1.5 bg-muted/40 group-hover/dot:bg-muted"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className={arrow} onClick={() => embla?.scrollPrev()} aria-label={labels.prev}>
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button type="button" className={arrow} onClick={() => embla?.scrollNext()} aria-label={labels.next}>
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <Lightbox shots={shots} index={lightbox} onChange={setLightbox} labels={labels} />
    </div>
  );
}
