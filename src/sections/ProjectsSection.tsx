import type { ReactNode } from 'react';

import CodeCanvasPreview from '#components/CodeCanvasPreview.tsx';
import ProjectRow from '#components/ProjectRow.tsx';
import Section from '#components/Section.tsx';
import { projects } from '#content.ts';

// Live previews, keyed by project title, shown below their entry.
const previews: Record<string, ReactNode> = {
  'Code Canvas': <CodeCanvasPreview />,
};

function ProjectsSection() {
  return (
    <Section id="projects" eyebrow="Personal" title="Projects">
      <ul className="space-y-8">
        {projects.map((project) => (
          <ProjectRow
            key={project.title}
            project={project}
            aside={previews[project.title]}
          />
        ))}
      </ul>
    </Section>
  );
}

export default ProjectsSection;
