import { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Akira Shingu - Contact",
  description: "Contact Akira Shingu",
};

export default function ContactPage({ params }: { params: { locale: string } }) {
  const translations = {
    en: {
      title: "Contact",
      description: "Feel free to reach out to me with any questions or opportunities.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message",
      needToFixApp: "Need to fix application: Email configuration missing",
      requiredField: "This field is required",
      invalidEmail: "Please enter a valid email address"
    },
    ja: {
      title: "お問い合わせ",
      description: "ご質問やお仕事のご依頼など、お気軽にご連絡ください。",
      name: "お名前",
      email: "メールアドレス",
      message: "メッセージ",
      send: "送信",
      sending: "送信中...",
      success: "メッセージが送信されました！",
      error: "メッセージの送信に失敗しました",
      needToFixApp: "アプリケーションの修正が必要：メール設定が不足しています",
      requiredField: "この項目は必須です",
      invalidEmail: "有効なメールアドレスを入力してください"
    }
  };

  const t = translations[params.locale === 'ja' ? 'ja' : 'en'];

  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-6 text-4xl font-bold">{t.title}</h1>
      <p className="mb-8 text-lg">{t.description}</p>
      <ContactForm 
        locale={params.locale}
        translations={t}
      />
    </div>
  );
}
