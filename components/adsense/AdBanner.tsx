"use client";

import { useEffect } from "react";

type AdBannerProps = {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdBanner({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
}: AdBannerProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive}
    />
  );
}
