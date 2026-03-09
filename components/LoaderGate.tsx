"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreloadAssets } from "@/hooks/usePreloadAssets";
import { Loader } from "./Loader";

const EXIT_DURATION_MS = 1200;

// Award-style: circular iris close — loader collapses into center, revealing content
const CIRCLE_REVEAL = {
  open: "circle(150vmax at 50% 50%)",
  closed: "circle(0% at 50% 50%)",
};

export function LoaderGate({ children }: { children: React.ReactNode }) {
  const { progress, isComplete } = usePreloadAssets();
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");

  useEffect(() => {
    if (!isComplete) return;
    setPhase("exiting");
    const t = setTimeout(() => setPhase("done"), EXIT_DURATION_MS);
    return () => clearTimeout(t);
  }, [isComplete]);

  return (
    <>
      {/* Content sits behind loader so the circle reveal uncovers it */}
      {(phase === "exiting" || phase === "done") && (
        <div className="relative z-0">{children}</div>
      )}

      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            initial={{ clipPath: CIRCLE_REVEAL.open }}
            exit={{
              clipPath: CIRCLE_REVEAL.closed,
              transition: {
                duration: EXIT_DURATION_MS / 1000,
                ease: [0.65, 0, 0.35, 1],
              },
            }}
            className="fixed inset-0 z-[100]"
            style={{ clipPath: CIRCLE_REVEAL.open }}
          >
            <Loader progress={phase === "exiting" ? 100 : progress} />
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
