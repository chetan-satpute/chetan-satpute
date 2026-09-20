import { ArrowUpRight } from 'lucide-react';

import CodeCanvasHero from '#components/CodeCanvasHero.tsx';
import Section from '#components/Section.tsx';

const projects = [
  {
    name: 'Code Canvas',
    description:
      'An interactive visualizer for data-structure algorithms that steps through execution the way a debugger does — the highlighted source line, the call stack, the variables in scope and the canvas all advance together, one step per click.',
    highlights: [
      '13 algorithms across arrays, linked lists, binary search trees and max heaps',
      'A generator-driven engine with no React inside it, pulling one step at a time instead of precomputing the run',
      'Code listings tokenized at build time, so the syntax highlighter ships no runtime bytes',
    ],
    tech: ['React 19', 'TypeScript', 'Generators', 'Canvas', 'Vite'],
    site: 'https://canvas.chetansatpute.dev',
    source: 'https://github.com/chetan-satpute/code-canvas',
    isLive: true,
    preview: true,
  },
];

function ProjectSection() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="Things I have built outside of client projects."
    >
      <div className="space-y-12">
        {projects.map((project) => (
          <article key={project.name}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <h3>
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-en-display text-foreground hover:text-accent text-title transition-colors"
                >
                  {project.name}
                </a>
              </h3>

              <a
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
                className="text-success hover:text-success-hover group inline-flex items-center gap-1.5 transition-colors"
              >
                canvas.chetansatpute.dev
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.75}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <p className="text-muted-foreground text-body mt-5 max-w-2xl">
              {project.description}
            </p>

            <ul className="mt-5 space-y-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="text-muted-foreground text-body flex max-w-2xl gap-3"
                >
                  <span
                    aria-hidden
                    className="bg-accent/60 mt-[0.5rem] h-1 w-1 shrink-0 rounded-full"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <p className="font-code text-muted-foreground text-meta mt-5 tracking-wide">
              {project.tech.join('  ·  ')}
            </p>

            <div className="text-body mt-5 flex flex-wrap items-center gap-x-7 gap-y-2">
              {project.isLive && (
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover group inline-flex items-center gap-1.5 transition-colors"
                >
                  Visit app
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.75}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}

              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover group inline-flex items-center gap-1.5 transition-colors"
              >
                Source
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.75}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {project.preview && (
              <div className="mt-8">
                <CodeCanvasHero />
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

export default ProjectSection;
