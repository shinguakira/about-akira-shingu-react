"use client";
import type React from "react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Heart, MessageSquare, Eye, Bookmark } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
// import ReactMarkdown from "react-markdown";
// import { Button } from "./shadcn/button";

type ArticleProps = {
  title: string;
  body: string;
  rendered_body: string;
  created_at: string;
  updated_at: string;
  likes_count: number;
  comments_count: number;
  page_views_count: number;
  tags: { name: string }[];
  url: string;
};

const ArticleHeader: React.FC<{
  title: string;
  created_at: string;
  updated_at: string;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}> = ({ title, created_at, updated_at, setIsOpen, isOpen }) => {
  const formattedCreatedDate = format(
    new Date(created_at),
    "yyyy年MM月dd日 HH:mm",
    { locale: ja }
  );
  const formattedUpdatedDate = format(
    new Date(updated_at),
    "yyyy年MM月dd日 HH:mm",
    { locale: ja }
  );

  return (
    <header className="mb-8">
      <h1 className="mb-4 text-3xl font-bold">{title}</h1>
      <div className="flex items-center justify-between text-sm">
        <time dateTime={created_at}>作成: {formattedCreatedDate}</time>
        {created_at !== updated_at && (
          <span>
            {" "}
            / <time dateTime={updated_at}>更新: {formattedUpdatedDate}</time>
          </span>
        )}
        {/* <Button
          className="mb-4 ml-auto text-green-500 hover:underline"
          onClick={() => setIsOpen(!isOpen)}
          variant={isOpen ? "outline" : "outline"}
        >
          ▽ 詳細を見る
        </Button> */}
      </div>
    </header>
  );
};

const ArticleBody: React.FC<{ rendered_body: string }> = ({
  rendered_body,
}) => {
  return (
    <>
      {/* <div
        className="prose mb-8 max-w-none"
        dangerouslySetInnerHTML={{ __html: rendered_body }}
      /> */}
      {/* <ReactMarkdown>{rendered_body}</ReactMarkdown> */}
    </>
  );
};

const ArticleFooter: React.FC<{
  likes_count: number;
  comments_count: number;
  page_views_count: number;
  tags: { name: string }[];
  url: string;
}> = ({ likes_count, comments_count, page_views_count, tags, url }) => {
  return (
    <footer className="mt-8 border-t border-gray-900">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm">
          <span className="flex items-center">
            <Heart className="mr-1 size-4" />
            {likes_count}
          </span>
          <span className="flex items-center">
            <MessageSquare className="mr-1 size-4" />
            {comments_count}
          </span>
          <span className="flex items-center">
            <Eye className="mr-1 size-4" />
            {page_views_count}
          </span>
        </div>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-green-600 hover:text-green-800"
        >
          <Bookmark className="mr-1 size-4" />
          Qiitaで見る
        </Link>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag.name} name={tag.name} />
        ))}
      </div>
    </footer>
  );
};

const Tag: React.FC<{ name: string }> = ({ name }) => {
  return (
    <span className="inline-block rounded-full bg-gray-400 px-3 py-1 text-sm font-semibold">
      #{name}
    </span>
  );
};

export function Article({
  title,
  rendered_body,
  created_at,
  updated_at,
  likes_count,
  comments_count,
  page_views_count,
  tags,
  url,
}: ArticleProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="border-black-900 bg:border-white mx-auto mb-8 max-w-3xl gap-5 overflow-hidden rounded-lg border shadow">
      <div className="p-8">
        <ArticleHeader
          title={title}
          created_at={created_at}
          updated_at={updated_at}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
        {isOpen && <ArticleBody rendered_body={rendered_body} />}
        <ArticleFooter
          likes_count={likes_count}
          comments_count={comments_count}
          page_views_count={page_views_count}
          tags={tags}
          url={url}
        />
      </div>
    </article>
  );
}
