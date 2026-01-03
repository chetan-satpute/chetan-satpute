import Section from '#components/Section.tsx';

const skills = {
  languages: ['TypeScript', 'JavaScript', 'Go'],
  frontend: ['React', 'React Native'],
  backend: ['Node.js', 'Go'],
  devops: ['Google Cloud Platform', 'Docker', 'Linux'],
};

function SkillSection() {
  return (
    <Section prompt="cat skills.yml">
      <div className="text-sm leading-relaxed">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-2 flex">
            <span className="w-28 shrink-0 text-purple-400">{category}:</span>
            <span className="text-neutral-300">[{items.join(', ')}]</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default SkillSection;
