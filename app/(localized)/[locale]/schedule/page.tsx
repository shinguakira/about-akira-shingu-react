import { Metadata } from "next";
import ScheduleClientPage from "./client-page";

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
      description: "Akira Shingu's schedule and availability",
    },
    ja: {
      title: "Akira Shingu - スケジュール",
      description: "Akira Shinguのスケジュール・空き状況",
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

export default async function SchedulePage({ params }: Props) {
  const resolvedParams = await params;
  return <ScheduleClientPage locale={resolvedParams.locale} />;
}
