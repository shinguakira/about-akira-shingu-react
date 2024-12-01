import Link from "next/link";
import React from "react";

type CertificationItemProps = {
  id: number; // index of certification list
  name: string; // name of certification
  organization: string; // organization name
  date: string; // date of certified
  verifyLink: string; // link to verify certification
  className?: string; // additional class name
};

const CertificationItem = ({
  id,
  name,
  organization = "unknown",
  date = "",
  verifyLink,
  className = "",
}: CertificationItemProps) => {
  return (
    <div
      key={id}
      className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-700"
    >
      <div className="p-6">
        <h2 className="mb-2 flex items-center gap-2 text-xl font-semibold">
          <span className="text-blue-500" aria-hidden="true">
            🏆
          </span>
          {name}
        </h2>
        <span className="mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          {organization}
        </span>
        <p className="mt-2 flex items-center text-sm text-gray-600 dark:text-gray-50">
          <span className="mr-1" aria-hidden="true">
            📅
          </span>
          <span className="sr-only">Issued on</span>
          {new Date(date).toLocaleDateString()}
        </p>
      </div>
      <div className="mt-auto px-6 py-4">
        <Link
          href={verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded bg-blue-500 px-4 py-2 text-center font-bold text-white transition duration-300 ease-in-out hover:bg-blue-600"
        >
          <span className="mr-2" aria-hidden="true">
            🔗
          </span>
          View / Verify
        </Link>
      </div>
    </div>
  );
};

export default CertificationItem;
export type { CertificationItemProps };
