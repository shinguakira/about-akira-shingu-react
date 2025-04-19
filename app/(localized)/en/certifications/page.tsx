import React from "react";
import CertificationsPage from "@/components/ui/certifications-page";

export const metadata = {
  title: "Akira Shingu - Certifications",
  description: "Certifications and qualifications of Akira Shingu",
};

export default function EnglishCertificationsPage() {
  const translations = {
    pageTitle: "My Certifications",
    pageSubtitle: "Qualifications & Certificates"
  };
  
  return <CertificationsPage translations={translations} />;
}
