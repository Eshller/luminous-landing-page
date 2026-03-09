"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollRevealProgress } from "@/hooks/useScrollRevealProgress";

const STEALTH_LINE =
  "Trusted by: Y Combinator Backed AI Labs • Frontier Foundation Model Developers • Enterprise NLP Teams • Stealth Generative AI Startups";

const ECOSYSTEM_ITEMS: { name: string; logo: string | null }[] = [
  { name: "OpenAI", logo: "/logo/openAI.svg" },
  { name: "Meta (Llama)", logo: "/logo/meta.svg" },
  { name: "Hugging Face", logo: "/logo/huggingFace.svg" },
  { name: "LangChain", logo: "/logo/langChain.svg" },
  { name: "Databricks", logo: "/logo/databricks.svg" },
  { name: "Ollama", logo: "/logo/ollama.svg" },
];

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

export function TrustEcosystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollRevealProgress(sectionRef, { revealEndRatio: 0.32 });
  const reducedMotion = useReducedMotion();

  const p = reducedMotion ? 1 : progress;
  const eased = easeOutCubic(p);
  const y = 72 * (1 - eased);
  const opacity = 0.25 + 0.75 * eased;
  const scale = 0.97 + 0.03 * eased;
  const lineScale = Math.min(1, eased * 1.2);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black pt-0 pb-[clamp(4rem,12vw,7rem)]"
      aria-labelledby="trust-heading"
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
        01
      </div>
      {/* Soft top edge */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-24 w-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)",
        }}
      />

      {/* Scroll-driven: divider line draws in */}
      <div
        className="mx-auto h-px w-full max-w-[min(90vw,72rem)] px-6"
        style={{ transformOrigin: "50% 50%" }}
      >
        <div
          className="h-full w-full transition-transform duration-150"
          style={{
            transform: `scaleX(${lineScale})`,
            background:
              "linear-gradient(90deg, transparent 0%, var(--brand) 20%, var(--brand) 80%, transparent 100%)",
            opacity: 0.8,
          }}
        />
      </div>

      {/* Scroll-driven: whole content block rises, fades, and scales in */}
      <motion.div
        className="origin-top"
        style={{
          y,
          opacity,
          scale,
        }}
      >
        {/* Stealth marquee */}
        <div className="mb-14 mt-12 overflow-hidden border-y border-white/5 py-4">
          <motion.div
            className="flex w-max items-center whitespace-nowrap"
            animate={reducedMotion ? {} : { x: [0, "-50%"] }}
            transition={
              reducedMotion
                ? {}
                : { x: { duration: 55, repeat: Infinity, ease: "linear" } }
            }
            style={{ width: "max-content" }}
          >
            {[1, 2].map((n) => (
              <span
                key={n}
                className="pr-16 text-[clamp(0.6875rem,1vw,0.8125rem)] font-medium uppercase tracking-[0.25em] text-white/40"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {STEALTH_LINE}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Copy block */}
        <div className="mx-auto max-w-[52ch] px-6 text-center md:px-10">
          <p
            id="trust-heading"
            className="text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-white/85"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Delivering proprietary data for Y-Combinator backed labs and stealth
            foundation models. Formatted natively for:
          </p>
        </div>

        {/* Ecosystem logo marquee */}
        <div className="mt-[clamp(3rem,8vw,5rem)] overflow-hidden border-t border-white/5 pt-[clamp(2rem,5vw,3rem)]">
          <motion.div
            className="flex w-max items-center py-2"
            animate={reducedMotion ? {} : { x: [0, "-50%"] }}
            transition={
              reducedMotion
                ? {}
                : { x: { duration: 40, repeat: Infinity, ease: "linear" } }
            }
            style={{ width: "max-content" }}
          >
            {[1, 2].map((copy) => (
              <div
                key={copy}
                className="flex items-center pr-[clamp(4rem,12vw,8rem)]"
                style={{ gap: "clamp(4rem, 12vw, 8rem)" }}
              >
                {ECOSYSTEM_ITEMS.map((item) => (
                  <div
                    key={`${copy}-${item.name}`}
                    className="flex h-[clamp(2rem,4vw,2.75rem)] min-w-[clamp(4rem,10vw,6rem)] flex-shrink-0 items-center justify-center grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                    title={item.name}
                  >
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={96}
                        height={32}
                        className="h-full w-auto max-w-full object-contain object-center"
                      />
                    ) : (
                      <span
                        className="text-[clamp(0.8125rem,1.1vw,0.9375rem)] font-medium tracking-[0.05em] text-white/50 transition-colors hover:text-white/75"
                        style={{ fontFamily: "var(--font-geist-sans), var(--font-inter), sans-serif" }}
                      >
                        {item.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
