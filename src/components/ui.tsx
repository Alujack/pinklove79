import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon, type IconName } from "@/components/icons";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/* ---------------------------------------------------------------- layout -- */

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

/**
 * One band of the page.
 *
 * `tone` picks the surface, and the band publishes the tokens its children
 * read (card fill, card ring, ink, hairline) so a card never has to know
 * which band it landed on. `size` exists so a page can vary its rhythm — a
 * short closing statement should not get the same 6rem of air as a section
 * carrying four sub-headings and a grid.
 */
export function Section({
  children,
  id,
  className,
  tone = "plain",
  size = "md",
  edge,
  reveal = true,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  /** `white` is kept as an alias for `paper` — several pages ask for it by that name. */
  tone?: "plain" | "paper" | "white" | "brand" | "sand" | "deep";
  size?: "sm" | "md" | "lg";
  /** Hairline rules that make the band change legible. */
  edge?: "top" | "bottom" | "both" | "none";
  reveal?: boolean;
}) {
  const tones = {
    plain: "",
    paper: "band-paper bg-white",
    white: "band-paper bg-white",
    sand: "band-sand bg-sand",
    brand: "band-deep bg-brand-600 text-white",
    deep: "band-deep bg-plum text-white",
  } as const;

  const sizes = {
    sm: "py-12 sm:py-16",
    md: "py-16 sm:py-24",
    lg: "py-20 sm:py-32",
  } as const;

  const edges = {
    none: "",
    top: "border-t border-[color:var(--band-edge)]",
    bottom: "border-b border-[color:var(--band-edge)]",
    both: "border-y border-[color:var(--band-edge)]",
  } as const;

  // A toned band needs its own edge to read; `plain` sits on the page colour.
  const resolvedEdge = edge ?? (tone === "plain" ? "none" : "both");

  return (
    <section
      id={id}
      className={cx(sizes[size], tones[tone], edges[resolvedEdge], className)}
    >
      <Container className={reveal ? "reveal" : undefined}>{children}</Container>
    </section>
  );
}

/* ------------------------------------------------------------ typography -- */

/**
 * A soft tinted tile holding one glyph.
 *
 * Content lists across the site carry an emoji per line, and they are worth
 * keeping — this audience reads the site in a dozen languages, and a picture
 * of a bowl of rice survives translation better than any icon set. What they
 * needed was discipline: one fixed optical size, one fixed tile, centred, so
 * a column of them lines up instead of bobbing around.
 */
export function Glyph({
  children,
  size = "md",
  className,
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "h-9 w-9 rounded-xl text-lg",
    md: "h-11 w-11 rounded-2xl text-xl",
    lg: "h-14 w-14 rounded-2xl text-2xl",
  } as const;

  return (
    <span
      aria-hidden
      className={cx(
        "grid shrink-0 place-items-center bg-brand-100 leading-none text-brand-700 ring-1 ring-brand-200/70",
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * Section heading.
 *
 * The emoji used to sit inline in the `<h2>`, which put a piece of clip art
 * at the top of the type hierarchy and pushed the title off the left margin.
 * It now sits above the title in a tile of its own, so the heading line
 * starts where every other line in the column starts.
 */
export function SectionHeading({
  emoji,
  icon,
  title,
  lead,
  align = "left",
  className,
}: {
  emoji?: string;
  icon?: IconName;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  const mark = emoji ? (
    <Glyph className={cx("mb-5", centered && "mx-auto")}>{emoji}</Glyph>
  ) : icon ? (
    <Glyph className={cx("mb-5", centered && "mx-auto")}>
      <Icon name={icon} className="h-5 w-5" />
    </Glyph>
  ) : null;

  return (
    <header
      className={cx("max-w-2xl", centered && "mx-auto text-center", className)}
    >
      {mark}
      <h2 className="font-display text-3xl leading-[1.15] text-[color:var(--band-ink)] sm:text-4xl">
        {title}
      </h2>
      {lead ? (
        <p
          className={cx(
            "mt-4 text-read text-[color:var(--band-body)] sm:text-read-lg",
            centered && "mx-auto",
          )}
        >
          {lead}
        </p>
      ) : null}
    </header>
  );
}

/**
 * Body copy block.
 *
 * Capped at roughly 66 characters rather than `max-w-3xl`. At the reading
 * size this site uses, a 3xl column ran to nearly a hundred characters a
 * line, which is where the eye starts losing its place on the return sweep.
 */
export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "measure space-y-5 text-read text-[color:var(--band-body)] sm:text-read-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Intro paragraph directly under a page hero — tighter than a full section. */
export function Lead({ children }: { children: ReactNode }) {
  return (
    <Container className="reveal py-12 sm:py-16">
      <div className="relative measure space-y-5 pl-6 text-read text-[color:var(--band-body)] sm:pl-8 sm:text-read-lg">
        {/* A rule down the left edge marks this out as the page's opening note. */}
        <span
          aria-hidden
          className="absolute inset-y-1 left-0 w-1 rounded-full bg-gradient-to-b from-brand-300 to-brand-100"
        />
        {children}
      </div>
    </Container>
  );
}

/** A short line-per-thought passage, set slightly larger for emphasis. */
export function Verses({
  lines,
  className,
}: {
  lines: string[];
  className?: string;
}) {
  return (
    <ul className={cx("measure space-y-4", className)}>
      {lines.map((line) => (
        <li
          key={line}
          className="flex gap-3.5 text-read text-[color:var(--band-body)] sm:text-read-lg"
        >
          <Icon
            name="check"
            className="mt-[0.45em] h-4 w-4 shrink-0 text-brand-500"
          />
          <span>{line}</span>
        </li>
      ))}
    </ul>
  );
}

/** Quiet, non-interactive metadata — deliberately not shaped like a button. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
      {children}
    </span>
  );
}

/* --------------------------------------------------------------- buttons -- */

type ButtonTone = "primary" | "secondary" | "ghost" | "onBrand";

const buttonTones: Record<ButtonTone, string> = {
  primary:
    "bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:shadow-card active:bg-brand-800",
  // A white fill ringed in pale pink read as a disabled control on a pink
  // page. Taking the fill from the band's own surface token means it is
  // always a step away from whatever is behind it — white on a blush band,
  // blush on a white one — and the stronger ring makes it a real choice.
  secondary:
    "bg-[var(--surface)] text-brand-700 ring-1 ring-brand-300 hover:bg-brand-100 hover:ring-brand-400",
  ghost: "text-brand-700 hover:bg-brand-100",
  onBrand: "bg-white text-brand-700 shadow-soft hover:bg-brand-50",
};

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-[background-color,box-shadow,translate,color] hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0";

export function Button({
  tone = "primary",
  className,
  ...props
}: ComponentProps<"button"> & { tone?: ButtonTone }) {
  return (
    <button
      {...props}
      className={cx(buttonBase, buttonTones[tone], className)}
    />
  );
}

export function ButtonLink({
  href,
  tone = "primary",
  className,
  children,
  ...props
}: Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  tone?: ButtonTone;
}) {
  const external = /^(https?:|mailto:|tel:)/.test(href);

  if (external) {
    return (
      <a
        href={href}
        className={cx(buttonBase, buttonTones[tone], className)}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cx(buttonBase, buttonTones[tone], className)}
      {...props}
    >
      {children}
    </Link>
  );
}

/** The "Learn more →" affordance, with an arrow that leans into the hover. */
export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "group/arrow -mx-2 inline-flex min-h-11 items-center gap-1.5 rounded-full px-2 text-sm font-bold text-brand-700 transition-colors hover:text-brand-800",
        className,
      )}
    >
      {children}
      <Icon
        name="arrow-right"
        className="h-4 w-4 transition-transform group-hover/arrow:translate-x-1"
      />
    </Link>
  );
}

