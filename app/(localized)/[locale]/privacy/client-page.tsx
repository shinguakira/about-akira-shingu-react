"use client";

type Section = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

type Translations = {
  title: string;
  lastUpdated: string;
  sections: Section[];
};

const en: Translations = {
  title: "Privacy Policy",
  lastUpdated: "Last updated: March 13, 2026",
  sections: [
    {
      heading: "Introduction",
      paragraphs: [
        "This privacy policy explains how this website collects, uses, and protects your information when you visit this portfolio website.",
      ],
    },
    {
      heading: "Information We Collect",
      paragraphs: [
        "This website may collect the following types of information:",
      ],
      list: [
        "Usage data through analytics tools (Google Tag Manager, Microsoft Clarity)",
        "Information you provide through the contact form (name, email, message)",
        "Cookies for site functionality and preferences",
      ],
    },
    {
      heading: "Third-Party Services",
      paragraphs: ["This website uses the following third-party services:"],
      list: [
        "Google AdSense - for displaying advertisements. Google may use cookies to serve ads based on your prior visits to this or other websites. You can opt out of personalized advertising at Google Ad Settings.",
        "Google Tag Manager - for analytics and tracking",
        "Microsoft Clarity - for understanding how users interact with the website",
        "Vercel - for website hosting and analytics",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "This website uses cookies to enhance your browsing experience. Third-party services such as Google AdSense may also place cookies on your device to serve relevant advertisements.",
        "You can control cookie settings through your browser preferences.",
      ],
    },
    {
      heading: "Advertising",
      paragraphs: [
        "This website uses Google AdSense to display advertisements. Google and its partners may use cookies to serve ads based on your visit to this site and/or other sites on the Internet.",
        "Users may opt out of personalized advertising by visiting Google Ad Settings.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "If you have any questions about this privacy policy, please contact us at shinguakira1022@gmail.com.",
      ],
    },
  ],
};

const ja: Translations = {
  title: "プライバシーポリシー",
  lastUpdated: "最終更新日: 2026年3月13日",
  sections: [
    {
      heading: "はじめに",
      paragraphs: [
        "本プライバシーポリシーは、当ポートフォリオサイトにおける情報の収集、使用、保護について説明します。",
      ],
    },
    {
      heading: "収集する情報",
      paragraphs: ["当サイトでは以下の情報を収集する場合があります："],
      list: [
        "アナリティクスツール（Google Tag Manager、Microsoft Clarity）を通じた利用データ",
        "お問い合わせフォームから提供される情報（名前、メールアドレス、メッセージ）",
        "サイトの機能および設定のためのCookie",
      ],
    },
    {
      heading: "第三者サービス",
      paragraphs: ["当サイトでは以下の第三者サービスを利用しています："],
      list: [
        "Google AdSense - 広告の表示。Googleは、当サイトや他のサイトへの過去のアクセスに基づいてCookieを使用し広告を配信する場合があります。Googleの広告設定からパーソナライズド広告をオプトアウトできます。",
        "Google Tag Manager - アナリティクスとトラッキング",
        "Microsoft Clarity - ユーザーのサイト利用状況の把握",
        "Vercel - ウェブサイトのホスティングとアナリティクス",
      ],
    },
    {
      heading: "Cookie（クッキー）",
      paragraphs: [
        "当サイトでは、ブラウジング体験を向上させるためにCookieを使用しています。Google AdSenseなどの第三者サービスも、関連する広告を配信するためにCookieを使用する場合があります。",
        "Cookieの設定はブラウザの設定から変更できます。",
      ],
    },
    {
      heading: "広告について",
      paragraphs: [
        "当サイトではGoogle AdSenseを使用して広告を表示しています。Googleおよびそのパートナーは、当サイトや他のサイトへのアクセスに基づき、Cookieを使用して広告を配信する場合があります。",
        "パーソナライズド広告のオプトアウトは、Googleの広告設定から行えます。",
      ],
    },
    {
      heading: "お問い合わせ",
      paragraphs: [
        "本プライバシーポリシーに関するご質問は、shinguakira1022@gmail.com までお問い合わせください。",
      ],
    },
  ],
};

export default function PrivacyClientPage({ locale }: { locale: string }) {
  const t = locale === "ja" ? ja : en;

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold">{t.title}</h1>
      <p className="mb-6 text-sm text-gray-500">{t.lastUpdated}</p>

      {t.sections.map((section, i) => (
        <section key={i} className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">{section.heading}</h2>
          {section.paragraphs.map((p, j) => (
            <p
              key={j}
              className="mb-2 leading-relaxed text-gray-700 dark:text-gray-300"
            >
              {p}
            </p>
          ))}
          {section.list && (
            <ul className="ml-6 list-disc space-y-1 text-gray-700 dark:text-gray-300">
              {section.list.map((item, k) => (
                <li key={k}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
