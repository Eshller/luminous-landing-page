"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      className="relative flex h-[32rem] justify-between gap-10 overflow-y-auto rounded-2xl bg-white/40 backdrop-blur-sm border border-white/30 p-10 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/20"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 first:mt-0">
              <motion.h2
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold text-[#313755]"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{ duration: 0.3 }}
                className="text-base mt-6 max-w-md text-text-subtle leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-20" />
        </div>
      </div>
      <div
        className={cn(
          "sticky top-0 hidden h-72 w-96 flex-shrink-0 overflow-hidden rounded-2xl shadow-xl lg:block",
          contentClassName,
        )}
      >
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="h-full w-full"
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </div>
    </div>
  );
};
