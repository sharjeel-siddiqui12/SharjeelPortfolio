"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { navItems, contactInfo } from "@/data/portfolio-data";
import { FloatingDots } from "@/components/ui/glow-effects";
import { FaGithub, FaLinkedin, FaWhatsapp, FaHeart } from "react-icons/fa";
import { SiGmail } from 'react-icons/si';
import { useTheme } from "next-themes";

const socialIconMap: Record<string, React.ReactNode> = {
  github: <FaGithub className="h-5 w-5" />,
  linkedin: <FaLinkedin className="h-5 w-5" />,
  whatsapp: <FaWhatsapp className="h-5 w-5" />,
  // instagram: <FaInstagram className="h-5 w-5" />,
  mail: <SiGmail className="h-5 w-5" />,
};

export function Footer() {
  const { resolvedTheme } = useTheme();
  const logoSrc = resolvedTheme === "light" ? "/logo-dark.png" : "/logo.png";

  return (
    <footer className="relative border-t border-neutral-200 bg-white dark:border-white/[0.05] dark:bg-black">
      {/* Animated Divider */}
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <FloatingDots count={8} className="opacity-30" />

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3 flex items-center gap-3">
              <Image
                src={logoSrc}
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                <span className="text-blue-500">Sharjeel</span> Siddiqui
              </h3>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              MERN Stack Developer building modern web applications with passion
              and precision.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="text-sm text-neutral-600 transition-colors hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
              Connect
            </h4>
            <div className="flex gap-3">
              {contactInfo.socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all hover:border-blue-500 hover:text-blue-500 dark:border-white/[0.1] dark:text-neutral-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
                  aria-label={link.name}
                >
                  {socialIconMap[link.icon] || link.name[0]}
                </a>
              ))}
            </div>
            {/* <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              {contactInfo.email}
            </p> */}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 dark:border-white/[0.05] md:flex-row">
          <p className="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-500">
            © {new Date().getFullYear()} 
            <a href="https://sharjeelsiddiqui.info/" className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">Sharjeel Siddiqui. </a>
            All rights reserved. 
          </p>
          {/* <p className="text-xs text-neutral-400 dark:text-neutral-600">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p> */}
        </div>
      </div>
    </footer>
  );
}
