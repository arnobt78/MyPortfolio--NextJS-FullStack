"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useLanguage } from "@/context/LanguageContext";
import { setLanguageCookie } from "@/lib/language-cookie";

const links: { nameKey: string; path: string }[] = [
  { nameKey: "nav.home", path: "/" },
  { nameKey: "nav.expertise", path: "/services" },
  { nameKey: "nav.experience", path: "/resume" },
  { nameKey: "nav.projects", path: "/work" },
  { nameKey: "nav.contact", path: "/contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLanguageToggle = (lang: "en" | "de") => {
    setLanguage(lang);
    setLanguageCookie(lang);
    setIsOpen(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col [&>button]:hidden">
        <SheetTitle className="sr-only">{t("mobileNav.title")}</SheetTitle>
        <SheetDescription className="sr-only">
          {t("mobileNav.description")}
        </SheetDescription>
        {/* mobile sheet header (logo + close) */}
        <div className="mt-4 flex items-center justify-between">
          <SheetClose asChild>
            <Link href="/" onClick={handleLinkClick}>
              <h1 className="text-2xl font-semibold">
                Portfolio<span className="text-accent">.</span>
              </h1>
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 outline-none transition-colors hover:bg-white/5"
              aria-label="Close menu"
            >
              <IoMdClose className="text-3xl text-accent" />
            </button>
          </SheetClose>
        </div>

        <div
          className="mt-10 flex-1 min-h-0 overflow-y-auto pb-10 overscroll-contain touch-pan-y"
          data-radix-scroll-area-viewport=""
        >
          {/* nav */}
          <SheetClose asChild>
            <nav className="flex flex-col justify-center items-center gap-4">
              {links.map((link, index) => (
                <SheetClose asChild key={index}>
                  <Link
                    href={link.path}
                    className={`${
                      link.path === pathname ? "text-accent" : ""
                    } text-md capitalize hover:text-accent transition-all`}
                    onClick={handleLinkClick}
                  >
                    {t(link.nameKey)}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetClose>

          {/* separator */}
          <div className="mt-8 w-full border-t border-white/10" />

          {/* legal links */}
          <div className="mt-8 flex flex-col justify-center items-center gap-4">
            <SheetClose asChild>
              <Link
                href="/about"
                className="text-md capitalize hover:text-accent transition-all"
                onClick={handleLinkClick}
              >
                {t("footer.about")}
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/privacy"
                className="text-md capitalize hover:text-accent transition-all"
                onClick={handleLinkClick}
              >
                {t("footer.privacy")}
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/terms"
                className="text-md capitalize hover:text-accent transition-all"
                onClick={handleLinkClick}
              >
                {t("footer.terms")}
              </Link>
            </SheetClose>
          </div>

          {/* separator */}
          <div className="mt-8 w-full border-t border-white/10" />

          {/* language toggle */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1">
              <button
                type="button"
                onClick={() => handleLanguageToggle("de")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  language === "de"
                    ? "text-accent"
                    : "text-white/70 hover:text-white"
                }`}
                aria-pressed={language === "de"}
              >
                DE
              </button>
              <div className="h-5 w-px bg-white/10" />
              <button
                type="button"
                onClick={() => handleLanguageToggle("en")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  language === "en"
                    ? "text-accent"
                    : "text-white/70 hover:text-white"
                }`}
                aria-pressed={language === "en"}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
