"use client";
import React, { useState } from "react";
import { MessageCircleQuestion, Sparkles } from "lucide-react";
import { faqs as localFaqsData } from "@/constants/faq";
import type { Faq } from "@shinguakira/portfolio-api-types";

export default function FaqClientPage({
  locale,
  faqs: apiFaqs = [],
}: {
  locale: string;
  faqs?: Faq[];
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Group FAQs by category
  const groupedFaqs = faqsToUse.reduce(
    (acc, faq, index) => {
      const category = faq.category || "General";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push({ ...faq, originalIndex: index });
      return acc;
    },
    {} as Record<string, Array<Faq & { originalIndex: number }>>
  );

  const categories = Object.keys(groupedFaqs);

  return (
    <div className="container mx-auto min-h-screen bg-gray-100 px-4 py-16 dark:bg-gray-900">
      {/* Header Section */}
      <div className="mb-16 text-center">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 shadow-lg">
          <MessageCircleQuestion className="size-6 text-white" />
          <span className="text-sm font-semibold uppercase tracking-wider text-white">
            {t.description}
          </span>
        </div>
        <h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white lg:text-6xl">
          {t.title}
        </h1>
        <div className="mx-auto mt-4 h-1.5 w-32 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </div>

      {/* FAQ Content */}
      {faqsToUse.length > 0 ? (
        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <div key={category} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <div
                  className={`h-1 flex-1 rounded-full bg-gradient-to-r ${
                    catIndex % 3 === 0
                      ? "from-blue-500 to-cyan-500"
                      : catIndex % 3 === 1
                        ? "from-purple-500 to-pink-500"
                        : "from-green-500 to-emerald-500"
                  }`}
                ></div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category}
                </h2>
                <div
                  className={`h-1 flex-1 rounded-full bg-gradient-to-r ${
                    catIndex % 3 === 0
                      ? "from-cyan-500 to-blue-500"
                      : catIndex % 3 === 1
                        ? "from-pink-500 to-purple-500"
                        : "from-emerald-500 to-green-500"
                  }`}
                ></div>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {groupedFaqs[category].map((faq) => {
                  const isExpanded = expandedIndex === faq.originalIndex;
                  return (
                    <div
                      key={faq.originalIndex}
                      className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white transition-all duration-300 hover:border-blue-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600"
                      onClick={() => toggleExpand(faq.originalIndex)}
                    >
                      {/* Question Section */}
                      <div className="relative cursor-pointer px-6 py-5">
                        {/* Decorative Element */}
                        <div className="absolute left-0 top-0 h-full w-1.5 rounded-r-full bg-gradient-to-b from-blue-500 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="mb-2 flex items-center gap-3">
                              <div
                                className={`flex size-10 items-center justify-center rounded-full ${
                                  isExpanded
                                    ? "bg-gradient-to-br from-blue-500 to-purple-600"
                                    : "bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600"
                                } transition-all duration-300`}
                              >
                                <span
                                  className={`text-lg font-bold ${
                                    isExpanded
                                      ? "text-white"
                                      : "text-gray-600 dark:text-gray-300"
                                  }`}
                                >
                                  Q
                                </span>
                              </div>
                              <h3
                                className={`text-lg font-bold transition-colors ${
                                  isExpanded
                                    ? "text-blue-600 dark:text-blue-400"
                                    : "text-gray-900 dark:text-white"
                                }`}
                              >
                                {faq.question}
                              </h3>
                            </div>
                          </div>

                          {/* Toggle Icon */}
                          <button
                            className={`flex size-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                              isExpanded
                                ? "rotate-180 bg-blue-100 dark:bg-blue-900"
                                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpand(faq.originalIndex);
                            }}
                          >
                            <svg
                              className={`size-5 transition-colors ${
                                isExpanded
                                  ? "text-blue-600 dark:text-blue-400"
                                  : "text-gray-600 dark:text-gray-300"
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Answer Section */}
                      {isExpanded && (
                        <div className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50 px-6 py-5 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
                          <div className="flex gap-3">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600">
                              <span className="text-lg font-bold text-white">
                                A
                              </span>
                            </div>
                            <div className="flex-1">
                              <pre className="whitespace-pre-wrap font-sans leading-relaxed text-gray-700 dark:text-gray-300">
                                {faq.answer}
                              </pre>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="text-center">
            <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
              <Sparkles className="size-8 animate-pulse text-gray-400" />
            </div>
            <p className="text-gray-500 dark:text-gray-400">{t.loading}</p>
          </div>
        </div>
      )}
    </div>
  );
}
