"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";
import { Container } from "@/components/ui";
import { HeartMark } from "@/components/heart-mark";

export function SiteHeader() {
  const pathname = usePathname();
  // Remembering *which* page the menu was opened on means a navigation closes
  // it for free — no effect syncing state back to the router.
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100/80 bg-brand-50/85 backdrop-blur-md">
      <Container>
        <div className="flex h-18 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-xl text-ink"
            aria-label="PinkLove79 — home"
          >
            <HeartMark className="h-10 w-10 shrink-0" />
            <span>
              PinkLove<span className="text-brand-600">79</span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={
                      isActive(item.href)
                        ? "rounded-full bg-brand-100 px-3.5 py-2 text-sm font-bold text-brand-700"
                        : "rounded-full px-3.5 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-brand-100/70 hover:text-brand-700"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/donate"
              className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-soft transition-colors hover:bg-brand-700"
            >
              Donate
            </Link>
            <button
              type="button"
              onClick={() => setOpenFor(open ? null : pathname)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="rounded-full p-2.5 text-brand-700 ring-1 ring-brand-200 transition-colors hover:bg-brand-100 lg:hidden"
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
          className="border-t border-brand-100 bg-brand-50/95 lg:hidden"
        >
          <Container className="py-3">
            <ul className="grid gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={
                      isActive(item.href)
                        ? "block rounded-2xl bg-brand-100 px-4 py-3 font-bold text-brand-700"
                        : "block rounded-2xl px-4 py-3 font-semibold text-ink-soft"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
