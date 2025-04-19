import { Metadata } from "next";
import ContactClientPage from "./client-page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
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

export default async function ContactPage({ params }: Props) {
  const resolvedParams = await params;
  return <ContactClientPage locale={resolvedParams.locale} />;
}
