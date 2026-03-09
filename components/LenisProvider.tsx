"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const LENIS_OPTIONS = {
  lerp: 0.08,
  duration: 1.2,
  smoothWheel: true,
  touchMultiplier: 1.2,
} as const;

export function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
