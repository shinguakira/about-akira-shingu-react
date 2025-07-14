import { memo } from "react";
import SvgW3Logo from "./svg-w3-logo";

const SkillItem: React.FC<SkillItemProps> = ({
  name,
  category,
  years,
  proficyency,
  picture,
  pictureColor,
}) => {
  return (
    <>
      <div
        key={name}
        className="rounded-lg bg-white p-6 shadow-md duration-300 hover:scale-110 hover:bg-sky-100 dark:bg-gray-800 dark:hover:bg-slate-400"
      >
        <div className="mb-2 flex items-center">
          {pictureColor && picture && (
            <SvgW3Logo
              name={name}
              svgPath={picture}
              svgColor={pictureColor}
              className="mr-3 hover:-translate-y-2 hover:scale-110"
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
            <div className="text-right">
              {/* <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-200">
                    {level}%
                  </span> */}
            </div>
          </div>
          <label>{years}</label>
          {/* <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 dark:bg-blue-800">
                <div 
                  style={{ width: `${level}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                ></div>
              </div> */}
        </div>
      </div>
    </>
  );
};

export default memo(SkillItem);
