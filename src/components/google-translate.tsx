"use client";

import Script from "next/script";
import { PAGE_LANGUAGE, includedLanguages } from "@/lib/languages";

export const WIDGET_ID = "google_translate_element";

type TranslateOptions = {
  pageLanguage: string;
  includedLanguages: string;
  autoDisplay: boolean;
};

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: TranslateOptions,
          containerId: string,
        ) => unknown;
      };
    };
  }
}

/**
 * The loader calls this global the instant it arrives, which can be before any
 * effect in this component has run — so it is registered at module scope, not
 * on mount.
 */
if (typeof window !== "undefined") {
  window.googleTranslateElementInit = () => {
    const mount = () => {
      const container = document.getElementById(WIDGET_ID);
      if (!window.google?.translate || !container) return false;
      // A second widget on the same node would render a second <select>.
      if (!container.hasChildNodes()) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: PAGE_LANGUAGE,
            includedLanguages,
            autoDisplay: false,
          },
          WIDGET_ID,
        );
      }
      return true;
    };

    if (!mount()) requestAnimationFrame(mount);
  };
}

/**
 * Loads the Google Website Translator once for the whole site. It renders no
 * UI of its own — the widget is hidden in `globals.css` and driven from
 * `<LanguageSwitcher />`, which may appear in more than one place.
 */
export function GoogleTranslate() {
  return (
    <>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <div id={WIDGET_ID} aria-hidden />
    </>
  );
}
