"use client";
import { motion } from "framer-motion";
import { services } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/section-reveal";
import { HoverEffect } from "@/components/ui/hover-effect";
import { DotBackground } from "@/components/ui/sparkles";
import { MovingBorder, Spotlight } from "@/components/ui/decorative-effects";
import { GlowingStarsBackground } from "@/components/ui/glowing-stars";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export function ServicesSection() {
  const serviceItems = services.map((service) => ({
    title: `${service.icon} ${service.title}`,
    description: service.description,
    icon: undefined as React.ReactNode,
  }));

  return (
    <section
      id="services"
      className="relative min-h-screen w-full overflow-hidden bg-neutral-50 px-4 py-20 dark:bg-neutral-950 md:px-8 md:py-32"
    >
      <DotBackground className="opacity-30 dark:opacity-20" />
      <GlowingStarsBackground starCount={90} columns={18} />
      <Spotlight className="left-0 -top-10" fill="rgba(59, 130, 246, 0.1)" />
      <Spotlight className="right-0 top-1/3" fill="rgba(139, 92, 246, 0.08)" />

      {/* Floating gradient orbs — hidden on mobile */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob animate-glow-pulse absolute -right-16 -top-10 h-64 w-64 rounded-full bg-blue-500/12 blur-3xl dark:bg-blue-600/8" />
        <div className="animate-blob animation-delay-2000 animate-glow-pulse absolute left-10 bottom-20 h-60 w-60 rounded-full bg-purple-500/12 blur-3xl dark:bg-purple-600/8" />
        <div className="animate-blob animation-delay-4000 animate-glow-pulse absolute left-1/2 top-1/2 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-600/6" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionReveal>
          <h2 className="section-heading text-neutral-900 dark:text-white">
            My <span className="gradient-text-shimmer">Services</span>
          </h2>
          <p className="section-subheading">
            Professional services I offer to help bring your ideas to life
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <HoverEffect items={serviceItems} />
        </SectionReveal>

        {/* Service Features */}
        <SectionReveal delay={0.3}>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => (
              <CardSpotlight key={service.id} className="gsap-service-card">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative p-5"
                >
                  <h4 className="mb-3 text-sm font-semibold text-neutral-900 dark:text-white">
                    {service.title} includes:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400"
                      >
                        <span className="h-1 w-1 rounded-full bg-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </CardSpotlight>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
