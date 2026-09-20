import type { PropsWithChildren } from 'react';

import cn from '#utils/cn.tsx';

interface SectionProps {
  id?: string;
  title?: string;
  description?: string;
  className?: string;
}

function Section(props: PropsWithChildren<SectionProps>) {
  const { id, title, description, className, children } = props;

  return (
    <section id={id} className={cn('scroll-mt-16 py-10 md:py-14', className)}>
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {title ? (
          <>
            {/* The rule opens the section, so it sits nearer its own heading
                than the content it follows. */}
            <div aria-hidden className="soft-rule mb-10" />

            {/* Code Canvas's own section shape: a fixed heading rail beside a
                fluid content column, which is what earns the 6xl shell. */}
            <div className="lg:grid lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-12">
              <div className="mb-8 lg:mb-0">
                <h2 className="font-en-display text-foreground text-section">
                  {title}
                </h2>

                {description && (
                  <p className="text-muted-foreground text-body mt-1.5">
                    {description}
                  </p>
                )}
              </div>

              <div>{children}</div>
            </div>
          </>
        ) : (
          children
        )}
      </div>
    </section>
  );
}

export default Section;
