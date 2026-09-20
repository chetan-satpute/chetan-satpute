import Section from '#components/Section.tsx';

const experiences = [
  {
    company: 'MoxiWorks',
    location: 'Pune, India',
    note: 'Transfer of Employment from Josh Software.',
    roles: [
      {
        title: 'Software Engineer',
        duration: 'Jun 2026 – Present',
        points: [
          'Rebuilding the Rise email editor — drag-and-drop UI and a panel-based rendering system.',
          'Caught that green builds were hiding runtime bugs in the bundler migration; the team moved to a full rebuild.',
        ],
      },
    ],
  },
  {
    company: 'Josh Software Pvt. Ltd.',
    location: 'Pune, India',
    roles: [
      {
        title: 'Software Engineer',
        duration: 'Jul 2023 – May 2026',
        points: [
          'Engineered six products spanning hospital scheduling, sports analytics, and recruitment automation, deployed across web applications and mobile platforms.',
          'Built a recruitment product end to end: Chrome extension, Node.js and PostgreSQL service, OpenAI integration, deployment.',
          'Consolidated a new mobile application into an existing TypeScript Turborepo with pnpm, establishing a shared component library, Storybook documentation, and modern development practices—linting, formatting, and automated testing.',
        ],
      },
      {
        title: 'Software Engineer Intern',
        duration: 'Jan 2023 – Jun 2023',
        points: [
          'Shipped a React Native intranet app for 200–400 employees, from scaffolding to store release.',
          'Traced a long-standing leave-management bug to an incorrect backend query.',
        ],
      },
    ],
  },
];

function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
      description="Where I have worked so far."
    >
      <ol className="relative space-y-12 pl-7">
        <span
          aria-hidden
          className="soft-rule-y absolute inset-y-1 left-0 block"
        />

        {experiences.map((exp) => (
          <li key={exp.company} className="relative">
            {/* The ring masks the rule behind the marker; the glow keeps its
                edge from reading as a hard puncture in the line. */}
            <span className="bg-primary ring-background shadow-primary/40 absolute top-[0.5rem] -left-8 h-2 w-2 rounded-full shadow-[0_0_10px_2px] ring-4" />

            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5">
              <h3 className="font-en-display text-foreground text-title">
                {exp.company}
              </h3>

              <p className="text-muted-foreground text-meta">{exp.location}</p>
            </div>

            {/* An unexplained employer change on identical product work invites
                a question; stated plainly it reads as continuity. */}
            {exp.note && (
              <p className="text-muted-foreground text-meta mt-1 italic">
                {exp.note}
              </p>
            )}

            <ol className="mt-5 space-y-6">
              {exp.roles.map((role) => (
                <li key={role.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5">
                    <p className="text-foreground text-body">{role.title}</p>

                    <p className="text-muted-foreground text-meta">
                      {role.duration}
                    </p>
                  </div>

                  <ul className="mt-2.5 space-y-2">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="text-muted-foreground text-body flex max-w-2xl gap-3"
                      >
                        <span
                          aria-hidden
                          className="bg-accent/60 mt-[0.5rem] h-1 w-1 shrink-0 rounded-full"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default ExperienceSection;
