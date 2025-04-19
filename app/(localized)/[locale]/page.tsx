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

export default function HomePage({ params }: { params: { locale: string } }) {
  return <HomeClientPage locale={params.locale} />;
}
