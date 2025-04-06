import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akira Shingu - Home",
  description: "Akira Shingu's portfolio website - Home page",
};

export default function HomePage() {
  const params = { locale: "en" };
  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-6 text-4xl font-bold">
        {params.locale === 'ja' ? 'ポートフォリオへようこそ' : 'Welcome to my portfolio'}
      </h1>
      <p className="text-lg">
        {params.locale === 'ja' 
          ? 'ウェブ開発とクラウド技術を専門とするソフトウェアエンジニアです。' 
          : "I'm a software engineer specializing in web development and cloud technologies."}
      </p>
    </div>
  );
}
