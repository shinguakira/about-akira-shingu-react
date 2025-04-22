"use client";
import React from "react";
import ProjectItem from "@/components/ui/project-item";

export default function ProjectsClientPage({ locale }: { locale: string }) {
  const translations = {
    en: {
      title: "My Projects",
      description: "A showcase of my recent work and projects",
    },
    ja: {
      title: "プロジェクト",
      description: "最近の作品とプロジェクトのショーケース",
    },
  };

  const t = translations[locale === "ja" ? "ja" : "en"];

  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-6 text-4xl font-bold">{t.title}</h1>
      <p className="mb-8 text-lg">{t.description}</p>
      <ProjectItem />
    </div>
  );
}
