import { Metadata } from "next";
import ScheduleClientPage from "./client-page";

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
      title: "Akira Shingu - Schedule",
      description: "View Akira Shingu's schedule and availability calendar",
    },
    ja: {
      title: "Akira Shingu - スケジュール",
      description: "Akira Shinguのスケジュールと空き状況のカレンダー",
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

export default async function SchedulePage({ params }: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return <ScheduleClientPage locale={locale} />;
}
