"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Glowing node-network visual — right column asset (interactive: cursor spotlight + nodes react to proximity)
const NODES = [
  { x: 20, y: 25, r: 4 },
  { x: 50, y: 18, r: 6 },
  { x: 80, y: 28, r: 4 },
  { x: 35, y: 55, r: 5 },
  { x: 65, y: 52, r: 4 },
  { x: 50, y: 78, r: 5 },
  { x: 15, y: 60, r: 3 },
  { x: 85, y: 65, r: 3 },
  { x: 50, y: 42, r: 7 },
];
const EDGES = [
  [0, 1], [1, 2], [1, 4], [0, 3], [3, 5], [4, 5], [2, 4], [0, 6], [3, 6],
  [2, 7], [4, 7], [1, 8], [3, 8], [4, 8], [5, 8], [8, 2], [8, 0],
];

const CURSOR_RADIUS = 18;
const NODE_PROXITY_RADIUS = 22;

function dist(x1: number, y1: number, x2: number, y2: number) {
  return Math.hypot(x2 - x1, y2 - y1);
}

function NodeNetworkVisual({ interactive = true }: { interactive?: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!interactive || !svgRef.current) return;
      const svg = svgRef.current;
      const pt = svg.createSVGPoint();
      pt.x = e.clientX;
      pt.y = e.clientY;
      const svgPt = pt.matrixTransform(svg.getScreenCTM()?.inverse());
      setCursor({ x: svgPt.x, y: svgPt.y });
    },
    [interactive]
  );
  const handleMouseLeave = useCallback(() => setCursor(null), []);

  return (
    <div
      className="relative aspect-4/3 w-full max-w-lg overflow-hidden rounded-2xl border border-white/6 bg-black/40 backdrop-blur-sm md:aspect-square md:max-w-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        ref={svgRef}
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <filter id="glow-node-methodology" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-line-methodology" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="line-grad-methodology" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(216,109,252,0.2)" />
            <stop offset="50%" stopColor="rgba(216,109,252,0.5)" />
            <stop offset="100%" stopColor="rgba(216,109,252,0.2)" />
          </linearGradient>
          {/* Cursor-following spotlight (interactive); gradientUnits 0–1 */}
          {interactive && cursor && (
            <radialGradient
              id="cursor-spotlight-methodology"
              gradientUnits="userSpaceOnUse"
              cx={cursor.x}
              cy={cursor.y}
              r={CURSOR_RADIUS}
              fx={cursor.x}
              fy={cursor.y}
            >
              <stop offset="0%" stopColor="rgba(216,109,252,0.25)" />
              <stop offset="60%" stopColor="rgba(216,109,252,0.06)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          )}
        </defs>
        {/* Cursor spotlight overlay */}
        {interactive && cursor && (
          <circle
            cx={cursor.x}
            cy={cursor.y}
            r={CURSOR_RADIUS}
            fill="url(#cursor-spotlight-methodology)"
            className="pointer-events-none"
          />
        )}
        {/* Edges — brighten when either endpoint is near cursor */}
        <g filter="url(#glow-line-methodology)">
          {EDGES.map(([a, b], i) => {
            const nA = NODES[a];
            const nB = NODES[b];
            const nearCursor =
              interactive &&
              cursor &&
              (dist(cursor.x, cursor.y, nA.x, nA.y) < NODE_PROXITY_RADIUS ||
                dist(cursor.x, cursor.y, nB.x, nB.y) < NODE_PROXITY_RADIUS);
            return (
              <line
                key={`edge-${i}`}
                x1={nA.x}
                y1={nA.y}
                x2={nB.x}
                y2={nB.y}
                stroke="url(#line-grad-methodology)"
                strokeWidth={nearCursor ? 0.7 : 0.4}
                strokeOpacity={nearCursor ? 1 : 0.9}
              />
            );
          })}
        </g>
        {/* Nodes — scale + brightness when cursor is near */}
        <g filter="url(#glow-node-methodology)">
          {NODES.map((node, i) => {
            const d = cursor && interactive ? dist(cursor.x, cursor.y, node.x, node.y) : Infinity;
            const near = d < NODE_PROXITY_RADIUS;
            const t = near ? 1 - d / NODE_PROXITY_RADIUS : 0; // 0..1
            const r = node.r + t * 1.5;
            const opacity = 0.35 + t * 0.45;
            return (
              <circle
                key={`node-${i}`}
                cx={node.x}
                cy={node.y}
                r={r}
                fill={`rgba(216, 109, 252, ${opacity})`}
                className="animate-pulse"
                style={{
                  animationDuration: near ? "1.2s" : "3s",
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            );
          })}
        </g>
        {/* Core node highlight */}
        <circle
          cx={50}
          cy={42}
          r={4}
          fill="rgba(255,255,255,0.9)"
          className="animate-pulse"
          style={{ animationDuration: "2.5s" }}
        />
      </svg>
      {/* Overlay gradient for depth */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, transparent 30%, rgba(0,0,0,0.4) 100%)",
        }}
      />
    </div>
  );
}

const BULLETS = [
  {
    title: "Elite Vetting",
    body: "Only the top 1% of applicants pass our technical benchmarking.",
  },
  {
    title: "Bounty-Based Incentives",
    body: "Aligning compensation with complex problem-solving, not hourly metrics.",
  },
  {
    title: "Embedded QA",
    body: "Multi-step verification natively integrated into the annotation workflow.",
  },
] as const;

export function ProprietaryMethodologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.88", "start 0.2"],
  });

  const accentLineOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 0.45]);
  const kickerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const kickerY = useTransform(scrollYProgress, [0, 0.1], [16, 0]);
  const subheadOpacity = useTransform(scrollYProgress, [0.06, 0.16], [0, 1]);
  const subheadY = useTransform(scrollYProgress, [0.06, 0.16], [12, 0]);
  const headlineOpacity = useTransform(scrollYProgress, [0.1, 0.24], [0, 1]);
  const headlineY = useTransform(scrollYProgress, [0.1, 0.24], [20, 0]);
  const bodyOpacity = useTransform(scrollYProgress, [0.16, 0.38], [0, 1]);
  const bodyY = useTransform(scrollYProgress, [0.16, 0.38], [16, 0]);
  const bulletsOpacity = useTransform(scrollYProgress, [0.28, 0.5], [0, 1]);
  const bulletsY = useTransform(scrollYProgress, [0.28, 0.5], [20, 0]);
  const visualOpacity = useTransform(scrollYProgress, [0.15, 0.42], [0, 1]);
  const visualScale = useTransform(scrollYProgress, [0.15, 0.42], [0.96, 1]);

  if (reducedMotion) {
    return (
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-black px-6 py-24 md:px-14 md:py-32"
        aria-labelledby="methodology-heading"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 80% 50%, rgba(216, 109, 252, 0.05) 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <p
              className="mb-2 text-[0.6875rem] font-medium uppercase tracking-[0.35em]"
              style={{ fontFamily: "var(--font-inter)", color: "var(--brand)" }}
            >
              Beyond Crowdsourcing
            </p>
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/70"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              The Human Difference
            </p>
            <h2
              id="methodology-heading"
              className="mb-6 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-tight text-white md:mb-8"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              Intelligence cannot be crowdsourced. It must be engineered.
            </h2>
            <div className="space-y-4 text-white/80" style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(0.9375rem,1.5vw,1.0625rem)", lineHeight: 1.65 }}>
              <p>
                Legacy data platforms rely on lowest-common-denominator consensus from global click-farms. But training foundation models for complex logic, system design, and AI safety requires deep domain expertise, not just sheer volume.
              </p>
              <p>
                We orchestrate elite teams of specialized professionals—from senior software engineers to specialized researchers. By utilizing bounty-based incentives and rigorous, multi-tiered QA pipelines, we guarantee empirical accuracy and nuanced reasoning.
              </p>
            </div>
            <ul className="mt-8 space-y-4 md:mt-10">
              {BULLETS.map((b) => (
                <li key={b.title} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--brand)" aria-hidden />
                  <div>
                    <span className="font-semibold text-white" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.9375rem" }}>{b.title}:</span>
                    <span className="text-white/75" style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem" }}> {b.body}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <NodeNetworkVisual interactive={!reducedMotion} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black px-6 py-24 md:px-14 md:py-32"
      aria-labelledby="methodology-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 80% 50%, rgba(216, 109, 252, 0.05) 0%, transparent 55%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="pointer-events-none absolute right-6 top-[clamp(6rem,18vw,10rem)] select-none text-[clamp(4rem,18vw,12rem)] font-semibold leading-none tracking-tighter text-white md:right-14"
        style={{
          fontFamily: "var(--font-geist-sans)",
          opacity: 0.035,
          WebkitTextStroke: "1px rgba(255,255,255,0.08)",
        }}
        aria-hidden
      >
        04
      </div>

      <motion.div
        className="absolute left-1/2 top-[clamp(4rem,10vw,5rem)] h-px w-full max-w-[min(88vw,56rem)] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--brand) 20%, var(--brand) 80%, transparent 100%)",
          opacity: accentLineOpacity,
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* Left column: copy */}
        <div>
          <motion.p
            className="mb-2 text-[0.6875rem] font-medium uppercase tracking-[0.35em]"
            style={{
              fontFamily: "var(--font-inter)",
              color: "var(--brand)",
              opacity: kickerOpacity,
              y: kickerY,
            }}
          >
            Beyond Crowdsourcing
          </motion.p>
          <motion.p
            className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/70"
            style={{
              fontFamily: "var(--font-inter)",
              opacity: subheadOpacity,
              y: subheadY,
            }}
          >
            The Human Difference
          </motion.p>
          <motion.h2
            id="methodology-heading"
            className="mb-6 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-tight text-white md:mb-8"
            style={{
              fontFamily: "var(--font-geist-sans)",
              opacity: headlineOpacity,
              y: headlineY,
            }}
          >
            Intelligence cannot be crowdsourced. It must be engineered.
          </motion.h2>
          <motion.div
            className="space-y-4 text-white/80"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(0.9375rem,1.5vw,1.0625rem)",
              lineHeight: 1.65,
              opacity: bodyOpacity,
              y: bodyY,
            }}
          >
            <p>
              Legacy data platforms rely on lowest-common-denominator consensus from global click-farms. But training foundation models for complex logic, system design, and AI safety requires deep domain expertise, not just sheer volume.
            </p>
            <p>
              We orchestrate elite teams of specialized professionals—from senior software engineers to specialized researchers. By utilizing bounty-based incentives and rigorous, multi-tiered QA pipelines, we guarantee empirical accuracy and nuanced reasoning.
            </p>
          </motion.div>
          <motion.ul
            className="mt-8 space-y-4 md:mt-10"
            style={{ opacity: bulletsOpacity, y: bulletsY }}
          >
            {BULLETS.map((b) => (
              <li key={b.title} className="flex gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--brand)"
                  aria-hidden
                />
                <div>
                  <span
                    className="font-semibold text-white"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: "0.9375rem",
                    }}
                  >
                    {b.title}:
                  </span>
                  <span
                    className="text-white/75"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.875rem",
                    }}
                  >
                    {" "}
                    {b.body}
                  </span>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right column: visual */}
        <div className="flex justify-center lg:justify-end">
          <motion.div
            className="w-full max-w-lg md:max-w-none"
            style={{
              opacity: visualOpacity,
              scale: visualScale,
            }}
          >
            <NodeNetworkVisual interactive={!reducedMotion} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
