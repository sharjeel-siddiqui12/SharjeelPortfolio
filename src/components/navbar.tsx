"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/data/portfolio-data";

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.nav
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-0 top-4 z-[5000] mx-auto flex max-w-fit items-center justify-center gap-2 rounded-full border border-neutral-200/50 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-md dark:border-white/[0.1] dark:bg-black/80 md:px-8 md:gap-4"
        >
          {/* Logo */}
          <Link
            href="#home"
            className="mr-2 flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white md:mr-4 md:text-base"
          >
            <Image
            
              src="/logo.png"
              alt="Logo"
              width={28}
              height={28}
              className="rounded-full"
            />
            {/* <span className="hidden sm:inline"><span className="text-blue-500">S</span>S</span> */}
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item, idx) => (
              <Link
                key={`nav-${idx}`}
                href={item.link}
                className="relative rounded-full px-3 py-1.5 text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1 md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-neutral-700 dark:bg-neutral-300"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-5 bg-neutral-700 dark:bg-neutral-300"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-neutral-700 dark:bg-neutral-300"
            />
          </button>
        </motion.nav>
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-[4999] rounded-2xl border border-neutral-200/50 bg-white/95 p-6 shadow-xl backdrop-blur-md dark:border-white/[0.1] dark:bg-black/95 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item, idx) => (
                <Link
                  key={`mobile-nav-${idx}`}
                  href={item.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-2.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
