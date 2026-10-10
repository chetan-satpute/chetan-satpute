export type Link = { label: string; href: string };

export type Project = {
  title: string;
  line: string;
  /** A figure from the career doc, shown as a badge beside the title. */
  highlight?: string;
  links?: Link[];
};

export const profile = {
  name: 'Chetan Satpute',
  role: 'Software Engineer · MoxiWorks',
  summary:
    'Over three years building in React and React Native. I ship mobile apps from project setup to store release, and build web platforms along with the monorepo tooling and Node.js services behind them.',
};

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

export const projects: Project[] = [
  {
    title: 'Code Canvas',
    line: 'Steps through algorithms line by line, running real code against a structure you shape. Each step highlights the line being run, shows every variable in memory, and draws the structure as the code touches it.',
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
