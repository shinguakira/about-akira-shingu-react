import React from "react";
import ArticlesPage from "@/components/ui/articles-page";

export const metadata = {
  title: "Akira Shingu - Articles",
  description: "Articles written by Akira Shingu",
};

export default function EnglishArticlesPage() {
  const translations = {
    loadingText: "Loading...",
    visitQiitaText: "Visit Qiita"
  };
  
  return <ArticlesPage translations={translations} />;
}
