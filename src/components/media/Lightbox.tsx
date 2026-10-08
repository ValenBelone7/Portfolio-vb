"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

export type Shot = { src: StaticImageData; alt: string };

type Props = {
  shots: Shot[];
  /** Índice abierto, o null si está cerrado. */
  index: number | null;
  onChange: (index: number | null) => void;
  labels: { prev: string; next: string; close: string; of: string };
};

/** Visor a pantalla completa con <dialog> nativo: Escape cierra, flechas navegan. */
export function Lightbox({ shots, index, onChange, labels }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = index !== null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const go = (delta: number) => {
    if (index === null) return;
    onChange((index + delta + shots.length) % shots.length);
  };

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  }

  const shot = index !== null ? shots[index] : null;
  const btn =
    "glass-strong inline-flex size-11 items-center justify-center rounded-full text-fg transition-transform hover:scale-105 active:scale-95";

  return (
    <dialog
      ref={ref}
      onClose={() => onChange(null)}
      onKeyDown={onKeyDown}
      onClick={(e) => e.target === e.currentTarget && onChange(null)}
      className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-[#071626]/85 backdrop:backdrop-blur-md"
    >
      {shot && (
        <div className="flex h-dvh w-screen flex-col items-center justify-center gap-4 p-4 sm:p-8">
          <Image
            src={shot.src}
            alt={shot.alt}
            sizes="100vw"
            className="h-auto max-h-[78dvh] w-auto max-w-full rounded-xl border border-white/10 object-contain shadow-2xl"
          />
          <p className="max-w-2xl text-center text-sm text-[#F0EEE9]">{shot.alt}</p>
          <div className="flex items-center gap-3">
            <button type="button" className={btn} onClick={() => go(-1)} aria-label={labels.prev}>
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <span className="font-mono text-xs text-[#A9B4C0]">
              {index! + 1} {labels.of} {shots.length}
            </span>
            <button type="button" className={btn} onClick={() => go(1)} aria-label={labels.next}>
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <button type="button" className={btn} onClick={() => onChange(null)} aria-label={labels.close}>
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
