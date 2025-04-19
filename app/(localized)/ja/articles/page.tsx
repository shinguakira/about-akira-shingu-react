import React from "react";
import ArticlesClientPage from "../../[locale]/articles/client-page";

export const metadata = {
  title: "Akira Shingu - 記事",
  description: "Akira Shinguが書いた記事",
};

export default function JapaneseArticlesPage() {
  return <ArticlesClientPage locale="ja" />;
}
