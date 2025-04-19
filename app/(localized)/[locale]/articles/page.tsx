import { Metadata } from "next";
import ArticlesClientPage from "./client-page";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  
  const metadata = {
    en: {
      title: "Akira Shingu - Articles",
      description: "Articles written by Akira Shingu",
    },
    ja: {
      title: "Akira Shingu - 記事",
      description: "Akira Shinguが書いた記事",
    }
  };
  
  return metadata[locale === 'ja' ? 'ja' : 'en'];
}

type Props = {
  params: Promise<{
    locale: string
  }>
}

export default async function ArticlesPage({ params }: Props) {
  const resolvedParams = await params;
  return <ArticlesClientPage locale={resolvedParams.locale} />;
}
