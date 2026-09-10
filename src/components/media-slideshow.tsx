"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import type { MediaItem } from "@/lib/media";

const ADVANCE_MS = 5500;

/**
 * A slideshow for a project's photographs and video.
 *
 * The track is moved with a transform rather than being a scrollable strip.
 * An `overflow-x: auto` version came first and it was the wrong shape for the
 * job: the frame became something the reader could drag and wheel-scroll, so
 * it would come to rest halfway between two slides, and scrolling the page
 * with a pointer over the frame moved the slideshow instead of the page. A
 * transform can only ever be on a slide, and there is nothing there to grab.
 *
 * The stage is 4:3 at every width, because that is the native shape of most
 * of these pictures — they fill it with no crop and no letterbox bars. A
 * wider stage cropped the portrait ones top and bottom instead, which on a
 * 3:4 group photo meant a frame full of sky with everybody's heads below the
 * cut. The page caps the stage's width instead, so 4:3 never becomes a stage
 * a thousand pixels tall.
 *
 * Only the video is letterboxed, on a dark ground the way video normally is:
 * a 9:16 clip cropped to fill would be a strip down the middle.
 *
 * Every slide stays in the document and none is hidden from assistive
 * technology, so a screen reader reads the whole set as the list of
 * photographs it is and the rotation is left as something purely visual.
 * Motion that starts on its own still has to be stoppable, so it pauses on
 * hover and on focus, while the video is playing, when the tab is hidden, and
 * from a pause button that stays out of sight until it is tabbed to — the
 * same trick as the "skip to content" link.
 */
export function MediaSlideshow({
  items,
  label,
}: {
  items: MediaItem[];
  label: string;
}) {
  const [index, setIndex] = useState(0);
  const [wantsPlay, setWantsPlay] = useState(true);
  const [held, setHeld] = useState(false);
  // Which clip is playing, rather than merely whether one is: the play badge
  // is per-slide, and the timer needs to know to hold.
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const running = wantsPlay && !held && playingIndex === null;

  useEffect(() => {
    if (!running || items.length < 2) return;

    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setIndex((i) => (i + 1) % items.length);
      }
    }, ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [running, items.length]);

  // A clip that has rotated out of view should not still be playing.
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index && !video.paused) video.pause();
    });
  }, [index]);

  const step = (delta: number) =>
    setIndex((i) => (i + delta + items.length) % items.length);

  return (
    <section
      aria-label={label}
      className="relative"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          step(1);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          step(-1);
        }
      }}
    >
      <div className="overflow-hidden rounded-xl bg-white/10 shadow-soft sm:rounded-2xl">
        {/*
         * `motion-safe` rather than a media-query check in JavaScript: the
         * slide still changes for a reader who asked for less motion — the
         * content updating is the point, and it is pausable — it just cuts
         * rather than sliding.
         */}
        <ul
          className="flex aspect-4/3 motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <li
              key={item.src}
              className={`relative grid h-full w-full shrink-0 place-items-center ${
                item.kind === "video" ? "bg-plum" : ""
              }`}
            >
              {item.kind === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 896px) 832px, 100vw"
                  priority={i === 0}
                  draggable={false}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: item.focal }}
                />
              ) : (
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                    // React leaves `muted` out of the server-rendered HTML,
                    // so the attribute on its own can hand a viewer an
                    // unmuted player for the moment before hydration.
                    if (el) el.muted = true;
                  }}
                  src={item.src}
                  poster={item.poster}
                  controls
                  /*
                   * The clips are here for what they show, not for what is
                   * said on them, so silence is not a default a viewer can
                   * drift out of: the native controls still offer a volume
                   * slider, and anything that moves it puts the mute back.
                   */
                  muted
                  onVolumeChange={(event) => {
                    event.currentTarget.muted = true;
                  }}
                  playsInline
                  // `metadata`, not `none`: with nothing preloaded Chrome
                  // draws the poster and no controls bar, so the slide looked
                  // like a photograph and there was nothing to say it could be
                  // played. This costs a short range request and buys a
                  // visible play button and duration.
                  preload="metadata"
                  aria-label={item.alt}
                  onPlay={() => setPlayingIndex(i)}
                  onPause={() => setPlayingIndex(null)}
                  onEnded={() => setPlayingIndex(null)}
                  className="h-full w-auto max-w-full object-contain"
                />
              )}
              {item.kind === "video" && playingIndex !== i ? (
                <button
                  type="button"
                  onClick={() => void videoRefs.current[i]?.play()}
                  className="absolute grid h-16 w-16 place-items-center rounded-full bg-white/90 text-brand-700 shadow-lift transition-transform hover:scale-105"
                >
                  <span className="sr-only">{`Play: ${item.alt}`}</span>
                  <Icon name="play" className="ml-0.5 h-6 w-6" />
                </button>
              ) : null}
            </li>
          ))}
        </ul>
      </div>

      {items.length > 1 ? (
        <>
          <StepButton side="left" onClick={() => step(-1)} />
          <StepButton side="right" onClick={() => step(1)} />
        </>
      ) : null}

      <button
        type="button"
        onClick={() => setWantsPlay((on) => !on)}
        aria-pressed={!wantsPlay}
        className="sr-only focus:not-sr-only focus:absolute focus:bottom-3 focus:left-1/2 focus:z-10 focus:-translate-x-1/2 focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-brand-700 focus:shadow-lift"
      >
        {wantsPlay ? "Pause the slideshow" : "Play the slideshow"}
      </button>
    </section>
  );
}

/**
 * Previous / next.
 *
 * These are the only thing that tells a reader there is more than one picture
 * in the frame, so they are always on show rather than appearing on hover —
 * on a phone a hover-only control does not exist at all. Small, though: at
 * the size of a proper button they sat across the faces in the photograph,
 * and the rotation already does the walking for anyone who just watches.
 *
 * Being inside the `<section>` means a tap or a click also lands in its focus
 * handler, so the slide a reader chose stays put instead of rotating away
 * under them.
 */
function StepButton({
  side,
  onClick,
}: {
  side: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous photograph" : "Next photograph"}
      // The pseudo-element grows the touch target to 48px without growing
      // the button, which has to stay small to keep off people's faces.
      className={`absolute top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-brand-700 ring-1 ring-white/50 backdrop-blur-sm transition-colors before:absolute before:-inset-2 before:content-[''] hover:bg-white ${
        side === "left" ? "left-2 sm:left-3" : "right-2 sm:right-3"
      }`}
    >
      <Icon
        name="chevron-right"
        className={`h-4 w-4 ${side === "left" ? "rotate-180" : ""}`}
      />
    </button>
  );
}
