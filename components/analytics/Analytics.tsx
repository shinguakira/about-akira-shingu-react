"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { Suspense, useEffect } from "react";

type AnalyticsProps = {
  gtmId?: string; // Google Tag Manager ID (optional if using hardcoded default)
  clarityId?: string; // Microsoft Clarity ID (optional)
};

// You can optionally hardcode IDs here for simpler usage
const DEFAULT_GTM_ID = "GTM-NP85DLQQ"; // Replace with your actual GTM ID
const DEFAULT_CLARITY_ID = "selyr7wk8v"; // Replace with your actual Clarity ID

// Separate component to handle hooks that need Suspense
function AnalyticsPageTracker({ gtmId }: { gtmId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views for GTM
  useEffect(() => {
    if (pathname && window.dataLayer) {
      window.dataLayer.push({
        event: "pageview",
        page: pathname,
        search: searchParams?.toString(),
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function Analytics({
  gtmId = DEFAULT_GTM_ID,
  clarityId = DEFAULT_CLARITY_ID,
}: AnalyticsProps) {
  return (
    <>
      <Suspense fallback={null}>
        <AnalyticsPageTracker gtmId={gtmId} />
      </Suspense>

      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />

      {/* Google Tag Manager (noscript) */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          `,
        }}
      />

      {/* Microsoft Clarity */}
      {clarityId && (
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `,
          }}
        />
      )}
    </>
  );
}

// Add this to provide TypeScript support for the dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}
