"use client";
import React, { useState } from "react";

const Accordion: React.FC<AccordionProps> = ({
  index,
  question,
  answer,
  size,
  isExpanded: externalIsExpanded,
  onToggle: externalOnToggle,
}) => {
  const [internalExpandedId, setInternalExpandedId] = useState<number | null>(
    null
  );

  // Use external state if provided, otherwise use internal state
  const isCurrentlyExpanded =
    externalIsExpanded !== undefined
      ? externalIsExpanded
      : internalExpandedId === index;

  const handleToggle = () => {
    if (externalOnToggle) {
      externalOnToggle();
    } else {
      setInternalExpandedId(internalExpandedId === index ? null : index);
    }
  };

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
          isCurrentlyExpanded
            ? "border-blue-200 bg-blue-50 shadow-lg dark:bg-blue-700"
            : "border-gray-200 bg-white hover:border-blue-200 hover:shadow-md dark:bg-slate-600"
        } border`}
        onClick={handleToggle}
      >
        <div className="flex flex-col">
          <div className="mb-2 flex justify-between">
            <div>
              {/* <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600 mb-2">
                      {category}
                    </span> */}
              <h3
                className={`font-medium ${
                  isCurrentlyExpanded
                    ? "text-blue-700 dark:text-white"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {question}
              </h3>
            </div>
            <span
              className={`ml-4 text-xl transition-transform duration-300 ${
                isCurrentlyExpanded ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </div>

          <div
            className={`transition-all duration-300 ${
              isCurrentlyExpanded
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
