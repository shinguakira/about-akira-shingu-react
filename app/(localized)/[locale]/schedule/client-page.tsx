"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/shadcn/button";

export default function ScheduleClientPage({ locale }: { locale: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Get calendar ID from environment variable or use default
  const calendarId =
    process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID || "shinguakira1022@gmail.com";

  const translations = {
    en: {
      title: "Schedule",
      description: "View my availability and upcoming events",
      loading: "Loading calendar...",
      error: "Unable to load calendar",
      refresh: "Refresh Calendar",
      openFull: "Open Full Calendar",
      timezone: "Timezone: Asia/Tokyo (JST)",
      instructions:
        "You can view my current schedule and availability below. Click events to see more details.",
    },
    ja: {
      title: "スケジュール",
      description: "空き状況と今後の予定をご確認いただけます",
      loading: "カレンダーを読み込み中...",
      error: "カレンダーを読み込めませんでした",
      refresh: "カレンダーを更新",
      openFull: "フルカレンダーを開く",
      timezone: "タイムゾーン: Asia/Tokyo (JST)",
      instructions:
        "現在のスケジュールと空き状況をご確認いただけます。イベントをクリックすると詳細が表示されます。",
    },
  };

  const t =
    translations[locale as keyof typeof translations] || translations.en;

  const handleCalendarLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleCalendarError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const refreshCalendar = () => {
    setIsLoading(true);
    setHasError(false);
    // Force iframe refresh by reloading the page section
    window.location.reload();
  };

  const openFullCalendar = () => {
    const calendarUrl = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&ctz=Asia%2FTokyo`;
    window.open(calendarUrl, "_blank");
  };

  return (
    <main className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
          {t.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {t.description}
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {t.timezone}
        </p>
      </div>

      <div className="mb-6">
        <p className="text-center text-gray-600 dark:text-gray-300">
          {t.instructions}
        </p>
      </div>

      <div className="mb-4 flex justify-center space-x-4">
        <Button
          onClick={refreshCalendar}
          variant="outline"
          disabled={isLoading}
        >
          {t.refresh}
        </Button>
        <Button onClick={openFullCalendar} variant="default">
          {t.openFull}
        </Button>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
              <div className="text-center">
                <div className="mb-2 size-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
                <p className="text-gray-600 dark:text-gray-300">{t.loading}</p>
              </div>
            </div>
          )}

          {hasError ? (
            <div className="flex h-96 items-center justify-center bg-gray-50 dark:bg-gray-900">
              <div className="text-center">
                <p className="mb-4 text-red-600 dark:text-red-400">{t.error}</p>
                <Button onClick={refreshCalendar} variant="outline">
                  {t.refresh}
                </Button>
              </div>
            </div>
          ) : (
            <iframe
              src={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&ctz=Asia%2FTokyo`}
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              title={t.title}
              className="h-96 w-full md:h-[600px]"
              onLoad={handleCalendarLoad}
              onError={handleCalendarError}
            />
          )}
        </div>
      </div>

      {!hasError && !isLoading && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {locale === "ja"
              ? "ミーティングのスケジュールについては、お気軽にお問い合わせください。"
              : "Feel free to contact me to schedule a meeting or discuss availability."}
          </p>
        </div>
      )}
    </main>
  );
}
