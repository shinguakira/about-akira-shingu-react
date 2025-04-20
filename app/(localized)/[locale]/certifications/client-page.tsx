"use client";
import React from "react";
import CertificationItem from "@/components/ui/certification-item";
import { certifications } from "@/constants/certification";

export default function CertificationsClientPage({ locale }: { locale: string }) {
  const translations = {
    en: {
      pageTitle: "My Certifications",
      pageSubtitle: "Qualifications & Certificates"
    },
    ja: {
      pageTitle: "資格・認定証",
      pageSubtitle: "資格・認定証一覧"
    }
  };

  const t = translations[locale === 'ja' ? 'ja' : 'en'];

  return (
    <div className="container mx-auto h-auto bg-slate-300 px-4 py-8 dark:bg-gray-900">
      <header className="mb-10 text-center">
        <h1 className="mb-2 text-4xl font-bold dark:text-gray-200">
          {t.pageTitle}
        </h1>
        <p className="text-xl text-gray-600">{t.pageSubtitle}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index: number) => (
          <CertificationItem key={index} {...cert} />
        ))}
      </div>
    </div>
  );
}
