"use client";

import { useState, useEffect, useRef } from "react";

const ASSETS = [
  { type: "video" as const, src: "/bg.mp4" },
  { type: "video" as const, src: "/loop.mp4" },
];

const MIN_DISPLAY_MS = 2200;

function preloadVideos(sources: string[]): Promise<void> {
  const promises = sources.map(
    (src) =>
      new Promise<void>((resolve) => {
        const video = document.createElement("video");
        video.preload = "auto";
        video.muted = true;
        video.playsInline = true;
        const onReady = () => {
          video.removeEventListener("canplaythrough", onReady);
          video.removeEventListener("error", onError);
          resolve();
        };
        const onError = () => {
          video.removeEventListener("canplaythrough", onReady);
          video.removeEventListener("error", onError);
          resolve();
        };
        video.addEventListener("canplaythrough", onReady);
        video.addEventListener("error", onError);
        video.src = src;
        video.load();
      })
  );
  return Promise.all(promises).then(() => {});
}

export function usePreloadAssets(): {
  progress: number;
  isComplete: boolean;
} {
  const [progress, setProgress] = useState(0);
  const [assetsReady, setAssetsReady] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const startRef = useRef(0);
  const assetsReadyRef = useRef(false);
  assetsReadyRef.current = assetsReady;

  useEffect(() => {
    startRef.current = performance.now();
    preloadVideos(ASSETS.map((a) => a.src)).then(() => setAssetsReady(true));
  }, []);

  useEffect(() => {
    let raf = 0;
    const tick = (now: number) => {
      const start = startRef.current;
      const elapsed = now - start;
      const smooth = Math.min(100, (elapsed / MIN_DISPLAY_MS) * 100);
      setProgress(smooth);

      const done = elapsed >= MIN_DISPLAY_MS && assetsReadyRef.current;
      if (done) {
        setProgress(100);
        setIsComplete(true);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return { progress, isComplete };
}
