"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LanguageSwitcher() {
  const { locale, changeLanguage } = useLanguage();
  const [currentLocale, setCurrentLocale] = React.useState(locale);

  React.useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  React.useEffect(() => {
    const pathname = window.location.pathname;
    const pathLocale = pathname.split("/")[1];

    if (
      (pathLocale === "en" || pathLocale === "ja") &&
      pathLocale !== currentLocale
    ) {
      setCurrentLocale(pathLocale);
    }
  }, [currentLocale]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => changeLanguage("en")}
          className={currentLocale === "en" ? "bg-accent" : ""}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage("ja")}
          className={currentLocale === "ja" ? "bg-accent" : ""}
        >
          日本語
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
