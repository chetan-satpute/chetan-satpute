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
    <section
      id={id}
      className={cn('border-b border-neutral-800 py-20', className)}
    >
      <div className="mx-auto max-w-4xl px-6">
        {prompt && (
          <p className="mb-6 font-mono text-sm text-neutral-500">
            <span className="mr-2 text-green-400">➜</span>
            {prompt}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}

export default Section;
