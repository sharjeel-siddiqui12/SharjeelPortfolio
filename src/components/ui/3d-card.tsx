"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import React, { createContext, useCallback, useContext, useRef, useState } from "react";

// --- CardContainer (context-based 3D card from src3) ---
const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export function CardContainer({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    if (containerRef.current) {
      containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("flex items-center justify-center", containerClassName)}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "relative flex items-center justify-center transition-all duration-200 ease-linear",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export function useMouseEnter() {
  const context = useContext(MouseEnterContext);
  return context ? context[0] : false;
}

// --- ThreeDCard (spring-based 3D card) ---
export const ThreeDCard = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const rotateX = useSpring(rotateXValue, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(rotateYValue, { stiffness: 150, damping: 20 });
  const lastUpdateRef = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // Throttle to ~30fps
    const now = performance.now();
    if (now - lastUpdateRef.current < 33) return;
    lastUpdateRef.current = now;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rX = ((y / height) - 0.5) * -15;
    const rY = ((x / width) - 0.5) * 15;
    rotateXValue.set(rX);
    rotateYValue.set(rY);
  }, [rotateXValue, rotateYValue]);

  const handleMouseLeave = useCallback(() => {
    rotateXValue.set(0);
    rotateYValue.set(0);
  }, [rotateXValue, rotateYValue]);

  return (
    <div
      className={cn("group/card perspective-1000", containerClassName)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative rounded-xl border border-neutral-200 bg-white p-6 transition-shadow duration-200 dark:border-white/[0.1] dark:bg-neutral-950 [transform-style:preserve-3d]",
          className
        )}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: unknown;
}) => {
  const isMouseEntered = useMouseEnter();

  return (
    <Tag
      className={cn("w-fit transition duration-200 ease-linear", className)}
      style={{
        transform: isMouseEntered
          ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
          : "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
