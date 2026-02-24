"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "complete" | "exit">("loading");
  const { resolvedTheme } = useTheme();
  const logoSrc = resolvedTheme === "light" ? "/logo-dark.png" : "/logo.png";

  const simulateLoading = useCallback(() => {
    let current = 0;
    const steps = [
      { target: 30, speed: 3 },
      { target: 60, speed: 2 },
      { target: 85, speed: 1.5 },
      { target: 100, speed: 4 },
    ];
    let stepIndex = 0;

    const tick = () => {
      if (stepIndex >= steps.length) return;
      const { target, speed } = steps[stepIndex];
      current += speed;
      if (current >= target) {
        current = target;
        stepIndex++;
      }
      setProgress(Math.min(current, 100));
      if (current < 100) {
        requestAnimationFrame(tick);
      } else {
        setPhase("complete");
        setTimeout(() => setPhase("exit"), 600);
      }
    };

    // Wait for DOM content to be interactive, then animate
    if (document.readyState === "complete") {
      requestAnimationFrame(tick);
    } else {
      window.addEventListener("load", () => requestAnimationFrame(tick), { once: true });
      // Fallback: start anyway after 500ms
      setTimeout(() => requestAnimationFrame(tick), 500);
    }
  }, []);

  useEffect(() => {
    simulateLoading();
  }, [simulateLoading]);

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-black"
        >
          {/* Animated background grid dots */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Orbiting rings */}
          <div className="absolute flex items-center justify-center">
            <motion.div
              className="absolute h-44 w-44 rounded-full border border-blue-500/20 sm:h-56 sm:w-56 md:h-64 md:w-64"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute h-56 w-56 rounded-full border border-purple-500/15 sm:h-72 sm:w-72 md:h-80 md:w-80"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute h-72 w-72 rounded-full border border-cyan-500/10 sm:h-88 sm:w-88 md:h-96 md:w-96"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            {/* Orbiting dots */}
            <motion.div
              className="absolute h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
            </motion.div>
            <motion.div
              className="absolute h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
            </motion.div>
            <motion.div
              className="absolute h-72 w-72 sm:h-88 sm:w-88 md:h-96 md:w-96"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" />
            </motion.div>
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Animated logo / initials */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
              className="relative"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm sm:h-24 sm:w-24">
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src={logoSrc}
                    alt="Sharjeel Siddiqui"
                    width={56}
                    height={56}
                    className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                    priority
                  />
                </motion.div>
                {/* Corner accents */}
                <div className="absolute -left-px -top-px h-3 w-3 rounded-tl-2xl border-l-2 border-t-2 border-blue-500" />
                <div className="absolute -right-px -top-px h-3 w-3 rounded-tr-2xl border-r-2 border-t-2 border-cyan-500" />
                <div className="absolute -bottom-px -left-px h-3 w-3 rounded-bl-2xl border-b-2 border-l-2 border-purple-500" />
                <div className="absolute -bottom-px -right-px h-3 w-3 rounded-br-2xl border-b-2 border-r-2 border-blue-500" />
              </div>
              {/* Glow behind logo */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-blue-500/20 blur-xl" />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-lg font-semibold tracking-wide text-neutral-900 dark:text-white sm:text-xl">
                Sharjeel Siddiqui
              </h1>
              <motion.p
                className="mt-1 text-xs tracking-[0.25em] uppercase text-neutral-500 dark:text-neutral-500 sm:text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                MERN Stack Developer
              </motion.p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="w-48 sm:w-56"
            >
              <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
                {/* Shimmer on progress bar */}
                <motion.div
                  className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: [-48, 224] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <motion.span
                  className="text-[10px] font-medium text-neutral-400 dark:text-neutral-600 sm:text-xs"
                  animate={phase === "complete" ? { color: "#3b82f6" } : {}}
                >
                  {phase === "complete" ? "Ready" : "Loading"}
                </motion.span>
                <span className="font-mono text-[10px] tabular-nums text-neutral-400 dark:text-neutral-600 sm:text-xs">
                  {Math.round(progress)}%
                </span>
              </div>
            </motion.div>
          </div>

          {/* Floating particles */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-blue-500/30"
                style={{
                  left: `${15 + i * 14}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
