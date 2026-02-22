"use client";
import { motion } from "framer-motion";
import { personalInfo, contactInfo } from "@/data/portfolio-data";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/decorative-effects";
import { GlowingStarsBackground } from "@/components/ui/glowing-stars";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ShimmerButton } from "@/components/ui/decorative-effects";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiGmail } from 'react-icons/si';
import Link from "next/link";

const socialIconMap: Record<string, React.ReactNode> = {
  github: <FaGithub className="h-5 w-5" />,
  linkedin: <FaLinkedin className="h-5 w-5" />,
  whatsapp: <FaWhatsapp className="h-5 w-5" />,
  // instagram: <FaInstagram className="h-5 w-5" />,
  email: <SiGmail className="h-5 w-5" />,
  mail: <SiGmail className="h-5 w-5" />,
};

export function HeroSection() {
  const designationWords = personalInfo.designation.split(" ").map((word) => ({
    text: word,
    className: "text-blue-500 dark:text-blue-400",
  }));

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white px-4 dark:bg-black mt-5"
    >
      {/* Spotlight */}
      <Spotlight
        className="-left-10 -top-40 md:-left-32 md:-top-20"
        fill="rgba(59, 130, 246, 0.15)"
      />
      <Spotlight
        className="left-full top-10"
        fill="rgba(139, 92, 246, 0.1)"
      />

      {/* Background Beams */}
      <BackgroundBeams />

      {/* Glowing Stars */}
      <GlowingStarsBackground starCount={100} columns={20} />

      {/* Floating gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-blob animate-blob animation-delay-0 animate-glow-pulse absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-600/15" />
        <div className="hero-blob animate-blob animation-delay-2000 animate-glow-pulse absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-purple-500/15 blur-3xl dark:bg-purple-600/10" />
        <div className="hero-blob animate-blob animation-delay-4000 animate-glow-pulse absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl dark:bg-cyan-600/10" />
        <div className="hero-blob animate-blob animation-delay-6000 animate-glow-pulse absolute right-10 top-10 h-56 w-56 rounded-full bg-indigo-500/10 blur-2xl dark:bg-indigo-600/8" />
      </div>

      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(59,130,246,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="hero-content relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        {/* Available for work badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="animate-available-pulse relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span className="text-xs font-medium text-green-600 dark:text-green-400">Available for work</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text-shimmer">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Designation with Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TypewriterEffectSmooth words={designationWords} />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl"
        >
          <TextGenerateEffect
            words={personalInfo.tagline}
            className="text-sm font-normal text-neutral-600 dark:text-neutral-400 md:text-base"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="#projects">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base">
                View Projects
              </span>
            </ShimmerButton>
          </Link>
          <Link href="#contact">
            <button className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition-all hover:border-blue-500 hover:text-blue-500 dark:border-white/[0.15] dark:bg-transparent dark:text-neutral-300 dark:hover:border-blue-400 dark:hover:text-blue-400">
              Contact Me
            </button>
          </Link>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition-all hover:border-blue-500 hover:text-blue-500 dark:border-white/[0.15] dark:bg-transparent dark:text-neutral-300 dark:hover:border-blue-400 dark:hover:text-blue-400">
              Download CV
            </button>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-4 flex gap-3"
        >
          {contactInfo.socialLinks.slice(0, 4).map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + idx * 0.1, duration: 0.4 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white/60 text-neutral-500 shadow-sm backdrop-blur-sm transition-all hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-500 hover:shadow-blue-500/25 dark:border-white/[0.1] dark:bg-white/5 dark:text-neutral-400 dark:hover:border-blue-400 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
              aria-label={link.name}
            >
              {socialIconMap[link.icon] || link.name[0]}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-neutral-500 dark:text-neutral-500">
            Scroll Down
          </span>
          <div className="relative flex items-center justify-center">
            <span className="animate-ping-slow absolute h-5 w-5 rounded-full bg-blue-400/30" />
            <div className="relative flex h-8 w-5 items-start justify-center rounded-full border-2 border-blue-400/60 pt-1">
              <motion.div
                animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-1.5 w-1 rounded-full bg-blue-500"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
