import React from "react";
import ProjectItem from "../ui/project-item";
import { ProjectContent } from "@/constants/project";

const ProjectsPage = () => {
  // Provide empty projects array to avoid TypeScript errors
  const emptyProjects: ProjectContent[] = [];
  return <ProjectItem projects={emptyProjects} />;
};

export default ProjectsPage;
