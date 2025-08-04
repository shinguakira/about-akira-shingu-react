"use client";
import React from "react";
import Accordion from "@/components/ui/accordion";
import { faqs as localFaqsData } from "@/constants/faq";
import { FaqProps } from "@/services/portfolioApi";

export default function FaqClientPage({
  locale,
  faqs: apiFaqs = [],
}: {
  locale: string;
  faqs?: FaqProps[];
}) {
  const translations = {
    en: {
      title: "Frequently Asked Questions",
      description:
        "Find answers to common questions about my work and services",
      loading: "Loading FAQ data...",
    },
    ja: {
      title: "よくある質問",
      description: "私の仕事やサービスに関するよくある質問への回答",
      loading: "FAQデータを読み込んでいます...",
    },
  };

  const t = translations[locale === "ja" ? "ja" : "en"];
  const currentLang = locale === "ja" ? "ja" : "en";

  // Use API data if provided and not empty, otherwise fall back to local constants
  const faqsToUse =
    apiFaqs && apiFaqs.length > 0
      ? apiFaqs
      : localFaqsData.map((faq) => ({
          size: faq.size,
          category: faq.category,
          question: faq[currentLang].question,
          answer: faq[currentLang].answer,
        }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold">{t.title}</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
        {t.description}
      </p>

      <div className="space-y-4">
        {faqsToUse.length > 0 ? (
          faqsToUse.map((faq, index) => (
            <Accordion
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              size={faq.size || "medium"}
            />
          ))
        ) : (
          <div className="py-10 text-center text-gray-500">{t.loading}</div>
        )}
      </div>
    </div>
  );
}
