"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { usePortfolioApi } from "@/hooks/use-portfolio-api";
import type {
  CertificationItem,
  Faq,
  Project,
  SkillItem,
  StrongPoint,
  WorkExperience,
} from "@shinguakira/portfolio-api-types";
import { useRouter } from "next/navigation";
import Modal from "@/components/ui/modal";

type SearchResult = {
  type: string;
  title: string;
  description: string;
  category?: string;
  url: string;
  anchor?: string; // For navigating to specific sections
};

const SearchModal = ({
  asInput = false,
  openModal = false,
  onOpenChange,
}: {
  asInput?: boolean;
  openModal?: boolean;
  onOpenChange?: (open: boolean) => void;
}) => {
  const { locale } = useLanguage();
  const router = useRouter();
  // Controlled when the parent supplies onOpenChange, self-managed otherwise.
  // Reading the prop directly beats mirroring it into state from an effect.
  const isControlled = onOpenChange !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const isOpen = isControlled ? openModal : uncontrolledOpen;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // Only picks UI labels; the results themselves arrive already localized.
  const currentLang = locale === "ja" ? "ja" : "en";

  // The search box lives in the nav bar on every route, so nothing is
  // requested until the modal opens. Every endpoint returns entries already
  // localized for `locale`.
  const { data } = usePortfolioApi<
    [
      Faq[],
      Project[],
      SkillItem[],
      SkillItem[],
      WorkExperience[],
      CertificationItem[],
      StrongPoint[],
    ]
  >(
    [
      { path: "faqs", lang: locale },
      { path: "projects", lang: locale },
      { path: "skills", lang: locale },
      { path: "other-skills", lang: locale },
      { path: "experience", lang: locale },
      { path: "certifications", lang: locale },
      { path: "strong-points", lang: locale },
    ],
    isOpen
  );
  const [
    faqs = [],
    projects = [],
    skills = [],
    otherSkills = [],
    workExperiences = [],
    certifications = [],
    strongPoint = [],
  ] = data ?? [];

  // Notify parent component when modal state changes
  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (onOpenChange) {
        onOpenChange(open);
      } else {
        setUncontrolledOpen(open);
      }
    },
    [onOpenChange]
  );

  const getSearchResults = (): SearchResult[] => {
    const results: SearchResult[] = [];

    if (!searchQuery.trim()) return results;

    const query = searchQuery.toLowerCase();

    faqs.forEach((faq, index) => {
      if (
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query)
      ) {
        results.push({
          type: "faq",
          title: faq.question,
          description: faq.answer,
          category: faq.category,
          url: `/${locale}/faq`,
          anchor: `faq-${index}`,
        });
      }
    });

    projects.forEach((project, index) => {
      if (
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query))
      ) {
        results.push({
          type: "project",
          title: project.title,
          description: project.description,
          url: `/${locale}/projects`,
          anchor: `project-${index}`,
        });
      }
    });

    [...skills, ...otherSkills].forEach((skill) => {
      if (
        skill.name.toLowerCase().includes(query) ||
        skill.category.toLowerCase().includes(query)
      ) {
        results.push({
          type: "skill",
          title: skill.name,
          description: `${skill.category} - ${skill.years} years`,
          category: skill.category,
          url: `/${locale}/skills`,
          anchor: `skill-${skill.category.toLowerCase().replace(/\s+/g, "-")}`,
        });
      }
    });

    workExperiences.forEach((exp, index) => {
      if (
        exp.projectOverview.toLowerCase().includes(query) ||
        exp.role.toLowerCase().includes(query) ||
        exp.company.toLowerCase().includes(query) ||
        exp.description.some((desc) => desc.toLowerCase().includes(query)) ||
        exp.archivement.some((arch) => arch.toLowerCase().includes(query)) ||
        exp.technologies.some((tech) => tech.toLowerCase().includes(query))
      ) {
        results.push({
          type: "experience",
          title: exp.projectOverview,
          description: exp.role,
          category: exp.company,
          url: `/${locale}/work-history`,
          anchor: `work-${index}`,
        });
      }
    });

    certifications.forEach((cert, index) => {
      if (
        cert.name.toLowerCase().includes(query) ||
        cert.organization.toLowerCase().includes(query) ||
        cert.date.toLowerCase().includes(query)
      ) {
        results.push({
          type: "certification",
          title: cert.name,
          description: `${cert.organization} - ${cert.date}`,
          url: `/${locale}/certifications`,
          anchor: `cert-${index}`,
        });
      }
    });

    strongPoint.forEach((point, index) => {
      if (
        point.question.toLowerCase().includes(query) ||
        point.answer.toLowerCase().includes(query)
      ) {
        results.push({
          type: "strongPoint",
          title: point.question,
          description: point.answer,
          url: `/${locale}/strong-points`,
          anchor: `strong-point-${index}`,
        });
      }
    });

    return results;
  };

  const searchResults = getSearchResults();

  const handleResultClick = useCallback(
    (result: SearchResult) => {
      handleOpenChange(false);
      setSearchQuery("");

      if (result.anchor) {
        router.push(`${result.url}#${result.anchor}`);
      } else {
        router.push(result.url);
      }
    },
    [handleOpenChange, router]
  );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        handleOpenChange(!isOpen);
      }

      if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prevIndex) =>
            prevIndex < searchResults.length - 1 ? prevIndex + 1 : prevIndex
          );
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        } else if (e.key === "Enter" && searchResults.length > 0) {
          e.preventDefault();
          handleResultClick(searchResults[selectedIndex]);
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [
    isOpen,
    searchResults,
    selectedIndex,
    handleOpenChange,
    handleResultClick,
  ]);

  useEffect(() => {
    if (resultsContainerRef.current && searchResults.length > 0) {
      const selectedElement = document.getElementById(
        `search-result-${selectedIndex}`
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [selectedIndex, searchResults.length]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "faq":
        return "❓";
      case "project":
        return "💼";
      case "skill":
        return "🔧";
      case "experience":
        return "📝";
      case "certification":
        return "🏆";
      case "strongPoint":
        return "💪";
      default:
        return "📄";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "faq":
        return currentLang === "ja" ? "よくある質問" : "FAQ";
      case "project":
        return currentLang === "ja" ? "プロジェクト" : "Project";
      case "skill":
        return currentLang === "ja" ? "スキル" : "Skill";
      case "experience":
        return currentLang === "ja" ? "職歴" : "Work Experience";
      case "certification":
        return currentLang === "ja" ? "資格" : "Certification";
      case "strongPoint":
        return currentLang === "ja" ? "強み" : "Strong Point";
      default:
        return type;
    }
  };

  return (
    <>
      {asInput ? (
        <div
          onClick={() => handleOpenChange(true)}
          className="flex cursor-pointer items-center rounded-md border border-gray-300 px-3 py-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
        >
          <Search className="mr-2 size-4 text-gray-500 dark:text-gray-400" />
          <span className="text-gray-500 dark:text-gray-400">
            {currentLang === "ja" ? "検索..." : "Search..."}
          </span>
        </div>
      ) : (
        <button
          onClick={() => handleOpenChange(true)}
          className="flex items-center justify-center rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          aria-label="Search"
        >
          <Search className="size-5" />
        </button>
      )}

      <Modal
        isOpen={isOpen}
        onClose={() => handleOpenChange(false)}
        modalTitle={currentLang === "ja" ? "サイト内検索" : "Site Search"}
        modalDescription={
          currentLang === "ja"
            ? "キーワードを入力して検索"
            : "Enter keywords to search"
        }
      >
        <div className="relative">
          <div className="flex items-center border-b border-gray-200 px-4 py-3 dark:border-gray-700">
            <Search className="size-5 text-gray-500 dark:text-gray-400" />
            <input
              ref={inputRef}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedIndex(0); // Reset selection when query changes
              }}
              placeholder={currentLang === "ja" ? "検索..." : "Search..."}
              className="ml-3 flex-1 bg-transparent text-gray-900 outline-none dark:text-gray-100"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="size-4 text-gray-500 dark:text-gray-400" />
              </button>
            )}
          </div>
          <div
            ref={resultsContainerRef}
            className="max-h-[50vh] overflow-y-auto scroll-smooth"
          >
            {searchResults.length > 0 ? (
              <>
                <div className="p-2 text-xs text-gray-500 dark:text-gray-400">
                  {currentLang === "ja"
                    ? `${searchResults.length}件の結果が見つかりました`
                    : `${searchResults.length} results found`}
                </div>
                {searchResults.map((result, index) => (
                  <div
                    id={`search-result-${index}`}
                    key={index}
                    className={`cursor-pointer px-4 py-3 ${
                      selectedIndex === index
                        ? "bg-blue-50 dark:bg-gray-700"
                        : "hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => handleResultClick(result)}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-lg" aria-hidden="true">
                        {getTypeIcon(result.type)}
                      </span>
                      <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                        {getTypeLabel(result.type)}
                      </span>
                      {result.category && (
                        <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                          {result.category}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-gray-100">
                          {result.title}
                        </h3>
                        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
                          {result.description}
                        </p>
                      </div>
                      <ArrowRight className="ml-2 size-4 flex-shrink-0 text-gray-400" />
                    </div>
                  </div>
                ))}
              </>
            ) : searchQuery ? (
              <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                {currentLang === "ja"
                  ? "検索結果がありません"
                  : "No results found"}
              </div>
            ) : (
              <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                {currentLang === "ja"
                  ? "キーワードを入力して検索してください"
                  : "Type to search across the site"}
              </div>
            )}
          </div>
          <div className="border-t border-gray-200 px-4 py-2 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
            {currentLang === "ja"
              ? "↑↓: 移動, Enter: 選択, Esc: 閉じる"
              : "↑↓: Navigate, Enter: Select, Esc: Close"}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SearchModal;
