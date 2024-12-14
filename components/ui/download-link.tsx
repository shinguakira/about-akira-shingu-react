import React, { memo } from "react";
import { LinkArrow } from "@/components/ui/icons";
import Link from "next/link";

type DownLoadLinkProps = {
  href: string; // link to the page
  target?: string; // target for the link Optional
  className?: string; // custom styles for the link Optional
  download?: boolean; // flag if download is true Optional
  label: string; // label for the link
};
const DownLoadLink: React.FC<DownLoadLinkProps> = memo(
  ({
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
        className={`${className} flex items-center rounded-lg border-transparent bg-black px-1 text-sm font-semibold text-white hover:border-black`}
        download={download}
      >
        {/* TODO may should separate className variables.
        because style of Link and one of LinkArrow should be different */}
        <LinkArrow className={`ml-2 w-auto ${className}`} />
        <span>{label}</span>
      </Link>
    );
  }
);

export default DownLoadLink;
