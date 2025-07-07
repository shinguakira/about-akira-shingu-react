"use client";
import React, { useState, useEffect } from "react";
import CertificationItem from "@/components/ui/certification-item";

type CertificationItemProps = {
  id: number;
  name: string;
  organization: string;
  date: string;
  verifyLink: string;
  className?: string;
};

interface CertificationData {
  success: boolean;
  data: CertificationItemProps[];
  error?: string;
}

export default function CertificationsPage() {
  const [certifications, setCertifications] = useState<CertificationItemProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await fetch('/api/certifications');
        const data: CertificationData = await response.json();
        
        if (data.success) {
          setCertifications(data.data);
        } else {
          setError(data.error || 'Failed to fetch certifications');
        }
      } catch (err) {
        console.error('Error fetching certifications:', err);
        setError('Failed to load certifications');
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto h-auto bg-slate-300 px-4 py-8 dark:bg-gray-900">
        <div className="text-center">Loading certifications...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto h-auto bg-slate-300 px-4 py-8 dark:bg-gray-900">
        <div className="text-center text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto h-auto bg-slate-300 px-4 py-8 dark:bg-gray-900">
      <header className="mb-10 text-center">
        <h1 className="mb-2 text-4xl font-bold dark:text-gray-200">
          My Certifications
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
