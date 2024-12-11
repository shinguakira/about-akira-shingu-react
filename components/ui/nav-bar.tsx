"use client";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import {
  CredlyIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  QiitaIcon,
  TwitterIcon,
} from "./icons";
import ThemeToggle from "../theme-toggle";

interface CustomLinkProps {
  href: string; // link to the page
  title: string; // label for the link
  className?: string; // custom styles for the link
}

const iconSize = "w-6 h-6";

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
    <header className="flexpy-8 fixed top-0 justify-between font-medium">
      <nav className="mx-auto flex py-8 font-medium">
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mr-4" />
        <CustomLink
          href="/certifications"
          title="Certifications"
          className="mr-4"
        />
        <CustomLink href="/projects" title="Projects" className="" />
        <CustomLink href="/articles" title="Articles" className="" />
        <CustomLink href="/faq" title="FAQ" className="" />
        {/* <Logo /> */}
        <Link
          href="https://www.credly.com/users/username.aff80586"
          target="_blank"
          className=""
        >
          <CredlyIcon className={iconSize} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/akira-shingu-2238a6320/"
          target="_blank"
          className=""
        >
          <LinkedInIcon className={iconSize} />
        </Link>
        <Link href="https://qiita.com/ShinguAkira" target="_blank" className="">
          <QiitaIcon className={iconSize} />
        </Link>
        <Link
          href="https://github.com/shinguakira"
          target="_blank"
          className=""
        >
          <GithubIcon className={iconSize} />
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default NavBar;
