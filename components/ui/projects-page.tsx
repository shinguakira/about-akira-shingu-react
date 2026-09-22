import React from "react";
import ProjectItem from "../ui/project-item";
import type { Project as ProjectContent } from "@shinguakira/portfolio-api-types";

const ProjectsPage = () => {
  // Provide empty projects array to avoid TypeScript errors
  const emptyProjects: ProjectContent[] = [];
  return <ProjectItem projects={emptyProjects} />;
};

export default ProjectsPage;
