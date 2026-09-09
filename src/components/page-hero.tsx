import type { ReactNode } from "react";
import { Container } from "@/components/ui";

/**
 * Shared hero for the inner pages.
 *
 * The gradient used to fade from pink to transparent, which let the page
 * colour show through and made the hero blur into the first section. It now
 * sits on its own flat blush ground with a hairline at the bottom, so a
 * reader can see where the page's title block ends and its content begins.
 *
 * The Khmer line moved *above* the eyebrow into the position of a standfirst,
 * where it reads as the project's own name rather than as a caption that
 * arrived before its heading.
 */
export function PageHero({
  eyebrow,
  khmer,
  title,
  lead,
  actions,
}: {
  eyebrow: string;
  khmer?: string;
  title: ReactNode;
  lead: string;
  actions?: ReactNode;
}) {
  return (
    <div className="glow overflow-hidden border-b border-brand-200/70 bg-brand-50">
      <Container className="py-14 sm:py-20">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-bold tracking-[0.12em] text-brand-700 uppercase ring-1 ring-brand-200">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.25rem,1.4rem+3.2vw,3.75rem)] leading-[1.06] text-ink">
          {title}
        </h1>
        <p className="mt-6 measure text-read text-ink-body sm:text-read-lg">
          {lead}
        </p>
        {khmer ? (
          <p className="khmer mt-6 max-w-2xl border-l-2 border-brand-300 pl-4 text-base font-semibold text-brand-700">
            {khmer}
          </p>
        ) : null}
        {actions ? (
          <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
        ) : null}
      </Container>
    </div>
  );
}
