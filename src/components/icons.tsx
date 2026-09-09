/*
 * A small icon set for the site's chrome.
 *
 * Emoji stay in the content lists, where they help a reader scan a page in a
 * language the site was not written in. They were doing real damage in the
 * chrome, though: a 📧 or 📱 set at 13px next to a label collapses into a
 * grey smudge, and each platform draws it differently, so the footer and the
 * contact card never looked like they belonged to the same design. These are
 * drawn on one 24px grid with one stroke weight, and they inherit
 * `currentColor`, so they take the ink of whatever band they land on.
 */

const paths = {
  check: (
    <path
      d="M4.5 12.6l4.6 4.6L19.5 6.8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "arrow-right": (
    <path
      d="M4 12h14.5M12.8 6l5.7 6-5.7 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "chevron-down": (
    <path
      d="M6 9.75l6 5.5 6-5.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "chevron-right": (
    <path
      d="M9.75 6l5.5 6-5.5 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  mail: (
    <>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4.2 8l6.9 4.8a1.6 1.6 0 001.8 0L19.8 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </>
  ),
  phone: (
    <path
      d="M7.3 3.6a1.4 1.4 0 011.35.9l1.1 2.8a1.4 1.4 0 01-.42 1.6l-1.1.86a10.6 10.6 0 005.02 5.02l.86-1.1a1.4 1.4 0 011.6-.42l2.8 1.1a1.4 1.4 0 01.9 1.35v2A2.3 2.3 0 0116.9 20 14.2 14.2 0 014 7.1a2.3 2.3 0 012.3-2.5z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  pin: (
    <>
      <path
        d="M12 21c4.4-4 6.6-7.2 6.6-10.2A6.6 6.6 0 005.4 10.8C5.4 13.8 7.6 17 12 21z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10.4"
        r="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </>
  ),
  globe: (
    <>
      <circle
        cx="12"
        cy="12"
        r="8.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3.3 12h17.4M12 3.3c2.4 2.5 2.4 15 0 17.4M12 3.3c-2.4 2.5-2.4 15 0 17.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </>
  ),
  heart: (
    <path
      d="M12 20.6l-1.4-1.26C6.2 15.4 3.3 12.75 3.3 9.5A4.9 4.9 0 018.2 4.6c1.6 0 3.1.76 4.1 1.97A5.4 5.4 0 0116.4 4.6a4.9 4.9 0 014.9 4.9c0 3.25-2.9 5.9-7.3 9.84z"
      fill="currentColor"
    />
  ),
  quote: (
    <path
      d="M9.3 5.5c-3.4 1.9-5.3 4.8-5.3 8.4 0 3 1.6 4.9 3.9 4.9 2 0 3.5-1.5 3.5-3.5 0-1.9-1.3-3.3-3.1-3.4.2-1.9 1.4-3.6 3.3-4.7zm10 0c-3.4 1.9-5.3 4.8-5.3 8.4 0 3 1.6 4.9 3.9 4.9 2 0 3.5-1.5 3.5-3.5 0-1.9-1.3-3.3-3.1-3.4.2-1.9 1.4-3.6 3.3-4.7z"
      fill="currentColor"
    />
  ),
  play: (
    <path d="M8 5.4l11 6.6-11 6.6z" fill="currentColor" />
  ),
  pause: (
    <path
      d="M8.5 5.5h2.2v13H8.5zM13.3 5.5h2.2v13h-2.2z"
      fill="currentColor"
    />
  ),
  menu: (
    <path
      d="M3.5 7h17M3.5 12h17M3.5 17h17"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  ),
  close: (
    <path
      d="M6 6l12 12M18 6L6 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  ),
} as const;

export type IconName = keyof typeof paths;

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className}>
      {paths[name]}
    </svg>
  );
}
