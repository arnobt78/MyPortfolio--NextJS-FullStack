"use client";

import React from "react";
import { Globe } from "lucide-react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { setLanguageCookie } from "@/lib/language-cookie";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languageOptions: { code: Language; name: string }[] = [
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const currentLanguage =
    languageOptions.find((lang) => lang.code === language) ??
    languageOptions[0];

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setLanguageCookie(langCode);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center justify-center p-2 text-white/80 hover:text-accent transition-colors duration-200 rounded-md outline-none focus:outline-none focus-visible:outline-none"
          aria-label={currentLanguage.name}
        >
          <Globe className="w-5 h-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-[140px] bg-[#27272c] border-white/10"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuRadioGroup
          value={language}
          onValueChange={(value) =>
            handleLanguageChange(
              value === "en" || value === "de" ? value : "en",
            )
          }
        >
          {languageOptions.map((option) => (
            <DropdownMenuRadioItem
              key={option.code}
              value={option.code}
              className="px-4 py-3 text-sm text-white/80 focus:bg-white/5 focus:text-white data-[state=checked]:bg-accent/20 data-[state=checked]:text-accent cursor-pointer"
            >
              <span className="font-medium">{option.name}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
