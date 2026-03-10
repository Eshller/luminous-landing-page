"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const LINES: { start: number; end: number; text: string }[] = [
  {
    start: 0,
    end: 0.22,
    text: "Foundation models have hit the \"Synthetic Wall.\"",
  },
  {
    start: 0.18,
    end: 0.42,
    text:
      "Raw compute and scraped web data built the baseline. But scaling parameters is no longer enough to cross the threshold into true autonomous reasoning.",
  },
  {
    start: 0.38,
    end: 0.65,
    text:
      "Relying purely on synthetic data loops inevitably leads to model collapse. The next generation of AI isn't bottlenecked by the availability of GPUs—it's bottlenecked by the absence of high-fidelity, human-verified logic.",
  },
  {
    start: 0.6,
    end: 0.9,
    text: "To train frontier intelligence, you need frontier human data.",
  },
];

export function DataGapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  // Progress 0 = section top at viewport center (section in view); 1 = section top at viewport top.
  // So the animation runs while you're actually looking at the section, not before you get there.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.5", "start start"],
  });

  const overlineOpacity = useTransform(scrollYProgress, [0, 0.18], [0, 0.9]);
  const topLineOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.5]);
  const bottomLineOpacity = useTransform(scrollYProgress, [0.55, 0.8], [0, 0.4]);

  const headlineOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.4], [0, 0.5, 1]);
  const headlineY = useTransform(scrollYProgress, [0.05, 0.25, 0.4], [28, 12, 0]);

  const line2Opacity = useTransform(scrollYProgress, [0.15, 0.35, 0.5], [0, 0.5, 1]);
  const line2Y = useTransform(scrollYProgress, [0.15, 0.35, 0.5], [28, 12, 0]);

  const line3Opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.65], [0, 0.5, 1]);
  const line3Y = useTransform(scrollYProgress, [0.3, 0.5, 0.65], [28, 12, 0]);

  const closingOpacity = useTransform(scrollYProgress, [0.45, 0.65, 0.85], [0, 0.5, 1]);
  const closingY = useTransform(scrollYProgress, [0.45, 0.65, 0.85], [28, 12, 0]);

  if (reducedMotion) {
    return (
      <section
        ref={sectionRef}
        className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 py-28 md:px-14 md:py-36"
        aria-labelledby="data-gap-heading"
      >
        <div
          className="pointer-events-none absolute right-6 top-[clamp(6rem,18vw,10rem)] select-none text-[clamp(4rem,18vw,12rem)] font-semibold leading-none tracking-tighter text-white md:right-14"
          style={{ fontFamily: "var(--font-geist-sans)", opacity: 0.035, WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}
          aria-hidden
        >
          02
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`, backgroundSize: "min(120px, 15vw) min(120px, 15vw)" }} />
        <div className="relative z-10 mx-auto w-full max-w-200">
          <p className="mb-4 text-[0.6875rem] font-medium uppercase tracking-[0.35em] md:mb-5" style={{ fontFamily: "var(--font-inter)", color: "var(--brand)" }}>The Synthetic Wall</p>
          <h2 id="data-gap-heading" className="mb-10 max-w-4xl md:mb-14" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(2.25rem, 6vw, 4.25rem)", fontWeight: 600, lineHeight: 1.12, letterSpacing: "-0.03em", background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.92) 40%, rgba(216, 109, 252, 0.9) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{LINES[0].text}</h2>
          <div className="space-y-6 md:space-y-8">
            {LINES.slice(1, -1).map((line, i) => (
              <p key={i} className="pl-5 md:pl-6" style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.88)", fontSize: "clamp(1rem, 2.1vw, 1.3125rem)", lineHeight: 1.6, borderLeft: "2px solid rgba(216, 109, 252, 0.35)" }}>{line.text}</p>
            ))}
          </div>
          <p className="mt-10 max-w-2xl md:mt-14" style={{ fontFamily: "var(--font-geist-sans)", color: "var(--brand)", fontSize: "clamp(1.25rem, 2.75vw, 1.75rem)", fontWeight: 500, lineHeight: 1.4 }}>{LINES[3].text}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 py-28 md:px-14 md:py-36"
      aria-labelledby="data-gap-heading"
    >
      {/* Section number — editorial */}
      <div
        className="pointer-events-none absolute right-6 top-[clamp(6rem,18vw,10rem)] select-none text-[clamp(4rem,18vw,12rem)] font-semibold leading-none tracking-tighter text-white md:right-14"
        style={{
          fontFamily: "var(--font-geist-sans)",
          opacity: 0.035,
          WebkitTextStroke: "1px rgba(255,255,255,0.08)",
        }}
        aria-hidden
      >
        02
      </div>
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 20%, rgba(216, 109, 252, 0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(216, 109, 252, 0.04) 0%, transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "min(120px, 15vw) min(120px, 15vw)",
        }}
      />

      {/* Top accent line — scroll-driven */}
      <motion.div
        className="absolute left-1/2 top-[clamp(4rem,12vw,6rem)] h-px w-full max-w-[min(88vw,56rem)] -translate-x-1/2"
        style={{
          background: "linear-gradient(90deg, transparent 0%, var(--brand) 15%, var(--brand) 85%, transparent 100%)",
          opacity: topLineOpacity,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-200">
        {/* Overline */}
        <motion.p
          className="mb-4 text-[0.6875rem] font-medium uppercase tracking-[0.35em] md:mb-5"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            opacity: overlineOpacity,
            color: "var(--brand)",
          }}
        >
          The Synthetic Wall
        </motion.p>

        {/* Headline — scroll-linked opacity + y */}
        <motion.h2
          id="data-gap-heading"
          className="mb-10 max-w-4xl md:mb-14"
          style={{
            fontFamily: "var(--font-geist-sans), var(--font-inter), sans-serif",
            opacity: headlineOpacity,
            y: headlineY,
            fontSize: "clamp(2.25rem, 6vw, 4.25rem)",
            fontWeight: 600,
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
            background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.92) 40%, rgba(216, 109, 252, 0.9) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 40px rgba(216, 109, 252, 0.15))",
          }}
        >
          {LINES[0].text}
        </motion.h2>

        {/* Body blocks */}
        <motion.p
          className="pl-5 md:pl-6"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            opacity: line2Opacity,
            y: line2Y,
            color: "rgba(255, 255, 255, 0.88)",
            fontSize: "clamp(1rem, 2.1vw, 1.3125rem)",
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: "0.01em",
            borderLeft: "2px solid rgba(216, 109, 252, 0.35)",
          }}
        >
          {LINES[1].text}
        </motion.p>
        <motion.p
          className="mt-6 pl-5 md:mt-8 md:pl-6"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            opacity: line3Opacity,
            y: line3Y,
            color: "rgba(255, 255, 255, 0.88)",
            fontSize: "clamp(1rem, 2.1vw, 1.3125rem)",
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: "0.01em",
            borderLeft: "2px solid rgba(216, 109, 252, 0.35)",
          }}
        >
          {LINES[2].text}
        </motion.p>

        {/* Closing statement */}
        <motion.p
          className="mt-10 max-w-2xl md:mt-14"
          style={{
            fontFamily: "var(--font-geist-sans), var(--font-inter), sans-serif",
            opacity: closingOpacity,
            y: closingY,
            color: "var(--brand)",
            fontSize: "clamp(1.25rem, 2.75vw, 1.75rem)",
            fontWeight: 500,
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          }}
        >
          {LINES[3].text}
        </motion.p>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-[clamp(4rem,12vw,6rem)] left-1/2 h-px w-full max-w-[min(60vw,32rem)] -translate-x-1/2"
        style={{
          background: "linear-gradient(90deg, transparent 0%, var(--brand) 50%, transparent 100%)",
          opacity: bottomLineOpacity,
        }}
      />
    </section>
  );
}
