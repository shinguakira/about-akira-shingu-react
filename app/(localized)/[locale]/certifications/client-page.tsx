"use client";
import React, { useState } from "react";
import CertificationItem from "@/components/ui/certification-item";
import CertificationItem2 from "@/components/certificationItem2";
import CertificationItem3 from "@/components/certificationItem3";
import CertificationItem4 from "@/components/certificationItem4";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";

type LayoutType = "default" | "modern" | "premium" | "special";

export default function CertificationsClientPage({
  locale,
  initialCertifications,
}: {
  locale: string;
  initialCertifications: any[];
}) {
  const translations = {
    en: {
      pageTitle: "My Certifications",
      pageSubtitle: "Qualifications & Certificates",
    },
    ja: {
      pageTitle: "資格・認定証",
      pageSubtitle: "資格・認定証一覧",
    },
  };

  const t = translations[locale === "ja" ? "ja" : "en"];
  const [selectedLayout, setSelectedLayout] = useState<LayoutType>("special");

  // Component mapping based on selected layout
  const renderCertificationItem = (cert: any, index: number) => {
    switch (selectedLayout) {
      case "default":
        return <CertificationItem key={index} {...cert} />;
      case "modern":
        return <CertificationItem2 key={index} {...cert} />;
      case "premium":
        return <CertificationItem3 key={index} {...cert} />;
      case "special":
        return <CertificationItem4 key={index} {...cert} />;
      default:
        return <CertificationItem4 key={index} {...cert} />;
    }
  };

  // Add translations for the layout selector
  const layoutTranslations = {
    en: {
      layoutSelector: "Select Layout Style",
      default: "Classic",
      modern: "Modern",
      premium: "Premium",
      special: "Special Edition",
    },
    ja: {
      layoutSelector: "レイアウトスタイルを選択",
      default: "クラシック",
      modern: "モダン",
      premium: "プレミアム",
      special: "スペシャルエディション",
    },
  };

  const layoutT = layoutTranslations[locale === "ja" ? "ja" : "en"];

  return (
    <div className="container mx-auto h-auto bg-slate-300 px-4 py-8 dark:bg-gray-900">
      <header className="mb-10 text-center">
        <h1 className="mb-2 text-4xl font-bold dark:text-gray-200">
          {t.pageTitle}
        </h1>
        <p className="text-xl text-gray-600">{t.pageSubtitle}</p>

        <div className="mx-auto mt-6 max-w-xs">
          <Select
            value={selectedLayout}
            onValueChange={(value: string) =>
              setSelectedLayout(value as LayoutType)
            }
            className="w-full"
          >
            <SelectContent>
              <SelectItem
                value="default"
                onClick={() => setSelectedLayout("default")}
              >
                {layoutT.default}
              </SelectItem>
              <SelectItem
                value="modern"
                onClick={() => setSelectedLayout("modern")}
              >
                {layoutT.modern}
              </SelectItem>
              <SelectItem
                value="premium"
                onClick={() => setSelectedLayout("premium")}
              >
                {layoutT.premium}
              </SelectItem>
              <SelectItem
                value="special"
                onClick={() => setSelectedLayout("special")}
              >
                {layoutT.special}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {initialCertifications.map((cert, index: number) =>
          renderCertificationItem(cert, index)
        )}
      </div>
    </div>
  );
}
