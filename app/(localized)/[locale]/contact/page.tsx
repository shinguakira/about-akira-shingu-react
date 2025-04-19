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

export default function ContactPage({ params }: { params: { locale: string } }) {
  return <ContactClientPage locale={params.locale} />;
}
