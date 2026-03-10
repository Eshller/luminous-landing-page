"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Monochromatic icons per capability — top-right of each card (sleek, low-opacity)
function CardIcon({ id, className = "" }: { id: string; className?: string }) {
  const size = 52;
  const stroke = 1.1;
  const opacity = 0.2;
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: `text-white ${className}`,
  };
  switch (id) {
    case "agentic":
      // Branching nodes / workflow graph
      return (
        <svg {...common} aria-hidden>
          <circle cx="24" cy="12" r="3" opacity={opacity} />
          <circle cx="14" cy="28" r="3" opacity={opacity} />
          <circle cx="34" cy="28" r="3" opacity={opacity} />
          <path d="M24 15v6M24 21l-10 7M24 21l10 7" opacity={opacity} />
        </svg>
      );
    case "rlhf":
      // Check / reward
      return (
        <svg {...common} aria-hidden>
          <circle cx="24" cy="24" r="12" opacity={opacity} />
          <path d="M16 24l6 6 12-12" opacity={opacity} />
        </svg>
      );
    case "sft":
      // Layered reasoning steps
      return (
        <svg {...common} aria-hidden>
          <path d="M12 18h24M12 24h20M12 30h16" opacity={opacity} />
          <path d="M8 18l3 3-3 3M8 24l3 3-3 3M8 30l3 3-3 3" opacity={opacity * 0.8} />
        </svg>
      );
    case "simulation":
      // Isometric container / env
      return (
        <svg {...common} aria-hidden>
          <path d="M24 10L8 20v16l16 10 16-10V20L24 10z" opacity={opacity} />
          <path d="M24 10v28M8 20l16 10 16-10M8 36l16 10 16-10" opacity={opacity * 0.7} />
        </svg>
      );
    default:
      return null;
  }
}

const CARDS = [
  {
    id: "agentic",
    headline: "Agentic Workflow Traces",
    body: "We deliver high-volume, keystroke-level telemetry captured via custom IDEs. Train sophisticated software agents using comprehensive execution traces that document file navigation, terminal commands, and developer thought processes.",
    className: "sm:col-start-1 sm:col-end-3 sm:row-start-1",
    isHero: true,
  },
  {
    id: "rlhf",
    headline: "RLHF & Alignment",
    body: "Shape foundation model behavior with custom reward modeling. We utilize nuanced human preference judgments to ensure AI safety, complex instruction following, and strict adherence to enterprise logic.",
    className: "sm:col-start-3 sm:col-end-4 sm:row-start-1",
    isHero: false,
  },
  {
    id: "sft",
    headline: "SFT & Reasoning",
    body: "Surpass benchmark plateaus. We provide rigorously verified data structures, algorithmic challenges, and system design reasoning paths crafted step-by-step by elite software engineers.",
    className: "sm:col-start-1 sm:col-end-2 sm:row-start-2",
    isHero: false,
  },
  {
    id: "simulation",
    headline: "Simulation & RL Environments",
    body: "Ship models with confidence. We supply highly secure, dockerized repositories equipped with robust testing harnesses for repository-wide code evaluation and agent verification.",
    className: "sm:col-start-2 sm:col-end-4 sm:row-start-2",
    isHero: false,
  },
] as const;

const EXTRA_CARDS = [
  {
    title: "Multi‑Modal Annotations",
    body: "High-fidelity labeling across text, code, images, and video for complex evaluation and training regimes.",
  },
  {
    title: "Code‑Gen & Debugging",
    body: "Curated datasets that teach models to write, analyze, and repair production-grade software systems.",
  },
  {
    title: "Domain‑Specific SFT",
    body: "Custom supervised fine‑tuning for specialized domains like finance, healthcare, legal, and enterprise SaaS.",
  },
  {
    title: "Advanced Reasoning",
    body: "Multi-step logical reasoning tracks and hard problem sets that push models beyond benchmark plateaus.",
  },
  {
    title: "Multi‑Turn Conversation",
    body: "Dialogue workflows that test memory, safety, style, and persona consistency across long-horizon chats.",
  },
  {
    title: "Text‑to‑SQL & Structured I/O",
    body: "Paired natural language and structured outputs for BI copilots, analytics agents, and data workflows.",
  },
  {
    title: "RAG Training & Eval",
    body: "Human‑verified retrieval traces and judgments to tune and benchmark retrieval‑augmented generation stacks.",
  },
  {
    title: "Model Evaluation",
    body: "Human‑in‑the‑loop eval suites that measure correctness, safety, latency trade‑offs, and production fitness.",
  },
  {
    title: "Indic & Multilingual Workflows",
    body: "Evaluation and training data for Indic languages and other under‑resourced locales your models must support.",
  },
] as const;

