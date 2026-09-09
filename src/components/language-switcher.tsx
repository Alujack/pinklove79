"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  applyLanguage,
  languageLabel,
  languageShortLabel,
  languages,
  readLanguage,
  readServerLanguage,
  subscribeToLanguage,
  syncDocumentLanguage,
  type LanguageCode,
} from "@/lib/languages";

/**
 * The active language lives in a cookie, so the server can't know it: pages
 * render as authored and hydration swaps in whatever the cookie says.
 */
function useLanguage() {
  const current = useSyncExternalStore<LanguageCode>(
    subscribeToLanguage,
    readLanguage,
    readServerLanguage,
  );

  // Google translates the text but leaves `lang` and `dir` untouched.
  useEffect(() => {
    syncDocumentLanguage(current);
  }, [current]);

  return current;
}

function Check() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

function Globe({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
    </svg>
  );
}

/**
 * The header control: a globe button that opens a menu of languages.
 *
 * `notranslate` keeps Google's pass off the language names — each is already
 * written in the language it names.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const current = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={`notranslate relative ${className ?? ""}`}
      translate="no"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-1.5 rounded-full py-3 pr-3.5 pl-3 text-sm font-semibold text-ink-soft transition-colors hover:bg-brand-100 hover:text-brand-700"
      >
        <span className="sr-only">Language — {languageLabel(current)}</span>
        <Globe className="h-4.5 w-4.5 shrink-0" />
        <span aria-hidden>{languageShortLabel(current)}</span>
      </button>

      {open ? (
        <ul
          role="menu"
          aria-label="Language"
          className="absolute top-full right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-brand-100 bg-white py-1.5 shadow-lift"
        >
          {languages.map(([code, label]) => (
            <li key={code}>
              <button
                type="button"
                role="menuitemradio"
                aria-checked={code === current}
                onClick={() => {
                  setOpen(false);
                  if (code !== current) applyLanguage(code);
                }}
                className={
                  code === current
                    ? "flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm font-bold text-brand-700"
                    : "flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm font-medium text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
                }
              >
                <span>{label}</span>
                {code === current ? <Check /> : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

/**
 * The same choice laid out flat, for the mobile menu — where the top bar has
 * no room for another control and a menu inside a menu would be fussy.
 */
export function LanguageOptions({ className }: { className?: string }) {
  const current = useLanguage();

  return (
    <div className={`notranslate ${className ?? ""}`} translate="no">
      <h2 className="flex items-center gap-2 px-1 text-xs font-bold tracking-[0.14em] text-brand-700 uppercase">
        <Globe className="h-4 w-4 shrink-0" />
        Language
      </h2>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {languages.map(([code, label]) => (
          <li key={code}>
            <button
              type="button"
              aria-pressed={code === current}
              onClick={() => {
                if (code !== current) applyLanguage(code);
              }}
              className={
                code === current
                  ? "flex items-center gap-1.5 rounded-full bg-brand-600 px-3.5 py-2 text-sm font-bold text-white"
                  : "flex items-center gap-1.5 rounded-full bg-white/70 px-3.5 py-2 text-sm font-semibold text-ink-soft ring-1 ring-brand-200 transition-colors hover:bg-brand-100 hover:text-brand-700"
              }
            >
              {code === current ? <Check /> : null}
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
