"use client";

import { useState } from "react";
import SkillCategory from "./skill-category";
import SkillItem from "./skill-item";
import { skills, otherSkills } from "@/constants/skill";
import { useParams } from "next/navigation";

const SkillSet = () => {
  const params = useParams();
  const locale = (params?.locale as string) || "ja";
  const currentLang = locale === "ja" ? "ja" : "en";
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set(["All"])
  );

  const categories = [
    "All",
    ...new Set(skills.map((skill) => skill.category)),
  ].sort();

  const filteredSkills = selectedCategories.has("All")
    ? skills
    : skills.filter((skill) => selectedCategories.has(skill.category));

  const filteredOtherSkills = selectedCategories.has("All")
    ? otherSkills
    : otherSkills.filter((otherSkill) =>
        selectedCategories.has(otherSkill.category)
      );

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) => {
      const newSet = new Set(prev);
      if (category === "All") {
        if (newSet.has("All")) {
          newSet.clear();
        } else {
          newSet.clear();
          newSet.add("All");
        }
      } else {
        if (newSet.has(category)) {
          newSet.delete(category);
          if (newSet.size === 0) {
            newSet.add("All");
          }
        } else {
          newSet.add(category);
          newSet.delete("All");
        }
      }
      return newSet;
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
      <div className="mx-auto grid grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-4">
        {filteredSkills.map((skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            years={skill.years}
            category={skill.category}
            proficyency={skill.proficyency}
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
      <div className="mx-auto grid grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-4">
        {filteredOtherSkills.map((otherSkill) => (
          <SkillItem
            key={otherSkill.name}
            name={otherSkill.name}
            years={otherSkill.years}
            category={otherSkill.category}
            proficyency={otherSkill.proficyency}
            picture={otherSkill.picture}
            pictureColor={otherSkill.pictureColor}
          />
        ))}
      </div>
    </>
  );
};

export default SkillSet;