const CARD_BASE_CLASS =
  "relative flex min-w-0 min-h-0 w-full flex-col self-start rounded-2xl border p-6 text-left overflow-hidden md:p-8 lg:p-10";

const GLASS_STYLE = {
  borderColor: "rgba(255,255,255,0.06)",
  backgroundColor: "rgba(255,255,255,0.03)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
} as const;

const HERO_GLASS_STYLE = {
  ...GLASS_STYLE,
  borderColor: "rgba(216, 109, 252, 0.12)",
  backgroundColor: "rgba(255,255,255,0.04)",
  boxShadow:
    "inset 0 1px 0 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(216, 109, 252, 0.06)",
} as const;

type HoverSpot = { cardId: string; x: number; y: number } | null;

export function CoreCapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [hoverSpot, setHoverSpot] = useState<HoverSpot>(null);
  const [hoverCapable, setHoverCapable] = useState(false);

  // Prevent weird touch behavior on mobile (scroll can trigger mouse events).
  // Only enable hover glow on devices with real hover + fine pointer.
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      setHoverCapable(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
    } catch (_) {
      setHoverCapable(false);
    }
  }, []);

  const handleCardMouseMove = (cardId: string) => (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setHoverSpot({ cardId, x, y });
  };
  const handleCardMouseLeave = () => setHoverSpot(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.88", "start 0.2"],
  });

  const overlineOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);
  const overlineY = useTransform(scrollYProgress, [0, 0.12], [12, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.06, 0.2], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.06, 0.2], [24, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const card1Y = useTransform(scrollYProgress, [0.15, 0.35], [32, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.2, 0.38], [0, 1]);
  const card2Y = useTransform(scrollYProgress, [0.2, 0.38], [32, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.28, 0.45], [0, 1]);
  const card3Y = useTransform(scrollYProgress, [0.28, 0.45], [32, 0]);
  const card4Opacity = useTransform(scrollYProgress, [0.35, 0.52], [0, 1]);
  const card4Y = useTransform(scrollYProgress, [0.35, 0.52], [32, 0]);
  const accentLineOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 0.4]);

  const cardTransforms = [
    { opacity: card1Opacity, y: card1Y },
    { opacity: card2Opacity, y: card2Y },
    { opacity: card3Opacity, y: card3Y },
    { opacity: card4Opacity, y: card4Y },
  ];

  if (reducedMotion) {
    return (
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-[#050814] px-6 py-24 md:px-14 md:py-32"
        aria-labelledby="capabilities-heading"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(216, 109, 252, 0.07) 0%, transparent 55%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <p
            className="mb-3 text-[0.6875rem] font-medium uppercase tracking-[0.35em] md:mb-4"
            style={{ fontFamily: "var(--font-inter)", color: "var(--brand)" }}
          >
            What we deliver
          </p>
          <h2
            id="capabilities-heading"
            className="mb-14 text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white md:mb-20"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Core Capabilities
          </h2>
          <div className="grid w-full grid-cols-1 grid-rows-[auto_auto] items-start gap-4 sm:grid-cols-3 md:gap-5 lg:gap-6">
            {CARDS.map((card) => (
              <div
                key={card.id}
                className={`${CARD_BASE_CLASS} ${card.className}`}
                style={card.isHero ? HERO_GLASS_STYLE : GLASS_STYLE}
              >
                <div className="absolute right-4 top-4 md:right-5 md:top-5" aria-hidden>
                  <CardIcon id={card.id} />
                </div>
                <h3
                  className={`font-semibold tracking-tight text-white ${card.isHero ? "mb-4 text-xl md:mb-5 md:text-2xl lg:text-[1.75rem]" : "mb-3 text-lg md:mb-4 md:text-xl"}`}
                  style={{ fontFamily: "var(--font-geist-sans)" }}
                >
                  {card.headline}
                </h3>
                <p
                  className="text-sm leading-relaxed text-white/75 md:text-base md:leading-relaxed"
                  style={{
                    fontFamily: "var(--font-inter)",
                    maxWidth: card.isHero ? "44ch" : undefined,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14 border-t border-white/10 pt-8">
            <p
              className="mb-5 text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-white/50"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Additional capabilities
            </p>
            <div className="grid gap-4 text-sm text-white/80 md:grid-cols-3 md:gap-5">
              {EXTRA_CARDS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/2 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
                >
                  <h3
                    className="text-sm font-semibold tracking-tight text-white md:text-[0.95rem]"
                    style={{ fontFamily: "var(--font-geist-sans)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-2 text-[0.8rem] leading-relaxed text-white/75 md:text-[0.85rem]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#050814] px-6 py-24 md:px-14 md:py-32"
      aria-labelledby="capabilities-heading"
    >
      {/* Ambient — brand orb */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(216, 109, 252, 0.07) 0%, transparent 55%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Editorial: section number */}
      <div
        className="pointer-events-none absolute right-6 top-[clamp(6rem,18vw,10rem)] select-none text-[clamp(4rem,18vw,12rem)] font-semibold leading-none tracking-tighter text-white md:right-14"
        style={{
          fontFamily: "var(--font-geist-sans)",
          opacity: 0.035,
          WebkitTextStroke: "1px rgba(255,255,255,0.08)",
        }}
        aria-hidden
      >
        03
      </div>

      {/* Top accent */}
      <motion.div
        className="absolute left-1/2 top-[clamp(4rem,10vw,5rem)] h-px w-full max-w-[min(88vw,56rem)] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--brand) 20%, var(--brand) 80%, transparent 100%)",
          opacity: accentLineOpacity,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.p
          className="mb-3 text-[0.6875rem] font-medium uppercase tracking-[0.35em] md:mb-4"
          style={{
            fontFamily: "var(--font-inter)",
            color: "var(--brand)",
            opacity: overlineOpacity,
            y: overlineY,
          }}
        >
          What we deliver
        </motion.p>
        <motion.h2
          id="capabilities-heading"
          className="mb-14 text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white md:mb-20"
          style={{
            fontFamily: "var(--font-geist-sans)",
            opacity: titleOpacity,
            y: titleY,
          }}
        >
          Core Capabilities
        </motion.h2>

        <div className="grid w-full grid-cols-1 grid-rows-[auto_auto] items-start gap-4 sm:grid-cols-3 md:gap-5 lg:gap-6">
          {CARDS.map((card, i) => {
            const { opacity, y } = cardTransforms[i];
            const cardStyle = card.isHero ? HERO_GLASS_STYLE : GLASS_STYLE;
            const isHovered = hoverCapable && hoverSpot?.cardId === card.id;
            const glowAt = isHovered && hoverSpot ? hoverSpot : null;
            return (
              <motion.div
                key={card.id}
                className={`${CARD_BASE_CLASS} ${card.className}`}
                style={{
                  ...cardStyle,
                  opacity,
                  y,
                }}
                initial={false}
                onMouseMove={hoverCapable ? handleCardMouseMove(card.id) : undefined}
                onMouseLeave={hoverCapable ? handleCardMouseLeave : undefined}
                whileHover={{
                  scale: 1.015,
                  backgroundColor: "rgba(255,255,255,0.06)",
                  borderColor: card.isHero
                    ? "rgba(216, 109, 252, 0.28)"
                    : "rgba(255,255,255,0.14)",
                  boxShadow: card.isHero
                    ? "inset 0 1px 0 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(216, 109, 252, 0.2), 0 24px 48px -12px rgba(0,0,0,0.4)"
                    : "inset 0 1px 0 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.08), 0 20px 40px -16px rgba(0,0,0,0.35)",
                }}
                transition={{ type: "tween", duration: 0.25 }}
              >
                {/* Mouse-tracking radial glow — follows cursor on hover */}
                {glowAt && (
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      background: `radial-gradient(circle 50% at ${glowAt.x}% ${glowAt.y}%, ${card.isHero ? "rgba(216,109,252,0.2)" : "rgba(216,109,252,0.12)"}, transparent 70%)`,
                    }}
                    aria-hidden
                  />
                )}
                <div className="absolute right-4 top-4 md:right-5 md:top-5" aria-hidden>
                  <CardIcon id={card.id} />
                </div>
                <h3
                  className={`font-semibold tracking-tight text-white ${card.isHero ? "mb-4 text-xl md:mb-5 md:text-2xl lg:text-[1.75rem]" : "mb-3 text-lg md:mb-4 md:text-xl"}`}
                  style={{ fontFamily: "var(--font-geist-sans)" }}
                >
                  {card.headline}
                </h3>
                <p
                  className="text-sm leading-relaxed text-white/75 md:text-base md:leading-relaxed"
                  style={{
                    fontFamily: "var(--font-inter)",
                    maxWidth: card.isHero ? "44ch" : undefined,
                  }}
                >
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-14 border-t border-white/10 pt-8">
          <p
            className="mb-5 text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-white/50"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Additional capabilities
          </p>
          <div className="grid gap-4 text-sm text-white/80 md:grid-cols-3 md:gap-5">
            {EXTRA_CARDS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/2 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
              >
                <h3
                  className="text-sm font-semibold tracking-tight text-white md:text-[0.95rem]"
                  style={{ fontFamily: "var(--font-geist-sans)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-2 text-[0.8rem] leading-relaxed text-white/75 md:text-[0.85rem]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
