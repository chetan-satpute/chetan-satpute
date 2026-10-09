import avatar from '#assets/avatar.webp';

// Tailwind's lg breakpoint: the avatar is only shown from there up.
const shownMedia = '(min-width: 64rem)';

// A 1×1 transparent GIF. Below lg the <img> falls back to it, so a phone, where
// the avatar is hidden, never downloads the avatar itself. Not loading="lazy":
// on desktop the avatar is above the fold and should load at once.
const blank =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

function HeroAvatar() {
  return (
    <div className="hidden lg:order-last lg:block">
      <picture>
        <source media={shownMedia} srcSet={avatar} />
        <img
          src={blank}
          alt="Illustrated avatar of Chetan coding at night"
          width={480}
          height={480}
          className="ring-accent/30 block size-56 rounded-full ring-1"
        />
      </picture>
    </div>
  );
}

export default HeroAvatar;
