"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Building2, Calendar } from "lucide-react";
import {
  workExperiences,
  MultilingualWorkExperience,
} from "@/constants/work-experience";
import { useParams } from "next/navigation";

const WorkHistory = () => {
  const params = useParams();
  const locale = (params?.locale as string) || "ja";
  const currentLang = locale === "ja" ? "ja" : "en";
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number): void => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 dark:bg-gray-900">
      <div className="mx-auto">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-white">
          {currentLang === "ja" ? "これまでの経歴" : "My Work History"}
        </h1>
        <div className="space-y-6">
          {workExperiences.map(
            (experience: MultilingualWorkExperience, index: number) => (
              <div
                key={index}
                className="overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-lg"
              >
                <div className="px-4 py-5 sm:px-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      {experience[currentLang].projectOverview}
                    </h3>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      aria-expanded={expandedId === index}
                    >
                      {expandedId === index ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                    {experience[currentLang].role}
                  </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 dark:border-gray-700 sm:px-6">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                        <Building2 className="mr-2 h-5 w-5" />
                        {currentLang === "ja" ? "会社" : "Company"}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                        {experience.company}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                        <Calendar className="mr-2 h-5 w-5" />
                        {currentLang === "ja" ? "期間" : "Period"}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                        {experience.period}
                      </dd>
                    </div>
                    {expandedId === index && (
                      <>
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {currentLang === "ja" ? "説明" : "Description"}
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                            <ul className="list-disc space-y-1 pl-5">
                              {experience[currentLang].description.map(
                                (item: string, index: number) => (
                                  <li key={index}>{item}</li>
                                )
                              )}
                            </ul>
                          </dd>
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {currentLang === "ja" ? "成果" : "Achievements"}
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                            <ul className="list-disc space-y-1 pl-5">
                              {experience[currentLang].archivement.map(
                                (item: string, index: number) => (
                                  <li key={index}>{item}</li>
                                )
                              )}
                            </ul>
                          </dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {currentLang === "ja" ? "使用技術" : "Technologies"}
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map(
                                (tech: string, index: number) => (
                                  <span
                                    key={index}
                                    className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                  >
                                    {tech}
                                  </span>
                                )
                              )}
                            </div>
                          </dd>
                        </div>
                      </>
                    )}
                  </dl>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default WorkHistory;
