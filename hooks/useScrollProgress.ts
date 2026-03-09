"use client";

import { useState, useEffect, RefObject } from "react";

/**
 * Returns scroll progress 0–1 for a given section ref (e.g. the 400vh hero wrapper).
 * progress = (scrollY - sectionTop) / (sectionHeight - viewportHeight), clamped to [0, 1].
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const top = el.offsetTop;
      const height = el.offsetHeight;
      const vh = window.innerHeight;
      const scrollY = window.scrollY ?? document.documentElement.scrollTop;
      const maxScroll = height - vh;
      if (maxScroll <= 0) {
        setProgress(1);
        return;
      }
      const p = (scrollY - top) / maxScroll;
      setProgress(Math.max(0, Math.min(1, p)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref]);

  return progress;
}
