import ContactSection from '#sections/ContactSection.tsx';
import ExperienceSection from '#sections/ExperienceSection.tsx';
import HeroSection from '#sections/HeroSection.tsx';
import ProjectsSection from '#sections/ProjectsSection.tsx';
import SiteFooter from '#sections/SiteFooter.tsx';
import SiteHeader from '#sections/SiteHeader.tsx';
import SkillsSection from '#sections/SkillsSection.tsx';

function App() {
  return (
    <div className="bg-background text-foreground relative isolate flex min-h-dvh flex-col">
      <div aria-hidden className="ambient-backdrop motion-safe:animate-drift" />

      <SiteHeader />

      <main className="motion-safe:animate-enter flex-1">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
