"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function SmoothCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate on pointer-fine (non-touch) devices
    if (
      typeof window === "undefined" ||
      typeof document === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches
    )
      return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Reveal cursors
    gsap.set([dot, ring], { opacity: 1 });

    // Centre near viewport midpoint initially so no flash to 0,0
    gsap.set([dot, ring], {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      gsap.to(dot, { x, y, duration: 0.08, ease: "power1.out" });
      gsap.to(ring, { x, y, duration: 0.42, ease: "power2.out" });
    };

    const onEnter = () => {
      gsap.to(ring, {
        scale: 1.9,
        borderColor: "rgba(96,165,250,0.75)",
        backgroundColor: "rgba(96,165,250,0.06)",
        duration: 0.28,
        ease: "power2.out",
      });
      gsap.to(dot, { scale: 0, duration: 0.22, ease: "power2.in" });
    };

    const onLeave = () => {
      gsap.to(ring, {
        scale: 1,
        borderColor: "rgba(255,255,255,0.55)",
        backgroundColor: "transparent",
        duration: 0.28,
        ease: "power2.out",
      });
      gsap.to(dot, { scale: 1, duration: 0.22, ease: "power2.out" });
    };

    const onDown = () =>
      gsap.to(ring, { scale: 0.72, duration: 0.12, ease: "power2.in" });
    const onUp = () =>
      gsap.to(ring, { scale: 1, duration: 0.18, ease: "power2.out" });

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    // Attach hover listeners to all interactive elements
    const attachListeners = () => {
      const targets = document.querySelectorAll<Element>(
        "a, button, [role='button'], input, label, select, textarea, [tabindex='0'], [data-hover]"
      );
      targets.forEach((el) => {
        el.addEventListener("mouseenter", onEnter as EventListener);
        el.addEventListener("mouseleave", onLeave as EventListener);
      });
      return targets;
    };

    let attached = attachListeners();

    // Re-attach after potential dynamic content changes (SPA navigation)
    const observer = new MutationObserver(() => {
      attached = attachListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      attached.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter as EventListener);
        el.removeEventListener("mouseleave", onLeave as EventListener);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Inner dot — instant follower */}
      <div ref={dotRef} className="smooth-cursor-dot" aria-hidden="true" />
      {/* Outer ring — lagged follower */}
      <div ref={ringRef} className="smooth-cursor-ring" aria-hidden="true" />
    </>
  );
}
