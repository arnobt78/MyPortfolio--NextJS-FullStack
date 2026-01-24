"use client";

import Link from "next/link";
import {
  FaGoogle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const AboutPage = () => {
  const { t } = useLanguage();
  return (
    <section className="py-6 animate-ease-in-out">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-center xl:text-left">
            {t("about.title")}
          </h1>

          <div className="bg-[#27272c] rounded-xl p-6 sm:p-10 space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                  {t("about.businessIdentity.title")}
                </h2>
                <a
                  href="https://websitelaunches.com/site/arnobmahmud.com"
                  target="_blank"
                  rel="noopener"
                  style={{ textDecoration: "none", border: "none" }}
                  title="This site is publicly listed and monitored by Website Launches."
                  className="flex-shrink-0"
                >
                  <Image
                    src="https://websitelaunches.com/api/trust_badge.php?domain=arnobmahmud.com&theme=dark&style=default"
                    alt="Listed on Website Launches"
                    width={220}
                    height={54}
                    loader={({ src }) => src}
                    unoptimized
                    style={{ border: "none" }}
                    className="w-auto h-auto max-w-[180px] sm:max-w-[220px]"
                  />
                </a>
              </div>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("about.businessIdentity.description.prefix")}{" "}
                <span className="text-white font-semibold">
                  {t("about.businessIdentity.businessName")}
                </span>
                {t("about.businessIdentity.description.suffix")}
              </p>

              {/* Google Business Profile Section */}
              <div className="mt-6 p-4 bg-[#1c1c22] rounded-lg border border-white/5">
                <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:gap-3">
                  <div className="flex items-center gap-3">
                    <FaGoogle className="text-accent text-xl" />
                    <h3 className="h3 text-white">
                      {t("about.businessIdentity.businessName")}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-xl w-fit">
                    {t("about.businessIdentity.verified")}
                  </span>
                </div>
                <p className="text-white/60 text-sm sm:text-base mb-4">
                  {t("about.businessIdentity.profileDescription")}
                </p>
                <div className="space-y-3 text-white/60 text-sm sm:text-base">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold mb-1">
                        {t("about.businessIdentity.address.label")}
                      </p>
                      <p className="text-white/70">
                        Breubergstraße 11, 64823 Groß-Umstadt, Deutschland
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaPhoneAlt className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold mb-1">
                        {t("about.businessIdentity.phone.label")}
                      </p>
                      <Link href="tel:+4915734664351" className="text-white/70">
                        +49 1573 4664351
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaEnvelope className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold mb-1">
                        {t("about.businessIdentity.email.label")}
                      </p>
                      <Link
                        href="mailto:arnobt78@gmail.com"
                        className="text-white/70"
                      >
                        arnobt78@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <Link
                    href="https://share.google/rIr0pqkcyP3IUmnnf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors duration-300 text-sm sm:text-base"
                  >
                    <FaGoogle />
                    <span>{t("about.businessIdentity.viewOnGoogle")}</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("about.portfolio.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("about.portfolio.paragraph1")}
              </p>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("about.portfolio.paragraph2")}
              </p>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("about.portfolio.paragraph3")}
              </p>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("about.portfolio.paragraph4")}
              </p>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("about.portfolio.paragraph5")}
              </p>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed">
                {t("about.portfolio.paragraph6")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
