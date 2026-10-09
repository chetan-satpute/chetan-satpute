import { ArrowUpRight } from 'lucide-react';

// The app's only lucide-react import. Keep it named — `import * as lucide`
// would pull in the entire icon set.
const iconComponents = {
  'arrow-up-right': ArrowUpRight,
} as const;

export type IconName = keyof typeof iconComponents;

interface IconProps {
  name: IconName;
}

// Sized to the surrounding text, and always beside text that says the same
// thing, so it is hidden from screen readers.
function Icon(props: IconProps) {
  const { name } = props;

  const LucideIconComponent = iconComponents[name];

  return <LucideIconComponent size="1em" className="shrink-0" aria-hidden />;
}

export default Icon;
