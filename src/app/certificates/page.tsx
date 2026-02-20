import type { Metadata } from "next";
import { CertificatesPageContent } from "./certificates-content";

export const metadata: Metadata = {
  title: "Certificates | Sharjeel Siddiqui",
  description:
    "Professional certifications and achievements of Sharjeel Siddiqui.",
};

export default function CertificatesPage() {
  return <CertificatesPageContent />;
}
