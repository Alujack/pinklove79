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
  chat: (
    <path
      d="M20 12.2c0 3.8-3.6 6.9-8 6.9a9.6 9.6 0 01-2.6-.35L4.5 20.5l1.2-3.2A6.5 6.5 0 014 12.2C4 8.4 7.6 5.3 12 5.3s8 3.1 8 6.9z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  /*
   * The WhatsApp mark itself, not a generic speech bubble.
   *
   * A hollow bubble read as "leave a message" next to a phone number, and
   * people did not know the number would open WhatsApp until they tapped it.
   * This is the real glyph — solid, on the same 24px grid as the rest — so it
   * is recognised before the number is read. It is the one icon here that is
   * usually given its own colour rather than the ink of its band.
   */
  whatsapp: (
    <path
      d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01c-1.77 0-3.5-.48-5.03-1.38l-.36-.22-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.89 6.99c0 5.45-4.43 9.89-9.88 9.89m8.41-18.3A11.82 11.82 0 0012.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 005.69 1.45c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.48-8.41"
      fill="currentColor"
    />
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
