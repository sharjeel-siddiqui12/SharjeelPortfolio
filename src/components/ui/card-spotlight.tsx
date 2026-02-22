"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent, ReactNode, useRef, useCallback } from "react";

export const CardSpotlight = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const lastUpdate = useRef(0);

  const handleMouseMove = useCallback(({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) => {
    // Throttle to ~30fps
    const now = performance.now();
    if (now - lastUpdate.current < 33) return;
    lastUpdate.current = now;
    
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }, [mouseX, mouseY]);

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-white/[0.1] dark:bg-neutral-900 ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};

export const CardSpotlightBorder = ({
  children,
  className = "",
  spotlightColor = "rgba(59, 130, 246, 0.5)",
}: {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const lastUpdate = useRef(0);

  const handleMouseMove = useCallback(({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) => {
    // Throttle to ~30fps
    const now = performance.now();
    if (now - lastUpdate.current < 33) return;
    lastUpdate.current = now;
    
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }, [mouseX, mouseY]);

  return (
    <div
      className={`group relative overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight border effect */}
      <motion.div
        className="pointer-events-none absolute -inset-[1px] rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Content with background */}
      <div className="relative rounded-xl border border-neutral-200 bg-white dark:border-white/[0.1] dark:bg-neutral-900">
        {children}
      </div>
    </div>
  );
};
