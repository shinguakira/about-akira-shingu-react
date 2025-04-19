import React from "react";
import CertificationsPage from "@/components/ui/certifications-page";

export const metadata = {
  title: "Akira Shingu - 資格・認定",
  description: "Akira Shinguの資格と認定証",
};

export default function JapaneseCertificationsPage() {
  const translations = {
    pageTitle: "資格・認定証",
    pageSubtitle: "資格・認定証一覧"
  };
  
  return <CertificationsPage translations={translations} />;
}
