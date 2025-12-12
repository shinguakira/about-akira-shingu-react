"use client";
import React from "react";
import { QiitaIcon } from "@/components/ui/icons";
import QiitaArticle, { getStaticProps } from "@/components/ui/qiita-article";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

type QiitaArticle = {
  id: string;
  title: string;
  url: string;
  created_at: string;
  updated_at: string;
  likes_count: number;
  comments_count: number;
  page_views_count: number;
  body: string;
  rendered_body: string;
  tags: Array<{ name: string }>;
};

type ArticleData = {
  articles: QiitaArticle[];
  revalidate?: number;
};

export default function ArticlesClientPage({ locale }: { locale: string }) {
  const [articleData, setArticleData] = React.useState<ArticleData | null>(
    null
  );
  const [loading, setLoading] = React.useState(true);

  const translations = {
    en: {
      loading: "Loading...",
      visitQiita: "Visit Qiita",
    },
    ja: {
      loading: "読み込み中...",
      visitQiita: "Qiitaを訪問",
    },
  };

  const t = translations[locale === "ja" ? "ja" : "en"];

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStaticProps();
        setArticleData(data);
      } catch (error) {
        console.error("Error fetching Qiita articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>{t.loading}</div>;
  }

  if (articleData === undefined || articleData === null) {
    return <div>{t.loading}</div>;
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
        <span className="font-semibold text-green-600">{t.visitQiita}</span>
        <ExternalLink
          className="ml-2 size-4 text-green-600"
          aria-hidden="true"
        />
      </Link>

      <QiitaArticle articles={articleData?.articles || []} />
    </div>
  );
}
