import { Fragment, type ReactNode } from "react";

/*
 * Names are names, not phrases to be rendered into the reader's language.
 *
 * Google's widget does not know that. Left to itself it happily "translates"
 * PinkLove79 — transliterating it into Cyrillic, Arabic or kana, or splitting
 * it into "Pink Love 79" — and it does the same to the people: "Yoeurn Yan"
 * comes back as something its owner would not recognise. That is worst in
 * exactly the languages the switcher exists to serve, and it breaks the words
 * a returning visitor searches for.
 *
 * `translate="no"` is the standard opt-out and the widget honours it, so
 * everywhere a name reaches the page as visible text it goes through here.
 */

/** The organisation itself. `.org` first, so the longer form wins the match. */
export const BRAND_TERMS = ["PinkLove79.org", "PinkLove79"] as const;

/** A name standing on its own — the wordmark, a heading, a label. */
export function NoTranslate({ children }: { children: ReactNode }) {
  return <span translate="no">{children}</span>;
}

/** The organisation's name, for the common case of writing it out in copy. */
export function Brand({ children = "PinkLove79" }: { children?: string }) {
  return <span translate="no">{children}</span>;
}

const escapeRe = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Build a protector for one set of terms.
 *
 * The regex is compiled once per set rather than per call, and the terms are
 * sorted longest-first so "Ms. Mei Lan Gee" is matched before the bare "Mei
 * Lan Gee" it contains. The lookarounds stop a short name like "Bora" from
 * matching inside a longer word.
 */
export function makeProtector(terms: readonly string[]) {
  const pattern = [...terms]
    .sort((a, b) => b.length - a.length)
    .map(escapeRe)
    .join("|");

  const matcher = new RegExp(
    `((?<![\\p{L}\\p{N}])(?:${pattern})(?![\\p{L}\\p{N}]))`,
    "gu",
  );

  /*
   * Splitting on a capturing group interleaves the matches with the text
   * around them at odd indices, so a name can be lifted out of a sentence
   * without the content files having to break their copy into fragments.
   */
  return function protect(text: string): ReactNode {
    const parts = text.split(matcher);
    if (parts.length === 1) return text;

    return parts.map((part, index) =>
      index % 2 === 1 ? (
        <span key={index} translate="no">
          {part}
        </span>
      ) : (
        <Fragment key={index}>{part}</Fragment>
      ),
    );
  };
}

/**
 * Protects the organisation's name. This is the one wired into the shared
 * layout pieces, so ordinary page copy is covered without asking.
 *
 * People's names are handled separately, on the Team page: they appear
 * nowhere else, and keeping the roster out of this module keeps it out of
 * every page that renders a heading.
 */
export const withBrand = makeProtector(BRAND_TERMS);
