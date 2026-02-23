"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/decorative-effects";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-4 dark:bg-black">
      <BackgroundBeams className="opacity-30" />

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex max-w-lg flex-col items-center gap-6 text-center">
        {/* Animated 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 18 }}
          className="relative"
        >
          <span className="text-[8rem] font-black leading-none tracking-tighter text-transparent sm:text-[10rem] md:text-[12rem]"
            style={{
              WebkitTextStroke: "2px rgba(59,130,246,0.3)",
            }}
          >
            404
          </span>
          {/* Glowing overlay text */}
          <motion.span
            className="absolute inset-0 flex items-center justify-center text-[8rem] font-black leading-none tracking-tighter sm:text-[10rem] md:text-[12rem]"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            404
          </motion.span>
          {/* Glow behind number */}
          <div className="absolute inset-0 -z-10 bg-blue-500/10 blur-3xl" />
        </motion.div>

        {/* Glitch line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="h-px w-48 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl"
        >
          Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-2 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/">
            <ShimmerButton className="shadow-2xl">
              <span className="flex items-center gap-2 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Back to Home
              </span>
            </ShimmerButton>
          </Link>
          <Link href="/#contact">
            <button className="cursor-pointer rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition-all hover:border-blue-500 hover:text-blue-500 dark:border-white/15 dark:bg-transparent dark:text-neutral-300 dark:hover:border-blue-400 dark:hover:text-blue-400">
              Contact Me
            </button>
          </Link>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {[
            { label: "Projects", href: "/#projects" },
            { label: "About", href: "/#about" },
            { label: "Services", href: "/#services" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-neutral-500 transition-colors hover:text-blue-500 dark:text-neutral-500 dark:hover:text-blue-400 sm:text-sm"
            >
              {link.label} →
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-500/20"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 4 + i * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
    </main>
  );
}
