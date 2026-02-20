"use client";

import { AnimatedModal } from "@/components/ui/animated-modal";
import { GridBackground } from "@/components/ui/grid-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { certificates } from "@/data/portfolio-data";
import { Certificate } from "@/types";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaArrowLeft, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export function CertificatesPageContent() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <main className="relative min-h-screen bg-white dark:bg-black">
      <Navbar />

      <div className="relative min-h-screen px-4 pb-20 pt-28 md:px-8">
        <GridBackground className="absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-blue-500"
          >
            <FaArrowLeft className="h-3 w-3" />
            Back to Home
          </Link>

          <div className="mb-16 text-center">
            <TextGenerateEffect
              words="Certificates"
              className="text-4xl font-bold md:text-5xl lg:text-6xl"
            />
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Professional certifications and courses that have shaped my
              expertise.
            </p>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-blue-500/5 dark:border-white/[0.1] dark:bg-neutral-950/80"
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
                      <FaCertificate className="h-10 w-10 text-blue-500/40 transition-transform group-hover:scale-110" />
                      <span className="text-xs text-neutral-400">Click to view</span>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white dark:from-neutral-950" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {cert.issuer}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-neutral-500">
                    <FaCalendarAlt className="h-3 w-3" />
                    {cert.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        <AnimatedModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
        >
          {selectedCert && (
            <div className="space-y-6">
              <div className="relative h-[350px] md:h-[420px] overflow-hidden rounded-xl bg-white">
                {selectedCert.image ? (
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    className="object-contain p-2"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10">
                    <FaCertificate className="h-20 w-20 text-blue-500/30" />
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
      </div>

      <Footer />
    </main>
  );
}
