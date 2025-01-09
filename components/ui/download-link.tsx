import React, { memo } from "react";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

const DownLoadLink: React.FC<DownLoadLinkProps> = ({
  href = "/",
  target = "_blank",
  className = "",
  download = true,
  label = "",
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={`${className} inline-flex items-center overflow-hidden whitespace-nowrap rounded-lg border-transparent bg-black px-3 py-1 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gray-800`}
      download={download}
    >
      {/* TODO may should separate className variables.
        because style of Link and one of LinkArrow should be different */}
      <ArrowDownToLine className="mr-2 h-4 w-4 flex-shrink-0" />
      <p className="ml-2 flex-shrink-0">{label}</p>
    </Link>
  );
};
export default DownLoadLink;
