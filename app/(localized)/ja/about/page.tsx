"use client";
import React from "react";
import AboutPage from "@/components/ui/about-page";

export const metadata = {
  title: "Akira Shingu - プロフィール",
  description: "Akira Shinguのプロフィール - スキル、職歴、学歴",
};

export default function JapaneseAboutPage() {
  const translations = {
    skillSetTitle: "スキルセット",
    categoriesTitle: "カテゴリー",
    strongPointsTitle: "アピールポイント"
  };
  
  return <AboutPage translations={translations} />;
}
