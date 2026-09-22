"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";

/** Nothing to subscribe to — localStorage is only read at hydration. */
const subscribeToNothing = () => () => {};

const readStoredLocale = (): string | null => {
  try {
    const stored = localStorage.getItem("language");
    return stored === "en" || stored === "ja" ? stored : null;
  } catch (error) {
    console.error("Error accessing localStorage:", error);
    return null;
  }
};

type LanguageContextType = {
  locale: string;
  changeLanguage: (locale: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  changeLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

type LanguageProviderProps = {
  children: ReactNode;
  initialLocale?: string;
};

export const LanguageProvider = ({
  children,
  initialLocale = "en",
}: LanguageProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  // The URL is the source of truth and is available while rendering, so the
  // locale is derived rather than mirrored into state from an effect.
  const pathSegment = pathname?.split("/")[1];
  const localeFromPath =
    pathSegment === "en" || pathSegment === "ja" ? pathSegment : null;

  // localStorage only exists in the browser; null on the server and during
  // hydration, which is what the old initial render showed too.
  const storedLocale = useSyncExternalStore(
    subscribeToNothing,
    readStoredLocale,
    () => null
  );

  const locale = localeFromPath ?? storedLocale ?? initialLocale;

  // Persist the locale the URL is currently on. No state is set here.
  useEffect(() => {
    if (!localeFromPath) return;
    try {
      localStorage.setItem("language", localeFromPath);
    } catch (error) {
      console.error("Error storing language preference:", error);
    }
  }, [localeFromPath]);

  const changeLanguage = (newLocale: string) => {
    if (newLocale === locale) return;

    try {
      localStorage.setItem("language", newLocale);
    } catch (error) {
      console.error("Error storing language preference:", error);
    }

    document.documentElement.lang = newLocale;

    // The route change is what updates `locale` — it is derived from the path.
    const currentPath = window.location.pathname.split("/").slice(2).join("/");

    if (currentPath) {
      router.push(`/${newLocale}/${currentPath}`);
    } else {
      router.push(`/${newLocale}`);
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
