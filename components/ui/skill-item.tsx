import { memo } from "react";
import SvgW3Logo from "./svg-w3-logo";
import Image from "next/image";

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
        className="rounded-lg bg-white p-6 shadow-md duration-300 hover:scale-110 hover:bg-sky-100 dark:bg-gray-800 dark:hover:bg-slate-400"
      >
        <div className="mb-2 flex items-center">
          {pictureColor && picture && (
            // <SvgW3Logo
            //   name={name}
            //   svgPath={picture}
            //   svgColor={pictureColor}
            //   className="mr-3 hover:-translate-y-2 hover:scale-110"
            // />
            <Image
              src={picture.startsWith("/") ? `${BASE_URL}${picture}` : picture}
              alt={name}
              width={24}
              height={24}
              priority
            />
          )}
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {name}
          </h3>
        </div>
        <div className="relative pt-1">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="py-1 text-sm font-medium text-gray-500 dark:text-gray-400 sm:inline-block">
                {category}
              </span>
              <span className="inline-block rounded-full bg-blue-200 px-2 py-1 text-xs font-semibold uppercase text-blue-600 dark:bg-blue-800 dark:text-blue-200">
                Proficiency
              </span>
              <span className="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold uppercase text-green-600 dark:bg-green-800 dark:text-blue-200">
                {proficyency}
              </span>
            </div>
            <div className="text-right"></div>
          </div>
          <label>{years}</label>
        </div>
      </div>
    </>
  );
};

export default memo(SkillItem) as typeof SkillItem;
