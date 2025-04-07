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
        <ul>Download Resume &amp; CV</ul>
        <div className="font-bold">About</div>
        <ul>Skills, Work History, Education</ul>
        <div className="font-bold">Certifications</div>
        <ul>Qualifications &amp; Certificates</ul>
        <div className="font-bold">Projects</div>
        <ul>Development Projects with GitHub URLs and Project URLs</ul>
        <div className="font-bold">Articles</div>
        <ul>Article Titles and Links</ul>
        <div className="font-bold">FAQ</div>
        <ul>Frequently Asked Questions</ul>
        <Button onClick={() => handleDontShowModal("true")}>
          Don't show until next update
        </Button>
      </Modal>
      <div className="flex items-center justify-between">
        <div>
          <Image src={profilePic} alt="Akira Shingu" className="h-auto w-full" />
        </div>
        <div>
          <AnimatedText
            text="Turning Vision Into Reality With Code And Design."
            className="text-6xl"
          />
          <p className="font-midium my-4 text-base">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React and web development.
          </p>
          <div className="flex flex-row flex-wrap space-x-2">
            <label className="text-lg font-bold text-blue-800 dark:text-blue-400">
              Download→
            </label>
            <DownLoadLink href={links.resumeLink} label="Resume (JP)" />
            <DownLoadLink href={links.jobResumeLink} label="CV (JP)" />
            <DownLoadLink
              href={links.EnglishResumeLink}
              label="English CV/Resume"
            />
          </div>
          <div>
            <Link
              href="/en/contact"
              className="text-lg font-medium text-black underline"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
