"use client";
import React from "react";
import Accordion from "@/components/ui/accordion";
import SkillSet from "@/components/ui/skill-set";
import WorkHistory from "@/components/ui/work-history";
import ItemPadding from "@/components/ui/style/item-padding";
import EducationHistory from "@/components/ui/education-history";
import { StrongPointProps } from "@/services/portfolioApi";

export default function AboutClientPage({
  locale,
  strongPoints,
}: {
  locale: string;
  strongPoints: StrongPointProps[];
}) {
  const translations = {
    en: {
      skillSetTitle: "My Skill Set",
      categoriesTitle: "Categories",
      strongPointsTitle: "Strong Points",
    },
    ja: {
      skillSetTitle: "スキルセット",
      categoriesTitle: "カテゴリー",
      strongPointsTitle: "アピールポイント",
    },
  };

  const t = translations[locale === "ja" ? "ja" : "en"];

  return (
    <>
      <div className="container mx-auto bg-gray-100 px-4 py-16 dark:bg-gray-900">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-white">
          {t.skillSetTitle}
        </h2>

        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
            {t.categoriesTitle}
          </h3>
          <div className="flex flex-wrap gap-2">
            <SkillSet />
          </div>
          <WorkHistory />
          <EducationHistory />
          {/* ItemPadding is just to apply css */}
          <h3 className="mb-4 text-center text-xl font-semibold text-gray-700 dark:text-gray-300">
            {t.strongPointsTitle}
          </h3>
          <ItemPadding>
            {strongPoints && strongPoints.length > 0 ? (
              strongPoints.map((strong, index) => (
                <Accordion
                  key={index}
                  index={index}
                  question={strong.question}
                  answer={strong.answer}
                  size={strong.size}
                />
              ))
            ) : (
              <div className="text-center text-gray-500">
                Loading strong points...
              </div>
            )}
          </ItemPadding>
        </div>
      </div>
    </>
  );
}
