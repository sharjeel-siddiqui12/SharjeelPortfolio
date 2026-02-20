"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/section-reveal";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export function ProjectsSection() {
  const displayProjects = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-hidden bg-white px-4 py-20 dark:bg-black md:px-8 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionReveal>
          <h2 className="section-heading text-neutral-900 dark:text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            Showcasing my best work and the technologies behind them
          </p>
        </SectionReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <CardContainer containerClassName="py-0">
                <CardBody className="group relative w-full rounded-2xl border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm dark:border-white/[0.1] dark:bg-neutral-950/80">
                  {/* Project Image Placeholder */}
                  <CardItem translateZ={50} className="w-full">
                    <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20">
                      <div className="flex h-full items-center justify-center">
                        <span className="text-2xl font-bold text-neutral-400 dark:text-neutral-600">
                          {project.title
                            .split(" ")
                            .map((w) => w[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </CardItem>

                  {/* Title & Featured Badge */}
                  <CardItem translateZ={40} className="mt-4">
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-500">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="mt-1 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                      {project.title}
                    </h3>
                  </CardItem>

                  {/* Description */}
                  <CardItem translateZ={30} className="mt-2">
                    <p className="line-clamp-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                  </CardItem>

                  {/* Tech Stack */}
                  <CardItem translateZ={20} className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-white/[0.1] dark:bg-neutral-800 dark:text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </CardItem>

                  {/* Links */}
                  <CardItem translateZ={30} className="mt-6 w-full">
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl || undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-1 items-center justify-center gap-2 rounded-xl border border-neutral-200 py-2.5 text-sm font-medium transition-all dark:border-white/[0.1] ${
                          project.githubUrl
                            ? "text-neutral-700 hover:border-blue-500 hover:text-blue-500 dark:text-neutral-300"
                            : "pointer-events-none text-neutral-400 dark:text-neutral-600"
                        }`}
                      >
                        <FaGithub className="h-4 w-4" />
                        Code
                      </a>
                      <a
                        href={project.liveUrl || undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-medium text-white transition-all ${
                          project.liveUrl
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "pointer-events-none bg-blue-500/50"
                        }`}
                      >
                        <FaExternalLinkAlt className="h-3 w-3" />
                        Live Demo
                      </a>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        {/* View All Projects */}
        <SectionReveal delay={0.4}>
          <div className="mt-12 flex justify-center">
            <Link href="/projects" target="_blank">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition-all hover:border-blue-500 hover:text-blue-500 dark:border-white/[0.15] dark:bg-transparent dark:text-neutral-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
              >
                View All Projects
                <FaArrowRight className="h-3 w-3" />
              </motion.button>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
