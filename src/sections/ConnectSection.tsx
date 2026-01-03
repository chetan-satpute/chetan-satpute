import Section from '#components/Section.tsx';

function ContactSection() {
  return (
    <Section prompt="./contact.sh">
      <div className="text-sm text-neutral-200">
        Hey! I'm always happy to hear from you.{' '}
        <a
          href="https://www.linkedin.com/in/chetansatpute"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 transition-colors hover:text-blue-300"
        >
          Connect on LinkedIn
        </a>{' '}
        or send me an email at{' '}
        <a
          href="mailto:chetan.satpute2002@gmail.com"
          className="text-blue-400 transition-colors hover:text-blue-300"
        >
          chetan.satpute2002@gmail.com
        </a>
        .
      </div>
    </Section>
  );
}

export default ContactSection;
