import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import { SmoothCursor } from "@/components/smooth-cursor"; // Disabled: using default cursor

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sharjeelsiddiqui.info";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sharjeel Siddiqui | MERN Stack Developer & Full Stack Engineer",
    template: "%s | Sharjeel Siddiqui",
  },
  description:
    "Sharjeel Siddiqui — Experienced MERN Stack Developer from Karachi, Pakistan. Specializing in React, Next.js, Node.js, Express.js & MongoDB. Building modern, scalable, high-performance web applications.",
  keywords: [
    "Sharjeel Siddiqui",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "WordPress Developer",
    "Karachi Developer",
    "Pakistan Developer",
    "Freelance Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Sharjeel Siddiqui", url: siteUrl }],
  creator: "Sharjeel Siddiqui",
  publisher: "Sharjeel Siddiqui",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Sharjeel Siddiqui | MERN Stack Developer & Full Stack Engineer",
    description:
      "Experienced MERN Stack Developer specializing in React, Next.js, Node.js & MongoDB. View my portfolio, projects, and professional experience.",
    url: siteUrl,
    siteName: "Sharjeel Siddiqui Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/profile.png`,
        width: 1200,
        height: 630,
        alt: "Sharjeel Siddiqui - MERN Stack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharjeel Siddiqui | MERN Stack Developer",
    description:
      "Experienced MERN Stack Developer from Karachi, Pakistan. Building modern, scalable web applications with cutting-edge technologies.",
    images: [`${siteUrl}/profile.png`],
    creator: "@sharjeelsiddiqui",
  },
  verification: {
    google: "ADD_YOUR_GOOGLE_SITE_VERIFICATION_CODE_HERE",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Sharjeel Siddiqui Portfolio",
        description:
          "Portfolio of Sharjeel Siddiqui — MERN Stack Developer & Full Stack Engineer",
        publisher: { "@id": `${siteUrl}/#person` },
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Sharjeel Siddiqui",
        url: siteUrl,
        image: `${siteUrl}/profile.png`,
        jobTitle: "MERN Stack Developer",
        description:
          "Experienced MERN Stack Developer from Karachi, Pakistan, specializing in React, Next.js, Node.js, Express.js & MongoDB.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Karachi",
          addressCountry: "PK",
        },
        email: "contact@sharjeelsiddiqui.info",
        sameAs: [
          "https://github.com/sharjeel-siddiqui12",
          "https://www.linkedin.com/in/sharjeel-siddiqui-ss/",
        ],
        knowsAbout: [
          "React.js",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "WordPress",
          "MySQL",
          "Oracle",
          "Git",
          "REST APIs",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Sharjeel Siddiqui | MERN Stack Developer & Full Stack Engineer",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#person` },
        description:
          "Portfolio showcasing projects, skills, experience, and certifications of Sharjeel Siddiqui.",
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LK0TG6JGCX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LK0TG6JGCX');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* <SmoothCursor /> */} {/* Disabled: using default cursor */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
