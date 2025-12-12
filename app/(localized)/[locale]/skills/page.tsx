import { Metadata } from "next";
import SkillsClientPage from "./client-page";
import { fetchSkills, fetchOtherSkills } from "@/services/portfolioApi";
import type { SkillItem } from "@shinguakira/portfolio-api-types";

// Ensure page is static with revalidation for optimal performance
export const dynamic = "force-static";
export const revalidate = 86400; // 1 day

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const metadata = {
    en: {
      title: "Akira Shingu - Skills",
      description: "Technical skills and expertise of Akira Shingu",
    },
    ja: {
      title: "Akira Shingu - スキルセット",
      description: "Akira Shinguの技術スキルと専門知識",
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

export default async function SkillsPage({ params }: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // Fetch data from the API in parallel with error handling
  let skillsData: SkillItem[] = [];
  let otherSkillsData: SkillItem[] = [];

  try {
    // Try to fetch all data in parallel
    [skillsData, otherSkillsData] = await Promise.all([
      fetchSkills(locale),
      fetchOtherSkills(locale),
    ]);
  } catch (error) {
    console.error("Error fetching skills data:", error);

    if (!skillsData) {
      skillsData = [];
    }

    if (!otherSkillsData) {
      otherSkillsData = [];
    }
  }

  return (
    <SkillsClientPage
      locale={locale}
      skills={skillsData}
      otherSkills={otherSkillsData}
    />
  );
}
