"use client";

import { useLanguage } from "@/context/LanguageContext";

const PrivacyPage = () => {
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
            {t("privacy.title")}
          </h1>

          <div className="bg-[#27272c] rounded-xl p-6 sm:p-10 space-y-6">
            <div>
              <p className="text-white/60 text-sm sm:text-base mb-6">
                {t("privacy.lastUpdated")} {formatDate(new Date())}
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("privacy.introduction.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("privacy.introduction.description")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("privacy.informationCollect.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("privacy.informationCollect.description")}
              </p>
              <ul className="list-disc list-inside text-white/60 text-md sm:text-lg space-y-2 ml-4">
                <li>{t("privacy.informationCollect.item.name")}</li>
                <li>{t("privacy.informationCollect.item.email")}</li>
                <li>{t("privacy.informationCollect.item.message")}</li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("privacy.useInformation.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("privacy.useInformation.description")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("privacy.dataProtection.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("privacy.dataProtection.description")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("privacy.thirdParty.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("privacy.thirdParty.description")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("privacy.cookies.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("privacy.cookies.description1")}
              </p>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("privacy.cookies.description2")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("privacy.dataRetention.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("privacy.dataRetention.description")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("privacy.yourRights.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("privacy.yourRights.description")}
              </p>
              <ul className="list-disc list-inside text-white/60 text-md sm:text-lg space-y-2 ml-4 mb-4">
                <li>{t("privacy.yourRights.item.access")}</li>
                <li>{t("privacy.yourRights.item.rectify")}</li>
                <li>{t("privacy.yourRights.item.erasure")}</li>
                <li>{t("privacy.yourRights.item.restrict")}</li>
                <li>{t("privacy.yourRights.item.portability")}</li>
                <li>{t("privacy.yourRights.item.object")}</li>
              </ul>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("privacy.yourRights.exercise")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("privacy.changes.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed mb-4">
                {t("privacy.changes.description")}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl sm:text-2xl mb-4 text-accent">
                {t("privacy.contact.title")}
              </h2>
              <p className="text-white/60 text-md sm:text-lg leading-relaxed">
                {t("privacy.contact.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPage;
