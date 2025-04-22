import { Metadata } from "next";
import ArticlesClientPage from "./client-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const metadata = {
    en: {
      title: "Akira Shingu - Articles",
      description: "Articles written by Akira Shingu",
    },
    ja: {
      title: "Akira Shingu - 記事",
      description: "Akira Shinguが書いた記事",
    },
  };

  return metadata[locale === "ja" ? "ja" : "en"];
}

/**
 * Pre-renders pages at build time for all supported locales
 * This improves SEO by ensuring pages are statically generated
 * rather than being rendered on-demand at request time
 */
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ja" }];
}

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ArticlesPage({ params }: Props) {
  const resolvedParams = await params;
  return <ArticlesClientPage locale={resolvedParams.locale} />;
}
