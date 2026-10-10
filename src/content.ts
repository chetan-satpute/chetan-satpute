export type Link = { label: string; href: string };

export type Project = {
  title: string;
  line: string;
  tags?: string[];
  /** A figure from the career doc, shown as a badge beside the title. */
  highlight?: string;
  links?: Link[];
};

export type MonthYear = { iso: string; label: string };

export type Role = {
  title: string;
  start: MonthYear;
  /** Absent while the role is current. */
  end?: MonthYear;
  /** Résumé bullets; `**term**` renders the term in bold. */
  points: string[];
  /** Technologies used in the role, most important first. */
  tags?: string[];
};

export type Experience = {
  company: string;
  /** The previous company in this list, when the move was a transfer of employment. */
  transferredFrom?: string;
  /** Newest first. */
  roles: [Role, ...Role[]];
};

export type Stat = { value: string; label: string };

export const profile = {
  name: 'Chetan Satpute',
  role: 'Software Engineer · MoxiWorks',
  summary:
    'Over three years building in React and React Native. I ship mobile apps from project setup to store release, and build web platforms along with the monorepo tooling and Node.js services behind them.',
};

export const stats: Stat[] = [
  { value: '3+', label: 'years in React and React Native' },
  { value: '3', label: 'apps taken from setup to store release' },
  { value: '~3 mo', label: 'from project setup to release' },
  { value: '10–15', label: 'engineers trained in web fundamentals' },
];

export const github: Link = {
  label: 'GitHub',
  href: 'https://github.com/chetan-satpute',
};

export const linkedin: Link = {
  label: 'LinkedIn',
  href: 'https://www.linkedin.com/in/chetansatpute',
};

export const masterDev: Link = {
  label: 'Master.dev',
  href: 'https://master.dev/u/chetansatpute/',
};

export const links: Link[] = [github, linkedin, masterDev];

/** Newest first. */
export const experience: [Experience, ...Experience[]] = [
  {
    company: 'MoxiWorks',
    transferredFrom: 'Josh Software',
    roles: [
      {
        title: 'Software Engineer',
        start: { iso: '2026-06', label: 'Jun 2026' },
        points: [
          '**Frontend SME** for the main React frontend, reviewing pull requests for my team and the other teams that build on it.',
          'Pitched a **from-scratch rebuild** of the email editor as more reliable than a **Webpack 4 → Vite** migration, then, working with Claude, set its foundations and built drag-and-drop, reusing only the panel renderer.',
          'Built the React Native app for property agents **from setup to production in ~3 months**, inside a Turborepo monorepo with its own UI library.',
          'Evaluated and proposed Unistyles for **runtime theming on design tokens** agreed with the design team, and introduced Detox end-to-end testing.',
        ],
        tags: [
          'React',
          'React Native',
          'TypeScript',
          'Turborepo',
          'Vite',
          'Claude',
          'Docker',
        ],
      },
    ],
  },
  {
    company: 'Josh Software',
    roles: [
      {
        title: 'Software Engineer',
        start: { iso: '2023-07', label: 'Jul 2023' },
        end: { iso: '2026-05', label: 'May 2026' },
        points: [
          'Built recruitment automation, a Chrome extension and Node.js service using OpenAI, scoring **15–20 profiles in 5–10 s**.',
          'Shipped a React Native squash analytics app to both stores in **~3 months**.',
          "Dockerized Rails applications behind a CLI helper, and debugged releases that weren't reaching users, tracing and fixing missing **CDN cache invalidation**.",
          'Trained **10–15 engineers** in Git, TypeScript and web bundlers, and gave a talk on Git internals.',
        ],
        tags: [
          'React Native',
          'TypeScript',
          'Node.js',
          'OpenAI API',
          'Chrome extensions',
          'Docker',
        ],
      },
      {
        title: 'Software Engineer Intern',
        start: { iso: '2023-01', label: 'Jan 2023' },
        end: { iso: '2023-06', label: 'Jun 2023' },
        points: [
          'Built the company intranet app in React Native from scratch, shipping it to both stores in ~3 months for **150+ employees**.',
        ],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Code Canvas',
    line: 'Steps through algorithms line by line, running real code against a structure you shape. Each step highlights the line being run, shows every variable in memory, and draws the structure as the code touches it.',
    tags: [
      'TypeScript',
      'React',
      'Async generators',
      'Canvas',
      'Shiki',
      'Vite',
      'Google Cloud Platform',
    ],
    links: [
      {
        label: 'canvas.chetansatpute.dev',
        href: 'https://canvas.chetansatpute.dev',
      },
      {
        label: 'Source',
        href: 'https://github.com/chetan-satpute/code-canvas',
      },
    ],
  },
];
