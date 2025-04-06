import ContactClientPage from './client-page';

export const generateStaticParams = () => {
  return [{ locale: 'en' }, { locale: 'ja' }];
};

export default function ContactPage({ params }: { params: { locale: string } }) {
  return <ContactClientPage locale={params.locale} />;
}
