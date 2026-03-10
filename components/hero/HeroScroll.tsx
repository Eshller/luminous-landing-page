"use client";

import { useRef, useState, useEffect } from "react";
import { HeroOverlay } from "./HeroOverlay";
import { usePrefersStaticHero } from "@/hooks/usePrefersStaticHero";

const INTRO_VIDEO = "/bg.mp4";
const LOOP_VIDEO = "/loop.mp4";
const SHOW_TEXT_BEFORE_END_S = 2.5;
const CROSSFADE_DURATION_MS = 800;
const STATIC_HERO_TEXT_DELAY_MS = 1200;

type Phase = "intro" | "showing-text" | "looping";

export function HeroScroll() {
  const introRef = useRef<HTMLVideoElement>(null);
  const loopRef = useRef<HTMLVideoElement>(null);
  const preferStaticHero = usePrefersStaticHero();

  const [phase, setPhase] = useState<Phase>("intro");
  const [showText, setShowText] = useState(false);
  const [introOpacity, setIntroOpacity] = useState(1);
  const [loopOpacity, setLoopOpacity] = useState(0);
  const crossfadeDoneRef = useRef(false);

  // Static hero (mobile/iOS): show text after delay and fire consent-banner signal
  useEffect(() => {
    if (!preferStaticHero) return;
    const t = setTimeout(() => {
      setShowText(true);
      setPhase("showing-text");
      window.dispatchEvent(new CustomEvent("adzzat-hero-ready"));
    }, STATIC_HERO_TEXT_DELAY_MS);
    return () => clearTimeout(t);
  }, [preferStaticHero]);

  // Video hero (desktop): normal intro → text near end → loop
  useEffect(() => {
    if (preferStaticHero) return;
    const intro = introRef.current;
    if (!intro) return;

    const onTimeUpdate = () => {
      const duration = intro.duration;
      if (!Number.isFinite(duration)) return;
      const remaining = duration - intro.currentTime;
      if (remaining <= SHOW_TEXT_BEFORE_END_S && phase === "intro") {
        setShowText(true);
        setPhase("showing-text");
      }
    };

    const onEnded = () => {
      if (crossfadeDoneRef.current) return;
      crossfadeDoneRef.current = true;
      setPhase("looping");
      window.dispatchEvent(new CustomEvent("adzzat-hero-ready"));

      const loop = loopRef.current;
      if (loop) {
        loop.currentTime = 0;
        loop.play().catch(() => {});
      }

      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(elapsed / CROSSFADE_DURATION_MS, 1);
        const ease = 1 - (1 - t) ** 2;
        setIntroOpacity(1 - ease);
        setLoopOpacity(ease);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    intro.addEventListener("timeupdate", onTimeUpdate);
    intro.addEventListener("ended", onEnded);
    return () => {
      intro.removeEventListener("timeupdate", onTimeUpdate);
      intro.removeEventListener("ended", onEnded);
    };
  }, [preferStaticHero, phase]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Desktop: video hero */}
      {!preferStaticHero && (
        <>
          <video
            ref={introRef}
            src={INTRO_VIDEO}
            className="absolute inset-0 h-full w-full object-cover"
            muted
            playsInline
            autoPlay
            preload="auto"
            style={{ opacity: introOpacity }}
          />
          <video
            ref={loopRef}
            src={LOOP_VIDEO}
            className="absolute inset-0 h-full w-full object-cover"
            muted
            playsInline
            loop
            preload="auto"
            style={{ opacity: loopOpacity }}
          />
        </>
      )}

      {/* Mobile/iOS: static hero — no video, no paused state, no play button */}
      {preferStaticHero && (
        <div
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            background:
              "linear-gradient(180deg, #050505 0%, #0a0a0a 40%, #000 100%), radial-gradient(ellipse 80% 50% at 50% 30%, rgba(216, 109, 252, 0.08) 0%, transparent 50%)",
          }}
          aria-hidden
        />
      )}

      {/* Shared: overlay + copy */}
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-black transition-opacity duration-700 ease-out"
        style={{ opacity: showText ? 0.82 : 0 }}
        aria-hidden
      />
      <HeroOverlay show={showText} staticHero={preferStaticHero} />
    </section>
  );
}
