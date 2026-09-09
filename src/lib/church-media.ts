import type { MediaItem } from "@/lib/media";

/**
 * Photographs and two short clips from the community church, shown as a
 * slideshow at the top of the page. The building comes first, because it is
 * the place everything else on the page happens in.
 */
export const churchMedia: MediaItem[] = [
  {
    kind: "image",
    src: "/church/church-1.jpg",
    width: 1600,
    height: 1200,
    // Cropped to 4:3 in the source rather than by CSS: the original is a
    // low-angle portrait shot that is more than half sky, and any centred
    // crop of it landed on the roofline with the children below the cut.
    // This window runs from just above the cross down past the children.
    alt: "The community church — a blue building with a cross on the gable — with children waving outside it.",
  },
  {
    kind: "video",
    src: "/church/church-a.mp4",
    poster: "/church/church-a-poster.jpg",
    width: 640,
    height: 1138,
    alt: "A short clip of children sitting together on the floor inside the church.",
  },
  {
    kind: "image",
    src: "/church/church-2.jpg",
    width: 1600,
    height: 1200,
    alt: "Children looking out from a trailer, waving, as families gather beside it.",
  },
  {
    kind: "video",
    src: "/church/church-b.mp4",
    poster: "/church/church-b-poster.jpg",
    width: 960,
    height: 540,
    alt: "A short clip of the children together beside the water, with hills behind them.",
  },
];
