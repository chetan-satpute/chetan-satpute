import type { PropsWithChildren } from 'react';

import Icon from '#components/Icon.tsx';
import cn from '#utils/cn.ts';

interface TextLinkProps extends PropsWithChildren {
  href: string;
  className?: string;
}

// An external link set in running UI text: muted and underlined, since an
// underline is what readers recognise as a link, brightening to the accent on
// hover, with the arrow that marks it as leaving the page. The text sits in
// its own span so the underline runs under the words, not the arrow.
function TextLink(props: TextLinkProps) {
  const { href, className, children } = props;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'text-muted-foreground hover:text-accent group inline-flex items-center gap-1 rounded-sm transition duration-150',
        className,
      )}
    >
      <span className="decoration-muted-foreground/50 group-hover:decoration-accent underline underline-offset-4 transition duration-150">
        {children}
      </span>
      <Icon name="arrow-up-right" />
    </a>
  );
}

export default TextLink;
