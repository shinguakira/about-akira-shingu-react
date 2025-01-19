import React from "react";

const svgW3Logo = ({
  name,
  svgPath,
  svgColor,
  titleName = "",
  className = "",
}: svgW3LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`mb-2 h-12 w-12 ${className}`}
      fill={svgColor}
      role="img"
      aria-label={`${name} icon`}
      style={{minWidth: "24px", minHeight: "24px"}}
    >
      {titleName && <title>{titleName}</title>}
      <path d={svgPath} />
    </svg>
  );
};

export default svgW3Logo;
