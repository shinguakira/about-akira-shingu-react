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

type Props = {
  params: Promise<{
    locale: string
  }>
}

export default async function ProjectsPage({ params }: Props) {
  const resolvedParams = await params;
  return <ProjectsClientPage locale={resolvedParams.locale} />;
}
