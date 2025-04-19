import { Metadata } from "next";
import AboutClientPage from "./client-page";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  
  const metadata = {
    en: {
      title: "Akira Shingu - About",
      description: "About Akira Shingu - Skills, Work History, Education",
    },
    ja: {
      title: "Akira Shingu - プロフィール",
      description: "Akira Shinguについて - スキル、職務経歴、学歴",
    }
  };
  
  return metadata[locale === 'ja' ? 'ja' : 'en'];
}

type Props = {
  params: {
    locale: string
  }
}

export default function AboutPage({ params }: Props) {
  return <AboutClientPage locale={params.locale} />;
}
