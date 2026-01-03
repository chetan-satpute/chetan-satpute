import { ExternalLink } from 'lucide-react';

import Section from '#components/Section.tsx';

function HeroSection() {
  return (
    <Section prompt="whoami">
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-100 md:text-4xl">
        Chetan Satpute
      </h1>

      <p className="mb-6 text-sm font-semibold text-neutral-400">
        Software Engineer
      </p>

      <div className="mb-8 max-w-2xl leading-relaxed text-neutral-300">
        <p className="mb-4">
          Software Engineer passionate about building scalable web and mobile
          applications, deploying them on the cloud, and continuously exploring
          ways to improve performance, usability, and developer workflows.
        </p>

        <p className="mb-6 text-sm text-neutral-400">
          React | React Native | TypeScript
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400">
        <a
          href="https://www.linkedin.com/in/chetansatpute"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 transition-colors hover:text-blue-400"
        >
          linkedin <ExternalLink size={14} />
        </a>

        <a
          href="https://github.com/chetan-satpute"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 transition-colors hover:text-blue-400"
        >
          github <ExternalLink size={14} />
        </a>
      </div>
    </Section>
  );
}

export default HeroSection;