/* ----------------------------------------------------------------- cards -- */

export function Card({
  children,
  className,
  as: Tag = "div",
  interactive = false,
  padding = "default",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
  interactive?: boolean;
  /** `none` for cards that carry a full-bleed image to their own edges. */
  padding?: "default" | "none";
}) {
  return (
    <Tag
      className={cx(
        "rounded-3xl bg-[var(--surface)] ring-1 ring-[color:var(--surface-ring)] shadow-soft",
        padding === "default" && "p-6 sm:p-7",
        interactive &&
          "transition-[box-shadow,translate,background-color] hover:-translate-y-0.5 hover:bg-[var(--surface-hover)] hover:shadow-lift",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/**
 * Grid of "glyph + label" items, e.g. the support lists from each project.
 *
 * The label is vertically centred against the glyph tile rather than
 * top-aligned, so single-line and two-line items sit on the same rhythm.
 */
export function IconGrid({
  items,
  columns = 2,
}: {
  items: string[];
  columns?: 2 | 3;
}) {
  return (
    <ul
      className={cx(
        "grid gap-3",
        columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
      )}
    >
      {items.map((item) => {
        const [first, ...rest] = item.split(" ");
        const hasEmoji = /\p{Extended_Pictographic}/u.test(first);
        return (
          <li
            key={item}
            className="flex items-center gap-3.5 rounded-2xl bg-[var(--surface)] p-3 ring-1 ring-[color:var(--surface-ring)] transition-colors hover:bg-[var(--surface-hover)]"
          >
            <Glyph size="sm">
              {hasEmoji ? (
                first
              ) : (
                <Icon name="check" className="h-4 w-4" />
              )}
            </Glyph>
            <span className="text-base leading-snug font-medium text-[color:var(--band-ink)]">
              {hasEmoji ? rest.join(" ") : item}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl leading-none text-brand-600">
        {value}
      </p>
      <p className="mt-2 text-xs font-bold tracking-[0.1em] text-[color:var(--band-soft)] uppercase">
        {label}
      </p>
    </div>
  );
}

/** Closing quote-like statement used at the end of several sections. */
export function Pledge({
  lines,
  tone = "brand",
}: {
  lines: string[];
  tone?: "brand" | "quiet";
}) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-3xl px-6 py-8 sm:px-10 sm:py-10",
        tone === "brand"
          ? "glow band-deep bg-brand-600 text-white shadow-lift"
          : "bg-[var(--surface)] ring-1 ring-[color:var(--surface-ring)] shadow-soft",
      )}
    >
      {/* An oversized quote mark, cropped by the corner — cheap, and it tells
          the eye this is a statement rather than another paragraph. */}
      <Icon
        name="quote"
        className={cx(
          "pointer-events-none absolute -top-3 right-4 h-20 w-20",
          tone === "brand" ? "text-white/15" : "text-brand-200/60",
        )}
      />
      <div className="relative measure space-y-1.5">
        {lines.map((line) => (
          <p
            key={line}
            className={cx(
              "font-display text-2xl leading-snug sm:text-3xl",
              tone === "brand" ? "text-white" : "text-[color:var(--band-ink)]",
            )}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
