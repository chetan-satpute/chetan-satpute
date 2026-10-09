import Section from '#components/Section.tsx';
import TextLink from '#components/TextLink.tsx';
import { linkedin } from '#content.ts';
import { displayUrl } from '#utils/url.ts';

// LinkedIn is the only contact route on purpose: an email address or phone
// number on a public page is harvested for spam, while recruiters already
// reach people through LinkedIn.
function ContactSection() {
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <p className="font-en text-muted-foreground max-w-2xl text-lg leading-relaxed">
        I'm always happy to hear from you. Connect on LinkedIn.
      </p>

      <div className="font-code mt-5">
        <TextLink href={linkedin.href} className="py-1.5">
          {displayUrl(linkedin.href)}
        </TextLink>
      </div>
    </Section>
  );
}

export default ContactSection;
