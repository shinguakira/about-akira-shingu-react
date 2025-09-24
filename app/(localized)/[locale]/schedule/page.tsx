import { Metadata } from "next";
import ClientPage from "./client-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const metadata = {
    en: {
      title: "Schedule - Akira Shingu",
      description: "View my calendar and schedule appointments",
    },
    ja: {
      title: "スケジュール - Akira Shingu",
      description: "カレンダーを確認し、アポイントメントをスケジュールする",
    },
  };

  return metadata[locale === "ja" ? "ja" : "en"];
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ja" }];
}

export const dynamic = "force-static";

export default async function SchedulePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return <ClientPage locale={locale} />;
}
