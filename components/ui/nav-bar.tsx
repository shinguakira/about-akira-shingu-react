"use client";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { CredlyIcon, GithubIcon, LinkedInIcon, QiitaIcon } from "./icons";
import ThemeToggle from "../theme-toggle";
import ChangelogNotification from "./changelog-notification";
import LanguageSwitcher from "@/components/ui/language-switcher";
import RoleSwitcher from "./role-switcher";
import { useLanguage } from "@/contexts/LanguageContext";

const iconSize = "w-6 h-6";

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className = "",
  prefetch = true,
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${className} group relative focus:outline-none`}
      prefetch={prefetch}
    >
      {title}

      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] w-0 bg-black transition-[width] duration-300 group-hover:w-full ${pathname === href || (pathname.endsWith(href.split("/").slice(2).join("/")) && href !== "/en" && href !== "/ja") ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const { locale } = useLanguage();

  return (
    <header className="fixed top-0 z-10 flex w-full justify-between border-b border-t border-gray-300 bg-blue-200 py-2 font-medium shadow-md dark:bg-blue-900">
      <nav className="xs:text-xs mx-auto flex w-full justify-between py-8 text-base font-medium">
        <div className="xs:text-xs ml-4 space-x-4">
          <CustomLink
            href={`/${locale}`}
            title={locale === "ja" ? "ホーム" : "Home"}
            className=""
          />
          <CustomLink
            href={`/${locale}/about`}
            title={locale === "ja" ? "概要" : "About"}
            className=""
          />
          <CustomLink
            href={`/${locale}/certifications`}
            title={locale === "ja" ? "資格" : "Certifications"}
            className=""
          />
          <CustomLink
            href={`/${locale}/projects`}
            title={locale === "ja" ? "プロジェクト" : "Projects"}
            className=""
          />
          <CustomLink
            href={`/${locale}/articles`}
            title={locale === "ja" ? "記事" : "Articles"}
            className=""
            prefetch={false}
          />
          <CustomLink href={`/${locale}/faq`} title="FAQ" className="" />
          <CustomLink
            href={`/${locale}/contact`}
            title={locale === "ja" ? "連絡先" : "Contact"}
            className=""
          />
        </div>
      </nav>
      <nav className="xs:text-xs mx-auto flex w-full justify-end py-8 text-base font-medium">
        <div className="mr-5">
          <ChangelogNotification />
        </div>
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
        <LanguageSwitcher />
        <RoleSwitcher />
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default NavBar;
