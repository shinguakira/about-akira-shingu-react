"use client";
import React from "react";
import Accordion from "@/components/ui/accordion";
import SkillSet from "@/components/ui/skill-set";
import WorkHistory from "@/components/ui/work-history";
import { strongPoint } from "@/constants/strong-point";
import ItemPadding from "@/components/ui/style/item-padding";
import EducationHistory from "@/components/ui/education-history";

export default function AboutClientPage({ locale }: { locale: string }) {
  const translations = {
    en: {
      skillSetTitle: "My Skill Set",
      categoriesTitle: "Categories",
      strongPointsTitle: "Strong Points"
    },
    ja: {
      skillSetTitle: "スキルセット",
      categoriesTitle: "カテゴリー",
      strongPointsTitle: "アピールポイント"
    }
  };

  const t = translations[locale === 'ja' ? 'ja' : 'en'];

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
            {strongPoint.map((strong, index) => (
              <Accordion
                key={index}
                index={index}
                question={strong[locale === 'ja' ? 'ja' : 'en'].question}
                answer={strong[locale === 'ja' ? 'ja' : 'en'].answer}
                size={strong.size}
              />
            ))}
          </ItemPadding>
        </div>
      </div>
    </>
  );
}
