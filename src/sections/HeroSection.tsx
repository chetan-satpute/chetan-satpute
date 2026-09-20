import Section from '#components/Section.tsx';

const links = [
  {
    label: 'github.com/chetan-satpute',
    href: 'https://github.com/chetan-satpute',
  },
  {
    label: 'linkedin.com/in/chetansatpute',
    href: 'https://www.linkedin.com/in/chetansatpute',
  },
  {
    label: 'master.dev/u/chetansatpute',
    href: 'https://master.dev/u/chetansatpute/',
  },
];

function HeroSection() {
  return (
    <Section id="top" className="pt-16 pb-10 md:pt-24 md:pb-14">
      <p className="font-en-script text-accent text-title mb-1">Hello, I'm</p>

      <h1 className="font-en-display text-foreground text-4xl tracking-[0.01em] md:text-5xl">
        Chetan Satpute
      </h1>

      <p className="text-muted-foreground text-body mt-3">
        Software Engineer · Pune, India
      </p>

      <p className="text-foreground text-lead mt-7 max-w-2xl">
        I build cross-platform products in React and React Native — and usually
        the layer underneath them too: monorepos, shared component libraries,
        build tooling. The bugs I enjoy most are the ones where the cause sits
        in a different layer from the symptom.
      </p>

      <ul className="text-body mt-9 flex flex-wrap items-center gap-x-7 gap-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              /* No icon, so the underline is what marks these as links. */
              className="text-muted-foreground hover:text-accent decoration-border hover:decoration-accent/60 underline underline-offset-[5px] transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default HeroSection;
