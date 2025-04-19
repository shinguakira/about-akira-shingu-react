import { Metadata } from "next";
import HomeClientPage from "./page/client-page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  const metadata = {
    en: {
      title: "Akira Shingu - Home",
      description: "Akira Shingu's portfolio website - Home page",
    },
    ja: {
      title: "Akira Shingu - ホーム",
      description: "Akira Shinguのポートフォリオサイト - ホームページ",
    }
  };
  
  return metadata[locale === 'ja' ? 'ja' : 'en'];
}

/**
 * Pre-renders pages at build time for all supported locales
 * This improves SEO by ensuring static pages are available for search engines
 * @returns Array of locale objects for static generation
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

export default async function HomePage({ params }: Props) {
  const resolvedParams = await params;
  return <HomeClientPage locale={resolvedParams.locale} />;
}
