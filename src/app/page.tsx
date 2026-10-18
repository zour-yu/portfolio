import { Navbar } from "@/components/layout/Navbar";
import { HoverRevealHero } from "@/components/hero/HoverRevealHero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { TechStack } from "@/components/skills/TechStack";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HoverRevealHero />
        <ProjectGrid />
        <ExperienceTimeline />
        <TechStack />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
