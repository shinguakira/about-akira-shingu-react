"use client";
import React from "react";
import Accordion from "@/components/ui/accordion";
import { faqs as faqsData } from "@/constants/faq";

export default function FaqClientPage({ locale }: { locale: string }) {
  const translations = {
    en: {
      title: "Frequently Asked Questions",
      description: "Find answers to common questions about my work and services"
    },
    ja: {
      title: "よくある質問",
      description: "私の仕事やサービスに関するよくある質問への回答"
    }
  };

  const t = translations[locale === 'ja' ? 'ja' : 'en'];
  const currentLang = locale === 'ja' ? 'ja' : 'en';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold">{t.title}</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">{t.description}</p>
      
      <div className="space-y-4">
        {faqsData.map((faq, index) => (
          <Accordion
            key={index}
            index={index}
            question={faq[currentLang].question}
            answer={faq[currentLang].answer}
            size={faq.size || "medium"}
          />
        ))}
      </div>
    </div>
  );
}
