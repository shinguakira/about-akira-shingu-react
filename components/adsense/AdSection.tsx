"use client";

import AdBanner from "./AdBanner";

type AdSectionProps = {
  adSlot?: string;
};

export default function AdSection({ adSlot = "0000000000" }: AdSectionProps) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  if (!clientId) {
    return null;
  }

  return (
    <section className="mx-auto mt-12 w-full max-w-4xl px-4 pb-8">
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
        <p className="mb-2 text-center text-xs text-gray-400">Sponsored</p>
        <AdBanner adSlot={adSlot} />
      </div>
    </section>
  );
}
