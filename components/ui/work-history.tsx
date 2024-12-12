"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Building2, Calendar } from "lucide-react";
import { workExperiences } from "@/constants/work-experience";

type WorkExperience = {
  id: number;
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

const WorkHistory = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number): void => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-white">
          My Work History
        </h1>
        <div className="space-y-6">
          {workExperiences.map((experience) => (
            <div
              key={experience.id}
              className="overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:px-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    {experience.projectOverview}
                  </h3>
                  <button
                    onClick={() => toggleExpand(experience.id)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-expanded={expandedId === experience.id}
                  >
                    {expandedId === experience.id ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                  {experience.role}
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 dark:border-gray-700 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                      <Building2 className="mr-2 h-5 w-5" />
                      Company
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                      {experience.company}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                      <Calendar className="mr-2 h-5 w-5" />
                      Period
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                      {experience.period}
                    </dd>
                  </div>
                  {expandedId === experience.id && (
                    <>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Description
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          <ul className="list-disc space-y-1 pl-5">
                            {experience.description.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </dd>
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Archivement
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          <ul className="list-disc space-y-1 pl-5">
                            {experience.archivement.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Technologies
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </dd>
                      </div>
                    </>
                  )}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WorkHistory;
export type { WorkExperience };
