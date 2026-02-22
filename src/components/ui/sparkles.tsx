"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const Sparkles = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={cn("relative inline-block", className)}>
      <SparklesCore />
      <span className="relative z-10">{children}</span>
    </span>
  );
};

// Optimized: Use CSS animations instead of Framer Motion, reduced from 12 to 6 sparkles
const SparklesCore = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Pre-generate static positions
  const sparkles = [
    { top: "10%", left: "15%", delay: "0s" },
    { top: "30%", left: "80%", delay: "0.5s" },
    { top: "60%", left: "25%", delay: "1s" },
    { top: "20%", left: "60%", delay: "1.5s" },
    { top: "70%", left: "70%", delay: "2s" },
    { top: "50%", left: "40%", delay: "2.5s" },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden" style={{ contain: "layout style" }}>
      {isVisible && sparkles.map((s, i) => (
        <span
          key={i}
          className="absolute inline-block h-1 w-1 rounded-full bg-blue-400 animate-sparkle"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
};

export const GridBackground = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0",
        className
      )}
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    />
  );
};

export const DotBackground = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    />
  );
};
