import { Metadata } from "next";
import CertificationsClientPage from "./client-page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  const metadata = {
    en: {
      title: "Akira Shingu - Certifications",
      description: "Certifications and qualifications of Akira Shingu",
    },
    ja: {
      title: "Akira Shingu - 資格・認定",
      description: "Akira Shinguの資格と認定",
    }
  };
  
  return metadata[locale === 'ja' ? 'ja' : 'en'];
}

type Props = {
  params: Promise<{
    locale: string
  }>
}

export default async function CertificationsPage({ params }: Props) {
  const resolvedParams = await params;
  return <CertificationsClientPage locale={resolvedParams.locale} />;
}
