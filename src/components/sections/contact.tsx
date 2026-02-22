"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { contactInfo } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/section-reveal";
import { ShimmerButton } from "@/components/ui/decorative-effects";
import { GlowingStarsBackground } from "@/components/ui/glowing-stars";
import { ParticlesBackground } from "@/components/ui/particles";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import { SiGmail } from 'react-icons/si';
import { Spotlight } from "@/components/ui/decorative-effects";

const socialIconMap: Record<string, React.ReactNode> = {
  github: <FaGithub className="h-5 w-5" />,
  linkedin: <FaLinkedin className="h-5 w-5" />,
  twitter: <FaTwitter className="h-5 w-5" />,
  // instagram: <FaInstagram className="h-5 w-5" />,
  whatsapp: <FaWhatsapp className="h-5 w-5" />,
  mail: <SiGmail className="h-5 w-5" />,
};

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send message. Please try again.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden bg-neutral-50 px-4 py-20 dark:bg-neutral-950 md:px-8 md:py-32"
    >
      <BackgroundBeams className="opacity-40" />
      <ParticlesBackground quantity={30} className="opacity-30" />
      <Spotlight className="left-10 top-20" fill="rgba(59, 130, 246, 0.1)" />
      <Spotlight className="right-0 bottom-20" fill="rgba(139, 92, 246, 0.08)" />

      {/* Floating gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob animate-glow-pulse absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-600/10" />
        <div className="animate-blob animation-delay-4000 animate-glow-pulse absolute right-10 bottom-16 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl dark:bg-purple-600/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionReveal>
          <h2 className="section-heading text-neutral-900 dark:text-white">
            Get In <span className="gradient-text-shimmer">Touch</span>
          </h2>
          <p className="section-subheading">
            Have a project in mind or want to collaborate? Let&apos;s talk!
          </p>
        </SectionReveal>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <SectionReveal direction="left" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Let&apos;s work together
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your visions.
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="gsap-contact-item flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 shadow-sm shadow-blue-500/20 transition-all hover:border-blue-500/60 hover:shadow-blue-500/30"
                  >
                    <FaEnvelope className="h-5 w-5 text-blue-500" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-neutral-500">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm font-medium text-neutral-900 hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="gsap-contact-item flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 shadow-sm shadow-blue-500/20 transition-all hover:border-blue-500/60 hover:shadow-blue-500/30"
                  >
                    <FaMapMarkerAlt className="h-5 w-5 text-blue-500" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-neutral-500">Location</p>
                    <p className="text-sm font-medium text-neutral-900 dark:text-white">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>
                <div className="gsap-contact-item flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 shadow-sm shadow-blue-500/20 transition-all hover:border-blue-500/60 hover:shadow-blue-500/30"
                  >
                    <FaPhone className="h-5 w-5 text-blue-500" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-neutral-500">Phone</p>
                    <p className="text-sm font-medium text-neutral-900 dark:text-white">
                      <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-sm font-medium text-neutral-900 hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
                    >
                      {contactInfo.phone}
                    </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="mb-3 text-sm font-medium text-neutral-500">
                  Find me on
                </p>
                <div className="flex gap-3">
                  {contactInfo.socialLinks.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 text-neutral-600 transition-colors hover:border-blue-500 hover:text-blue-500 dark:border-white/[0.1] dark:text-neutral-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
                      aria-label={link.name}
                    >
                      {socialIconMap[link.icon] || link.name[0]}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Contact Form */}
          <SectionReveal direction="right" delay={0.3}>
            <div className="gsap-contact-form relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 dark:border-white/[0.1] dark:bg-neutral-900 md:p-8">
              <GlowingStarsBackground starCount={60} columns={12} />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[300px] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500"
                  >
                    ✓
                  </motion.div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    Thank you for reaching out. I&apos;ll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                  {error && (
                    <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
                      {error}
                    </div>
                  )}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:shadow-sm focus:shadow-blue-500/20 dark:border-white/[0.1] dark:bg-neutral-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:shadow-sm focus:shadow-blue-500/20 dark:border-white/[0.1] dark:bg-neutral-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:shadow-sm focus:shadow-blue-500/20 dark:border-white/[0.1] dark:bg-neutral-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full resize-none rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:shadow-sm focus:shadow-blue-500/20 dark:border-white/[0.1] dark:bg-neutral-800 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <ShimmerButton
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="inline-block h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <FaPaperPlane className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </ShimmerButton>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
