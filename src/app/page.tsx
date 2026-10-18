import { Navbar } from "@/components/layout/Navbar";
import { HeroScrollCurtain } from "@/components/hero/HeroScrollCurtain";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { TechStack } from "@/components/skills/TechStack";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 relative">
        {/* Sticky Parallax Hero Layer with Dynamic Depth Scaling */}
        <HeroScrollCurtain />

        {/* Elevated Overlapping Sheet (Curtain Reveal) */}
        <div className="relative z-20 bg-zinc-950 rounded-t-[32px] sm:rounded-t-[48px] lg:rounded-t-[56px] border-t border-cyan-500/25 shadow-[0_-30px_70px_rgba(0,0,0,0.95)]">
          {/* Luminous Top Seam Accent Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none" />

          {/* Minimalist Tactile Sheet Seam Handle */}
          <div className="pt-4 flex justify-center pointer-events-none" aria-hidden="true">
            <div className="w-12 h-1 rounded-full bg-zinc-800/90" />
          </div>

          <ProjectGrid />
          <ExperienceTimeline />
          <TechStack />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
