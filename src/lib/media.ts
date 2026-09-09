/**
 * A slide in a project slideshow.
 *
 * The intrinsic size is recorded with each item because these sets mix
 * landscape photographs, portrait ones and phone video. The slideshow works
 * out how to fit each slide from its aspect ratio, so a landscape frame can
 * fill the stage while a portrait is shown whole instead of being cropped
 * down to a letterbox.
 */
export type MediaItem =
  | {
      kind: "image";
      src: string;
      width: number;
      height: number;
      alt: string;
      /**
       * `object-position` for the crop. The stage is 4:3, which is the native
       * shape of most of these photographs, so only the portrait and 16:9
       * ones are cropped at all — and then only at the sides.
       */
      focal?: string;
    }
  | {
      kind: "video";
      src: string;
      poster: string;
      width: number;
      height: number;
      /** Describes the clip for anyone who cannot watch it. */
      alt: string;
    };
