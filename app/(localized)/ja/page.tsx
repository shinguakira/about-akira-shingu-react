"use client";
import HomePage from "@/components/ui/home-page";

export default function JapaneseHomePage() {
  const translations = {
    animatedText: "コードとデザインでビジョンを現実に。",
    description: "熟練したフルスタック開発者として、アイデアを革新的なウェブアプリケーションに変えることに専念しています。私の最新プロジェクトと記事をご覧いただき、Reactとウェブ開発における専門知識をご確認ください。",
    downloadLabel: "ダウンロード→",
    resumeLabel: "履歴書",
    cvLabel: "職務履歴書",
    englishCvLabel: "英文履歴書",
    contactLabel: "お問い合わせ",
    modalTitle: "Home",
    modalDownloadText: "履歴書・職務履歴書ダウンロード",
    modalAboutTitle: "About",
    modalAboutText: "スキルセット、職務履歴、学歴",
    modalCertificationsTitle: "Certifications",
    modalCertificationsText: "取得資格およびその証明リンク",
    modalProjectsTitle: "Projects",
    modalProjectsText: "開発プロジェクトのgitURLおよびプロジェクトURL",
    modalArticlesTitle: "Articles",
    modalArticlesText: "記事のタイトルおよびリンク",
    modalFaqTitle: "FAQ",
    modalFaqText: "よくある質問",
    modalDontShowButton: "更新があるまで表示しない"
  };
  
  return <HomePage locale="ja" translations={translations} />;
}
