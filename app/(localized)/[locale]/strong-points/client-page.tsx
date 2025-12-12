"use client";
import React, { useState } from "react";
import { Sparkles, Zap, Target, TrendingUp } from "lucide-react";
import type { StrongPoint } from "@shinguakira/portfolio-api-types";

const iconMap = [
  { Icon: Sparkles, gradient: "from-yellow-400 to-orange-500" },
  { Icon: Zap, gradient: "from-blue-400 to-cyan-500" },
  { Icon: Target, gradient: "from-purple-400 to-pink-500" },
  { Icon: TrendingUp, gradient: "from-green-400 to-emerald-500" },
];

export default function StrongPointsClientPage({
  locale = "en",
  strongPoints,
}: {
  locale?: string;
  strongPoints: StrongPoint[];
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const translations = {
    en: {
      title: "Strong Points",
      subtitle: "What Makes Me Stand Out",
    },
    ja: {
      title: "アピールポイント",
      subtitle: "私の強みと特徴",
    },
  };

  const t = translations[locale === "ja" ? "ja" : "en"];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 px-4 py-16 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 size-96 animate-pulse rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-10 blur-3xl"></div>
        <div className="animation-delay-2000 absolute -bottom-20 -right-20 size-96 animate-pulse rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 opacity-10 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-lg dark:bg-gray-800">
            <Sparkles className="size-6 animate-pulse text-yellow-500" />
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">
              {t.subtitle}
            </span>
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-5xl font-extrabold text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 lg:text-6xl">
            {t.title}
          </h1>
          <div className="mx-auto mt-4 h-1.5 w-32 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {strongPoints && strongPoints.length > 0 ? (
            strongPoints.map((strong: StrongPoint, index: number) => {
              const { Icon, gradient } =
                iconMap[index % iconMap.length] || iconMap[0];
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl transition-all duration-500 hover:shadow-2xl dark:bg-gray-800 ${
                    isExpanded ? "md:col-span-2" : ""
                  }`}
                  onClick={() => toggleExpand(index)}
                >
                  {/* Gradient Background Effect */}
                  <div
                    className={`absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br ${gradient} opacity-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20`}
                  ></div>

                  {/* Icon Badge */}
                  <div className="relative mb-6 inline-flex">
                    <div
                      className={`flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                    >
                      <Icon className="size-8 text-white" />
                    </div>
                    <div className="absolute -right-1 -top-1 size-4 animate-ping rounded-full bg-yellow-400 opacity-75"></div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                      {strong.question}
                    </h3>

                    {/* Size Badge */}
                    {strong.size && (
                      <div className="mb-4 inline-block">
                        <span
                          className={`rounded-full bg-gradient-to-r ${gradient} px-4 py-1.5 text-xs font-bold text-white shadow-md`}
                        >
                          Level: {strong.size}
                        </span>
                      </div>
                    )}

                    {/* Description with expand/collapse */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isExpanded ? "max-h-[2000px]" : "max-h-24"
                      }`}
                    >
                      <div className="space-y-3 text-gray-700 dark:text-gray-300">
                        {strong.answer.split("\n").map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Read More Button */}
                    <button
                      className={`mt-4 flex items-center gap-2 font-semibold transition-colors ${
                        isExpanded
                          ? "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                          : `bg-gradient-to-r ${gradient} bg-clip-text text-transparent`
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(index);
                      }}
                    >
                      {isExpanded ? (
                        <>
                          Show Less
                          <svg
                            className="size-5 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        </>
                      ) : (
                        <>
                          Read More
                          <svg
                            className="size-5 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 size-20 translate-x-10 translate-y-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-5"></div>
                </div>
              );
            })
          ) : (
            <div className="col-span-2 flex min-h-[400px] items-center justify-center">
              <div className="text-center">
                <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                  <Sparkles className="size-8 animate-pulse text-gray-400" />
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Loading strong points...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
