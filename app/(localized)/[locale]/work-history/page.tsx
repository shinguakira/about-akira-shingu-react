import { Metadata } from "next";
import WorkHistoryClientPage from "./client-page";
import { fetchEducation } from "@/services/portfolioApi";
import type { EducationHistory } from "@shinguakira/portfolio-api-types";

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
      title: "Akira Shingu - Work History",
      description: "Professional work history and education of Akira Shingu",
    },
    ja: {
      title: "Akira Shingu - 経歴",
      description: "Akira Shinguの職務経歴と学歴",
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

export default async function WorkHistoryPage({ params }: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // Fetch education data from the API with error handling
  let educationData: EducationHistory[] = [];

  try {
    educationData = await fetchEducation(locale);
  } catch (error) {
    console.error("Error fetching education data:", error);
    educationData = [];
  }

  return <WorkHistoryClientPage locale={locale} education={educationData} />;
}
