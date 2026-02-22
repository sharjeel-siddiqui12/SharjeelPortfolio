"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * A thin gradient progress bar that grows across the top of the viewport as
 * the user scrolls through the page. Pure GSAP — zero Framer Motion overhead.
 */
export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const bar = barRef.current;
    if (!bar) return;

    // Set initial state
    gsap.set(bar, { scaleX: 0 });

    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        gsap.set(bar, { scaleX: self.progress });
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed left-0 top-0 z-[9999] h-[3px] w-full origin-left"
      style={{
        background: "linear-gradient(90deg, #3b82f6 0%, #06b6d4 40%, #a855f7 80%, #ec4899 100%)",
        transform: "scaleX(0)",
        boxShadow: "0 0 10px rgba(59,130,246,0.8), 0 0 20px rgba(139,92,246,0.4)",
      }}
    />
  );
}
