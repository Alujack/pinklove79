"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";
import { Container } from "@/components/ui";
import { HeartMark } from "@/components/heart-mark";
import { LanguageSwitcher } from "@/components/language-switcher";

export function SiteHeader() {
  const pathname = usePathname();
  // Remembering *which* page the menu was opened on means a navigation closes
  // it for free — no effect syncing state back to the router.
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    /*
     * Solid, not translucent. At 85% opacity over a pink page the headings
     * of whatever section you were scrolling past showed through the bar and
     * collided with the nav labels; white also gives the wordmark and the
     * links a clean rail to sit on, and separates the chrome from the blush
     * page behind it.
     */
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 shadow-soft backdrop-blur-xl">
      {/* How far through the page you are — CSS-only, purely decorative. */}
      <span
        aria-hidden
        className="read-progress absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-brand-400 to-brand-600"
      />
      <Container>
        <div className="flex h-18 items-center justify-between gap-2 sm:gap-4">
          <Link
            href="/"
            className="-mx-2 flex items-center gap-3 rounded-full px-2 py-2 font-display text-lg text-ink min-[360px]:text-xl"
            aria-label="PinkLove79 — home"
          >
            <HeartMark className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
            <span translate="no">
              PinkLove<span className="text-brand-600">79</span>
            </span>
          </Link>

          {/*
           * Nine filled pills in a row was a lot of pink competing with the
           * wordmark, so the current page is marked with a short rule under
           * the label instead. It reads faster at a glance and gives the
           * labels room to breathe in a bar this full.
           */}
          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {nav.map((item) => {
                const active = isActive(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={
                        active
                          ? "relative flex items-center rounded-lg px-3 py-2 text-sm font-bold text-brand-700"
                          : "relative flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
                      }
                    >
                      {item.short}
                      {active ? (
                        <span
                          aria-hidden
                          className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setOpenFor(open ? null : pathname)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="rounded-full p-2.5 text-brand-700 transition-colors hover:bg-brand-100 xl:hidden"
            >
              <span className="sr-only">
                {open ? "Close menu" : "Open menu"}
              </span>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-brand-100 bg-brand-50/95 xl:hidden"
        >
          <Container className="py-4">
            {/*
             * An ordered list, and numbered on the face of it: the eight pages
             * are a route through the work rather than a pile of links, and a
             * reader scanning on a phone can hold "I was on 5" in their head.
             * The digits are `aria-hidden` because the `<ol>` already tells a
             * screen reader which item of how many this is.
             */}
            <ol className="rounded-3xl border border-brand-100 bg-white p-2 shadow-soft">
              {nav.slice(1).map((item, index) => {
                const active = isActive(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={
                        active
                          ? "flex items-baseline gap-3 rounded-2xl bg-brand-100 px-3.5 py-3.5 text-lg font-bold text-brand-700"
                          : "flex items-baseline gap-3 rounded-2xl px-3.5 py-3.5 text-lg font-bold text-ink transition-colors hover:bg-brand-50"
                      }
                    >
                      <span
                        aria-hidden
                        className={
                          active
                            ? "w-5 shrink-0 text-right text-base tabular-nums text-brand-600"
                            : "w-5 shrink-0 text-right text-base tabular-nums text-ink-soft"
                        }
                      >
                        {index + 1}.
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
