import SkillSet from "@/components/ui/skill-set";
// import StrongPoint from "@/components/ui/strong-point";
import WorkHistory from "@/components/ui/work-history";
import React from "react";

const About = () => {
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
          {/* <StrongPoint /> */}
        </div>
      </div>
    </>
  );
};

export default About;
