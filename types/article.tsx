type ArticleProps = {
  id: string;
  title: string;
  url: string;
  created_at: string;
  // ... add more fields if needed
};

type QiitaArticle = ArticleProps & {
  //   likes_count: number;
  //   tags: string[];
  // add more fields for Qiita specific fields
};
