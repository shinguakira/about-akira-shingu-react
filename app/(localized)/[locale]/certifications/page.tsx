import { Metadata } from "next";
import CertificationsClientPage from "./client-page";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  
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

export default function CertificationsPage({ params }: { params: { locale: string } }) {
  return <CertificationsClientPage locale={params.locale} />;
}
