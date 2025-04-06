import { redirect } from 'next/navigation';

export default function ContactPage({ 
  params 
}: { 
  params: { locale: string } 
}) {
  if (params.locale === 'en') {
    redirect('/en/contact');
  } else if (params.locale === 'ja') {
    redirect('/ja/contact');
  } else {
    redirect('/en/contact');
  }
  
  return null;
}
