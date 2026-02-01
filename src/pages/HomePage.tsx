import Footer from '#components/Footer.tsx';
import Header from '#components/Header.tsx';
import ContactSection from '#sections/ConnectSection.tsx';
import ExperienceSection from '#sections/ExperienceSection.tsx';
import HeroSection from '#sections/HeroSection.tsx';
import ProjectSection from '#sections/ProjectSection.tsx';
import SkillSection from '#sections/SkillSection.tsx';

function HomePage() {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="divide-y divide-neutral-800">
        <HeroSection />
        <ProjectSection />
        <ExperienceSection />
        <SkillSection />
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
