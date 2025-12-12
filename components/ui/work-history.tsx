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
    <div className="py-12">
      {/* Page Title with decorative elements */}
      <div className="mb-12 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="size-2 rounded-full bg-blue-500"></div>
          <div className="size-3 rounded-full bg-blue-600"></div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-5xl">
            {currentLang === "ja" ? "これまでの経歴" : "My Work History"}
          </h1>
          <div className="size-3 rounded-full bg-blue-600"></div>
          <div className="size-2 rounded-full bg-blue-500"></div>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          {currentLang === "ja"
            ? "プロフェッショナルとしての軌跡"
            : "Professional Journey"}
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative space-y-8">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:block"></div>

        {workExperiences.map(
          (experience: MultilingualWorkExperience, index: number) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 hidden size-5 rounded-full border-4 border-white bg-blue-500 shadow-lg dark:border-gray-900 md:block"></div>

              {/* Card */}
              <div className="ml-0 md:ml-16">
                <div
                  className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                    expandedId === index
                      ? "border-blue-500 bg-white shadow-2xl dark:border-blue-400 dark:bg-gray-800"
                      : "border-gray-200 bg-white shadow-lg hover:border-blue-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600"
                  }`}
                >
                  {/* Gradient Background Accent */}
                  <div className="absolute -right-20 -top-20 size-40 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-20 transition-transform duration-500 group-hover:scale-150 dark:from-blue-900 dark:to-purple-900"></div>

                  {/* Header Section */}
                  <div className="relative px-6 py-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                          {experience[currentLang].projectOverview}
                        </h3>
                        <p className="mb-3 text-sm font-medium text-blue-600 dark:text-blue-400">
                          {experience[currentLang].role}
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <Building2 className="size-4" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="size-4" />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleExpand(index)}
                        className="flex size-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 hover:bg-blue-100 hover:rotate-180 dark:bg-gray-700 dark:hover:bg-blue-900"
                        aria-expanded={expandedId === index}
                      >
                        {expandedId === index ? (
                          <ChevronUp className="size-5 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <ChevronDown className="size-5 text-gray-600 dark:text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedId === index && (
                    <div className="border-t border-gray-200 bg-gradient-to-br from-gray-50 to-white px-6 py-6 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
                      <div className="space-y-6">
                        {/* Description Section */}
                        <div>
                          <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                            <div className="size-1.5 rounded-full bg-blue-500"></div>
                            {currentLang === "ja" ? "プロジェクト内容" : "Description"}
                          </h4>
                          <ul className="space-y-2 pl-4">
                            {experience[currentLang].description.map(
                              (item: string, index: number) => (
                                <li
                                  key={index}
                                  className="relative pl-4 text-sm text-gray-700 before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-blue-400 dark:text-gray-300"
                                >
                                  {item}
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        {/* Achievements Section */}
                        <div>
                          <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                            <div className="size-1.5 rounded-full bg-green-500"></div>
                            {currentLang === "ja" ? "成果・実績" : "Achievements"}
                          </h4>
                          <ul className="space-y-2 pl-4">
                            {experience[currentLang].archivement.map(
                              (item: string, index: number) => (
                                <li
                                  key={index}
                                  className="relative pl-4 text-sm text-gray-700 before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-green-400 dark:text-gray-300"
                                >
                                  {item}
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        {/* Technologies Section */}
                        <div>
                          <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                            <div className="size-1.5 rounded-full bg-purple-500"></div>
                            {currentLang === "ja" ? "使用技術・ツール" : "Technologies"}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map(
                              (tech: string, index: number) => (
                                <span
                                  key={index}
                                  className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-105"
                                >
                                  {tech}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default WorkHistory;
