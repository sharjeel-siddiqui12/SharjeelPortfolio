import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { ServicesSection } from "@/components/sections/services";
import { CertificatesSection } from "@/components/sections/certificates";
import { ContactSection } from "@/components/sections/contact";
import { GSAPScrollAnimations } from "@/components/gsap-scroll-animations";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgressBar />
      <GSAPScrollAnimations />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
