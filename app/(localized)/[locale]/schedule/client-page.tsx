"use client";
import React from "react";

export default function ScheduleClientPage({ locale }: { locale: string }) {
  const translations = {
    en: {
      title: "Schedule",
      description: "View my calendar and schedule appointments with me.",
      loadingText: "Loading calendar...",
      errorText: "Unable to load calendar. Please try again later.",
      calendarNotAvailable: "Calendar is currently not available.",
    },
    ja: {
      title: "スケジュール",
      description:
        "私のカレンダーを確認し、アポイントメントをスケジュールしてください。",
      loadingText: "カレンダーを読み込み中...",
      errorText:
        "カレンダーを読み込めませんでした。後でもう一度お試しください。",
      calendarNotAvailable: "現在カレンダーは利用できません。",
    },
  };

  const t = translations[locale === "ja" ? "ja" : "en"];

  // Environment variable for calendar ID, with fallback to placeholder
  const calendarId =
    process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID || "your-calendar-id@gmail.com";

  // Google Calendar embed URL
  const calendarSrc = `https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&src=${encodeURIComponent(calendarId)}&color=%23039BE5&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0`;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          {t.title}
        </h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
          {t.description}
        </p>

        <div className="rounded-lg bg-white shadow-lg dark:bg-gray-800">
          <div className="p-6">
            {calendarId === "your-calendar-id@gmail.com" ? (
              <div className="flex min-h-[600px] items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-700">
                <div className="text-center">
                  <div className="mb-4 text-6xl">📅</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {t.calendarNotAvailable}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {locale === "ja"
                      ? "カレンダーIDが設定されていません。管理者に連絡してください。"
                      : "Calendar ID not configured. Please contact the administrator."}
                  </p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                    {locale === "ja"
                      ? "現在のカレンダーID: "
                      : "Current calendar ID: "}
                    <code className="rounded bg-gray-200 px-1 py-0.5 text-xs dark:bg-gray-600">
                      {calendarId}
                    </code>
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-lg">
                <iframe
                  src={calendarSrc}
                  style={{ border: 0 }}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  title={t.title}
                  className="rounded-lg"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
            {locale === "ja" ? "📝 注意事項" : "📝 Note"}
          </h3>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            {locale === "ja"
              ? "このカレンダーは私の空いている時間を表示しています。お打ち合わせをご希望の場合は、お問い合わせページからご連絡ください。"
              : "This calendar shows my available time slots. If you'd like to schedule a meeting, please reach out through the contact page."}
          </p>
        </div>
      </div>
    </div>
  );
}
