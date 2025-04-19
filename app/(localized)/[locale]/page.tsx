import { Metadata } from "next";
import HomeClientPage from "./page/client-page";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  
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

type Props = {
  params: Promise<{
    locale: string
  }>
}

export default async function HomePage({ params }: Props) {
  const resolvedParams = await params;
  return <HomeClientPage locale={resolvedParams.locale} />;
}
