"use client";
import React from "react";
import AnimatedText from "@/components/ui/animated-text";
import DownLoadLink from "@/components/ui/download-link";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { links } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import profilePic from "/public/images/profile/developer-pic-1.png";
import Modal from "@/components/ui/modal";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/shadcn/button";

interface HomePageProps {
  locale: string;
  translations: {
    animatedText: string;
    description: string;
    downloadLabel: string;
    resumeLabel: string;
    cvLabel: string;
    englishCvLabel: string;
    contactLabel: string;
    modalTitle: string;
    modalDownloadText: string;
    modalAboutTitle: string;
    modalAboutText: string;
    modalCertificationsTitle: string;
    modalCertificationsText: string;
    modalProjectsTitle: string;
    modalProjectsText: string;
    modalArticlesTitle: string;
    modalArticlesText: string;
    modalFaqTitle: string;
    modalFaqText: string;
    modalDontShowButton: string;
  };
}

const emailAddress = process.env.CONTACT_EMAIL || "shinguakira1022@gmail.com";

export default function HomePage({ locale, translations }: HomePageProps) {
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
        <h2 className="font-bold">{translations.modalTitle}</h2>
        <ul>{translations.modalDownloadText}</ul>
        <div className="font-bold">{translations.modalAboutTitle}</div>
        <ul>{translations.modalAboutText}</ul>
        <div className="font-bold">{translations.modalCertificationsTitle}</div>
        <ul>{translations.modalCertificationsText}</ul>
        <div className="font-bold">{translations.modalProjectsTitle}</div>
        <ul>{translations.modalProjectsText}</ul>
        <div className="font-bold">{translations.modalArticlesTitle}</div>
        <ul>{translations.modalArticlesText}</ul>
        <div className="font-bold">{translations.modalFaqTitle}</div>
        <ul>{translations.modalFaqText}</ul>
        <Button onClick={() => handleDontShowModal("true")}>
          {translations.modalDontShowButton}
        </Button>
      </Modal>
      <div className="flex items-center justify-between">
        <div>
          <Image src={profilePic} alt="Akira Shingu" className="h-auto w-full" />
        </div>
        <div>
          <AnimatedText
            text={translations.animatedText}
            className="text-6xl"
          />
          <p className="font-midium my-4 text-base">
            {translations.description}
          </p>
          <div className="flex flex-row flex-wrap space-x-2">
            <label className="text-lg font-bold text-blue-800 dark:text-blue-400">
              {translations.downloadLabel}
            </label>
            <DownLoadLink href={links.resumeLink} label={translations.resumeLabel} />
            <DownLoadLink href={links.jobResumeLink} label={translations.cvLabel} />
            <DownLoadLink
              href={links.EnglishResumeLink}
              label={translations.englishCvLabel}
            />
          </div>
          <div>
            <Link
              href={`/${locale}/contact`}
              className="text-lg font-medium text-black underline"
            >
              {translations.contactLabel}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
