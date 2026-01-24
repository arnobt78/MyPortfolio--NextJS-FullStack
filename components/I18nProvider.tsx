"use client";

import React, { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

interface I18nProviderProps {
  children: ReactNode;
  initialLanguage?: string;
}

export function I18nProvider({ children, initialLanguage }: I18nProviderProps) {
  void initialLanguage;
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
