import HeroAvatar from '#components/HeroAvatar.tsx';
import TextLink from '#components/TextLink.tsx';
import { links, profile, stats } from '#content.ts';
import { displayUrl } from '#utils/url.ts';

function HeroSection() {
  return (
    <section
      id="top"
      className="mx-auto max-w-5xl scroll-mt-16 px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      {/* The avatar shows from lg only, beside the intro. Below that there is
          no room beside the text, and it is left out rather than stacked over
          the name. */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-center lg:gap-12">
        <HeroAvatar />

        <div>
          <p className="font-code text-accent text-sm">{profile.role}</p>

          <h1 className="font-en-display text-foreground mt-4 text-5xl leading-tight font-semibold sm:text-6xl">
            {profile.name}
          </h1>

          <p className="font-en text-muted-foreground mt-5 max-w-2xl text-lg leading-relaxed sm:mt-6">
            {profile.summary}
          </p>

          {/* Stacked on phones, where linkedin.com/in/… cannot share a row. The
              links' vertical padding makes each tap target taller than its text,
              so the list's top margin is that much smaller. */}
          <ul
            aria-label="Profiles"
            className="font-code mt-4.5 flex flex-col text-sm sm:mt-6.5 sm:flex-row sm:flex-wrap sm:gap-x-6"
          >
            {links.map((link) => (
              <li key={link.href}>
                <TextLink href={link.href} className="py-1.5">
                  {displayUrl(link.href)}
                </TextLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cell borders rather than divide-*: the grid wraps from four columns
          to two, and dividers would not follow the wrap. */}
      <dl className="lit-surface relative mt-12 grid grid-cols-2 overflow-hidden rounded-2xl sm:mt-14 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-border flex flex-col-reverse justify-end gap-1.5 p-5 even:border-l max-sm:nth-[n+3]:border-t sm:p-6 sm:not-first:border-l"
          >
            <dt className="font-en text-muted-foreground text-sm leading-snug">
              {stat.label}
            </dt>
            <dd className="font-en-display text-accent text-3xl font-semibold lining-nums">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default HeroSection;
