"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 xl:py-12 mt-4 sm:mt-8">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-4">
          {/* Left side - Copyright */}
          <div className="text-white/60 text-sm sm:text-base">
            © {currentYear} All rights reserved.
          </div>

          {/* Right side - Links */}
          <div className="flex gap-6 sm:gap-8">
            <Link
              href="/about"
              className="text-white/60 hover:text-accent transition-colors duration-300 text-sm sm:text-base capitalize"
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="text-white/60 hover:text-accent transition-colors duration-300 text-sm sm:text-base capitalize"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-white/60 hover:text-accent transition-colors duration-300 text-sm sm:text-base capitalize"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
