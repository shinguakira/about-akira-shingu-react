import { Metadata } from "next";
import PrivacyClientPage from "./client-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const metadata = {
    en: {
      title: "Akira Shingu - Privacy Policy",
      description: "Privacy Policy for Akira Shingu's portfolio website",
    },
    ja: {
      title: "Akira Shingu - プライバシーポリシー",
      description: "Akira Shinguのポートフォリオサイトのプライバシーポリシー",
    },
  };

  return metadata[locale === "ja" ? "ja" : "en"];
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ja" }];
}

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function PrivacyPage({ params }: Props) {
  const resolvedParams = await params;
  return <PrivacyClientPage locale={resolvedParams.locale} />;
}
