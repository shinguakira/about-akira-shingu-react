import { Metadata } from "next";
import ProjectsClientPage from "./client-page";
import { fetchProjects } from "@/services/portfolioApi";
import { projects as localProjects } from "@/constants/project";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const metadata = {
    en: {
      title: "Akira Shingu - Projects",
      description: "Projects developed by Akira Shingu",
    },
    ja: {
      title: "Akira Shingu - プロジェクト",
      description: "Akira Shinguが開発したプロジェクト",
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

// Use ISR with long cache instead of force-static to avoid build issues
// Still revalidates once per week (7 days)
export const revalidate = 604800;

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ProjectsPage({ params }: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  let projectData;

  try {
    // Fetch projects data from API with locale as lang parameter
    projectData = await fetchProjects(locale);
    console.log("projectData", projectData);
  } catch (error) {
    console.error("Failed to fetch projects from API:", error);
    // Fallback to local data if API fails
    // Transform MultilingualProjectProps to ProjectContent based on locale
    projectData = localProjects.map((project) => {
      const localizedProject = locale === "en" ? project.en : project.ja;
      return {
        ...localizedProject,
        technologies: project.technologies,
      };
    });
  }

  return <ProjectsClientPage locale={locale} projects={projectData} />;
}
