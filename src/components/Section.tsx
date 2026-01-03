import type { PropsWithChildren } from 'react';

import cn from '#utils/cn.tsx';

interface SectionProps {
  id?: string;
  prompt?: string;
  className?: string;
}

function Section(props: PropsWithChildren<SectionProps>) {
  const { id, prompt, className, children } = props;

  return (
    <section id={id} className={cn('py-16', className)}>
      <div className="mx-auto max-w-4xl px-6">
        {prompt && (
          <p className="mb-6 flex items-center text-sm text-neutral-500">
            <span className="mr-4 text-sm text-green-400">λ</span>
            {prompt}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}

export default Section;
