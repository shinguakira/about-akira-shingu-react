import { Suspense } from 'react';
import ContactClientPage from './client-page';

export const generateStaticParams = () => {
  return [{ locale: 'en' }, { locale: 'ja' }];
};

export default async function ContactPage({ params }: { params: { locale: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactClientPage locale={params.locale} />
    </Suspense>
  );
}
