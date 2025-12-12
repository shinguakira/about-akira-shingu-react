"use client";
import React from "react";
import WorkHistory from "@/components/ui/work-history";
import EducationHistory from "@/components/ui/education-history";
import type { EducationHistory as EducationHistoryType } from "@shinguakira/portfolio-api-types";

export default function WorkHistoryClientPage({
  locale = "en",
  education,
}: {
  locale?: string;
  education: EducationHistoryType[];
}) {
  return (
    <div className="container mx-auto min-h-screen bg-gray-100 px-4 py-8 dark:bg-gray-900">
      <WorkHistory />
      <EducationHistory locale={locale} education={education} />
    </div>
  );
}
