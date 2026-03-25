"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type LoaderProps = {
  progress: number;
};

export function Loader({ progress }: LoaderProps) {
  const pct = Math.round(progress);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-black"
      aria-live="polite"
      aria-label="Loading"
    >
      {/* Single soft glow — no clutter */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(59, 79, 128, 0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Brand logo */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/klarve-ai.png"
            alt="Klarve"
            width={420}
            height={120}
            priority
            className="h-auto w-[min(84vw,420px)]"
          />
        </motion.div>

        {/* Progress bar: one thin line */}
        <motion.div
          className="mb-6 h-px w-[min(280px,80vw)] overflow-hidden rounded-full bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="h-full rounded-full bg-[var(--brand)]"
            initial={{ scaleX: 0 }}
            style={{ originX: 0 }}
            animate={{ scaleX: pct / 100 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Percentage — large, refined */}
        <motion.span
          className="tabular-nums text-[clamp(2rem,6vw,3.5rem)] font-light tracking-tight text-white/90"
          style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {pct}
          <span className="ml-0.5 text-white/50">%</span>
        </motion.span>

        {/* Label — minimal, wide tracking */}
        <motion.p
          className="mt-8 text-[11px] font-medium uppercase tracking-[0.35em] text-white/40"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Loading
        </motion.p>
      </div>

      {/* Optional: very subtle bottom line accent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand)]/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "50% 50%" }}
      />
    </div>
  );
}
