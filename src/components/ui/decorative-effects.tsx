"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = Array.from({ length: number }, (_, idx) => ({
    id: idx,
    top: Math.floor(Math.random() * 60) - 20,        // -20% to 40% from top
    left: Math.floor(Math.random() * 120) - 10,       // -10% to 110% of width
    delay: (Math.random() * 6).toFixed(2),
    duration: (Math.random() * 6 + 4).toFixed(2),   // 4–10s
    size: Math.random() * 1.5 + 0.5,                  // 0.5–2px head
    tailLength: Math.floor(Math.random() * 120 + 80), // 80–200px tail
  }));

  return (
    <>
      {meteors.map((m) => (
        <span
          key={m.id}
          className={cn(
            "pointer-events-none absolute animate-meteor-fall rounded-full bg-white",
            "before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:content-['']",
            className
          )}
          style={{
            top: `${m.top}%`,
            left: `${m.left}%`,
            width: `${m.size}px`,
            height: `${m.size}px`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
            boxShadow: `0 0 ${m.size * 4}px ${m.size}px rgba(255,255,255,0.6), 0 0 ${m.size * 8}px ${m.size * 2}px rgba(147,197,253,0.3)`,
        
            "--tail-length": `${m.tailLength}px`,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
};

export const ShimmerButton = ({
  children,
  className,
  shimmerColor = "#3b82f6",
  shimmerSize = "0.05em",
  borderRadius = "100px",
  shimmerDuration = "3s",
  background = "rgba(0, 0, 0, 1)",
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-white",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden [border-radius:var(--radius)]">
        <div className="absolute inset-[-100%] animate-spin-slow [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
      </div>
      <div className="absolute inset-[var(--cut)] [background:var(--bg)] [border-radius:var(--radius)]" />
      <span className="z-10 flex items-center gap-2 whitespace-nowrap text-sm">
        {children}
      </span>
    </button>
  );
};

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) => {
  return (
    <Component
      className={cn(
        "relative overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName
      )}
      style={{ borderRadius: "1.75rem" }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: "calc(1.75rem * 0.96)" }}
      >
        <motion.div
          style={{
            backgroundImage: `linear-gradient(var(--r), #3b82f6, #8b5cf6, #06b6d4)`,
          }}
          animate={{
            "--r": ["0deg", "360deg"],
          }}
          transition={{
            duration: duration / 1000,
            repeat: Infinity,
            ease: "linear",
          }}
          className={cn("absolute inset-[-1000%] opacity-30", borderClassName)}
        />
      </div>
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center bg-white text-sm antialiased backdrop-blur-xl dark:bg-neutral-950",
          className
        )}
        style={{ borderRadius: "calc(1.75rem * 0.96)" }}
      >
        {children}
      </div>
    </Component>
  );
};

export const Spotlight = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute z-[1] h-[169%] w-[138%] animate-spotlight opacity-0 lg:w-[84%]",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          />
        </filter>
      </defs>
    </svg>
  );
};
