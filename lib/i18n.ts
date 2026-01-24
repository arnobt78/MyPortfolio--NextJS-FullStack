import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./translations";
import { getInitialLanguage } from "./language-detection";
import { getClientPreferredLanguage } from "./language-cookie";

function getInitialLanguageForI18n(): string {
  const fallback = getInitialLanguage();
  if (typeof window !== "undefined") {
    return getClientPreferredLanguage(fallback);
  }
  return fallback;
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translations.en as Record<string, string> },
    de: { translation: translations.de as Record<string, string> },
  },
  lng: getInitialLanguageForI18n(),
  fallbackLng: "en",
  debug: false,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
  initImmediate: true,
  load: "languageOnly",
  cleanCode: true,
});

export default i18n;
