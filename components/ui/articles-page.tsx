import React from "react";
import { QiitaIcon } from "../ui/icons";
import QiitaArticle, { getStaticProps } from "../ui/qiita-article";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ArticlesPageProps {
  translations: {
    loadingText: string;
    visitQiitaText: string;
  };
}

const ArticlesPage = async ({ translations }: ArticlesPageProps) => {
  const articleData = await getStaticProps();

  if (articleData === undefined || articleData === null) {
    return <div>{translations.loadingText}</div>;
  }

  return (
    <div className="mx-auto flex min-h-screen flex-col items-center justify-center">
      <Link
        href="https://qiita.com/ShinguAkira"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-green-200px-4 mt-6 flex items-center space-x-2 rounded border border-green-200 py-2 shadow-sm transition-colors duration-200 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        <QiitaIcon className="size-6" />
        <span className="font-semibold text-green-600">
          {translations.visitQiitaText}
        </span>
        <ExternalLink
          className="ml-2 size-4 text-green-600"
          aria-hidden="true"
        />
      </Link>

      <QiitaArticle articles={articleData.articles} />
    </div>
  );
};

export default ArticlesPage;
