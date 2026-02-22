"use client";
import { motion } from "framer-motion";
import { certificates } from "@/data/portfolio-data";
import { Certificate } from "@/types";
import { SectionReveal } from "@/components/section-reveal";
import { AnimatedModal } from "@/components/ui/animated-modal";
import { Sparkles } from "@/components/ui/sparkles";
import { FaCertificate, FaExternalLinkAlt, FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function CertificatesSection() {
  const displayCerts = certificates.slice(0, 6);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="relative min-h-screen w-full overflow-hidden bg-white px-4 py-20 dark:bg-black md:px-8 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionReveal>
          <h2 className="section-heading text-neutral-900 dark:text-white">
            <Sparkles>
              <span className="gradient-text">Certificates</span>
            </Sparkles>
          </h2>
          <p className="section-subheading">
            Professional certifications and achievements that validate my
            expertise
          </p>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayCerts.map((cert, idx) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCert(cert)}
              className="gsap-cert-item group cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-blue-500/5 dark:border-white/[0.1] dark:bg-neutral-950/80"
            >
              {/* Certificate Image */}
              <div className="relative h-70 overflow-hidden bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10">
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2">
                    <FaCertificate className="h-8 w-8 text-blue-500/40 transition-transform group-hover:scale-110" />
                    <span className="text-xs text-neutral-400">Click to view</span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white dark:from-neutral-950" />
              </div>

              <div className="p-4">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  {cert.issuer}
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-neutral-500">
                  <FaCalendarAlt className="h-2.5 w-2.5" />
                  {cert.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <SectionReveal delay={0.4}>
          <div className="mt-12 flex justify-center">
            <Link href="/certificates" target="_blank">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition-all hover:border-blue-500 hover:text-blue-500 dark:border-white/[0.15] dark:bg-transparent dark:text-neutral-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
              >
                View All Certificates
                <FaArrowRight className="h-3 w-3" />
              </motion.button>
            </Link>
          </div>
        </SectionReveal>
      </div>

      {/* Certificate Modal */}
      <AnimatedModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      >
        {selectedCert && (
          <div className="space-y-6">
            <div className="relative h-[350px] md:h-[420px] overflow-hidden rounded-xl bg-black">
              {selectedCert.image ? (
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain p-2"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10">
                  <FaCertificate className="h-16 w-16 text-blue-500/30" />
                </div>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {selectedCert.title}
              </h2>
              <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
                Issued by {selectedCert.issuer}
              </p>
              <div className="mt-2 flex items-center gap-2 text-sm text-neutral-500">
                <FaCalendarAlt className="h-3.5 w-3.5" />
                {selectedCert.date}
              </div>
            </div>

            {selectedCert.description && (
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {selectedCert.description}
              </p>
            )}

            {selectedCert.credentialUrl && (
              <a
                href={selectedCert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-600"
              >
                <FaExternalLinkAlt className="h-3 w-3" />
                View Credential
              </a>
            )}
          </div>
        )}
      </AnimatedModal>
    </section>
  );
}
