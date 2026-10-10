import HeroPreview from '#vendor/code-canvas/preview/HeroPreview.tsx';
import linearSearchListing from '#vendor/code-canvas/preview/linearSearchListing.ts';

// Code Canvas's own hero preview, mounted the way its hero mounts it. The
// canvas draws the six-cell array 444px wide, wider than a phone's content
// column, so it is scaled down to fit from out here, leaving the vendored
// files untouched. The canvas writes its CSS width and height inline on every
// frame: max-width caps the width, and height has to override the inline value
// with !important so the height follows the backing store's aspect ratio
// instead of staying at full size.
function CodeCanvasPreview() {
  return (
    <div className="[&_canvas]:h-auto! [&_canvas]:max-w-full">
      <HeroPreview title="Linear Search" listing={linearSearchListing} />
    </div>
  );
}

export default CodeCanvasPreview;
