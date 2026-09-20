# Vendored Code Canvas

A snapshot of the parts of [Code Canvas](https://github.com/chetan-satpute/code-canvas)
needed to run its landing-page hero preview here: the animation engine, the
canvas renderer, and the two card components the preview is built from. It is
what `src/components/CodeCanvasHero.tsx` renders, so the preview on the work
section is the real app playing linear search rather than a drawing of it.

- **Upstream commit:** `30852c8`
- **Taken from:** `chetan-satpute/code-canvas`, paths below mirror that repo's
  `src/` one for one.

## This is a snapshot, not a dependency

Nothing here is fetched or built from upstream. Edits belong in the Code Canvas
repo; to pick them up, re-copy the affected files and update the commit above.
Changing them here only makes the two drift.

Two deliberate differences from upstream, both of them import rewrites:

- `#canvas/…`, `#engine/…`, `#hooks/…`, `#components/…` and the two vendored
  `#utils/…` modules are rewritten to `#vendor/code-canvas/…`.
- `cn` resolves to this repo's `#utils/cn.tsx` (tailwind-merge) rather than
  upstream's clsx wrapper, so no new dependency is added. The call sites pass
  plain strings and conditionals, which both helpers treat the same.

## What was left out

Only what an array running linear search touches was copied. Linked lists,
binary search trees, max heaps, every other array algorithm, the structure
registry, routing, the PWA layer, and the explore page are all absent.

## The listing

`listings/array-linear-search.ts` holds the tokenized source listing as a plain
constant. Upstream produces it at build time with a Vite plugin
(`vite/codeHighlight.ts`) that runs Shiki's `tokyo-night` theme over
`src/constants/code/array-linear-search.md` and strips the `/*#name*/` anchor
markers into line numbers. That plugin is **not** ported and Shiki is **not** a
dependency here: the listing never changes, so its output was captured once by
running the same transform against upstream's Shiki install.

## Hardcoded colours

The canvas paints into a 2D context, which cannot read CSS custom properties,
so `canvas/elements/*.ts` carries literal hex values. They are upstream's and
are left untouched — every one of them is the same value this repo's primitive
scales define, and fidelity to the original is the point of the snapshot.

| Constant                    | Value                      | Token            |
| --------------------------- | -------------------------- | ---------------- |
| `NODE_FILL_COLOR.primary`   | `#424357`                  | `--midnight-700` |
| `NODE_FILL_COLOR.secondary` | `#4755a6`                  | `--indigo-500`   |
| `NODE_FILL_COLOR.tertiary`  | `#315991`                  | `--sapphire-600` |
| `NODE_FILL_COLOR.success`   | `#23766d`                  | `--teal-700`     |
| `NODE_FILL_COLOR.danger`    | `#b63759`                  | `--garnet-500`   |
| `NODE_TEXT_COLOR`           | `#f4efe2`                  | `--pearl-100`    |
| `NODE_RIM_COLOR`            | `rgba(244, 239, 226, .18)` | `--pearl-100`    |
| `NODE_SHEEN_COLOR`          | `rgba(255, 255, 255, .08)` | plain white      |
| `LABEL_COLOR`               | `#a5a7bb`                  | `--midnight-300` |
| `EDGE_COLOR`                | `#a5a7bb`                  | `--midnight-300` |

The syntax colours in `listings/array-linear-search.ts` are Shiki's
`tokyo-night` palette and belong to that theme rather than to this one.
