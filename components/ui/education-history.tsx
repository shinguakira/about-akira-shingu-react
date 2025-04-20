"use client";

import { educationHistory } from "@/constants/education-history";
import EducationItem from "./education-item";
import { useParams } from "next/navigation";

const EducationHistory: React.FC = () => {
  const params = useParams();
  const locale = params?.locale as string || 'ja';
  const currentLang = locale === 'ja' ? 'ja' : 'en';
  return (
    <>
      <div className="bg-gray-100 px-4 py-4 dark:bg-gray-900">
        <div className="mx-auto">
          <h1 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-white">
            {currentLang === 'ja' ? '学歴' : 'Education'}
          </h1>
          <div className="space-y-6">
            {educationHistory.map((education, index) => (
              <EducationItem
                key={index}
                school={education[currentLang].school}
                department={education[currentLang].department}
                startYear={education.startYear}
                endYear={education.endYear}
                description={education[currentLang].description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationHistory;
