import { Metadata } from "next";
import { Suspense } from "react";
import FaqClientPage from "./client-page";
import { fetchFaqs, FaqProps } from "@/services/portfolioApi";

// Ensure page is static with revalidation for optimal performance
export const dynamic = "force-static";
export const revalidate = 604800; // 1 week

/**
 * Generates metadata for the FAQ page based on locale
 * This improves SEO by providing localized metadata
 * @param params - Contains the locale from the dynamic route
 * @returns Object with title and description metadata
 */
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
      description: "Frequently asked questions about Akira Shingu",
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
  const locale = resolvedParams.locale;

  // Fetch FAQ data from API with error handling
  let faqData: FaqProps[] = [];

  try {
    faqData = await fetchFaqs(locale);
  } catch (error) {
    console.error("Error fetching FAQ data:", error);
    // faqData will remain empty array, handled by the client component
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FaqClientPage locale={locale} faqs={faqData} />
    </Suspense>
  );
}
