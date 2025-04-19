import { Metadata } from "next";
import ContactClientPage from "./client-page";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  
  const metadata = {
    en: {
      title: "Akira Shingu - Contact",
      description: "Contact Akira Shingu",
    },
    ja: {
      title: "Akira Shingu - お問い合わせ",
      description: "Akira Shinguへのお問い合わせ",
    }
  };
  
  return metadata[locale === 'ja' ? 'ja' : 'en'];
}

type Props = {
  params: Promise<{
    locale: string
  }>
}

export default async function ContactPage({ params }: Props) {
  const resolvedParams = await params;
  return <ContactClientPage locale={resolvedParams.locale} />;
}
