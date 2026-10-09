import type { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  id: string;
  eyebrow: string;
  title: string;
}

function Section(props: SectionProps) {
  const { id, eyebrow, title, children } = props;

  const headingId = `${id}-heading`;

  // scroll-mt clears the sticky site header when the nav jumps here.
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-border/60 scroll-mt-16 border-t"
    >
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <p className="font-code text-accent text-sm">{eyebrow}</p>

        <h2
          id={headingId}
          className="font-en-display text-foreground mt-3 text-3xl font-semibold lg:text-4xl"
        >
          {title}
        </h2>

        <div className="mt-10 lg:mt-12">{children}</div>
      </div>
    </section>
  );
}

export default Section;
