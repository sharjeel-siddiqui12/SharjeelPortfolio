"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio-data-projects";
import { Project } from "@/types";
import { SectionReveal } from "@/components/section-reveal";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { MovingBorder } from "@/components/ui/decorative-effects";
import { Spotlight } from "@/components/ui/decorative-effects";
import { GlowingStarsBackground } from "@/components/ui/glowing-stars";
import { AnimatedModal } from "@/components/ui/animated-modal";
import { useIsMobile } from "@/hooks/use-mobile";
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState, useCallback, useRef, useEffect } from "react";


export function ProjectsSection() {
  const displayProjects = projects.slice(0, 3);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();

  const openModal = useCallback((project: Project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
  }, []);

  const nextSlide = useCallback(() => {
    if (!selectedProject?.screenshots) return;
    setCurrentSlide((prev) =>
      prev === selectedProject.screenshots!.length - 1 ? 0 : prev + 1
    );
  }, [selectedProject]);

  const prevSlide = useCallback(() => {
    if (!selectedProject?.screenshots) return;
    setCurrentSlide((prev) =>
      prev === 0 ? selectedProject.screenshots!.length - 1 : prev - 1
    );
  }, [selectedProject]);

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

        {/* Mobile Carousel */}
        {isMobile ? (
          <ProjectsMobileCarousel projects={displayProjects} openModal={openModal} />
        ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project, idx) => (
            <motion.div key={project.id} className="gsap-project-card cursor-pointer" onClick={() => openModal(project)}>
              <CardContainer containerClassName="py-0">
                <CardBody className="card-glow group relative w-full rounded-2xl border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm transition-all dark:border-white/[0.1] dark:bg-neutral-950/80">
                  {/* Project Image Section */}
                  <CardItem translateZ={50} className="-mx-6 -mt-6 w-[calc(100%+3rem)]">
                    <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                        />
                      ) : (
                        <>
                          {/* Animated gradient background */}
                          <motion.div
                            className="absolute inset-0"
                            style={{
                              background:
                                idx % 2 === 0
                                  ? "linear-gradient(135deg, rgba(59,130,246,0.4) 0%, rgba(6,182,212,0.4) 50%, rgba(139,92,246,0.4) 100%)"
                                  : "linear-gradient(135deg, rgba(139,92,246,0.4) 0%, rgba(59,130,246,0.4) 50%, rgba(6,182,212,0.4) 100%)",
                            }}
                            animate={{
                              background: [
                                "linear-gradient(135deg, rgba(59,130,246,0.35) 0%, rgba(6,182,212,0.35) 50%, rgba(139,92,246,0.35) 100%)",
                                "linear-gradient(135deg, rgba(139,92,246,0.45) 0%, rgba(59,130,246,0.35) 50%, rgba(6,182,212,0.45) 100%)",
                                "linear-gradient(135deg, rgba(6,182,212,0.45) 0%, rgba(139,92,246,0.35) 50%, rgba(59,130,246,0.45) 100%)",
                                "linear-gradient(135deg, rgba(59,130,246,0.35) 0%, rgba(6,182,212,0.35) 50%, rgba(139,92,246,0.35) 100%)",
                              ],
                            }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />

                          {/* Grid overlay */}
                          <div
                            className="absolute inset-0 opacity-20"
                            style={{
                              backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                              backgroundSize: "30px 30px",
                            }}
                          />

                          {/* Glowing orb */}
                          <motion.div
                            className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-xl"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.4, 0.7, 0.4],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                          />

                          {/* Project initials */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.span
                              animate={{
                                textShadow: [
                                  "0 0 20px rgba(255,255,255,0.5)",
                                  "0 0 40px rgba(255,255,255,0.9)",
                                  "0 0 20px rgba(255,255,255,0.5)",
                                ],
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="text-3xl font-black text-white/80 drop-shadow-lg"
                            >
                              {project.title
                                .split(" ")
                                .map((w) => w[0])
                                .join("")}
                            </motion.span>
                          </div>
                        </>
                      )}

                      {/* Hover gradient overlay */}
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
                        onClick={(e) => e.stopPropagation()}
                        className={`flex flex-1 items-center justify-center gap-2 rounded-xl border border-neutral-200 py-2.5 text-sm font-medium transition-all dark:border-white/[0.1] ${
                          project.githubUrl
                            ? "text-neutral-700 hover:border-blue-500 hover:text-blue-500 dark:text-neutral-300"
                            : "pointer-events-none text-neutral-400 dark:text-neutral-600"
                        }`}
                      >
                        <FaGithub className="h-4 w-4" />
                        Code
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-500 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-600"
                        >
                          <FaExternalLinkAlt className="h-3 w-3" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
        )}

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

      {/* Project Modal */}
      <AnimatedModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="space-y-6">
            {/* Screenshot Carousel */}
            {selectedProject.screenshots && selectedProject.screenshots.length > 0 ? (
              <div className="relative overflow-hidden rounded-xl bg-black">
                <div className="relative h-[300px] md:h-[420px]">
                  <Image
                    src={selectedProject.screenshots[currentSlide]}
                    alt={`${selectedProject.title} screenshot ${currentSlide + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Carousel Controls */}
                {selectedProject.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70"
                    >
                      <FaChevronLeft className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70"
                    >
                      <FaChevronRight className="h-3.5 w-3.5" />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                      {selectedProject.screenshots.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentSlide(i)}
                          className={`h-2 rounded-full transition-all ${
                            i === currentSlide
                              ? "w-6 bg-white"
                              : "w-2 bg-white/50 hover:bg-white/70"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : selectedProject.image ? (
              <div className="relative h-[300px] md:h-[420px] overflow-hidden rounded-xl bg-black">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ) : (
              <div className="flex h-[250px] items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10">
                <span className="text-4xl font-black text-neutral-300 dark:text-neutral-600">
                  {selectedProject.title
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
              </div>
            )}

            {/* Project Info */}
            <div>
              <div className="flex items-center gap-2">
                {selectedProject.featured && (
                  <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-500">
                    Featured
                  </span>
                )}
              </div>
              <h2 className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {selectedProject.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {selectedProject.longDescription || selectedProject.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-white/[0.1] dark:bg-neutral-800 dark:text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <a
                href={selectedProject.githubUrl || undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl border border-neutral-200 py-3 text-sm font-medium transition-all dark:border-white/[0.1] ${
                  selectedProject.githubUrl
                    ? "text-neutral-700 hover:border-blue-500 hover:text-blue-500 dark:text-neutral-300"
                    : "pointer-events-none text-neutral-400 dark:text-neutral-600"
                }`}
              >
                <FaGithub className="h-4 w-4" />
                Code
              </a>

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-500 py-3 text-sm font-medium text-white transition-all hover:bg-blue-600"
                >
                  <FaExternalLinkAlt className="h-3 w-3" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </AnimatedModal>
    </section>
  );
}

/* ── Smooth native-scroll mobile carousel (like Apple Cards) ── */
function ProjectsMobileCarousel({
  projects,
  openModal,
}: {
  projects: Project[];
  openModal: (project: Project) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkScroll();
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = scrollRef.current.clientWidth * 0.92;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full py-8">
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.1 * idx, ease: "easeOut" },
            }}
            className="w-[92vw] shrink-0 snap-center"
          >
            <div
              className="cursor-pointer rounded-2xl border border-neutral-200 bg-white/80 p-5 backdrop-blur-sm transition-all dark:border-white/10 dark:bg-neutral-950/80"
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className="relative h-52 w-full overflow-hidden rounded-xl">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="85vw"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-linear-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20">
                    <span className="text-2xl font-black text-neutral-300 dark:text-neutral-600">
                      {project.title.split(" ").map((w) => w[0]).join("")}
                    </span>
                  </div>
                )}
              </div>

              {/* Title & Featured Badge */}
              <div className="mt-4 flex items-center gap-2">
                {project.featured && (
                  <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-500">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="mt-1 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:border-white/10 dark:bg-neutral-800 dark:text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              {/* Code & Live Demo Links */}
              <div className="mt-4 flex gap-3">
                <a
                  href={project.githubUrl || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl border border-neutral-200 py-2.5 text-sm font-medium transition-all dark:border-white/10 ${
                    project.githubUrl
                      ? "text-neutral-700 hover:border-blue-500 hover:text-blue-500 dark:text-neutral-300"
                      : "pointer-events-none text-neutral-400 dark:text-neutral-600"
                  }`}
                >
                  <FaGithub className="h-4 w-4" />
                  Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-500 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-600"
                  >
                    <FaExternalLinkAlt className="h-3 w-3" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="mt-4 flex justify-center gap-3">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition-colors disabled:opacity-30 dark:bg-neutral-800"
        >
          <FaChevronLeft className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-300" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition-colors disabled:opacity-30 dark:bg-neutral-800"
        >
          <FaChevronRight className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-300" />
        </button>
      </div>
    </div>
  );
}
