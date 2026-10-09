# Vendored from Code Canvas

A copy of the parts of [Code Canvas](https://github.com/chetan-satpute/code-canvas)
that its home page's hero preview needs: the engine running the real linear
search, the canvas that draws it, and the cards around them. The Projects
section shows that preview exactly as Code Canvas does.

The files are copied as they are in Code Canvas, with two changes:

- `#` imports point into this directory, except `#utils/cn.ts`, which is the
  portfolio's own (identical) helper.
- `preview/HeroPreview.tsx` lights the preview with the `secondary` token
  rather than the `sapphire-500` primitive, since this project styles only
  through semantic tokens.

`preview/linearSearchListing.ts` replaces Code Canvas's build-time Shiki plugin
with the tokens that plugin produces; its header says how to regenerate it.

When Code Canvas changes any of these files, copy them across again rather than
editing them here, so the two stay comparable.
