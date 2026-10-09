import Section from '#components/Section.tsx';
import TagList from '#components/TagList.tsx';
import { skills } from '#content.ts';

function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Core expertise" title="Skills">
      <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {skills.map((skill, index) => (
          <li key={skill.area}>
            <div className="flex items-baseline gap-3">
              <span className="font-code text-accent text-sm">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="font-en-display text-foreground text-lg leading-snug font-semibold">
                {skill.area}
              </h3>
            </div>

            <div className="mt-3">
              <TagList tags={skill.skills} label={`${skill.area} skills`} />
            </div>

            <p className="font-en text-muted-foreground mt-3 text-sm leading-relaxed">
              <span className="text-foreground">Proven by: </span>
              {skill.proof}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default SkillsSection;
