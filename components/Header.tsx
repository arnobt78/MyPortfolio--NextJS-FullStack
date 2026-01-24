"use client";

import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import { LanguageSelector } from "./LanguageSelector/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";
import MobileNav from "./MobileNav";

const Header = () => {
  const { t } = useLanguage();
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <div className="text-2xl sm:text-3xl font-semibold">
            Portfolio<span className="text-accent">.</span>
          </div>
        </Link>
        {/* desktop nav  */}
        <div className="hidden xl:flex items-center gap-8 text-md">
          <Nav />
          <div className="flex justify-center">
            <LanguageSelector />
          </div>
          <Link href="/contact">
            <Button className="w-[160px] whitespace-nowrap justify-center">
              {t("header.cta")}
            </Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
