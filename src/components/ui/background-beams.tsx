"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [paths, setPaths] = useState<string[]>([]);

  // Generate random paths only on the client to avoid hydration mismatch
  useEffect(() => {
    const newPaths: string[] = [];
    for (let i = 0; i < 5; i++) {
      const startX = Math.random() * 100;
      const cp1X = Math.random() * 100;
      const cp1Y = Math.random() * 50 + 20;
      const cp2X = Math.random() * 100;
      const cp2Y = Math.random() * 50 + 50;
      const endX = Math.random() * 100;
      newPaths.push(
        `M${startX} 0 C${cp1X} ${cp1Y} ${cp2X} ${cp2Y} ${endX} 100`
      );
    }
    setPaths(newPaths);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Only animate when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      style={{ contain: "layout style paint" }}
    >
      <svg
        className="absolute h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        style={{ willChange: "auto" }}
      >
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59,130,246,0)" />
            <stop offset="50%" stopColor="rgba(59,130,246,0.3)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0)" />
          </linearGradient>
          <linearGradient
            id="beam-gradient-2"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(139,92,246,0)" />
            <stop offset="50%" stopColor="rgba(139,92,246,0.2)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0)" />
          </linearGradient>
        </defs>
        {paths.map((path, i) => (
          <path
            key={i}
            d={path}
            stroke={i % 2 === 0 ? "url(#beam-gradient)" : "url(#beam-gradient-2)"}
            strokeWidth="0.15"
            className={isVisible ? "animate-beam" : ""}
            style={{
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`, // Slower animations
              opacity: isVisible ? undefined : 0,
            }}
          />
        ))}
      </svg>
    </div>
  );
};
