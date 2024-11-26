import Link from "next/link";
import React from "react";

interface CertificationItemProps {
  id: number; // index of certification list
  name: string; // name of certification
  organization: string; // organization name
  date: string; // date of certified
  verifyLink: string; // link to verify certification
  className?: string; // additional class name
}


const CertificationItem = ({ id,name,organization="unknown", date="",verifyLink,className = "" }: CertificationItemProps) => {
  return (
    <div key={id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden flex flex-col">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <span className="text-blue-500" aria-hidden="true">🏆</span>
                  {name}
                </h2>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
                  {organization}
                </span>
                <p className="text-sm text-gray-600 flex items-center mt-2">
                  <span className="mr-1" aria-hidden="true">📅</span>
                  <span className="sr-only">Issued on</span>
                  {new Date(date).toLocaleDateString()}
                </p>
              </div>
              <div className="px-6 py-4 mt-auto">
                <Link 
                  href={verifyLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center justify-center"
                >
                  <span className="mr-2" aria-hidden="true">🔗</span>
                  View / Verify
                </Link>
              </div>
            </div>
  );
};

export default CertificationItem;
