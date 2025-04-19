import React from "react";
import ArticlesClientPage from "../../[locale]/articles/client-page";

export const metadata = {
  title: "Akira Shingu - Articles",
  description: "Articles written by Akira Shingu",
};

export default function EnglishArticlesPage() {
  return <ArticlesClientPage locale="en" />;
}
