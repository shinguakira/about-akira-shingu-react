import { Metadata } from "next";
import { Suspense } from "react";
import FaqClientPage from "./client-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const metadata = {
    en: {
      title: "Akira Shingu - FAQ",
      description: "Frequently Asked Questions about Akira Shingu",
    },
    ja: {
      title: "Akira Shingu - よくある質問",
      description: "Akira Shinguについてのよくある質問",
    },
  };

  return metadata[locale === "ja" ? "ja" : "en"];
}

/**
 * Pre-renders pages at build time for all supported locales
 * This improves SEO by ensuring static pages are available for search engines
 * @returns Array of locale objects that will be pre-rendered
 */
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ja" }];
}

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function FaqPage({ params }: Props) {
  const resolvedParams = await params;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FaqClientPage locale={resolvedParams.locale} />
    </Suspense>
  );
}
