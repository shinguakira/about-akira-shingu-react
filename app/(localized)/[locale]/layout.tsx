import { Metadata } from "next";
import localFont from "next/font/local";
import "../../../globals.css";
import Providers from "@/components/providers";
import NavBar from "@/components/ui/nav-bar";
import Head from "next/head";

const geistSans = localFont({
  src: "../../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Akira Shingu",
  description: "Portfolio website of Akira Shingu ポートフォリオサイト",
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.ico" />
        <link rel="icon" sizes="32x32" href="/favicon-32x32.ico" />
        <link rel="icon" sizes="16x16" href="/favicon-16x16.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <NavBar />
          <main className="text-dark flex min-h-screen w-full grow items-center pt-36">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
