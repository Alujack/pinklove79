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
     * Solid, not translucent. At 85% opacity the headings of whatever section
     * you were scrolling past showed through the bar and collided with the nav
     * labels. The bar is cut from the deep end of the berry scale so it reads
     * as the top of the same page rather than a foreign white strip laid over
     * it, and the hairline underneath is what separates the two.
     */
    <header className="sticky top-0 z-50 border-b border-white/15 bg-berry-800/95 shadow-soft backdrop-blur-xl">
      {/* How far through the page you are — CSS-only, purely decorative. */}
      <span
        aria-hidden
        className="read-progress absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-white/60 to-white"
      />
      <Container>
        <div className="flex h-18 items-center justify-between gap-2 sm:gap-4">
          <Link
            href="/"
            className="-mx-2 flex items-center gap-3 rounded-full px-2 py-2 font-display text-lg text-white min-[360px]:text-xl"
            aria-label="PinkLove79 — home"
          >
            <HeartMark className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
            <span translate="no">
              PinkLove<span className="text-[#ffb3cf]">79</span>
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
                          ? "relative flex items-center rounded-lg px-3 py-2 text-sm font-bold text-white"
                          : "relative flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-white/12 hover:text-white"
                      }
                    >
                      {item.short}
                      {active ? (
                        <span
                          aria-hidden
                          className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-white"
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
              className="rounded-full p-3 text-white transition-colors hover:bg-white/15 xl:hidden"
            >
              <span className="sr-only">
                {open ? "Close menu" : "Open menu"}
              </span>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-5.5 w-5.5"
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
          className="border-t border-white/15 bg-berry-700/98 xl:hidden"
        >
          <Container className="py-4">
            {/*
             * An ordered list, and numbered on the face of it: the nine pages
             * are a route through the work rather than a pile of links, and a
             * reader scanning on a phone can hold "I was on 5" in their head.
             * The digits are `aria-hidden` because the `<ol>` already tells a
             * screen reader which item of how many this is.
             *
             * Home leads the list. It used to be sliced off — the wordmark
             * already goes there — but on a phone the wordmark is a small
             * target next to the menu you have just opened, and a reader deep
             * in the site looking for the way back should not have to know
             * that the logo is a link.
             */}
            <ol className="rounded-3xl border border-white/20 bg-white/10 p-2 shadow-soft">
              {nav.map((item, index) => {
                const active = isActive(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={
                        active
                          ? "flex items-baseline gap-3 rounded-2xl bg-white/20 px-3.5 py-3.5 text-lg font-bold text-white"
                          : "flex items-baseline gap-3 rounded-2xl px-3.5 py-3.5 text-lg font-bold text-white transition-colors hover:bg-white/12"
                      }
                    >
                      <span
                        aria-hidden
                        className={
                          active
                            ? "w-5 shrink-0 text-right text-base tabular-nums text-white"
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
