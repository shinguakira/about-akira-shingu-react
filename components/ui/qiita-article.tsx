import React from "react";
import { Article } from "@/components/ui/article";
import { GetStaticProps, NextPage } from "next";
import type {
  ArticleProps,
  QiitaArticle,
  QiitaArticleDetail,
} from "@/types/article";

// Helper function to fetch detailed article info including potential page_views_count
const fetchArticleDetails = async (
  articleId: string
): Promise<QiitaArticleDetail | null> => {
  try {
    const detailEndpoint = `https://qiita.com/api/v2/items/${articleId}`;
    const response = await fetch(detailEndpoint);

    if (!response.ok) {
      console.warn(
        `Failed to fetch article details for ${articleId}. Status: ${response.status}`
      );
      return null;
    }

    const detailData: QiitaArticleDetail = await response.json();
    console.log(`Article ${articleId} details:`, detailData);

    return detailData;
  } catch (error) {
    console.error(`Error fetching article details for ${articleId}:`, error);
    return null;
  }
};

export const getStaticProps = async () => {
  try {
    const userId = process.env.QIITA_USER_ID || "ShinguAkira"; // Default to ShinguAkira if not set

    // Endpoint for fetching a user's public articles (list)
    const listEndpoint = `https://qiita.com/api/v2/users/${userId}/items?page=1&per_page=20`;

    const res = await fetch(listEndpoint);

    if (!res.ok) {
      console.warn(`Failed to fetch Qiita articles. Status: ${res.status}`);
      return {
        articles: [],
        revalidate: 7200,
      };
    }

    const listData: QiitaArticle[] = await res.json();
    console.log("Qiita API list response:", listData);

    // Attempt to get detailed information for each article to check for page_views_count
    const articlesWithDetails = await Promise.allSettled(
      listData.slice(0, 5).map(async (article) => {
        // Limit to first 5 for performance
        const details = await fetchArticleDetails(article.id);
        return details || article; // Use detailed data if available, otherwise use list data
      })
    );

    // Map QiitaArticle to ArticleProps format
    const articles: ArticleProps[] = articlesWithDetails.map(
      (result, index) => {
        const articleData =
          result.status === "fulfilled" ? result.value : listData[index];

        return {
          id: articleData.id,
          title: articleData.title,
          url: articleData.url,
          created_at: articleData.created_at,
          updated_at: articleData.updated_at,
          body: articleData.body,
          rendered_body: articleData.rendered_body,
          likes_count: articleData.likes_count,
          comments_count: articleData.comments_count,
          // Check if page_views_count is available in detailed data
          page_views_count:
            "page_views_count" in articleData &&
            typeof articleData.page_views_count === "number"
              ? articleData.page_views_count
              : 0,
          tags: articleData.tags.map((tag) => ({ name: tag.name })),
        };
      }
    );

    // Log investigation results
    const hasPageViewsCount = articles.some(
      (article) => article.page_views_count > 0
    );
    console.log("=== QIITA API INVESTIGATION RESULTS ===");
    console.log(`Processed ${articles.length} articles`);
    console.log(
      `page_views_count available: ${hasPageViewsCount ? "YES" : "NO"}`
    );
    articles.forEach((article, index) => {
      console.log(
        `Article ${index + 1}: "${article.title}" - views: ${article.page_views_count}`
      );
    });

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
