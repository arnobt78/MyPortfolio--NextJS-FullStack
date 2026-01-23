"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      <div key={pathName}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1.6, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 left-0 right-0 pointer-events-none overflow-hidden"
        />

        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
