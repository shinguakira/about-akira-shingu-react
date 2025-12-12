import { memo } from "react";
import Image from "next/image";
import type { SkillItem as SkillItemType } from "@shinguakira/portfolio-api-types";

type SkillItemProps = SkillItemType & {
  proficyency?: string; // Keep for backward compatibility with local components
};

// Import the BASE_URL from the portfolio API service
const BASE_URL =
  process.env.NEXT_PUBLIC_VERCEL_PORTFOLIO_API_URL ||
  "https://portfolio-api-ten-delta.vercel.app";

const SkillItem = ({
  name,
  category,
  years,
  proficyency,
  picture,
  pictureColor,
}: SkillItemProps) => {
  console.log(name, picture);
  return (
    <>
      <div
        key={name}
        className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700 dark:from-gray-800 dark:to-gray-900"
      >
        {/* Accent Border on Hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-xl border-2 border-blue-500 dark:border-blue-400"></div>
        </div>

        {/* Icon and Title */}
        <div className="relative mb-4 flex items-center gap-3">
          {pictureColor && picture && (
            <div className="flex size-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-2 transition-transform duration-300 group-hover:scale-110 dark:from-blue-900 dark:to-blue-800">
              <Image
                src={picture.startsWith("/") ? `${BASE_URL}${picture}` : picture}
                alt={name}
                width={32}
                height={32}
                priority
                className="object-contain"
              />
            </div>
          )}
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {name}
          </h3>
        </div>

        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:from-purple-900 dark:to-pink-900 dark:text-purple-200">
            {category}
          </span>
        </div>

        {/* Proficiency Section */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Proficiency
            </span>
            <span className="rounded-md bg-gradient-to-r from-green-500 to-emerald-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
              {proficyency}
            </span>
          </div>

          {/* Experience Years */}
          <div className="flex items-center gap-2 pt-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600"></div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {years}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(SkillItem) as typeof SkillItem;
