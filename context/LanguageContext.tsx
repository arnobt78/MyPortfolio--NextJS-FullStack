"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import { useTranslation } from "react-i18next";
import { getInitialLanguage } from "@/lib/language-detection";
import { getClientPreferredLanguage } from "@/lib/language-cookie";

export type Language = "en" | "de";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  isHydrated: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage?: string;
}) {
  const { i18n: i18nInstance } = useTranslation();
  const [isHydrated, setIsHydrated] = useState(false);
  const hasAppliedStorageOnce = useRef(false);

  const [language, setLanguageState] = useState<Language>(() => {
    const serverValue =
      initialLanguage && (initialLanguage === "en" || initialLanguage === "de")
        ? initialLanguage
        : getInitialLanguage();
    return getClientPreferredLanguage(serverValue) as Language;
  });

  const currentLanguage = useMemo(() => language, [language]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsHydrated(true);
    if (hasAppliedStorageOnce.current) return;
    hasAppliedStorageOnce.current = true;
    const savedLanguage = localStorage.getItem("selectedLanguage") as Language | null;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "de")) {
      setLanguageState(savedLanguage);
      i18nInstance.changeLanguage(savedLanguage);
    }
  }, [i18nInstance]);

  useEffect(() => {
    if (isHydrated && typeof window !== "undefined") {
      localStorage.setItem("selectedLanguage", language);
      i18nInstance.changeLanguage(language);
    }
  }, [language, isHydrated, i18nInstance]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    i18nInstance.changeLanguage(lang);
    if (typeof document !== "undefined") {
      try {
        document.cookie = `selectedLanguage=${lang}; path=/; max-age=31536000`;
      } catch {}
    }
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const currentLang = language || i18nInstance.language;
    const bundle = i18nInstance.getResourceBundle(currentLang, "translation");
    const out = bundle?.[key] ?? key;
    if (params && typeof out === "string") {
      return Object.keys(params).reduce(
        (acc, k) => acc.replace(new RegExp(`{{${k}}}`, "g"), String(params[k])),
        out
      );
    }
    return typeof out === "string" ? out : key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language: currentLanguage,
        setLanguage,
        t,
        isHydrated,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
