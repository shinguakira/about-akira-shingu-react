"use client";

import EducationItem from "./education-item";
import { EducationHistory as EducationHistoryType } from "@/services/portfolioApi";
import { educationHistory as localEducationHistory } from "@/constants/education-history";

const EducationHistory = ({
  locale = "en",
  education,
}: {
  locale?: string;
  education?: EducationHistoryType[];
}) => {
  const currentLang = locale === "ja" ? "ja" : "en";

  // If no education data is provided, use empty array
  // We'll handle the conversion from local format in the About page component
  const educationItems = education || [];
  return (
    <>
      <div className="bg-gray-100 px-4 py-4 dark:bg-gray-900">
        <div className="mx-auto">
          <h1 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-white">
            {currentLang === "ja" ? "学歴" : "Education"}
          </h1>
          <div className="space-y-6">
            {educationItems.map((item: EducationHistoryType, index: number) => (
              <EducationItem
                key={index}
                school={item.school}
                department={item.department}
                startYear={item.startYear}
                endYear={item.endYear}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationHistory;
