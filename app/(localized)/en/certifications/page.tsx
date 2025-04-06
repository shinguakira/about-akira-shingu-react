import CertificationItem from "@/components/ui/certification-item";
import { certifications } from "@/constants/certification";

export const metadata = {
  title: "Akira Shingu - Certifications",
  description: "Certifications and qualifications of Akira Shingu",
};

export default function CertificationsPage() {
  return (
    <div className="container mx-auto h-auto bg-slate-300 px-4 py-8 dark:bg-gray-900">
      <header className="mb-10 text-center">
        <h1 className="mb-2 text-4xl font-bold dark:text-gray-200">
          My Certifications
        </h1>
        <p className="text-xl text-gray-600">Qualifications &amp; Certificates</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index: number) => (
          <CertificationItem key={index} {...cert} />
        ))}
      </div>
    </div>
  );
}
