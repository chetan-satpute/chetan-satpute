import TextLink from '#components/TextLink.tsx';
import { links, profile } from '#content.ts';

function SiteFooter() {
  return (
    <footer className="border-border/60 border-t">
      <div className="font-en text-muted-foreground mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm sm:flex-row sm:px-6 lg:px-10">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>

        <ul className="flex gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <TextLink href={link.href}>{link.label}</TextLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default SiteFooter;
