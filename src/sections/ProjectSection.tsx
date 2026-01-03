import Section from '#components/Section.tsx';

const projects = [
  {
    name: 'code-canvas',
    description:
      'An interactive platform to explore and understand algorithms visually. Watch code come alive as you step through each line and see how data structures change in real time.',
    tech: ['React', 'TypeScript', 'Async Generators', 'Redux'],
    link: 'https://canvas.chetansatpute.dev',
    isLive: false,
  },
];

function ProjectSection() {
  return (
    <Section prompt="cat projects.txt">
      <div className="space-y-4 text-sm text-neutral-300">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.isLive ? project.link : undefined}
            target={project.isLive ? '_blank' : undefined}
            rel={project.isLive ? 'noopener noreferrer' : undefined}
            className="-ml-4 flex cursor-pointer flex-col gap-2 rounded-md p-4 transition-colors hover:bg-neutral-800"
          >
            {/* Row 1: Directory Name + Status */}
            <div className="flex items-center justify-between text-neutral-100">
              <span className="font-semibold text-blue-400">
                {project.name}/
              </span>
              <span
                className={`font-medium ${
                  project.isLive ? 'text-green-400' : 'text-yellow-400'
                }`}
              >
                [{project.isLive ? 'live' : 'in-progress'}]
              </span>
            </div>

            {/* Row 2: Description */}
            <div className="mt-1 text-neutral-400">{project.description}</div>

            {/* Row 3: Tech Stack */}
            <div className="mt-2 font-bold text-neutral-500">
              {project.tech.join(' · ')}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

export default ProjectSection;
