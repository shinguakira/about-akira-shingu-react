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
    process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID || "shinguakira1022@gmail.com";

  // Alternative: Direct calendar URL as suggested by user (for opening in new tab)
  const directCalendarUrl =
    "https://calendar.google.com/calendar/embed?src=shinguakira1022%40gmail.com&ctz=Asia%2FTokyo&mode=AGENDA&showTitle=0&showTabs=0&showCalendars=0";

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
              <div className="space-y-6">
                {/* Embed calendar using the comprehensive format suggested by user */}
                <div className="relative overflow-hidden rounded-lg">
                  <iframe
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTokyo&showPrint=0&src=c2hpbmd1YWtpcmExMDIyQGdtYWlsLmNvbQ&src=ZW4uamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039be5&color=%230b8043&color=%230b8043"
                    style={{ border: "solid 1px #777" }}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    title={t.title}
                    className="rounded-lg"
                    loading="lazy"
                  />
                </div>

                {/* Alternative: Direct calendar link */}
                <div className="text-center">
                  <a
                    href={directCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    {locale === "ja"
                      ? "フルカレンダーを開く"
                      : "Open Full Calendar"}
                  </a>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {locale === "ja"
                      ? "新しいタブでより詳細なカレンダービューを開きます"
                      : "Opens a more detailed calendar view in a new tab"}
                  </p>
                </div>
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
