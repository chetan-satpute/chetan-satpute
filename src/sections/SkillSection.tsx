import Section from '#components/Section.tsx';

const skills = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Go'] },
  { label: 'Frontend', items: ['React Native', 'React', 'Storybook'] },
  { label: 'Backend', items: ['Node.js', 'PostgreSQL', 'Go'] },
  { label: 'Tooling', items: ['Turborepo', 'pnpm', 'Vite', 'Webpack'] },
  { label: 'DevOps', items: ['Docker', 'Google Cloud Platform', 'Cloudflare'] },
];

function SkillSection() {
  return (
    <Section
      id="skills"
      title="Skills"
      description="Tools and technologies I reach for."
    >
      <dl className="space-y-5">
        {skills.map((group) => (
          <div
            key={group.label}
            className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:items-baseline sm:gap-6"
          >
            <dt className="text-muted-foreground text-body">{group.label}</dt>

            <dd className="font-code text-foreground text-body tracking-wide">
              {group.items.join('  ·  ')}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export default SkillSection;
