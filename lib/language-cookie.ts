// SSR-safe language detection using cookies (en/de only)
// Fallback to browser language or localStorage on client

const SUPPORTED = ["en", "de"] as const;

export function getLanguageFromCookie(): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(/(?:^|; )selectedLanguage=([^;]*)/);
  if (match && SUPPORTED.includes(match[1] as "en" | "de")) {
    return match[1];
  }
  return undefined;
}

export function setLanguageCookie(lang: string) {
  if (typeof document !== "undefined") {
    document.cookie = `selectedLanguage=${lang}; path=/; max-age=31536000`; // 1 year
  }
}

export function detectInitialLanguageSSR(): string {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    const cookieLang = getLanguageFromCookie();
    if (cookieLang) return cookieLang;
    return "en";
  }
  const cookieLang = getLanguageFromCookie();
  if (cookieLang) return cookieLang;
  try {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (
      savedLanguage &&
      typeof savedLanguage === "string" &&
      SUPPORTED.includes(savedLanguage as "en" | "de")
    ) {
      return savedLanguage;
    }
  } catch {}
  let browserLang = "en";
  if (typeof navigator !== "undefined" && navigator.language) {
    browserLang = navigator.language.toLowerCase();
  }
  if (browserLang.startsWith("de")) return "de";
  return "en";
}

/** Prefer cookie/localStorage over server value when on client; avoids reset to "en" on remount. */
export function getClientPreferredLanguage(serverInitial: string): string {
  if (typeof window === "undefined") return serverInitial;
  const fromCookie = getLanguageFromCookie();
  if (fromCookie) return fromCookie;
  try {
    const fromStorage = localStorage.getItem("selectedLanguage");
    if (fromStorage === "en" || fromStorage === "de") return fromStorage;
  } catch {}
  return serverInitial === "de" || serverInitial === "en" ? serverInitial : "en";
}
