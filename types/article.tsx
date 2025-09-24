export type ArticleProps = {
  id: string;
  title: string;
  url: string;
  created_at: string;
  updated_at: string;
  body: string;
  rendered_body: string;
  likes_count: number;
  comments_count: number;
  page_views_count: number;
  tags: { name: string }[];
};

// Qiita API v2 response structure - list endpoint (/users/{user_id}/items)
export type QiitaArticleListItem = {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: {
    created_at: string;
    id: number;
    name: string;
    private: boolean;
    updated_at: string;
    url_name: string;
  } | null;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  stocks_count: number;
  tags: { name: string; versions: string[] }[];
  title: string;
  updated_at: string;
  url: string;
  user: {
    description: string;
    facebook_id: string;
    followees_count: number;
    followers_count: number;
    github_login_name: string;
    id: string;
    items_count: number;
    linkedin_id: string;
    location: string;
    name: string;
    organization: string;
    permanent_id: number;
    profile_image_url: string;
    team_only: boolean;
    twitter_screen_name: string;
    website_url: string;
  };
};

// Qiita API v2 response structure - detail endpoint (/items/{item_id})
export type QiitaArticleDetail = QiitaArticleListItem & {
  page_views_count?: number; // May be available in detail endpoint
};

// Legacy type alias for backward compatibility
export type QiitaArticle = QiitaArticleListItem;
