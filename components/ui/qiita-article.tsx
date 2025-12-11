import React from "react";
import { Article } from "@/components/ui/article";
import { NextPage } from "next";
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
    console.log(data);

    return {
      articles: data,
      // Revalidate every 60 seconds (optional):
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
            <Article
              body={""}
              rendered_body={""}
              updated_at={""}
              likes_count={0}
              comments_count={0}
              page_views_count={0}
              tags={[]}
              key={article.id}
              {...article}
            />
          ))}
      </ul>
    </div>
  );
};

export default QiitaArticle;
