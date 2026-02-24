"use client";
import { motion } from "framer-motion";
import { skillCategories, techStack } from "@/data/portfolio-data";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/section-reveal";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Spotlight } from "@/components/ui/decorative-effects";
import { GlowingStarsBackground } from "@/components/ui/glowing-stars";
import { FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaDatabase,
  FaPhp,
  FaWordpress,
  FaJava,
  FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiPostman,
  SiGraphql,
  SiBootstrap,
  SiOracle,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const techIconMap: Record<string, React.ReactNode> = {
  "React.js": <FaReact className="h-5 w-5 text-cyan-500" />,
  "Next.js": <SiNextdotjs className="h-5 w-5" />,
  "Node.js": <FaNodeJs className="h-5 w-5 text-green-500" />,
  "Express.js": <SiExpress className="h-5 w-5" />,
  MongoDB: <SiMongodb className="h-5 w-5 text-green-600" />,
  TypeScript: <SiTypescript className="h-5 w-5 text-blue-600" />,
  JavaScript: <SiJavascript className="h-5 w-5 text-yellow-500" />,
  "Tailwind CSS": <SiTailwindcss className="h-5 w-5 text-cyan-500" />,
  HTML5: <FaHtml5 className="h-5 w-5 text-orange-500" />,
  CSS3: <FaCss3Alt className="h-5 w-5 text-blue-500" />,
  Git: <FaGitAlt className="h-5 w-5 text-orange-600" />,
  GitHub: <FaGitAlt className="h-5 w-5" />,
  Redux: <SiRedux className="h-5 w-5 text-purple-500" />,
  Firebase: <SiFirebase className="h-5 w-5 text-yellow-500" />,
  Vercel: <SiVercel className="h-5 w-5" />,
  Figma: <FaFigma className="h-5 w-5 text-purple-400" />,
  "REST APIs": <FaDatabase className="h-5 w-5 text-blue-400" />,
  GraphQL: <SiGraphql className="h-5 w-5 text-pink-500" />,
  Postman: <SiPostman className="h-5 w-5 text-orange-500" />,
  "VS Code": <VscVscode className="h-5 w-5 text-blue-500" />,
  Bootstrap: <SiBootstrap className="h-5 w-5 text-purple-600" />,
  Mongoose: <SiMongodb className="h-5 w-5 text-red-600" />,
  MySQL: <FaDatabase className="h-5 w-5 text-blue-600" />,
  Oracle: <SiOracle className="h-5 w-5 text-red-500" />,
  PHP: <FaPhp className="h-5 w-5 text-indigo-500" />,
  WordPress: <FaWordpress className="h-5 w-5 text-blue-500" />,
  Java: <FaJava className="h-5 w-5 text-orange-600" />,
  Protégé: <FaDatabase className="h-5 w-5 text-purple-500" />,
  Authentication: <FaDatabase className="h-5 w-5 text-green-500" />,
  "npm/yarn": <FaNodeJs className="h-5 w-5 text-red-500" />,
  Linux: <FaLinux className="h-5 w-5 text-yellow-600" />,
  "Git & GitHub": <FaGitAlt className="h-5 w-5 text-orange-600" />,
};

const techStackItems = techStack.map((tech) => ({
  name: tech,
  icon: techIconMap[tech] || <FaDatabase className="h-4 w-4" />,
}));

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full overflow-hidden bg-white px-4 py-20 dark:bg-black md:px-8 md:py-32"
    >
      <Spotlight className="-left-40 top-20" fill="rgba(59, 130, 246, 0.1)" />
      <Spotlight className="right-0 top-40" fill="rgba(139, 92, 246, 0.08)" />
      <GlowingStarsBackground starCount={80} columns={16} />

      {/* Floating gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ contain: 'layout style paint' }}>
        <div className="animate-blob animate-glow-pulse absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-600/10" />
        <div className="animate-blob animation-delay-2000 animate-glow-pulse absolute right-0 bottom-1/4 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl dark:bg-cyan-600/10" />
        <div className="animate-blob animation-delay-4000 animate-glow-pulse absolute right-1/3 top-1/2 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-600/8" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <SectionReveal>
          <h2 className="section-heading text-neutral-900 dark:text-white">
            My <span className="gradient-text-shimmer">Skills</span>
          </h2>
          <p className="section-subheading">
            Technologies and tools I use to bring ideas to life
          </p>
        </SectionReveal>

        {/* Tech Stack Carousel */}
        <SectionReveal delay={0.1}>
          <div className="mb-16">
            <div className="gsap-carousel-row">
              <InfiniteMovingCards
                items={techStackItems}
                direction="left"
                speed="slow"
              />
            </div>
            <div className="gsap-carousel-row mt-4">
              <InfiniteMovingCards
                items={[...techStackItems].reverse()}
                direction="right"
                speed="slow"
              />
            </div>
          </div>
        </SectionReveal>

        {/* Skill Categories */}
        <BentoGrid className="md:auto-rows-auto">
          {skillCategories.map((category, idx) => (
            <BentoGridItem
              key={category.id}
              className={`gsap-skill-item${idx === 0 ? " md:col-span-2" : ""}`}
              title={
                <span className="flex items-center gap-2">
                  <span>{category.icon}</span>
                  {category.title}
                </span>
              }
              description={category.description}
              header={
                <div className="flex min-h-[8rem] flex-wrap gap-2 rounded-xl border border-neutral-100 bg-neutral-50 p-4 dark:border-white/[0.05] dark:bg-neutral-900/50">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.08, y: -3 }}
                      className="gsap-tech-chip group flex cursor-default items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm transition-all hover:border-blue-400/60 hover:bg-blue-500/5 hover:shadow-md hover:shadow-blue-500/15 dark:border-white/[0.1] dark:bg-neutral-800 dark:hover:border-blue-400/50 dark:hover:bg-blue-500/10"
                    >
                      {techIconMap[skill.name] || (
                        <span className="h-4 w-4 rounded-full bg-blue-500" />
                      )}
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <div className="h-1.5 w-12 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              }
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
