import Accordion from "@/components/ui/accordion";
import SkillSet from "@/components/ui/skill-set";
import WorkHistory from "@/components/ui/work-history";
import { strongPoint } from "@/constants/strong-point";
import React from "react";
import ItemPadding from "@/components/ui/style/item-padding";
import EducationHistory from "@/components/ui/education-history";

export const metadata = {
  title: "Akira Shingu - About",
  description: "About Akira Shingu - Skills, Work History, and Education",
};

const AboutPage = () => {
  return (
    <>
      <div className="container mx-auto bg-gray-100 px-4 py-16 dark:bg-gray-900">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-white">
          My Skill Set
        </h2>

        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
            Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            <SkillSet />
          </div>
          <WorkHistory />
          <EducationHistory />
          {/* ItemPadding is just to apply css */}
          <h3 className="mb-4 text-center text-xl font-semibold text-gray-700 dark:text-gray-300">
            Strong Points
          </h3>
          <ItemPadding>
            {strongPoint.map((strong, index) => (
              <Accordion
                key={index}
                index={index}
                question={strong.question}
                answer={strong.answer}
                size={strong.size}
              />
            ))}
          </ItemPadding>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
