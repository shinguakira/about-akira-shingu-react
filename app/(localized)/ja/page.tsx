"use client";
import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Akira Shingu - ホーム",
  description: "Akira Shinguのポートフォリオウェブサイト - ホームページ",
};

const emailAddress = process.env.CONTACT_EMAIL || "contact@example.com";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  useEffect(() => {
    const cookies = parseCookies();
    if (!cookies.modalHidden) {
    } else {
      setIsModalOpen(false);
    }
  });
  
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
        <h2 className="font-bold">Home</h2>
        <ul>履歴書・職務履歴書ダウンロード</ul>
        <div className="font-bold">About</div>
        <ul>スキルセット、職務履歴、学歴</ul>
        <div className="font-bold">Certifications</div>
        <ul>取得資格およびその証明リンク</ul>
        <div className="font-bold">Projects</div>
        <ul>開発プロジェクトのgitURLおよびプロジェクトURL</ul>
        <div className="font-bold">Articles</div>
        <ul>記事のタイトルおよびリンク</ul>
        <div className="font-bold">FAQ</div>
        <ul>よくある質問</ul>
        <Button onClick={() => handleDontShowModal("true")}>
          更新があるまで表示しない
        </Button>
      </Modal>
      <div className="flex items-center justify-between">
        <div>
          <Image src={profilePic} alt="Akira Shingu" className="h-auto w-full" />
        </div>
        <div>
          <AnimatedText
            text="コードとデザインでビジョンを現実に。"
            className="text-6xl"
          />
          <p className="font-midium my-4 text-base">
            熟練したフルスタック開発者として、アイデアを革新的なウェブアプリケーションに変えることに専念しています。
            私の最新プロジェクトと記事をご覧いただき、Reactとウェブ開発における専門知識をご確認ください。
          </p>
          <div className="flex flex-row flex-wrap space-x-2">
            <label className="text-lg font-bold text-blue-800 dark:text-blue-400">
              ダウンロード→
            </label>
            <DownLoadLink href={links.resumeLink} label="履歴書" />
            <DownLoadLink href={links.jobResumeLink} label="職務履歴書" />
            <DownLoadLink
              href={links.EnglishResumeLink}
              label="英文履歴書"
            />
          </div>
          <div>
            <Link
              href="/ja/contact"
              className="text-lg font-medium text-black underline"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
