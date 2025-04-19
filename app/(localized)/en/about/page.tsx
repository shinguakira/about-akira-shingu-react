import React from "react";
import AboutPage from "@/components/ui/about-page";

export const metadata = {
  title: "Akira Shingu - About",
  description: "About Akira Shingu - Skills, Work History, and Education",
};

export default function EnglishAboutPage() {
  const translations = {
    skillSetTitle: "My Skill Set",
    categoriesTitle: "Categories",
    strongPointsTitle: "Strong Points"
  };
  
  return <AboutPage translations={translations} />;
}
