import type { ReactNode } from "react";
import { Container } from "@/components/ui";

/**
 * Shared hero for the inner pages.
 *
 * The gradient used to fade from pink to transparent, which let the page
 * colour show through and made the hero blur into the first section. It now
 * sits on the shared `.hero-ground` wash — light at the top, deepest along
 * the bottom edge — with a hairline under it, so a reader can see where the
 * page's title block ends and its content begins.
 *
 * The title carries the page on its own: the small uppercase pill that used to
 * sit above it only ever restated the nav item the reader had just tapped.
 */
export function PageHero({
  title,
  lead,
  actions,
}: {
  title: ReactNode;
  lead: string;
  actions?: ReactNode;
}) {
  return (
    <div className="hero-ground glow overflow-hidden border-b border-white/15">
      <Container className="py-14 sm:py-20">
        <h1 className="max-w-3xl font-display text-[clamp(2.25rem,1.4rem+3.2vw,3.75rem)] leading-[1.06] text-white">
          {title}
        </h1>
        <p className="mt-6 measure text-read text-ink-body sm:text-read-lg">
          {lead}
        </p>
        {actions ? (
          <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
        ) : null}
      </Container>
    </div>
  );
}
