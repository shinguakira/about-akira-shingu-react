import { QiitaIcon } from "@/components/ui/icons";
import React from "react";
import QiitaArticle, {
  getStaticProps,
} from "../../components/ui/qiita-article";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
const articleData = await getStaticProps();

const ArticlePage = () => {
  if (articleData === undefined || articleData === null) {
    return <div>Loading...</div>;
  }
  console.log(articleData);
  return (
    <div className="mx-auto flex min-h-screen flex-col items-center justify-center">
      <Link
        href="https://qiita.com/ShinguAkira"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-green-200px-4 mt-6 flex items-center space-x-2 rounded border border-green-200 py-2 shadow-sm transition-colors duration-200 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        <QiitaIcon className="h-6 w-6" />
        <span className="font-semibold text-green-600">Visit Qiita</span>
        <ExternalLink
          className="ml-2 h-4 w-4 text-green-600"
          aria-hidden="true"
        />
      </Link>

      <QiitaArticle articles={articleData.articles} />
    </div>
  );
};

export default ArticlePage;
