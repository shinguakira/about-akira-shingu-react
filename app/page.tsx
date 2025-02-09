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

// temrary defined email address. need to move to const file or defined as env variable
const emailAddress = "akirashingu1022@gmail.com";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  useEffect(() => {
    const cookies = parseCookies();
    if (!cookies.modalHidden) {
      // setCookie(null, "modalHidden", "true", {
      //   maxAge: 365 * 24 * 60 * 60,
      //   path: "/",
      // });
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
          <Image src={profilePic} alt="alt" className="h-auto w-full" />
        </div>
        <div>
          <AnimatedText
            text="Turning Vision Into Reality With Code And Design."
            className="text-6xl"
          />
          <p className="font-midium my-4 text-base">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications.explore my latest projects and
            articles, shgowcasing my expertise in React and web development.
          </p>
          <div className="flex flex-row flex-wrap space-x-2">
            <label className="text-lg font-bold text-blue-800 dark:text-blue-400">
              Download→
            </label>
            <DownLoadLink href={links.resumeLink} label="履歴書" />
            <DownLoadLink href={links.jobResumeLink} label="職務履歴書" />
            <DownLoadLink
              href={links.EnglishResumeLink}
              label="English CV/Resume"
            />
          </div>
          <div>
            <Link
              href={`mailto:${emailAddress}`}
              target="_blank"
              className="text-lg font-medium text-black underline"
            >
              {`Contact ${emailAddress}`}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
