import Section from '#components/Section.tsx';

function ContactSection() {
  return (
    <Section
      id="contact"
      title="Contact"
      description="The best way to reach me."
    >
      <p className="text-foreground text-lead max-w-2xl">
        Hey! I'm always happy to hear from you.{' '}
        <a
          href="https://www.linkedin.com/in/chetansatpute"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover decoration-accent/30 hover:decoration-accent/70 underline underline-offset-[7px] transition-colors"
        >
          Connect on LinkedIn
        </a>
        .
      </p>
    </Section>
  );
}

export default ContactSection;
