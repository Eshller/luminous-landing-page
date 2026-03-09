"use client";

import { useState, useEffect, RefObject } from "react";

/**
 * Returns 0–1 progress for a "reveal" as the user scrolls.
 * 0 = section top at bottom of viewport (just entering).
 * 1 = section top at revealEndRatio from top of viewport (e.g. 30% = fully revealed).
 */
export function useScrollRevealProgress(
  ref: RefObject<HTMLElement | null>,
  options?: { revealEndRatio?: number }
): number {
  const [progress, setProgress] = useState(0);
  const revealEndRatio = options?.revealEndRatio ?? 0.3;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const top = rect.top;
      // progress 0 when section top is at bottom of viewport
      // progress 1 when section top is at revealEndRatio * vh from top
      const start = vh;
      const end = revealEndRatio * vh;
      const range = start - end;
      const raw = (start - top) / range;
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref, revealEndRatio]);

  return progress;
}
