"use client";
import React from "react";

export default function HomeClientPage({ locale }: { locale: string }) {
  const translations = {
    en: {
      title: "Welcome to my portfolio",
      description: "I'm a software engineer specializing in web development and cloud technologies."
    },
    ja: {
      title: "ポートフォリオへようこそ",
      description: "ウェブ開発とクラウド技術を専門とするソフトウェアエンジニアです。"
    }
  };

  const t = translations[locale === 'ja' ? 'ja' : 'en'];

  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-6 text-4xl font-bold">{t.title}</h1>
      <p className="text-lg">{t.description}</p>
    </div>
  );
}
