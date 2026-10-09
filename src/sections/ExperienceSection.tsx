import Period from '#components/Period.tsx';
import ProjectRow from '#components/ProjectRow.tsx';
import Section from '#components/Section.tsx';
import { experience } from '#content.ts';

// Companies and their roles are newest first, so the career starts at the
// last company's last role and runs to the first company's first role's end.
const lastCompany = experience[experience.length - 1];
const careerStart = lastCompany.roles[lastCompany.roles.length - 1].start;
const careerEnd = experience[0].roles[0].end;

function ExperienceSection() {
  const eyebrow = `${careerStart.label} – ${careerEnd?.label ?? 'Present'}`;

  return (
    <Section id="experience" eyebrow={eyebrow} title="Experience">
      <div className="space-y-12 lg:space-y-16">
        {experience.map((company) => {
          // Roles are newest first, so the company's span runs from the last
          // role's start to the first role's end.
          const start = company.roles[company.roles.length - 1].start;
          const end = company.roles[0].end;

          return (
            <article
              key={company.company}
              className="grid gap-5 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12"
            >
              {/* Sticky on wide screens, so a long run of projects stays
                  labelled with its company while it scrolls past. top-24
                  clears the 4rem site header. */}
              <header className="lg:sticky lg:top-24 lg:self-start">
                <h3 className="font-en-display text-foreground text-2xl font-semibold">
                  {company.company}
                </h3>

                <Period
                  start={start}
                  end={end}
                  className="font-code text-accent mt-1 text-sm"
                />

                {company.note && (
                  <p className="font-en text-muted-foreground mt-2 text-sm leading-relaxed">
                    {company.note}
                  </p>
                )}
              </header>

              <div className="space-y-16">
                {company.roles.map((role) => (
                  <div key={role.start.iso}>
                    {/* Larger than the project titles and in the accent, so a change
                        of role reads as a new heading over its projects. On
                        phones the dates always sit below the title, rather
                        than beside it only when the title happens to fit. */}
                    <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
                      <h4 className="font-en-display text-accent text-xl font-semibold">
                        {role.title}
                      </h4>

                      <Period
                        start={role.start}
                        end={role.end}
                        className="font-code text-muted-foreground text-sm"
                      />
                    </div>

                    <ul className="mt-6 space-y-8">
                      {role.projects.map((project) => (
                        <ProjectRow
                          key={project.title}
                          project={project}
                          level={5}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

export default ExperienceSection;
