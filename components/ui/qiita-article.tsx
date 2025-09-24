import React from "react";
import { Article } from "@/components/ui/article";
import { GetStaticProps, NextPage } from "next";
import type { ArticleProps, QiitaArticle } from "@/types/article";

export const getStaticProps = async () => {
  try {
    const userId = process.env.QIITA_USER_ID || "ShinguAkira"; // Default to ShinguAkira if not set

    // Endpoint for fetching a user's public articles
    const endpoint = `https://qiita.com/api/v2/users/${userId}/items?page=1&per_page=20`;

    const res = await fetch(endpoint);

    if (!res.ok) {
      console.warn(`Failed to fetch Qiita articles. Status: ${res.status}`);
      return {
        articles: [],
        revalidate: 7200,
      };
    }

    const data: QiitaArticle[] = await res.json();
    console.log("Qiita API response:", data);

    // Map QiitaArticle to ArticleProps format
    const articles: ArticleProps[] = data.map((qiitaArticle) => ({
      id: qiitaArticle.id,
      title: qiitaArticle.title,
      url: qiitaArticle.url,
      created_at: qiitaArticle.created_at,
      updated_at: qiitaArticle.updated_at,
      body: qiitaArticle.body,
      rendered_body: qiitaArticle.rendered_body,
      likes_count: qiitaArticle.likes_count,
      comments_count: qiitaArticle.comments_count,
      // Handle missing page_views_count gracefully - Qiita API v2 may not return this field
      page_views_count: qiitaArticle.page_views_count ?? 0,
      tags: qiitaArticle.tags.map((tag) => ({ name: tag.name })),
    }));

    return {
      articles,
      // Revalidate every 2 hours
      revalidate: 7200,
    };
  } catch (error) {
    console.error("Error fetching Qiita articles:", error);
    return {
      articles: [],
      revalidate: 7200,
    };
  }
};

const QiitaArticle: NextPage<{ articles: ArticleProps[] }> = ({ articles }) => {
  return (
    <div style={{ margin: "2rem" }}>
      <ul>
        {articles &&
          articles.length > 0 &&
          articles.map((article: ArticleProps) => (
            <Article key={article.id} {...article} />
          ))}
      </ul>
    </div>
  );
};

export default QiitaArticle;
