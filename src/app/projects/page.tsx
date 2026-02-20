import type { Metadata } from "next";
import { ProjectsPageContent } from "./projects-content";

const siteUrl = "https://sharjeelsiddiqui.info";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the full portfolio of projects by Sharjeel Siddiqui — from MERN stack web apps and desktop applications to WordPress sites. Each project showcases modern development practices and real-world problem solving.",
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: "Projects | Sharjeel Siddiqui",
    description:
      "Browse all projects built by Sharjeel Siddiqui using React, Next.js, Node.js, MongoDB, Java, WordPress and more.",
    url: `${siteUrl}/projects`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/profile.png`,
        width: 1200,
        height: 630,
        alt: "Sharjeel Siddiqui Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Sharjeel Siddiqui",
    description:
      "Browse all projects built by Sharjeel Siddiqui using modern web technologies.",
  },
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
