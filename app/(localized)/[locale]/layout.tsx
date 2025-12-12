import { Metadata } from "next";
import "@/app/globals.css";
import Providers from "@/components/providers";
import ClientLayoutWrapper from "@/components/client-layout-wrapper";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const metadata = {
    en: {
      title: "Akira Shingu",
      description: "Portfolio website of Akira Shingu",
    },
    ja: {
      title: "Akira Shingu",
      description: "Akira Shinguのポートフォリオサイト",
    },
  };

  return metadata[locale === "ja" ? "ja" : "en"];
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ja" }];
}

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({ children }: Props) {
  return (
    <Providers>
      <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
    </Providers>
  );
}
