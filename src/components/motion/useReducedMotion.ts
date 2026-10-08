"use client";

import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";

function subscribe(cb: () => void) {
  const mq = matchMedia(query);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

/** true si el sistema pide reducir movimiento. En el servidor asume que no. */
export function useReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => matchMedia(query).matches,
    () => false,
  );
}
