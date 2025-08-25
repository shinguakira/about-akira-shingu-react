"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { CredlyIcon, GithubIcon, LinkedInIcon, QiitaIcon } from "./icons";
import ThemeToggle from "../theme-toggle";
import ChangelogNotification from "./changelog-notification";
import LanguageSwitcher from "@/components/ui/language-switcher";
import RoleSwitcher from "./role-switcher";
import SearchModal from "./search-modal";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const iconSize = "w-6 h-6";
const DEVMODE = false;

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navigationLinks = [
    {
      href: `/${locale}`,
      title: locale === "ja" ? "ホーム" : "Home",
    },
    {
      href: `/${locale}/about`,
      title: locale === "ja" ? "概要" : "About",
    },
    {
      href: `/${locale}/certifications`,
      title: locale === "ja" ? "資格" : "Certifications",
    },
    {
      href: `/${locale}/projects`,
      title: locale === "ja" ? "プロジェクト" : "Projects",
    },
    {
      href: `/${locale}/articles`,
      title: locale === "ja" ? "記事" : "Articles",
      prefetch: false,
    },
    {
      href: `/${locale}/faq`,
      title: "FAQ",
    },
    {
      href: `/${locale}/contact`,
      title: locale === "ja" ? "連絡先" : "Contact",
    },
  ];

  return (
    <header className="fixed top-0 z-10 flex w-full justify-between border-b border-t border-gray-300 bg-blue-200 font-medium shadow-md dark:bg-blue-900">
      <nav className="xs:text-xs mx-auto flex w-full justify-between pt-8 text-base font-medium">
        <div className="xs:text-xs ml-4 hidden space-x-4 md:flex">
          {navigationLinks.map((link) => (
            <CustomLink
              key={link.href}
              href={link.href}
              title={link.title}
              className=""
              prefetch={link.prefetch}
            />
          ))}
        </div>

        <div className="ml-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-800 dark:text-gray-200"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </nav>

      <nav className="xs:text-xs mx-auto flex w-full justify-end py-4 text-base font-medium">
        <div className="mr-5">
          <ChangelogNotification />
        </div>
        <div className="hidden items-center space-x-2 md:flex">
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
          <Link
            href="https://qiita.com/ShinguAkira"
            target="_blank"
            className=""
          >
            <QiitaIcon className={iconSize} />
          </Link>
          <Link
            href="https://github.com/shinguakira"
            target="_blank"
            className=""
          >
            <GithubIcon className={iconSize} />
          </Link>
          <SearchModal />
          <LanguageSwitcher />
          {/* <RoleSwitcher /> */}
          <ThemeToggle />
        </div>

        <div className="flex items-center space-x-2 md:hidden">
          <SearchModal />
          <LanguageSwitcher />
          {/* {DEVMODE && <RoleSwitcher />} */}
          <ThemeToggle />
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="absolute left-0 right-0 top-full z-20 bg-blue-200 shadow-lg dark:bg-blue-900 md:hidden"
        >
          <div className="flex flex-col space-y-1 px-4 py-4">
            {navigationLinks.map((link) => (
              <CustomLink
                key={link.href}
                href={link.href}
                title={link.title}
                className="block rounded px-2 py-2 text-gray-800 hover:bg-blue-300 dark:text-gray-200 dark:hover:bg-blue-800"
                prefetch={link.prefetch}
              />
            ))}
            <div className="flex items-center justify-center space-x-4 border-t border-gray-300 pt-4 dark:border-gray-600">
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
              <Link
                href="https://qiita.com/ShinguAkira"
                target="_blank"
                className=""
              >
                <QiitaIcon className={iconSize} />
              </Link>
              <Link
                href="https://github.com/shinguakira"
                target="_blank"
                className=""
              >
                <GithubIcon className={iconSize} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
