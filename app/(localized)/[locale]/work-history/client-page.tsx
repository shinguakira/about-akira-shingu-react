"use client";
import React from "react";
import WorkHistory from "@/components/ui/work-history";
import EducationHistory from "@/components/ui/education-history";
import type {
  EducationHistory as EducationHistoryType,
  WorkExperience,
} from "@shinguakira/portfolio-api-types";

export default function WorkHistoryClientPage({
  locale = "en",
  education,
  experience,
}: {
  locale?: string;
  education: EducationHistoryType[];
  experience: WorkExperience[];
}) {
  return (
    <div className="container mx-auto min-h-screen px-4 py-8">
      <WorkHistory experiences={experience} />
      <EducationHistory locale={locale} education={education} />
    </div>
  );
}
