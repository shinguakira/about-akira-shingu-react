import { Metadata } from "next";
import localFont from "next/font/local";
import "../../globals.css";
import Providers from "@/components/providers";
import NavBar from "@/components/ui/nav-bar";
import Head from "next/head";

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Akira Shingu",
  description: "Portfolio website of Akira Shingu ポートフォリオサイト",
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <NavBar />
      <main className="text-dark flex min-h-screen w-full grow items-center pt-36">
        {children}
      </main>
    </Providers>
  );
}
