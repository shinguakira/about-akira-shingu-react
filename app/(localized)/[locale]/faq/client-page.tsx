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

  const currentFaqs = locale === 'ja' 
    ? faqsData 
    : [
        {
          question: "What services do you offer?",
          answer: "I specialize in web development, cloud architecture, and software engineering with a focus on React, Next.js, and AWS technologies.",
          size: "medium",
          category: "Others"
        },
        {
          question: "How can I contact you for a project?",
          answer: "You can reach out through the contact form on this website or connect with me on LinkedIn or GitHub.",
          size: "small",
          category: "Others"
        },
        {
          question: "Do you work remotely?",
          answer: "Yes, I work remotely and can collaborate with teams across different time zones.",
          size: "small",
          category: "Others"
        },
        {
          question: "Why do you have so many AWS certifications?",
          answer: "My current company is aiming to become an AWS partner, so they encourage AWS certification. I also believe that having recognized certifications helps demonstrate my commitment to professional development.",
          size: "medium",
          category: "Certification"
        }
      ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold">{t.title}</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">{t.description}</p>
      
      <div className="space-y-4">
        {currentFaqs.map((faq, index) => (
          <Accordion
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            size={faq.size || "medium"}
          />
        ))}
      </div>
    </div>
  );
}
