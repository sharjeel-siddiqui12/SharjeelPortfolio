import type { Metadata } from "next";
import { CertificatesPageContent } from "./certificates-content";

const siteUrl = "https://sharjeelsiddiqui.info";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "View 45+ professional certifications earned by Sharjeel Siddiqui from Google, Cisco, Udemy, Great Learning, and more — covering web development, programming, databases, and IT fundamentals.",
  alternates: {
    canonical: `${siteUrl}/certificates`,
  },
  openGraph: {
    title: "Certificates | Sharjeel Siddiqui",
    description:
      "45+ professional certifications in web development, databases, and IT from top platforms.",
    url: `${siteUrl}/certificates`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/profile.png`,
        width: 1200,
        height: 630,
        alt: "Sharjeel Siddiqui Certificates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificates | Sharjeel Siddiqui",
    description:
      "45+ professional certifications in web development and IT from top platforms.",
  },
};

export default function CertificatesPage() {
  return <CertificatesPageContent />;
}
