"use client";
import React from "react";
import { Badge } from "./shadcn/badge";

function getChangeTypeColor(type: ChangeType): string {
  switch (type) {
    case "feature":
      return "bg-green-500";
    case "improvement":
      return "bg-blue-500";
    case "bugfix":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
}
const Changelog: React.FC<ChangelogProps> = ({ version, date, changes }) => {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="flex items-center gap-2 text-lg font-semibold">
        <span>Version {version}</span>
        <span className="text-sm font-normal text-gray-500">{date}</span>
      </h3>
      <ul className="mt-2 space-y-2">
        {/* TODO actual changelog list should separate in a component maybe */}
        {changes.map((change, changeIndex: number) => (
          <>
            <li key={changeIndex} className="flex items-start gap-2">
              <Badge
                variant="secondary"
                className={`${getChangeTypeColor(change.type)} mt-1 capitalize text-white`}
              >
                {change.type}
              </Badge>
            </li>
            {/* TODO may should avoid display pre tag and doc string. use array and map instead */}
            <pre className="w-full whitespace-pre-wrap">
              {change.description}
            </pre>
          </>
        ))}
      </ul>
    </div>
  );
};
export default Changelog;
