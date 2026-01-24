"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const links: { nameKey: string; path: string }[] = [
  { nameKey: "nav.home", path: "/" },
  { nameKey: "nav.expertise", path: "/services" },
  { nameKey: "nav.experience", path: "/resume" },
  { nameKey: "nav.projects", path: "/work" },
  { nameKey: "nav.contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  const { t } = useLanguage();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname ? "text-accent" : ""
          } text-md capitalize font-medium hover:text-accent transition-all min-w-[96px] text-center`}
        >
          {t(link.nameKey)}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
