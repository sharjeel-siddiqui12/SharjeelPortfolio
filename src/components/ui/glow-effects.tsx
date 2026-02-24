"use client";
import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

// ---- GlowCard ----
interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({
  children,
  className = "",
  glowColor = "rgba(99,102,241,0.35)",
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: "50%", y: "50%", opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlow({ x: `${x}%`, y: `${y}%`, opacity: 1 });
  };

  const handleMouseLeave = () => setGlow((g) => ({ ...g, opacity: 0 }));

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        background: `radial-gradient(circle at ${glow.x} ${glow.y}, ${glowColor}, transparent 60%)`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{ opacity: glow.opacity }}
      />
      {children}
    </div>
  );
}

// ---- FloatingDots ----
interface FloatingDotsProps {
  count?: number;
  className?: string;
}

const DOTS = [
  { size: 6, color: "bg-blue-400", delay: 0 },
  { size: 4, color: "bg-cyan-400", delay: 0.3 },
  { size: 8, color: "bg-violet-400", delay: 0.6 },
  { size: 5, color: "bg-blue-300", delay: 0.9 },
  { size: 3, color: "bg-indigo-400", delay: 1.2 },
  { size: 7, color: "bg-cyan-300", delay: 1.5 },
  { size: 4, color: "bg-blue-500", delay: 0.4 },
  { size: 6, color: "bg-violet-300", delay: 0.8 },
];

export function FloatingDots({ count = 6, className = "" }: FloatingDotsProps) {
  const dots = DOTS.slice(0, Math.min(count, DOTS.length));

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ contain: "layout style paint" }}
    >
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${dot.color} opacity-60`}
          style={{
            width: dot.size,
            height: dot.size,
            left: `${10 + (i / dots.length) * 80}%`,
            top: `${20 + Math.sin(i * 1.8) * 40}%`,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + i * 0.4,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ---- GlowingBorder ----
interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
}

export function GlowingBorder({ children, className = "" }: GlowingBorderProps) {
  return (
    <div className={`relative rounded-2xl p-px ${className}`}>
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500 via-cyan-500 to-violet-500 opacity-70 blur-sm" />
      <div className="relative rounded-2xl bg-white dark:bg-neutral-950">
        {children}
      </div>
    </div>
  );
}
