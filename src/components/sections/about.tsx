"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { personalInfo, education } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/section-reveal";
import { ThreeDCard, CardBody } from "@/components/ui/3d-card";
import { DotBackground } from "@/components/ui/sparkles";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendar } from "react-icons/fa";
import { useRef } from "react";

function EducationTimelineItem({
  edu,
  index,
}: {
  edu: (typeof education)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-10 pb-10 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 shadow-lg shadow-blue-500/25">
        <FaGraduationCap className="h-3.5 w-3.5 text-white" />
      </div>
      {/* Timeline line */}
      <div className="absolute left-[13px] top-9 h-[calc(100%-1rem)] w-[2px] bg-gradient-to-b from-blue-500/40 to-transparent last:hidden" />

      {/* Card */}
      <motion.div
        whileHover={{ y: -3, scale: 1.01 }}
        className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:shadow-lg hover:shadow-blue-500/5 dark:border-white/[0.1] dark:bg-neutral-900"
      >
        {/* Decorative accent */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-blue-500">
          <FaCalendar className="h-3 w-3" />
          {edu.duration}
        </div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
          {edu.degree}
        </h4>
        <div className="mt-1 flex items-center gap-3 text-sm">
          <span className="font-medium text-neutral-700 dark:text-neutral-300">
            {edu.institution}
          </span>
          <span className="flex items-center gap-1 text-xs text-neutral-400">
            <FaMapMarkerAlt className="h-2.5 w-2.5" />
            {edu.location}
          </span>
        </div>
        {edu.description && (
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {edu.description}
          </p>
        )}
        {edu.grade && (
          <span className="mt-3 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-500">
            {edu.grade}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden bg-neutral-50 px-4 py-20 dark:bg-neutral-950 md:px-8 md:py-32"
    >
      <DotBackground className="opacity-40 dark:opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <SectionReveal>
          <h2 className="section-heading text-neutral-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading">
            Get to know me better — my journey, interests, and education
          </p>
        </SectionReveal>

        {/* About Content */}
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Profile Image & Info */}
          <SectionReveal direction="left" delay={0.2}>
            <ThreeDCard className="mx-auto w-full max-w-md">
              <CardBody className="p-6">
                {/* Profile Image */}
                <div className="mb-6 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative w-72 aspect-[4/5] overflow-hidden rounded-2xl border-2 border-blue-500/20 shadow-xl shadow-blue-500/10"
                  >
                    <Image
                      src="/profile.png"
                      alt={personalInfo.name}
                      fill
                      className="object-cover object-center"
                      priority
                    />

                    {/* Gradient overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
                    {/* Animated corner accents */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-blue-500/50"
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>

                <h3 className="mb-2 text-center text-xl font-bold text-neutral-900 dark:text-white">
                  {personalInfo.name}
                </h3>
                <p className="mb-4 text-center text-sm font-medium text-blue-500">
                  {personalInfo.designation}
                </p>

                {/* Quick Info */}
                <div className="flex flex-wrap justify-center gap-2">
                  {["Problem Solver", "Creative Thinker", "Team Player"].map(
                    (trait, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 dark:border-white/[0.1] dark:bg-neutral-900 dark:text-neutral-400"
                      >
                        {["🚀", "💡", "🎯"][idx]} {trait}
                      </span>
                    ),
                  )}
                </div>
              </CardBody>
            </ThreeDCard>
          </SectionReveal>

          {/* Bio Text */}
          <SectionReveal direction="right" delay={0.3}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                A passionate developer crafting{" "}
                <span className="gradient-text">digital experiences</span>
              </h3>
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                {personalInfo.bio}
              </p>
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest technologies. When not coding, you
                can find me exploring new tech, reading about software
                architecture, or working on open-source projects.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { number: "2+", label: "Years Exp." },
                  { number: "10+", label: "Projects" },
                  { number: "5+", label: "Technologies" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="rounded-lg border border-neutral-200 bg-white p-3 text-center dark:border-white/[0.1] dark:bg-neutral-900"
                  >
                    <p className="text-2xl font-bold text-blue-500">
                      {stat.number}
                    </p>
                    <p className="text-xs text-neutral-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Education Section - Timeline */}
        <div className="mt-24">
          <SectionReveal>
            <div className="mb-12 text-center">
              <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">
                My <span className="gradient-text">Education</span>
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                Academic background and learning journey
              </p>
            </div>
          </SectionReveal>

          <div className="mx-auto max-w-2xl">
            {education.map((edu, index) => (
              <EducationTimelineItem key={edu.id} edu={edu} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
