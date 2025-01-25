import React from "react";
import { Article } from "@/components/ui/article";
import { GetStaticProps, NextPage } from "next";
export const getStaticProps = async () => {
  const userId = process.env.QIITA_USER_ID; // e.g. 'qiita'

  // Optionally, if you need an access token, store it in an ENV variable:
  const qiitaToken = process.env.QIITA_TOKEN;

  // Endpoint for fetching a user's public articles
  const endpoint = `https://qiita.com/api/v2/users/${userId}/items?page=1&per_page=20`;

  // Include the bearer token only if you need private data or higher rate limits
  const res = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${qiitaToken}`,
    },
  });

  // const res = await fetch(endpoint);

  if (!res.ok) {
    // If the response is not OK, throw an error
    throw new Error(`Failed to fetch Qiita articles. Status: ${res.status}`);
  }

  const data: QiitaArticle[] = await res.json();
  console.log(data);

  return {
    articles: data,
    // Revalidate every 60 seconds (optional):
    // So the static page regenerates if there’s a request after 60s
    revalidate: 7200,
  };
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
