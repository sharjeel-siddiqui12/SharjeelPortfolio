"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    const generatePaths = () => {
      const newPaths: string[] = [];
      for (let i = 0; i < 8; i++) {
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
    };
    generatePaths();
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <svg
        ref={svgRef}
        className="absolute h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
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
            className="animate-beam"
            style={{
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
};
