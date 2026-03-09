"use client";

import { useState, useEffect } from "react";

export function useImagePreloader(
  urls: string[]
): {
  images: (HTMLImageElement | null)[];
  isReady: boolean;
  error: Error | null;
} {
  const [images, setImages] = useState<(HTMLImageElement | null)[]>(() =>
    urls.map(() => null)
  );
  const [loadedCount, setLoadedCount] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (urls.length === 0) {
      setImages([]);
      setLoadedCount(0);
      return;
    }

    const result: (HTMLImageElement | null)[] = [];
    let completed = 0;

    const checkReady = () => {
      completed += 1;
      if (completed === urls.length) {
        setImages([...result]);
        setLoadedCount(urls.length);
      }
    };

    urls.forEach((url, i) => {
      const img = new Image();
      img.onload = () => {
        result[i] = img;
        checkReady();
      };
      img.onerror = () => {
        result[i] = null;
        setError((e) => e || new Error(`Failed to load image: ${url}`));
        checkReady();
      };
      img.src = url;
    });

    return () => {
      result.forEach((img) => img?.decode?.().catch(() => {}) ?? null);
    };
  }, [urls.join(",")]);

  const isReady = loadedCount === urls.length && urls.length > 0;

  return { images, isReady, error };
}
