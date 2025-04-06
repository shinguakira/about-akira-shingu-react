import { redirect } from 'next/navigation';

interface PageProps {
  params: {
    locale: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
}

function ContactPage(props: PageProps) {
  const { params } = props;
  
  if (params.locale === 'en') {
    redirect('/en/contact');
  } else if (params.locale === 'ja') {
    redirect('/ja/contact');
  } else {
    redirect('/en/contact');
  }
  
  return null;
}

export default ContactPage;
