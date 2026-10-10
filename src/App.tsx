import ContactSection from '#sections/ContactSection.tsx';
import HeroSection from '#sections/HeroSection.tsx';
import ProjectsSection from '#sections/ProjectsSection.tsx';
import SiteFooter from '#sections/SiteFooter.tsx';
import SiteHeader from '#sections/SiteHeader.tsx';

function App() {
  // overflow-x-clip keeps the Code Canvas preview's glow, which reaches 2rem
  // past the preview and so past a phone's 1rem gutter, from scrolling the page
  // sideways. clip rather than hidden: hidden would make this a scroll
  // container and break the sticky site header.
  return (
    <div className="bg-background text-foreground relative isolate flex min-h-dvh flex-col overflow-x-clip">
      <div aria-hidden className="ambient-backdrop motion-safe:animate-drift" />

      <SiteHeader />

      <main className="motion-safe:animate-enter flex-1">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
