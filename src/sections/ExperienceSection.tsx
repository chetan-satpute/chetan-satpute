import Section from '#components/Section.tsx';

const experiences = [
  {
    company: 'Josh Software Pvt. Ltd.',
    role: 'Software Engineer',
    duration: 'Jul 2023 – Present',
    location: 'Pune, India',
  },
  {
    company: 'Josh Software Pvt. Ltd.',
    role: 'Software Engineer Intern',
    duration: 'Jan 2023 – Jun 2023',
    location: 'Pune, India',
  },
];

function ExperienceSection() {
  return (
    <Section prompt="cat experience.txt">
      <div className="space-y-3 text-sm text-neutral-300">
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-4 flex flex-col gap-0.5">
            <div className="flex items-center justify-between text-neutral-100">
              <span className="font-semibold">{exp.role}</span>
              <span className="text-xs">{exp.duration}</span>
            </div>

            <div className="flex justify-between font-medium text-neutral-400">
              <span>{exp.company}</span>
              <span>{exp.location}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default ExperienceSection;
