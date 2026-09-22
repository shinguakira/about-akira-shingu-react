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
import { useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/shadcn/button";

/** Nothing to subscribe to — the cookie is only read at hydration. */
const subscribeToNothing = () => () => {};

type HomePageProps = {
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
};

export default function HomePage({ locale, translations }: HomePageProps) {
  // The cookie is browser-only, so it reads as absent while rendering on the
  // server and the modal opens once hydrated unless it was dismissed before.
  const modalHiddenByCookie = useSyncExternalStore(
    subscribeToNothing,
    () => Boolean(parseCookies().modalHidden),
    () => false
  );
  const [dismissed, setDismissed] = useState(false);
  const isModalOpen = !modalHiddenByCookie && !dismissed;

  function handleDontShowModal(modalHidden: string) {
    if (modalHidden === "true") {
      setCookie(null, "modalHidden", modalHidden, {
        maxAge: 365 * 24 * 60 * 60,
        path: "/",
      });
      setDismissed(true);
    } else {
      destroyCookie(null, "modalHidden", { path: "/" });
    }
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setDismissed(true)}
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
          <Image
            src={profilePic}
            alt="Akira Shingu"
            className="h-auto w-full"
          />
        </div>
        <div>
          <AnimatedText text={translations.animatedText} className="text-6xl" />
          <p className="font-midium my-4 text-base">
            {translations.description}
          </p>
          <div className="flex flex-row flex-wrap space-x-2">
            <label className="text-lg font-bold text-blue-800 dark:text-blue-400">
              {translations.downloadLabel}
            </label>
            <DownLoadLink
              href={links.resumeLink}
              label={translations.resumeLabel}
            />
            <DownLoadLink
              href={links.jobResumeLink}
              label={translations.cvLabel}
            />
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
