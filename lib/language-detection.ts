// Language detection used before React hydration to avoid flicker

import { detectInitialLanguageSSR } from "@/lib/language-cookie";

export function detectAndSetInitialLanguage(): string {
  return detectInitialLanguageSSR();
}

declare global {
  interface Window {
    __INITIAL_LANGUAGE__?: string;
  }
}

export function getInitialLanguage(): string {
  if (typeof window !== "undefined" && window.__INITIAL_LANGUAGE__) {
    const lang = window.__INITIAL_LANGUAGE__;
    if (lang === "en" || lang === "de") return lang;
  }
  return detectInitialLanguageSSR();
}
