"use client";
import React, { useState } from "react";

type AccordionProps = {
  index: number;
  question: string;
  answer: string;
  size: string;
  category?: string;
};
const Accordion: React.FC<AccordionProps> = ({
  index,
  question,
  answer,
  size,
  category,
}) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const getSizeClass = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-2 md:row-span-2";
      default:
        return "md:col-span-2 md:row-span-2";
    }
  };

  return (
    <div
      key={index}
      className={`${getSizeClass(size)} w-full transition-all duration-300`}
    >
      <div
        className={`cursor-pointer rounded-xl p-6 transition-all duration-300 ${
          expandedId === index
            ? "border-blue-200 bg-blue-50 shadow-lg dark:bg-blue-700"
            : "border-gray-200 bg-white hover:border-blue-200 hover:shadow-md dark:bg-slate-600"
        } border`}
        onClick={() => setExpandedId(expandedId === index ? null : index)}
      >
        <div className="flex flex-col">
          <div className="mb-2 flex justify-between">
            <div>
              {/* <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600 mb-2">
                      {category}
                    </span> */}
              <h3
                className={`font-medium ${
                  expandedId === index
                    ? "text-blue-700 dark:text-white"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {question}
              </h3>
            </div>
            <span
              className={`ml-4 text-xl transition-transform duration-300 ${
                expandedId === index ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </div>

          <div
            className={`transition-all duration-300 ${
              expandedId === index
                ? "max-h-full opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <pre className="whitespace-pre-wrap leading-relaxed text-gray-600 dark:text-white">
              {answer}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
export type { AccordionProps };
