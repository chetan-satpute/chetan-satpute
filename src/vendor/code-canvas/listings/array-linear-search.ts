import type { Listing } from '#vendor/code-canvas/utils/code.ts';

// The tokenized `constants/code/array-linear-search.md` listing, exactly as
// upstream's `vite/codeHighlight.ts` plugin emits it: shiki's tokyo-night
// theme over the typescript grammar, with the `/*#name*/` anchor markers
// stripped and their line numbers recorded, 1-based as the gutter counts.
//
// Captured once rather than ported, because the plugin's only job here would
// be to turn a file that never changes into this constant — running shiki at
// this repo's build time would pull in a highlighter and two grammar packages
// to produce a byte-identical result.
const arrayLinearSearchListing: Listing = {
  lines: [
    [
      { content: 'function', color: '#BB9AF7' },
      { content: ' ', color: '#A9B1D6' },
      { content: 'linearSearch', color: '#7AA2F7' },
      { content: '(', color: '#9ABDF5' },
      { content: 'array', color: '#E0AF68' },
      { content: ':', color: '#89DDFF' },
      { content: ' ', color: '#A9B1D6' },
      { content: 'number', color: '#0DB9D7' },
      { content: '[]', color: '#9ABDF5' },
      { content: ',', color: '#89DDFF' },
      { content: ' ', color: '#A9B1D6' },
      { content: 'target', color: '#E0AF68' },
      { content: ':', color: '#89DDFF' },
      { content: ' ', color: '#A9B1D6' },
      { content: 'number', color: '#0DB9D7' },
      { content: ')', color: '#9ABDF5' },
      { content: ' ', color: '#A9B1D6' },
      { content: '{', color: '#9ABDF5' },
    ],
    [
      { content: '  ', color: '#9ABDF5' },
      { content: 'for', color: '#BB9AF7' },
      { content: ' (', color: '#9ABDF5' },
      { content: 'let', color: '#9D7CD8', italic: true },
      { content: ' ', color: '#9ABDF5' },
      { content: 'i', color: '#BB9AF7' },
      { content: ' ', color: '#9ABDF5' },
      { content: '=', color: '#89DDFF' },
      { content: ' ', color: '#9ABDF5' },
      { content: '0', color: '#FF9E64' },
      { content: ';', color: '#89DDFF' },
      { content: ' ', color: '#9ABDF5' },
      { content: 'i', color: '#C0CAF5' },
      { content: ' ', color: '#9ABDF5' },
      { content: '<', color: '#BB9AF7' },
      { content: ' ', color: '#9ABDF5' },
      { content: 'array', color: '#C0CAF5' },
      { content: '.', color: '#89DDFF' },
      { content: 'length', color: '#7DCFFF' },
      { content: ';', color: '#89DDFF' },
      { content: ' ', color: '#9ABDF5' },
      { content: 'i', color: '#C0CAF5' },
      { content: '++', color: '#89DDFF' },
      { content: ') {', color: '#9ABDF5' },
    ],
    [
      { content: '    ', color: '#9ABDF5' },
      { content: 'if', color: '#BB9AF7' },
      { content: ' (', color: '#9ABDF5' },
      { content: 'array', color: '#C0CAF5' },
      { content: '[', color: '#9ABDF5' },
      { content: 'i', color: '#7DCFFF' },
      { content: '] ', color: '#9ABDF5' },
      { content: '===', color: '#BB9AF7' },
      { content: ' ', color: '#9ABDF5' },
      { content: 'target', color: '#C0CAF5' },
      { content: ') {', color: '#9ABDF5' },
    ],
    [
      { content: '      ', color: '#9ABDF5' },
      { content: 'return', color: '#BB9AF7', italic: true },
      { content: ' ', color: '#9ABDF5' },
      { content: 'i', color: '#C0CAF5' },
      { content: ';', color: '#89DDFF' },
    ],
    [{ content: '    }', color: '#9ABDF5' }],
    [{ content: '  }', color: '#9ABDF5' }],
    [],
    [
      { content: '  ', color: '#9ABDF5' },
      { content: 'return', color: '#BB9AF7', italic: true },
      { content: ' ', color: '#9ABDF5' },
      { content: 'NaN', color: '#FF9E64' },
      { content: ';', color: '#89DDFF' },
    ],
    [{ content: '}', color: '#9ABDF5' }],
  ],

  anchors: {
    enter: 1,
    loop: 2,
    compare: 3,
    found: 4,
    missing: 8,
    exit: 9,
  },
};

export default arrayLinearSearchListing;
