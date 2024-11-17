"use client";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import {
  DribbbleIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./icons";

interface CustomLinkProps {
  href: string; // link to the page
  title: string; // label for the link
  className?: string; // custom styles for the link
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className = "",
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${className} group relative focus:outline-none`}
    >
      {title}

      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] w-0 bg-black transition-[width] duration-300 group-hover:w-full ${pathname === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="relative z-10 flex w-full items-center justify-between px-32 py-8 font-medium">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mr-4" />
        <CustomLink href="/certifications" title="Certifications" className="mr-4" />
        <CustomLink href="/projects" title="Projects" className="mr-4" />
        <CustomLink href="/articles" title="Articles" className="mr-4" />
        <CustomLink href="/faq" title="FAQ" className="mr-4" />
      </nav>
      <Logo />
      <nav className="item-center flex flex-wrap justify-center">
        <Link href="/" target="_blank" className="mr-4">
          <TwitterIcon className="" />
        </Link>
        <Link href="/" target="_blank" className="mr-4">
          <LinkedInIcon className="" />
        </Link>
        <Link href="/" target="_blank" className="mr-4">
          <PinterestIcon className="" />
        </Link>
        <Link href="/" target="_blank" className="mr-4">
          <DribbbleIcon className="" />
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
