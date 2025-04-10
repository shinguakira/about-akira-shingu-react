"use client";
import HomePage from "@/components/ui/home-page";

export default function EnglishHomePage() {
  const translations = {
    animatedText: "Turning Vision Into Reality With Code And Design.",
    description: "As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React and web development.",
    downloadLabel: "Download→",
    resumeLabel: "Resume (JP)",
    cvLabel: "CV (JP)",
    englishCvLabel: "English CV/Resume",
    contactLabel: "Contact Me",
    modalTitle: "Home",
    modalDownloadText: "Download Resume & CV",
    modalAboutTitle: "About",
    modalAboutText: "Skills, Work History, Education",
    modalCertificationsTitle: "Certifications",
    modalCertificationsText: "Qualifications & Certificates",
    modalProjectsTitle: "Projects",
    modalProjectsText: "Development Projects with GitHub URLs and Project URLs",
    modalArticlesTitle: "Articles",
    modalArticlesText: "Article Titles and Links",
    modalFaqTitle: "FAQ",
    modalFaqText: "Frequently Asked Questions",
    modalDontShowButton: "Don't show until next update"
  };
  
  return <HomePage locale="en" translations={translations} />;
}
