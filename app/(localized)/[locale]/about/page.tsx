import { Metadata } from "next";
import AboutClientPage from "./client-page";
import {
  fetchStrongPoints,
  fetchSkills,
  fetchOtherSkills,
  fetchEducation,
  StrongPointProps,
  Skill,
  EducationHistory,
} from "@/services/portfolioApi";

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
      title: "Akira Shingu - About",
      description: "About Akira Shingu - Skills, Work History, Education",
    },
    ja: {
      title: "Akira Shingu - プロフィール",
      description: "Akira Shinguについて - スキル、職務経歴、学歴",
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

export default async function AboutPage({ params }: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // Fetch data from the API in parallel with error handling
  let strongPointsData: StrongPointProps[] = [];
  let skillsData: Skill[] = [];
  let otherSkillsData: Skill[] = [];
  let educationData: EducationHistory[] = [];

  try {
    // Try to fetch all data in parallel
    [strongPointsData, skillsData, otherSkillsData, educationData] =
      await Promise.all([
        fetchStrongPoints(locale),
        fetchSkills(locale),
        fetchOtherSkills(locale),
        fetchEducation(locale),
      ]);
  } catch (error) {
    console.error("Error fetching API data:", error);

    // Handle individual fallbacks if needed
    if (!strongPointsData) {
      strongPointsData = [];
    }

    if (!skillsData) {
      skillsData = [];
    }

    if (!otherSkillsData) {
      otherSkillsData = [];
    }

    if (!educationData) {
      // If education API fails, we'll need to fetch local data and transform it
      // Will be handled by the EducationHistory component
      educationData = [];
    }
  }

  return (
    <AboutClientPage
      locale={locale}
      strongPoints={strongPointsData}
      skills={skillsData}
      otherSkills={otherSkillsData}
      education={educationData}
    />
  );
}
