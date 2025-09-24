"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink } from "lucide-react";

export default function ScheduleClientPage({ locale }: { locale: string }) {
  const [isCalendarLoaded, setIsCalendarLoaded] = useState(false);
  const [calendarError, setCalendarError] = useState(false);

  const translations = {
    en: {
      title: "Schedule",
      description: "View my availability and upcoming events",
      loadingCalendar: "Loading calendar...",
      calendarError: "Unable to load calendar",
      viewInGoogle: "View in Google Calendar",
      refreshCalendar: "Refresh Calendar",
      availability: "Availability",
      availabilityDescription:
        "Check my calendar below for available time slots. Feel free to contact me to schedule a meeting or consultation.",
      embedError:
        "If the calendar doesn't load, you can view it directly in Google Calendar using the link above.",
      timeZone: "Time zone: JST (Japan Standard Time)",
    },
    ja: {
      title: "スケジュール",
      description: "空き状況と今後の予定をご確認いただけます",
      loadingCalendar: "カレンダーを読み込み中...",
      calendarError: "カレンダーを読み込めませんでした",
      viewInGoogle: "Googleカレンダーで表示",
      refreshCalendar: "カレンダーを更新",
      availability: "空き状況",
      availabilityDescription:
        "下記のカレンダーで空き時間をご確認ください。ミーティングやコンサルテーションのスケジュール調整については、お気軽にお問い合わせください。",
      embedError:
        "カレンダーが読み込まれない場合は、上のリンクから直接Googleカレンダーでご確認ください。",
      timeZone: "タイムゾーン: JST（日本標準時）",
    },
  };

  const t = translations[locale === "ja" ? "ja" : "en"];

  // Google Calendar configuration
  // Use environment variable if available, otherwise fallback to placeholder
  const calendarId =
    process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID ||
    "en.japanese#holiday@group.v.calendar.google.com";
  const googleCalendarUrl = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&ctz=Asia%2FTokyo`;
  const directCalendarUrl = `https://calendar.google.com/calendar/u/0?cid=${encodeURIComponent(calendarId)}`;

  const handleCalendarLoad = () => {
    setIsCalendarLoaded(true);
    setCalendarError(false);
  };

  const handleCalendarError = () => {
    setCalendarError(true);
    setIsCalendarLoaded(false);
  };

  const refreshCalendar = () => {
    setIsCalendarLoaded(false);
    setCalendarError(false);
    // Force reload the iframe by changing its key
    const iframe = document.querySelector(
      "#calendar-iframe"
    ) as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">{t.title}</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {t.description}
        </p>
      </div>

      <div className="mb-6">
        <Card className="p-6">
          <div className="mb-4 flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-semibold">{t.availability}</h2>
          </div>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            {t.availabilityDescription}
          </p>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Clock className="mr-2 h-4 w-4" />
            {t.timeZone}
          </div>
        </Card>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <Button
          onClick={() => window.open(directCalendarUrl, "_blank")}
          variant="outline"
          className="flex items-center"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          {t.viewInGoogle}
        </Button>
        <Button onClick={refreshCalendar} variant="outline">
          {t.refreshCalendar}
        </Button>
      </div>

      <div className="relative">
        {!isCalendarLoaded && !calendarError && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 dark:bg-gray-900/80">
            <div className="text-center">
              <div className="mb-2 h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t.loadingCalendar}
              </p>
            </div>
          </div>
        )}

        {calendarError && (
          <Card className="p-8 text-center">
            <div className="mb-4">
              <Calendar className="mx-auto h-12 w-12 text-gray-400" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-red-600 dark:text-red-400">
              {t.calendarError}
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              {t.embedError}
            </p>
            <Button onClick={refreshCalendar} variant="outline">
              {t.refreshCalendar}
            </Button>
          </Card>
        )}

        {!calendarError && (
          <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
            <iframe
              id="calendar-iframe"
              src={googleCalendarUrl}
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              title="Google Calendar"
              onLoad={handleCalendarLoad}
              onError={handleCalendarError}
              className="min-h-[400px] md:min-h-[600px]"
            />
          </div>
        )}
      </div>

      <div className="mt-6">
        <Card className="p-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t.embedError}
          </p>
        </Card>
      </div>
    </div>
  );
}
