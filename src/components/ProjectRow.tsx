import type { ReactNode } from 'react';

import TagList from '#components/TagList.tsx';
import TextLink from '#components/TextLink.tsx';
import type { Project } from '#content.ts';

interface ProjectRowProps {
  project: Project;
  /** h3 directly under a section, h5 under a company and role. */
  level: 3 | 5;
  /** Shown below the entry, e.g. a live preview of the project. */
  aside?: ReactNode;
}

function ProjectRow(props: ProjectRowProps) {
  const { project, level, aside } = props;

  const Heading = level === 3 ? 'h3' : 'h5';

  return (
    <li>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <Heading className="font-en-display text-foreground text-lg font-semibold">
          {project.title}
        </Heading>

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

      {project.tags && (
        <div className="mt-3">
          <TagList tags={project.tags} label="Technologies" />
        </div>
      )}

      {/* empty:hidden drops the margin when the aside renders nothing, as the
          live preview does below md. */}
      {aside && <div className="mt-8 empty:hidden">{aside}</div>}
    </li>
  );
}

export default ProjectRow;
