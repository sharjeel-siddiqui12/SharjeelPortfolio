"use client";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/section-reveal";
import { Timeline } from "@/components/ui/timeline";
import { GridBackground } from "@/components/ui/sparkles";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Spotlight } from "@/components/ui/decorative-effects";
import { GlowingStarsBackground } from "@/components/ui/glowing-stars";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

export function ExperienceSection() {
  const timelineData = experiences.map((exp) => ({
    title: exp.duration,
    content: (
      <div className="space-y-4">
        <CardSpotlight className="gsap-exp-card shadow-sm">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-4 sm:p-6"
          >
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <FaBriefcase className="h-4 w-4 shrink-0 text-blue-500" />
                <h3 className="text-base font-bold text-neutral-900 dark:text-white sm:text-lg">
                  {exp.title}
                </h3>
              </div>
              <p className="mt-1 text-sm font-medium text-blue-500">
                {exp.company}
              </p>
            </div>
            <span className="flex w-fit shrink-0 items-center gap-1 rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-500 dark:border-white/[0.1]">
              <FaMapMarkerAlt className="h-3 w-3" />
              {exp.location}
            </span>
          </div>

          <ul className="mb-4 space-y-2">
            {exp.description.map((desc, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                {desc}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-500/20 bg-blue-500/5 px-2.5 py-0.5 text-xs font-medium text-blue-500 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-sm hover:shadow-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
          </motion.div>
        </CardSpotlight>
      </div>
    ),
  }));

  return (
    <section
      id="experience"
      className="relative min-h-screen w-full overflow-hidden bg-neutral-50 px-4 py-20 dark:bg-neutral-950 md:px-8 md:py-32"
    >
      <GridBackground className="opacity-30 dark:opacity-20" />
      <Spotlight className="left-0 top-10" fill="rgba(59, 130, 246, 0.1)" />
      <Spotlight className="right-0 bottom-20" fill="rgba(139, 92, 246, 0.08)" />
      <GlowingStarsBackground starCount={50} columns={14} />

      {/* Floating gradient orbs — hidden on mobile */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob animate-glow-pulse absolute right-10 top-20 h-72 w-72 rounded-full bg-blue-500/12 blur-3xl dark:bg-blue-600/8" />
        <div className="animate-blob animation-delay-2000 animate-glow-pulse absolute -left-10 bottom-1/3 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-600/8" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionReveal>
          <h2 className="section-heading text-neutral-900 dark:text-white">
            Work <span className="gradient-text-shimmer">Experience</span>
          </h2>
          <p className="section-subheading">
            My professional journey and the impact I&apos;ve made
          </p>
        </SectionReveal>

        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
