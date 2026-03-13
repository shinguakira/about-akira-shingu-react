"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="w-full border-t border-gray-200 py-6 dark:border-gray-700">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 px-4 text-sm text-gray-500">
        <div className="flex gap-4">
          <Link
            href={`/${locale}/privacy`}
            className="hover:text-gray-700 hover:underline dark:hover:text-gray-300"
          >
            {locale === "ja" ? "プライバシーポリシー" : "Privacy Policy"}
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Akira Shingu</p>
      </div>
    </footer>
  );
}
