"use client";
import { cn } from "@/lib/utils";
import { useState, useCallback } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link?: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, idx) => {
        return (
          <div
            key={idx}
            className="group relative block h-full w-full p-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* CSS transition instead of AnimatePresence + layoutId */}
            <span
              className={cn(
                "absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200/[0.8] dark:bg-slate-800/[0.8] transition-opacity duration-150",
                hoveredIndex === idx ? "opacity-100" : "opacity-0"
              )}
            />
            <Card>
              <div className="flex items-center gap-3">
                {item.icon && <span className="text-2xl">{item.icon}</span>}
                <CardTitle>{item.title}</CardTitle>
              </div>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 group-hover:border-neutral-300 dark:border-white/[0.1] dark:bg-neutral-950 dark:group-hover:border-slate-700",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "font-bold tracking-wide text-neutral-800 dark:text-zinc-100",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-sm leading-relaxed tracking-wide text-neutral-600 dark:text-neutral-400",
        className
      )}
    >
      {children}
    </p>
  );
};
