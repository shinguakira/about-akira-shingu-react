import { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import Providers from "@/components/providers";
import NavBar from "@/components/ui/nav-bar";

const geistSans = localFont({
  src: "../../../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  const metadata = {
    en: {
      title: "Akira Shingu",
      description: "Portfolio website of Akira Shingu",
    },
    ja: {
      title: "Akira Shingu",
      description: "Akira Shinguのポートフォリオサイト",
    }
  };
  
  return metadata[locale === 'ja' ? 'ja' : 'en'];
}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ja' }
  ];
}

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string
  }>
}

export default async function LocaleLayout({ children, params }: Props) {
  return (
    <Providers>
      <NavBar />
      <main className="text-dark flex min-h-screen w-full grow items-center pt-36">
        {children}
      </main>
    </Providers>
  );
}
