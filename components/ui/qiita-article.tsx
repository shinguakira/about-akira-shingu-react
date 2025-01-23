import React from "react";
import Article from "./article";
import { GetStaticProps, NextPage } from "next";
export const getStaticProps = async () => {
  const userId = "ShinguAkira"; // e.g. 'qiita'

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
    // revalidate: 60,
  };
};
const QiitaArticle: NextPage<{ articles: ArticleProps[] }> = ({ articles }) => {
  return (
    <div style={{ margin: "2rem" }}>
      <h1>Qiita Articles</h1>
      <ul>
        {articles &&
          articles.length > 0 &&
          articles.map((article: ArticleProps) => (
            <li key={article.id} style={{ marginBottom: "1rem" }}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
              <p>
                Posted on: {new Date(article.created_at).toLocaleDateString()}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default QiitaArticle;
