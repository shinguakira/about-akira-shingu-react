import { Metadata } from "next";
import StrongPointsClientPage from "./client-page";
import { fetchStrongPoints } from "@/services/portfolioApi";
import type { StrongPoint } from "@shinguakira/portfolio-api-types";

// Ensure page is static with revalidation for optimal performance
export const dynamic = "force-static";
export const revalidate = 604800; // 1 week

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const metadata = {
    en: {
      title: "Akira Shingu - Strong Points",
      description: "Key strengths and appeal points of Akira Shingu",
    },
    ja: {
      title: "Akira Shingu - アピールポイント",
      description: "Akira Shinguの強みとアピールポイント",
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

export default async function StrongPointsPage({ params }: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // Fetch strong points data from the API with error handling
  let strongPointsData: StrongPoint[] = [];

  try {
    strongPointsData = await fetchStrongPoints(locale);
  } catch (error) {
    console.error("Error fetching strong points data:", error);
    strongPointsData = [];
  }

  return (
    <StrongPointsClientPage locale={locale} strongPoints={strongPointsData} />
  );
}
