"use client";
import React from "react";
import Accordion from "@/components/ui/accordion";
import ItemPadding from "@/components/ui/style/item-padding";
import type { StrongPoint } from "@shinguakira/portfolio-api-types";

export default function StrongPointsClientPage({
  locale = "en",
  strongPoints,
}: {
  locale?: string;
  strongPoints: StrongPoint[];
}) {
  const translations = {
    en: {
      title: "Strong Points",
    },
    ja: {
      title: "アピールポイント",
    },
  };

  const t = translations[locale === "ja" ? "ja" : "en"];

  return (
    <div className="container mx-auto bg-gray-100 px-4 py-16 dark:bg-gray-900">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-800 dark:text-white">
        {t.title}
      </h1>

      <ItemPadding>
        {strongPoints && strongPoints.length > 0 ? (
          strongPoints.map((strong: StrongPoint, index: number) => (
            <Accordion
              key={index}
              index={index}
              question={strong.question}
              answer={strong.answer}
              size={strong.size}
            />
          ))
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400">
            Loading strong points...
          </div>
        )}
      </ItemPadding>
    </div>
  );
}
