import type { ReactNode } from "react";
import { Container } from "@/components/ui";

/** Shared hero for the inner pages: soft pink band, eyebrow, title, lead. */
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
    <div className="relative overflow-hidden border-b border-brand-100 bg-gradient-to-b from-brand-100/80 via-brand-50/50 to-transparent">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-200/45 blur-3xl"
      />
      <Container className="relative py-16 sm:py-24">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-brand-700 uppercase ring-1 ring-brand-200">
          {eyebrow}
        </p>
        {khmer ? (
          <p className="khmer mt-6 max-w-3xl text-lg font-semibold text-brand-700">
            {khmer}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          {lead}
        </p>
        {actions ? (
          <div className="mt-9 flex flex-wrap gap-3">{actions}</div>
        ) : null}
      </Container>
    </div>
  );
}
