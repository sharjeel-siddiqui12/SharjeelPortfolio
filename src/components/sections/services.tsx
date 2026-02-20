"use client";
import { motion } from "framer-motion";
import { services } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/section-reveal";
import { HoverEffect } from "@/components/ui/hover-effect";
import { DotBackground } from "@/components/ui/sparkles";

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

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionReveal>
          <h2 className="section-heading text-neutral-900 dark:text-white">
            My <span className="gradient-text">Services</span>
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
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-white/[0.1] dark:bg-neutral-900"
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
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
