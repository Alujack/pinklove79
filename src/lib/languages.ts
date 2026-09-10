/**
 * Google Website Translator wiring.
 *
 * The widget keeps its state in a `googtrans` cookie rather than in the URL,
 * so everything here is cookie plumbing: read the active language, write a new
 * one across every domain scope Google might look at, and hand the choice to
 * the (hidden) widget.
 */

/** The language the pages are actually authored in. */
export const PAGE_LANGUAGE = "en";

export const languages = [
  ["en", "English"],
  ["fr", "Français"],
  ["de", "Deutsch"],
  ["it", "Italiano"],
  ["zh-CN", "中文"],
  ["ja", "日本語"],
  ["ko", "한국어"],
  ["ar", "العربية"],
] as const;

export type LanguageCode = (typeof languages)[number][0];

/** What we allow into the widget — anything else Google offers stays hidden. */
export const includedLanguages = languages.map(([code]) => code).join(",");

const codes = new Set<string>(languages.map(([code]) => code));

export function isLanguageCode(value: string | undefined): value is LanguageCode {
  return value !== undefined && codes.has(value);
}

export function languageLabel(code: LanguageCode) {
  return languages.find(([value]) => value === code)?.[1] ?? code;
}

/**
 * The two-letter form for the header button, where space is tight — "zh-CN"
 * shortens to "ZH". The menu still lists each language by its own name.
 */
export function languageShortLabel(code: LanguageCode) {
  return code.split("-")[0].toUpperCase();
}

const RTL_LANGUAGES: ReadonlySet<string> = new Set(["ar"]);

/**
 * Which languages are written right-to-left. Kept for reference — the page
 * direction is intentionally not flipped; see `syncDocumentLanguage`.
 */
export const isRtl = (code: LanguageCode) => RTL_LANGUAGES.has(code);

/* ------------------------------------------------------------- cookie -- */

const COOKIE = "googtrans";

/**
 * Google reads the cookie from whichever scope it finds it in, and which one
 * sticks depends on how the site is served (apex, `www.`, a preview domain).
 * Writing all of them is the only reliable way to make a choice survive a
 * reload — and, on reset, the only way to be sure none is left behind.
 */
function cookieDomains(): (string | null)[] {
  const host = window.location.hostname;
  const scopes: (string | null)[] = [null];

  // Hosts without a dot (localhost) and raw IPs reject a `domain` attribute.
  if (host.includes(".") && !/^[\d.]+$/.test(host)) {
    scopes.push(host, `.${host}`);
    const bare = host.replace(/^www\./, "");
    if (bare !== host) scopes.push(bare, `.${bare}`);
  }

  return scopes;
}

/** The language currently applied to the page, per the widget's own cookie. */
export function readLanguage(): LanguageCode {
  const raw = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/)?.[1];
  if (!raw) return PAGE_LANGUAGE;

  // The value looks like `/en/fr`, and is sometimes URL-encoded once or twice.
  const target = decodeURIComponent(decodeURIComponent(raw)).split("/")[2];
  return isLanguageCode(target) ? target : PAGE_LANGUAGE;
}

function writeCookie(code: LanguageCode) {
  const untranslated = code === PAGE_LANGUAGE;
  const value = untranslated ? "" : `/${PAGE_LANGUAGE}/${code}`;

  for (const domain of cookieDomains()) {
    const parts = [`${COOKIE}=${value}`, "path=/", "SameSite=Lax"];
    if (domain) parts.push(`domain=${domain}`);
    if (untranslated) parts.push("expires=Thu, 01 Jan 1970 00:00:00 GMT");
    document.cookie = parts.join("; ");
  }
}

/* --------------------------------------------------------------- store -- */

/*
 * The cookie is the source of truth, and nothing in the browser fires an event
 * when it changes — so components read it through `useSyncExternalStore` and
 * `applyLanguage` below tells them when it moved.
 */
const listeners = new Set<() => void>();

export function subscribeToLanguage(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Server render has no cookie to read, so it always renders as authored. */
export const readServerLanguage = (): LanguageCode => PAGE_LANGUAGE;

/* -------------------------------------------------------------- apply -- */

/** Google translates text but never touches direction or the `lang` attribute. */
export function syncDocumentLanguage(code: LanguageCode) {
  const root = document.documentElement;
  root.lang = code;

  /*
   * Deliberately left as `ltr` for every language, including Arabic. Setting
   * `dir="rtl"` mirrors the whole page — header, nav, cards, alignment — which
   * is a different site rather than a translated one. Right-to-left scripts
   * still render correctly inside each line: the browser resolves that from
   * the characters, not from this attribute.
   */
  root.dir = "ltr";
}

/**
 * Switch the page to `code`.
 *
 * Driving the widget's own (hidden) `<select>` re-translates in place, which
 * keeps scroll position and avoids a round trip. Going back to the original
 * language isn't offered in that select — Google omits the page language — so
 * that case, and any case where the widget hasn't loaded, falls back to the
 * cookie plus a reload, which always works.
 */
export function applyLanguage(code: LanguageCode) {
  writeCookie(code);
  syncDocumentLanguage(code);
  for (const listener of listeners) listener();

  const combo = document.querySelector<HTMLSelectElement>("select.goog-te-combo");

  if (code !== PAGE_LANGUAGE && combo) {
    combo.value = code;
    combo.dispatchEvent(new Event("change"));
    return;
  }

  window.location.reload();
}
