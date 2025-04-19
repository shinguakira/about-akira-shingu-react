import { Metadata } from "next";
import AboutClientPage from "./client-page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  const metadata = {
    en: {
      title: "Akira Shingu - About",
      description: "About Akira Shingu - Skills, Work History, Education",
    },
    ja: {
      title: "Akira Shingu - プロフィール",
      description: "Akira Shinguについて - スキル、職務経歴、学歴",
    }
  };
  
  return metadata[locale === 'ja' ? 'ja' : 'en'];
}

/**
 * Pre-renders pages at build time for all supported locales
 * This improves SEO by ensuring static pages are available for search engines
 * @returns Array of locale objects that will be pre-rendered
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

export default async function AboutPage({ params }: Props) {
  const resolvedParams = await params;
  return <AboutClientPage locale={resolvedParams.locale} />;
}
