import ContactClientPage from './client-page';

export default function ContactPage({ params }: { params: { locale: string } }) {
  return <ContactClientPage locale={params.locale} />;
}
