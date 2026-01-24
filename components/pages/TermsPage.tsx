"use client";

import { useLanguage } from "@/context/LanguageContext";

const TermsPage = () => {
  const { t, language } = useLanguage();

  // Format date based on current language
  const formatDate = (date: Date) => {
    const locale = language === "de" ? "de-DE" : "en-US";
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="py-6 animate-ease-in-out">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-center xl:text-left">
            {t("terms.title")}
          </h1>

          <div className="bg-[#27272c] rounded-xl p-6 sm:p-10 space-y-6">
            <div>
              <p className="text-white/60 text-sm sm:text-base mb-6">
                {t("terms.lastUpdated")} {formatDate(new Date())}
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("terms.acceptance.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("terms.acceptance.description")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("terms.useLicense.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("terms.useLicense.description")}
              </p>
              <ul className="list-disc list-inside text-white/60 text-md sm:text-lg space-y-2 ml-4">
                <li>{t("terms.useLicense.item.modify")}</li>
                <li>{t("terms.useLicense.item.commercial")}</li>
                <li>{t("terms.useLicense.item.decompile")}</li>
                <li>{t("terms.useLicense.item.remove")}</li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("terms.disclaimer.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("terms.disclaimer.description")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("terms.limitations.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("terms.limitations.description")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("terms.accuracy.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("terms.accuracy.description")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("terms.links.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("terms.links.description")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("terms.intellectualProperty.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("terms.intellectualProperty.description1")}
              </p>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("terms.intellectualProperty.description2")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("terms.userConduct.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("terms.userConduct.description")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("terms.indemnification.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("terms.indemnification.description")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("terms.governingLaw.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("terms.governingLaw.description")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("terms.modifications.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("terms.modifications.description")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("terms.severability.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("terms.severability.description")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("terms.contact.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed">
                {t("terms.contact.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsPage;
