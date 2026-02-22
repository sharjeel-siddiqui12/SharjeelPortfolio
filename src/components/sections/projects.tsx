"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/section-reveal";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { MovingBorder } from "@/components/ui/decorative-effects";
import { Spotlight } from "@/components/ui/decorative-effects";
import { GlowingStarsBackground } from "@/components/ui/glowing-stars";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export function ProjectsSection() {
  const displayProjects = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-hidden bg-white px-4 py-20 dark:bg-black md:px-8 md:py-32"
    >
      <Spotlight className="-left-40 -top-10" fill="rgba(59, 130, 246, 0.12)" />
      <Spotlight className="right-20 top-20" fill="rgba(139, 92, 246, 0.1)" />
      <GlowingStarsBackground starCount={60} columns={14} />

      {/* Floating gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob animate-glow-pulse absolute -top-16 left-1/4 h-72 w-72 rounded-full bg-blue-500/12 blur-3xl dark:bg-blue-600/8" />
        <div className="animate-blob animation-delay-2000 animate-glow-pulse absolute right-10 top-1/3 h-64 w-64 rounded-full bg-purple-500/12 blur-3xl dark:bg-purple-600/8" />
        <div className="animate-blob animation-delay-4000 animate-glow-pulse absolute bottom-20 left-10 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-600/8" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionReveal>
          <h2 className="section-heading text-neutral-900 dark:text-white">
            My <span className="gradient-text-shimmer">Projects</span>
          </h2>
          <p className="section-subheading">
            Showcasing my best work and the technologies behind them
          </p>
        </SectionReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="gsap-project-card"
            >
              <CardContainer containerClassName="py-0">
                <CardBody className="card-glow group relative w-full rounded-2xl border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm transition-all dark:border-white/[0.1] dark:bg-neutral-950/80">
                  {/* Project Image Placeholder */}
                  <CardItem translateZ={50} className="w-full">
                    <div className="relative h-48 w-full overflow-hidden rounded-xl">
                      {/* Animated gradient background */}
                      <motion.div
                        className="absolute inset-0 animate-gradient-shift"
                        style={{
                          background: [
                            "linear-gradient(135deg, rgba(59,130,246,0.4) 0%, rgba(6,182,212,0.4) 50%, rgba(139,92,246,0.4) 100%)",
                            "linear-gradient(135deg, rgba(139,92,246,0.4) 0%, rgba(59,130,246,0.4) 50%, rgba(6,182,212,0.4) 100%)",
                          ][idx % 2],
                        }}
                        animate={{
                          background: [
                            "linear-gradient(135deg, rgba(59,130,246,0.35) 0%, rgba(6,182,212,0.35) 50%, rgba(139,92,246,0.35) 100%)",
                            "linear-gradient(135deg, rgba(139,92,246,0.45) 0%, rgba(59,130,246,0.35) 50%, rgba(6,182,212,0.45) 100%)",
                            "linear-gradient(135deg, rgba(6,182,212,0.45) 0%, rgba(139,92,246,0.35) 50%, rgba(59,130,246,0.45) 100%)",
                            "linear-gradient(135deg, rgba(59,130,246,0.35) 0%, rgba(6,182,212,0.35) 50%, rgba(139,92,246,0.35) 100%)",
                          ],
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      {/* Animated grid lines */}
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                          backgroundSize: "30px 30px",
                        }}
                      />
                      {/* Glowing orb */}
                      <motion.div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-white/20 blur-xl"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      {/* Project initials with glow */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                          animate={{ textShadow: ["0 0 20px rgba(255,255,255,0.5)", "0 0 40px rgba(255,255,255,0.9)", "0 0 20px rgba(255,255,255,0.5)"] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-3xl font-black text-white/80 drop-shadow-lg"
                        >
                          {project.title.split(" ").map((w) => w[0]).join("")}
                        </motion.span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
              <MovingBorder
                borderRadius="9999px"
                className="bg-white px-6 py-3 text-sm font-medium text-neutral-700 dark:bg-black dark:text-neutral-300"
              >
                <span className="flex items-center gap-2">
                  View All Projects
                  <FaArrowRight className="h-3 w-3" />
                </span>
              </MovingBorder>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
