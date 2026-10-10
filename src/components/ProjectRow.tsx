import type { ReactNode } from 'react';

import TextLink from '#components/TextLink.tsx';
import type { Project } from '#content.ts';

interface ProjectRowProps {
  project: Project;
  /** Shown below the entry, e.g. a live preview of the project. */
  aside?: ReactNode;
}

function ProjectRow(props: ProjectRowProps) {
  const { project, aside } = props;

  return (
    <li>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <h3 className="font-en-display text-foreground text-lg font-semibold">
          {project.title}
        </h3>

        {project.highlight && (
          <span className="font-code border-accent/30 bg-accent/10 text-accent rounded-full border px-2 text-xs leading-5">
            {project.highlight}
          </span>
        )}

        {project.links && (
          <ul className="font-code flex gap-4 text-sm sm:ml-auto">
            {project.links.map((link) => (
              <li key={link.href}>
                <TextLink href={link.href}>{link.label}</TextLink>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="font-en text-muted-foreground mt-1.5 leading-relaxed">
        {project.line}
      </p>

      {aside && <div className="mt-8">{aside}</div>}
    </li>
  );
}

export default ProjectRow;
