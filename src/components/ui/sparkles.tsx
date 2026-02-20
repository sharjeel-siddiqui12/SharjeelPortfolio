"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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

const SparklesCore = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const randomDelay = () => Math.random() * 2;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute inline-block h-1 w-1 rounded-full bg-blue-400"
          animate={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: [0, randomOpacity(), 0],
            scale: [0, 1, 0],
            x: [0, randomMove() * 20],
            y: [0, randomMove() * 20],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: randomDelay(),
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
