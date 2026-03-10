"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FinalCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const accentLineOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 0.6]);
  const contentOpacity = useTransform(scrollYProgress, [0.08, 0.35], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.08, 0.35], [28, 0]);

  const gradientBg = {
    background:
      "linear-gradient(180deg, #0c0814 0%, #0a0a18 35%, #080c1a 70%, #060814 100%), radial-gradient(ellipse 100% 80% at 50% 40%, rgba(30, 40, 72, 0.4) 0%, transparent 55%), radial-gradient(ellipse 80% 60% at 70% 70%, rgba(30, 58, 138, 0.2) 0%, transparent 50%)",
  };

  if (reducedMotion) {
    return (
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden px-6 py-32 md:px-14 md:py-40"
        style={gradientBg}
        aria-labelledby="final-cta-heading"
      >
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2
            id="final-cta-heading"
            className="text-[clamp(2.25rem,5.5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Ready to train past the plateau?
          </h2>
          <p
            className="mt-6 max-w-2xl mx-auto text-white/80"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(1rem,1.5vw,1.125rem)",
              lineHeight: 1.65,
            }}
          >
            Stop gating your foundation model&apos;s potential with commoditized crowdsourcing. Let&apos;s architect a custom data pipeline tailored to your exact evaluation benchmarks.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
            <a
              href="#contact"
              className="inline-flex min-w-[220px] items-center justify-center border-2 border-(--brand) bg-(--brand) px-8 py-4 text-sm font-semibold tracking-[0.06em] text-white shadow-[0_0_32px_rgba(30,40,72,0.5)] transition-all hover:border-[#2a3560] hover:bg-[#2a3560] hover:shadow-[0_0_40px_rgba(30,40,72,0.6)]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Request a Custom Data Pilot
            </a>
            <a
              href="#benchmarks"
              className="inline-flex min-w-[220px] items-center justify-center border-2 border-white/35 bg-transparent px-8 py-4 text-sm font-medium tracking-[0.06em] text-white transition-all hover:border-white/60 hover:bg-white/10"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Initiate Private Benchmarking
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden px-6 py-32 md:px-14 md:py-40"
      style={gradientBg}
      aria-labelledby="final-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="pointer-events-none absolute right-6 top-[clamp(6rem,18vw,10rem)] select-none text-[clamp(4rem,18vw,12rem)] font-semibold leading-none tracking-tighter text-white md:right-14"
        style={{
          fontFamily: "var(--font-geist-sans)",
          opacity: 0.04,
          WebkitTextStroke: "1px rgba(255,255,255,0.1)",
        }}
        aria-hidden
      >
        07
      </div>

      <motion.div
        className="absolute left-1/2 top-[clamp(4rem,10vw,5rem)] h-px w-full max-w-[min(88vw,56rem)] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--brand) 20%, var(--brand) 80%, transparent 100%)",
          opacity: accentLineOpacity,
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center"
        style={{
          opacity: contentOpacity,
          y: contentY,
        }}
      >
        <h2
          id="final-cta-heading"
          className="text-[clamp(2.25rem,5.5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          Ready to train past the plateau?
        </h2>
        <p
          className="mt-6 mx-auto max-w-2xl text-white/80"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(1rem,1.5vw,1.125rem)",
            lineHeight: 1.65,
          }}
        >
          Stop gating your foundation model&apos;s potential with commoditized crowdsourcing. Let&apos;s architect a custom data pipeline tailored to your exact evaluation benchmarks.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
          <a
            href="#contact"
            className="inline-flex min-w-[220px] items-center justify-center border-2 border-(--brand) bg-(--brand) px-8 py-4 text-sm font-semibold tracking-[0.06em] text-white shadow-[0_0_32px_rgba(30,40,72,0.5)] transition-all hover:border-[#2a3560] hover:bg-[#2a3560] hover:shadow-[0_0_40px_rgba(30,40,72,0.6)]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Request a Custom Data Pilot
          </a>
          <a
            href="#benchmarks"
            className="inline-flex min-w-[220px] items-center justify-center border-2 border-white/35 bg-transparent px-8 py-4 text-sm font-medium tracking-[0.06em] text-white transition-all hover:border-white/60 hover:bg-white/10"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Initiate Private Benchmarking
          </a>
        </div>
      </motion.div>
    </section>
  );
}
