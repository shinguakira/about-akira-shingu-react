"use client";

import { useState } from "react";
import SkillItem from "./skill-item";
import {
  skills as localSkills,
  otherSkills as localOtherSkills,
} from "@/constants/skill";
import type { SkillItem as Skill } from "@shinguakira/portfolio-api-types";
import SkillCategory from "./skill-category";

const SkillSet = ({
  locale = "en",
  skills: apiSkills,
  otherSkills: apiOtherSkills,
}: {
  locale?: string;
  skills?: Skill[];
  otherSkills?: Skill[];
}) => {
  const currentLang = locale === "ja" ? "ja" : "en";

  // Use API data if provided, otherwise fallback to local constants
  const skills = apiSkills || localSkills;
  const otherSkills = apiOtherSkills || localOtherSkills;

  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set(["All"])
  );
  const categories = [
    "All",
    ...new Set(skills.map((skill: Skill) => skill.category)),
  ].sort();

  const filteredSkills = selectedCategories.has("All")
    ? skills
    : skills.filter((skill: Skill) => selectedCategories.has(skill.category));

  const filteredOtherSkills = selectedCategories.has("All")
    ? otherSkills
    : otherSkills.filter((otherSkill: Skill) =>
        selectedCategories.has(otherSkill.category)
      );

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) => {
      const newSet = new Set(prev);
      if (category === "All") {
        if (newSet.has("All")) {
          // If "All" is already selected, do nothing
          return newSet;
        } else {
          // If "All" is being selected, clear other categories
          newSet.clear();
          newSet.add("All");
          return newSet;
        }
      } else {
        // If a specific category is toggled
        if (newSet.has(category)) {
          // If the category is being deselected
          newSet.delete(category);
          // If no categories left, select "All"
          if (newSet.size === 0) {
            newSet.add("All");
          }
        } else {
          // If the category is being selected
          newSet.delete("All"); // Remove "All" when a specific category is selected
          newSet.add(category);
        }
        return newSet;
      }
    });
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-6 overflow-auto md:grid-cols-4 lg:grid-cols-10">
        {categories.map((category) => (
          <SkillCategory
            key={category}
            category={category}
            selectedCategories={selectedCategories}
            onClick={toggleCategory}
          />
        ))}
      </div>
      <h3 className="mb-8 w-full text-center text-3xl text-blue-900 underline dark:text-white">
        {currentLang === "ja" ? "スキル" : "Skills"}
      </h3>
      <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {filteredSkills.map((skill: Skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            years={skill.years}
            category={skill.category}
            proficyency={skill.proficiency || "N/A"}
            picture={skill.picture}
            pictureColor={skill.pictureColor}
          />
        ))}
      </div>
      {/* display only filtered OtherSkill exist */}
      {filteredOtherSkills.length > 0 && (
        <h3 className="mb-8 w-full text-center text-3xl text-green-700 underline dark:text-gray-500">
          {currentLang === "ja" ? "その他のスキル" : "Other Skills"}
        </h3>
      )}
      <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {filteredOtherSkills.map((otherSkill: Skill) => (
          <SkillItem
            key={otherSkill.name}
            name={otherSkill.name}
            years={otherSkill.years}
            category={otherSkill.category}
            proficyency={otherSkill.proficiency || "N/A"}
            picture={otherSkill.picture}
            pictureColor={otherSkill.pictureColor}
          />
        ))}
      </div>
    </>
  );
};

export default SkillSet;
