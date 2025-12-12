type ArticleProps = {
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

type QiitaArticle = ArticleProps;
