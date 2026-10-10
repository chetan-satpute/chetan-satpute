import { readFile, writeFile } from 'node:fs/promises';

// Renders the server build of the app into the client build's index.html, so
// the page ships as static HTML that the client bundle then hydrates.

const entryServer = new URL('../dist/server/entry-server.js', import.meta.url);
const htmlFile = new URL('../dist/client/index.html', import.meta.url);
const outlet = '<!--app-html-->';

// Typed by hand: the module only exists after the server build has run.
const { render } = (await import(entryServer.href)) as {
  render: () => string;
};

const template = await readFile(htmlFile, 'utf8');
if (!template.includes(outlet)) {
  throw new Error(`${outlet} is missing from dist/client/index.html`);
}

await writeFile(htmlFile, template.replace(outlet, render()));
