import Link from "next/link";
import React from "react";
// import { motion } from "framer-motion";

// const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div className="mt-2 flex items-center justify-center">
      <Link
        href="/"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl font-bold text-white bg-blend-darken"
      >
        AS
      </Link>
    </div>
  );
};
export default Logo;
