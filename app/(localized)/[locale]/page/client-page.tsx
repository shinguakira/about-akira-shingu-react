"use client";
import AnimatedText from "@/components/ui/animated-text";
import DownLoadLink from "@/components/ui/download-link";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { links } from "@/constants";
import { LinkArrow } from "@/components/ui/icons";
import Image from "next/image";
import Link from "next/link";
import profilePic from "public/images/profile/developer-pic-1.png";
import Modal from "@/components/ui/modal";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/shadcn/button";

export default function HomeClientPage({ locale }: { locale: string }) {
  const translations = {
    en: {
      animatedText: "Turning Vision Into Reality With Code And Design.",
      description: "As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React and web development.",
      downloadLabel: "Download→",
      resumeLabel: "Resume",
      jobResumeLabel: "Job Resume",
      englishResumeLabel: "English CV/Resume",
      contactLabel: "Contact",
      modalTitle: "Home",
      modalHome: "Home",
      modalHomeDesc: "Resume/CV Download",
      modalAbout: "About",
      modalAboutDesc: "Skills, Work History, Education",
      modalCert: "Certifications",
      modalCertDesc: "Certifications and verification links",
      modalProjects: "Projects",
      modalProjectsDesc: "Development projects with git URLs and project URLs",
      modalArticles: "Articles",
      modalArticlesDesc: "Article titles and links",
      modalFaq: "FAQ",
      modalFaqDesc: "Frequently Asked Questions",
      modalButtonText: "Don't show until updates"
    },
    ja: {
      animatedText: "コードとデザインでビジョンを現実に。",
      description: "フルスタック開発者として、アイデアを革新的なウェブアプリケーションに変えることに専念しています。私の最新プロジェクトと記事をご覧いただき、Reactとウェブ開発における専門知識をご確認ください。",
      downloadLabel: "ダウンロード→",
      resumeLabel: "履歴書",
      jobResumeLabel: "職務履歴書",
      englishResumeLabel: "英語版履歴書",
      contactLabel: "お問い合わせ",
      modalTitle: "ホーム",
      modalHome: "ホーム",
      modalHomeDesc: "履歴書・職務履歴書ダウンロード",
      modalAbout: "プロフィール",
      modalAboutDesc: "スキルセット、職務履歴、学歴",
      modalCert: "資格・認定",
      modalCertDesc: "取得資格およびその証明リンク",
      modalProjects: "プロジェクト",
      modalProjectsDesc: "開発プロジェクトのgitURLおよびプロジェクトURL",
      modalArticles: "記事",
      modalArticlesDesc: "記事のタイトルおよびリンク",
      modalFaq: "よくある質問",
      modalFaqDesc: "よくある質問",
      modalButtonText: "更新があるまで表示しない"
    }
  };

  const t = translations[locale === 'ja' ? 'ja' : 'en'];
  const [isModalOpen, setIsModalOpen] = useState(true);
  
  useEffect(() => {
    const cookies = parseCookies();
    if (!cookies.modalHidden) {
    } else {
      setIsModalOpen(false);
    }
  }, []);
  
  function handleDontShowModal(modalHidden: string) {
    if (modalHidden === "true") {
      setCookie(null, "modalHidden", modalHidden, {
        maxAge: 365 * 24 * 60 * 60,
        path: "/",
      });
      setIsModalOpen(false);
    } else {
      destroyCookie(null, "modalHidden", { path: "/" });
    }
  }
  
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalTitle=""
        modalDescription=""
      >
        <h2 className="font-bold">{t.modalHome}</h2>
        <ul>{t.modalHomeDesc}</ul>
        <div className="font-bold">{t.modalAbout}</div>
        <ul>{t.modalAboutDesc}</ul>
        <div className="font-bold">{t.modalCert}</div>
        <ul>{t.modalCertDesc}</ul>
        <div className="font-bold">{t.modalProjects}</div>
        <ul>{t.modalProjectsDesc}</ul>
        <div className="font-bold">{t.modalArticles}</div>
        <ul>{t.modalArticlesDesc}</ul>
        <div className="font-bold">{t.modalFaq}</div>
        <ul>{t.modalFaqDesc}</ul>
        <Button onClick={() => handleDontShowModal("true")}>
          {t.modalButtonText}
        </Button>
      </Modal>
      <div className="flex items-center justify-between">
        <div>
          <Image src={profilePic} alt="alt" className="h-auto w-full" />
        </div>
        <div>
          <AnimatedText
            text={t.animatedText}
            className="text-6xl"
          />
          <p className="font-midium my-4 text-base">
            {t.description}
          </p>
          <div className="flex flex-row flex-wrap space-x-2">
            <label className="text-lg font-bold text-blue-800 dark:text-blue-400">
              {t.downloadLabel}
            </label>
            <DownLoadLink href={links.resumeLink} label={t.resumeLabel} />
            <DownLoadLink href={links.jobResumeLink} label={t.jobResumeLabel} />
            <DownLoadLink
              href={links.EnglishResumeLink}
              label={t.englishResumeLabel}
            />
          </div>
          <div>
            <Link
              href="mailto:shinguakira1022@gmail.com"
              target="_blank"
              className="text-lg font-medium text-black underline"
            >
              {`${t.contactLabel} shinguakira1022@gmail.com`}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
