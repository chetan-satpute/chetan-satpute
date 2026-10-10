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
  projects: Project[];
};

export type Experience = {
  company: string;
  /** The previous company in this list, when the move was a transfer of employment. */
  transferredFrom?: string;
  /** Newest first. */
  roles: [Role, ...Role[]];
};

export type Stat = { value: string; label: string };

export type Skill = { area: string; skills: string[]; proof: string };

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
        projects: [
          {
            title: 'Frontend SME',
            line: 'Reviews pull requests on the main React frontend, for my team and the other teams that build on it.',
          },
          {
            title: 'Email editor rebuild',
            line: "Showed a Webpack 4 to Vite migration was unreliable, set the rebuild's foundations, and built its drag-and-drop and panel rendering.",
          },
          {
            title: 'Mobile app',
            line: 'Built the React Native app for property agents, from setup to production, inside a Turborepo monorepo with its own UI library.',
            highlight: '~3 months to production',
          },
          {
            title: 'Canva integration',
            line: 'Lets agents browse Canva folders and batch-import designs straight into the platform.',
          },
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
        projects: [
          {
            title: 'Recruitment automation',
            line: 'Chrome extension and Node.js scoring service with OpenAI-based analysis, replacing manual first-round review.',
            highlight: '15–20 profiles in 5–10 s',
          },
          {
            title: 'Hospital appointment booking',
            line: 'React app with cross-timezone scheduling and calendar views for front-desk staff.',
          },
          {
            title: 'Squash analytics app',
            line: 'React Native app charting match and performance metrics, shipped to the App Store and Play Store.',
            highlight: '~3 months to both stores',
          },
          {
            title: 'Sports-tech platform',
            line: 'Dockerized the Rails app behind a CLI helper, and fixed missing releases by adding CDN cache invalidation.',
          },
          {
            title: 'Shared component library',
            line: 'Moved production UI components into a shared library without breaking existing flows.',
          },
          {
            title: 'Training and talks',
            line: 'Trained 10–15 engineers in Git, JavaScript, TypeScript and bundlers, trained 5–10 in React Native, and gave a talk on Git internals.',
          },
        ],
      },
      {
        title: 'Software Engineer Intern',
        start: { iso: '2023-01', label: 'Jan 2023' },
        end: { iso: '2023-06', label: 'Jun 2023' },
        projects: [
          {
            title: 'Company intranet app',
            line: 'React Native app taken to both stores in about three months, with OTP, Google and Apple sign-in.',
            highlight: '150+ employees',
          },
        ],
      },
    ],
  },
];

export const skills: Skill[] = [
  {
    area: 'Mobile',
    skills: [
      'React Native',
      'App Store and Play Store releases',
      'OTP / Google / Apple sign-in',
      'data visualization',
      'Unistyles',
      'Storybook',
    ],
    proof: '3 apps taken from setup to store release, each in about 3 months',
  },
  {
    area: 'Web',
    skills: [
      'React',
      'TypeScript',
      'drag-and-drop',
      'calendar and cross-timezone scheduling',
      'Chrome extensions',
      'third-party integration (Canva)',
    ],
    proof:
      'Email editor rebuild, hospital booking platform, recruiter extension, design import',
  },
  {
    area: 'Architecture and tooling',
    skills: [
      'Turborepo + pnpm',
      'shared component libraries',
      'Webpack-to-Vite migration',
      'ESLint',
      'Husky',
      'unit tests',
    ],
    proof:
      'Mobile app added to a web monorepo with its own UI library and quality gates; renderer package republished for Vite',
  },
  {
    area: 'Backend and DevOps',
    skills: [
      'Node.js',
      'PostgreSQL',
      'OpenAI API',
      'Docker',
      'AWS Lightsail',
      'CDN cache invalidation',
    ],
    proof: 'Candidate-scoring service built and deployed; Rails app dockerized',
  },
  {
    area: 'Diagnosis',
    skills: ['Root-cause analysis', 'build, deploy and data layers'],
    proof:
      'Webpack 4 coupling, missing CDN invalidation, incorrect leave-management query',
  },
  {
    area: 'Technical leadership and mentoring',
    skills: [
      'Frontend SME',
      'cross-team pull request review',
      'foundational technical decisions',
      'delegation',
      'training',
      'tech talks',
    ],
    proof:
      'Frontend SME at MoxiWorks; email editor rebuild decisions; 10–15 engineers trained in web fundamentals and 5–10 in React Native; Git internals talk',
  },
];

export const projects: Project[] = [
  {
    title: 'Code Canvas',
    line: 'An interactive algorithm visualizer that steps through code like a debugger: the highlighted line, the call stack and the data structure move together.',
    tags: ['TypeScript', 'React', 'Canvas'],
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
