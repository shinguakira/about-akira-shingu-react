import { Metadata } from "next";
import ProjectsClientPage from "./client-page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
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

/**
 * Pre-renders pages at build time for all supported locales
 * This improves SEO by ensuring pages are statically generated
 * rather than being rendered on-demand at request time
 */
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ja' }
  ];
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
