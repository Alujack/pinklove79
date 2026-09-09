import type { MediaItem } from "@/lib/media";

/**
 * Photographs from the 500 Villagers & Families project, shown as a slideshow
 * at the top of the page. All four are landscape, so every slide fills the
 * stage without cropping anyone out of frame.
 */
export const familyMedia: MediaItem[] = [
  {
    kind: "image",
    src: "/family500/family500-1.jpg",
    width: 1600,
    height: 1200,
    alt: "Villagers sitting together in a courtyard beside sacks of rice ready to be shared out.",
  },
  {
    kind: "image",
    src: "/family500/family500-4.jpg",
    width: 1600,
    height: 1200,
    alt: "Families standing behind electric fans and rice cookers before they are handed out.",
  },
  {
    kind: "image",
    src: "/family500/family500-3.jpg",
    width: 1600,
    height: 1200,
    alt: "Villagers gathered on the floor of the community hall around sacks of rice.",
  },
  {
    kind: "image",
    src: "/family500/family500-2.jpg",
    width: 1600,
    height: 1200,
    alt: "Older villagers seated with their rice, smiling for the camera.",
  },
];
