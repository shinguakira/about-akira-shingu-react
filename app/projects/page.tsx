import ProjectItem from "@/components/ui/project-item";
import React from "react";
import { ProjectContent } from "@/constants/project";

const Project = () => {
  // Provide empty projects array to avoid TypeScript errors
  const emptyProjects: ProjectContent[] = [];
  return <ProjectItem projects={emptyProjects} />;
};

export default Project;
