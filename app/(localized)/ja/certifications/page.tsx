import CertificationItem from "@/components/ui/certification-item";
import { certifications } from "@/constants/certification";

export const metadata = {
  title: "Akira Shingu - 資格・認定",
  description: "Akira Shinguの資格と認定証",
};

export default function CertificationsPage() {
  return (
    <div className="container mx-auto h-auto bg-slate-300 px-4 py-8 dark:bg-gray-900">
      <header className="mb-10 text-center">
        <h1 className="mb-2 text-4xl font-bold dark:text-gray-200">
          資格・認定証
        </h1>
        <p className="text-xl text-gray-600">資格・認定証一覧</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index: number) => (
          <CertificationItem key={index} {...cert} />
        ))}
      </div>
    </div>
  );
}
