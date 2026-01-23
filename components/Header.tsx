import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";

// componants
import MobileNav from "./MobileNav";

const Header = () => {
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
          <Link href="/contact">
            <Button>Let&apos;s Work Together</Button>
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
