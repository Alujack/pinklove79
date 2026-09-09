import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

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

export function Section({
  children,
  id,
  className,
  tone = "plain",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: "plain" | "white" | "brand" | "sand";
}) {
  const tones = {
    plain: "",
    white: "band-white bg-white",
    brand: "bg-brand-600 text-white",
    sand: "bg-sand/70",
  } as const;

  return (
    <section id={id} className={cx("py-16 sm:py-24", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}

/* ------------------------------------------------------------ typography -- */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-brand-700 uppercase">
      {children}
    </p>
  );
}

export function SectionHeading({
  emoji,
  title,
  lead,
  align = "left",
}: {
  emoji?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <header
      className={cx("max-w-3xl", align === "center" && "mx-auto text-center")}
    >
      <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
        {emoji ? (
          <span aria-hidden className="mr-2.5">
            {emoji}
          </span>
        ) : null}
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{lead}</p>
      ) : null}
    </header>
  );
}

/** Body copy block — keeps the reading measure comfortable. */
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
        "max-w-3xl space-y-5 text-lg leading-relaxed text-ink-soft",
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
    <Container className="py-12 sm:py-14">
      <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink-soft sm:text-xl">
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
    <ul className={cx("max-w-3xl space-y-3", className)}>
      {lines.map((line) => (
        <li
          key={line}
          className="flex gap-3.5 text-lg leading-relaxed text-ink"
        >
          <span
            aria-hidden
            className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-brand-400"
          />
          <span>{line}</span>
        </li>
      ))}
    </ul>
  );
}

/* --------------------------------------------------------------- buttons -- */

type ButtonTone = "primary" | "secondary" | "ghost" | "onBrand";

const buttonTones: Record<ButtonTone, string> = {
  primary:
    "bg-brand-600 text-white shadow-soft hover:bg-brand-700 active:bg-brand-800",
  secondary:
    "bg-white text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50 hover:ring-brand-300",
  ghost: "text-brand-700 hover:bg-brand-100",
  onBrand: "bg-white text-brand-700 shadow-soft hover:bg-brand-50",
};

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-60";

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

/* ----------------------------------------------------------------- cards -- */

export function Card({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  return (
    <Tag
      className={cx(
        "rounded-3xl bg-[var(--surface)] p-7 ring-1 ring-[color:var(--surface-ring)] shadow-soft backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Grid of "icon + label" items, e.g. the support lists from each project. */
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
        "grid gap-3 sm:gap-4",
        columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
      )}
    >
      {items.map((item) => {
        const [emoji, ...rest] = item.split(" ");
        const hasEmoji = /\p{Extended_Pictographic}/u.test(emoji);
        return (
          <li
            key={item}
            className="flex items-start gap-3 rounded-2xl bg-[var(--surface)] px-4 py-3.5 ring-1 ring-[color:var(--surface-ring)]"
          >
            <span aria-hidden className="text-xl leading-6">
              {hasEmoji ? emoji : "•"}
            </span>
            <span className="text-[0.975rem] leading-6 font-medium text-ink">
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
    <div className="text-center">
      <p className="font-display text-4xl text-brand-600 sm:text-5xl">
        {value}
      </p>
      <p className="mt-1.5 text-sm font-semibold tracking-wide text-ink-soft uppercase">
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
        "rounded-3xl px-7 py-8 sm:px-10 sm:py-10",
        tone === "brand"
          ? "bg-brand-600 text-white shadow-lift"
          : "bg-[var(--surface)] text-ink ring-1 ring-[color:var(--surface-ring)] shadow-soft",
      )}
    >
      {lines.map((line, i) => (
        <p
          key={line}
          className={cx(
            "font-display text-2xl leading-snug sm:text-3xl",
            i > 0 && "mt-1",
          )}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
