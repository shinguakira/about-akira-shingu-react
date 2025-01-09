type WorkExperience = {
  // id: number; exclude id for maintainability
  company: string; // comapny name
  projectOverview: string; // project name
  period: string; // period
  teamSize?: string; // teamSize include me, include unit
  role: string;
  manMonth: string;
  description: string[];
  archivement: string[]; // archivement
  technologies: string[];
};
