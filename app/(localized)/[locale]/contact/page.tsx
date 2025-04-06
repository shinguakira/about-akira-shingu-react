import dynamic from 'next/dynamic';

const ContactClientPage = dynamic(() => import('./client-page'), { ssr: false });

export default function ContactPage({ 
  params 
}: { 
  params: { locale: string } 
}) {
  return (
    <div>
      <ContactClientPage locale={params.locale} />
    </div>
  );
}
