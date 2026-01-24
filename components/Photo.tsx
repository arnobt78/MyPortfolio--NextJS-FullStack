"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const Photo = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full h-full relative">
      <div className="animate-fade-in">
        {/* image */}
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute animate-fade-in-delayed">
          <Image
            src="/photo.png"
            alt={t("home.photoAlt")}
            width={498}
            height={498}
            priority
            sizes="(max-width: 1280px) 298px, 498px" // ← Just add this line
            className="object-contain"
          />
        </div>

        {/* circle */}
        <svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] animate-spin-slow"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="15 120 25 25"
            className="animate-dash-rotate"
          />
        </svg>
      </div>
    </div>
  );
};

export default Photo;
