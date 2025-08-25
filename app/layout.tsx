import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Analytics from "@/components/analytics/Analytics";
import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Viewport is now moved to its own export per Next.js latest recommendations
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Akira Shingu",
  description: "Portfolio website of Akira Shingu ポートフォリオサイト",
  icons: {
    icon: [
      { url: "/favicon-16x16.ico", sizes: "16x16" },
      { url: "/favicon-32x32.ico", sizes: "32x32" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Analytics component will use hardcoded IDs or environment variables if available
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          color="#0070f3"
          showSpinner={true}
          template='<div class="bar" role="bar"><div class="peg"></div></div> <div class="spinner" role="spinner"><div class="spinner-icon" style="width: 24px; height: 24px; border-width: 4px;"></div></div>'
        />
        {children}
        {/* Include Analytics - component has default IDs built in */}
        <Analytics
          gtmId={process.env.NEXT_PUBLIC_GTM_ID}
          clarityId={process.env.NEXT_PUBLIC_CLARITY_ID}
        />
      </body>
    </html>
  );
}
