import Footer from '#components/Footer.tsx';
import Header from '#components/Header.tsx';
import ContactSection from '#sections/ConnectSection.tsx';
import ExperienceSection from '#sections/ExperienceSection.tsx';
import HeroSection from '#sections/HeroSection.tsx';
import ProjectSection from '#sections/ProjectSection.tsx';
import SkillSection from '#sections/SkillSection.tsx';

function HomePage() {
  return (
    /* No overflow clipping here — it would turn this into a scroll container
       and break the header's sticky positioning. */
    <div className="relative min-h-screen w-full">
      <div
        aria-hidden
        className="page-glow pointer-events-none absolute inset-x-0 top-0 h-[42rem]"
      />

      <Header />

      <main className="relative">
        <HeroSection />
        <ProjectSection />
        <ExperienceSection />
        <SkillSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
