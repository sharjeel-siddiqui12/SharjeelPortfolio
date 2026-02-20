"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const GlowingStarsCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      className={cn(
        "h-full max-h-[20rem] w-full max-w-md rounded-xl border border-neutral-200 bg-white p-6 dark:border-[#eaeaea]/[0.1] dark:bg-[#0a0a0a]",
        className
      )}
    >
      <div className="flex items-center justify-center">
        <Illustration mouseEnter={mouseEnter} />
      </div>
      <div className="px-2 pb-6">{children}</div>
    </div>
  );
};

export const GlowingStarsTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h2
      className={cn(
        "text-lg font-bold text-neutral-800 dark:text-[#eaeaea]",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const GlowingStarsDescription = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "max-w-[16rem] text-sm text-neutral-600 dark:text-[#eaeaea]",
        className
      )}
    >
      {children}
    </p>
  );
};

const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
  const stars = 108;
  const columns = 18;
  const [glowingStars, setGlowingStars] = useState<number[]>([]);

  const highlightedStars = useRef<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * stars)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-48 w-full p-1"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "1px",
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = (starIdx % 10) * 0.1;
        const staticDelay = starIdx * 0.01;
        return (
          <div
            key={`matrix-col-${starIdx}`}
            className="relative flex items-center justify-center"
          >
            <Star
              isGlowing={mouseEnter ? isGlowing : false}
              delay={mouseEnter ? delay : staticDelay}
            />
            {mouseEnter && isGlowing && <Glow delay={delay} />}
          </div>
        );
      })}
    </div>
  );
};

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  return (
    <div
      className={cn(
        "relative z-20 h-[1px] w-[1px] rounded-full",
        isGlowing ? "bg-blue-500 shadow-2xl shadow-blue-400" : "bg-neutral-500 dark:bg-neutral-600"
      )}
      style={{
        transitionDelay: delay + "s",
      }}
    />
  );
};

const Glow = ({ delay }: { delay: number }) => {
  return (
    <div
      className="absolute left-1/2 z-10 h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-blue-500 shadow-2xl shadow-blue-400 blur-[1px]"
      style={{
        animation: `pulse 2s infinite`,
        animationDelay: delay + "s",
      }}
    />
  );
};

import { useRef } from "react";
