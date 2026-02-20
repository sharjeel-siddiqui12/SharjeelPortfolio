"use client";
import { motion } from "framer-motion";
import { personalInfo, contactInfo } from "@/data/portfolio-data";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/decorative-effects";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ShimmerButton } from "@/components/ui/decorative-effects";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";
import Link from "next/link";

const socialIconMap: Record<string, React.ReactNode> = {
  github: <FaGithub className="h-5 w-5" />,
  linkedin: <FaLinkedin className="h-5 w-5" />,
  twitter: <FaTwitter className="h-5 w-5" />,
};

export function HeroSection() {
  const designationWords = personalInfo.designation.split(" ").map((word) => ({
    text: word,
    className: "text-blue-500 dark:text-blue-400",
  }));

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white px-4 dark:bg-black"
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

      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(59,130,246,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        Greeting
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-neutral-200 bg-white/50 px-4 py-1.5  text-sm text-neutral-600 backdrop-blur-sm dark:border-white/[0.1] dark:bg-black/50 dark:text-neutral-400"
        >
          👋 Welcome to my portfolio
        </motion.div> */}

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
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
          {contactInfo.socialLinks.slice(0, 3).map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-all hover:scale-110 hover:border-blue-500 hover:text-blue-500 dark:border-white/[0.1] dark:text-neutral-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
              aria-label={link.name}
            >
              {socialIconMap[link.icon] || link.name[0]}
            </a>
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
          <FaArrowDown className="h-3 w-3 text-neutral-400 dark:text-neutral-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
