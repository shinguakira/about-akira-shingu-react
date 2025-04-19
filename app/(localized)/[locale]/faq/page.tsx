import { Metadata } from "next";
import FaqClientPage from "./client-page";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  
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

type Props = {
  params: Promise<{
    locale: string
  }>
}

export default async function FaqPage({ params }: Props) {
  const resolvedParams = await params;
  return <FaqClientPage locale={resolvedParams.locale} />;
}
