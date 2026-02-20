"use client";

import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({
  children,
  className,
  variant = "dot",
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: "dot" | "grid";
}) {
  return (
    <div className={cn("relative w-full", className)}>
      <div
        className={cn(
          "absolute inset-0",
          variant === "dot"
            ? "[background-image:radial-gradient(#71717a_1px,transparent_1px)] [background-size:20px_20px] opacity-20 dark:opacity-15"
            : "[background-image:linear-gradient(to_right,#71717a14_1px,transparent_1px),linear-gradient(to_bottom,#71717a14_1px,transparent_1px)] [background-size:40px_40px] opacity-30 dark:opacity-20"
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
