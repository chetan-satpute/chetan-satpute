import HeroPreview from '#vendor/code-canvas/preview/HeroPreview.tsx';
import linearSearchListing from '#vendor/code-canvas/preview/linearSearchListing.ts';
import useMediaQuery from '#vendor/code-canvas/preview/useMediaQuery.ts';

// Code Canvas's own hero preview, mounted the way its hero mounts it. The
// canvas draws at fixed pixel sizes, so below md the six-cell array would run
// off the edge; the preview is left unmounted there rather than hidden, which
// would keep an unseen run stepping and repainting.
function CodeCanvasPreview() {
  const isWide = useMediaQuery('(min-width: 48rem)');

  if (!isWide) return null;

  return <HeroPreview title="Linear Search" listing={linearSearchListing} />;
}

export default CodeCanvasPreview;
