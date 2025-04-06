import ContactClientPage from './client-page';

interface ContactPageProps {
  params: {
    locale: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
}

export default function ContactPage({ params }: ContactPageProps) {
  return <ContactClientPage locale={params.locale} />;
}
