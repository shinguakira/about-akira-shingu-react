import React from "react";
import ArticlesPage from "@/components/ui/articles-page";

export const metadata = {
  title: "Akira Shingu - 記事",
  description: "Akira Shinguが書いた記事",
};

export default function JapaneseArticlesPage() {
  const translations = {
    loadingText: "読み込み中...",
    visitQiitaText: "Qiitaを訪問"
  };
  
  return <ArticlesPage translations={translations} />;
}
