"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageContext";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage = () => {
  const { t } = useLanguage();

  const faqData: FAQItem[] = [
    {
      question: t("faq.01.question"),
      answer: t("faq.01.answer"),
    },
    {
      question: t("faq.02.question"),
      answer: t("faq.02.answer"),
    },
    {
      question: t("faq.03.question"),
      answer: t("faq.03.answer"),
    },
    {
      question: t("faq.04.question"),
      answer: t("faq.04.answer"),
    },
    {
      question: t("faq.05.question"),
      answer: t("faq.05.answer"),
    },
    {
      question: t("faq.06.question"),
      answer: t("faq.06.answer"),
    },
    {
      question: t("faq.07.question"),
      answer: t("faq.07.answer"),
    },
    {
      question: t("faq.08.question"),
      answer: t("faq.08.answer"),
    },
    {
      question: t("faq.09.question"),
      answer: t("faq.09.answer"),
    },
    {
      question: t("faq.10.question"),
      answer: t("faq.10.answer"),
    },
    {
      question: t("faq.11.question"),
      answer: t("faq.11.answer"),
    },
  ];

  return (
    <section className="py-6 animate-ease-in-out">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-center xl:text-left">
            {t("faq.title")}
          </h1>

          <div className="bg-[#27272c] rounded-xl p-6 sm:p-10">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-white/10"
                >
                  <AccordionTrigger className="text-left text-white hover:text-accent text-lg sm:text-xl font-semibold py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 text-md sm:text-lg leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
