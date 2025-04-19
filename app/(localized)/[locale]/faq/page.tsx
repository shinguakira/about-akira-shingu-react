import { Metadata } from "next";
import FaqClientPage from "./client-page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  const metadata = {
    en: {
      title: "Akira Shingu - FAQ",
      description: "Frequently Asked Questions about Akira Shingu",
    },
    ja: {
      title: "Akira Shingu - よくある質問",
      description: "Akira Shinguについてのよくある質問",
    }
  };
  
  return metadata[locale === 'ja' ? 'ja' : 'en'];
}

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

export default async function FaqPage({ params }: Props) {
  const resolvedParams = await params;
  return <FaqClientPage locale={resolvedParams.locale} />;
}
