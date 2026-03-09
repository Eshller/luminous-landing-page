"use client";

import { useState, useEffect } from "react";

/**
 * On iOS (iPhone, iPad), video autoplay is blocked and a paused video looks broken.
 * Android plays video fine, so we only use static hero on iOS.
 */
export function usePrefersStaticHero(): boolean {
  const [preferStatic, setPreferStatic] = useState(true);

  useEffect(() => {
    const isIOS =
      typeof navigator !== "undefined" &&
      /iPhone|iPad|iPod/i.test(navigator.userAgent);
    setPreferStatic(isIOS);
  }, []);

  return preferStatic;
}
