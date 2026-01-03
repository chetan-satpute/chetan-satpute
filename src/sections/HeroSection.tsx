import { Download } from 'lucide-react';

import Section from '#components/Section.tsx';

function HeroSection() {
  return (
    <Section prompt="whoami">
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-100 md:text-4xl">
        Chetan Satpute
      </h1>

      <p className="mb-6 text-sm text-neutral-400">Senior Software Engineer</p>

      <div className="mb-8 max-w-2xl leading-relaxed text-neutral-300">
        <p className="mb-4">
          Building clean, scalable systems with a strong focus on developer
          experience and readability.
        </p>
        <p>
          I enjoy working at the intersection of performance, simplicity, and
          thoughtful UI.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
        <a
          href="https://www.linkedin.com/in/chetansatpute"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-neutral-200"
        >
          linkedin
        </a>

        <a
          href="https://github.com/chetan-satpute"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-neutral-200"
        >
          github
        </a>

        <a
          href="mailto:chetan.satpute2002@gmail.com"
          className="transition-colors hover:text-neutral-200"
        >
          email
        </a>

        <a
          download
          href="/resume.pdf"
          target="_blank"
          className="text-blue-400 transition-colors hover:text-blue-300"
        >
          <span className="flex items-center gap-2">
            resume <Download size={14} />
          </span>
        </a>
      </div>
    </Section>
  );
}

export default HeroSection;
