"use client";
import { useState, useEffect } from "react";

/**
 * Detect mobile / low-performance devices.
 * Uses screen width + touch capability as heuristics.
 * Result is stable after first client render.
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
      const isNarrow = window.innerWidth < breakpoint;
      setIsMobile(isTouchDevice || isNarrow);
    };

    check();

    // Only listen for resize, not continuous — debounced
    let timeout: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(check, 200);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(timeout);
    };
  }, [breakpoint]);

  return isMobile;
}

/**
 * Static check (no hook, no re-render) for use inside useEffect.
 * Prefer `useIsMobile` in component bodies.
 */
export function checkIsMobile(breakpoint = 768): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    window.innerWidth < breakpoint
  );
}
