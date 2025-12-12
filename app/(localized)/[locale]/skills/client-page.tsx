"use client";
import React from "react";
import SkillSet from "@/components/ui/skill-set";
import type { SkillItem } from "@shinguakira/portfolio-api-types";

export default function SkillsClientPage({
  locale = "en",
  skills,
  otherSkills,
}: {
  locale?: string;
  skills: SkillItem[];
  otherSkills: SkillItem[];
}) {
  const translations = {
    en: {
      title: "My Skill Set",
    },
    ja: {
      title: "スキルセット",
    },
  };

  const t = translations[locale === "ja" ? "ja" : "en"];

  return (
    <div className="container mx-auto bg-gray-100 px-4 py-16 dark:bg-gray-900">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-800 dark:text-white">
        {t.title}
      </h1>

      <SkillSet locale={locale} skills={skills} otherSkills={otherSkills} />
    </div>
  );
}
