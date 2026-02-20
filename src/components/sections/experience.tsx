"use client";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/section-reveal";
import { Timeline } from "@/components/ui/timeline";
import { GridBackground } from "@/components/ui/sparkles";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

export function ExperienceSection() {
  const timelineData = experiences.map((exp) => ({
    title: exp.duration,
    content: (
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-white/[0.1] dark:bg-neutral-900"
        >
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <FaBriefcase className="h-4 w-4 text-blue-500" />
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  {exp.title}
                </h3>
              </div>
              <p className="mt-1 text-sm font-medium text-blue-500">
                {exp.company}
              </p>
            </div>
            <span className="flex shrink-0 items-center gap-1 rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-500 dark:border-white/[0.1]">
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
                className="rounded-full border border-blue-500/20 bg-blue-500/5 px-2.5 py-0.5 text-xs font-medium text-blue-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    ),
  }));

  return (
    <section
      id="experience"
      className="relative min-h-screen w-full overflow-hidden bg-neutral-50 px-4 py-20 dark:bg-neutral-950 md:px-8 md:py-32"
    >
      <GridBackground className="opacity-30 dark:opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionReveal>
          <h2 className="section-heading text-neutral-900 dark:text-white">
            Work <span className="gradient-text">Experience</span>
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
