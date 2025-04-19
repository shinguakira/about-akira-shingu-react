import { Metadata } from "next";
import ProjectsClientPage from "./client-page";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  
  const metadata = {
    en: {
      title: "Akira Shingu - Projects",
      description: "Projects developed by Akira Shingu",
    },
    ja: {
      title: "Akira Shingu - プロジェクト",
      description: "Akira Shinguが開発したプロジェクト",
    }
  };
  
  return metadata[locale === 'ja' ? 'ja' : 'en'];
}

export default function ProjectsPage({ params }: { params: { locale: string } }) {
  return <ProjectsClientPage locale={params.locale} />;
}
