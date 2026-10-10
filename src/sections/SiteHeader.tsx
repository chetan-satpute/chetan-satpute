import TextLink from '#components/TextLink.tsx';
import { github, profile } from '#content.ts';

const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function SiteHeader() {
  return (
    <header className="border-border/60 bg-background/80 sticky top-0 z-20 border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <a
          href="#top"
          className="font-en-display text-foreground rounded-sm text-base font-semibold"
        >
          {profile.name}
        </a>

        <nav aria-label="Sections" className="flex items-center gap-6">
          <ul className="font-en hidden gap-6 text-sm sm:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground rounded-sm transition duration-150"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <TextLink href={github.href} className="font-en text-sm">
            {github.label}
          </TextLink>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
