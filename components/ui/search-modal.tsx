"use client";
import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { faqs } from "../../constants/faq";
import { projects } from "../../constants/project";
import { skills, otherSkills } from "../../constants/skill";
import { workExperiences } from "../../constants/work-experience";
import { certifications } from "../../constants/certification";
import { strongPoint } from "../../constants/strong-point";
import { useLanguage } from "../../contexts/LanguageContext";
import { useRouter } from "next/navigation";
import Modal from "@/components/ui/modal";

type SearchResult = {
  type: string;
  title: string;
  description: string;
  category?: string;
  url: string;
};

const SearchModal = () => {
  const { locale } = useLanguage();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const currentLang = locale === 'ja' ? 'ja' : 'en';

  const getSearchResults = (): SearchResult[] => {
    const results: SearchResult[] = [];
    
    if (!searchQuery.trim()) return results;
    
    const query = searchQuery.toLowerCase();
    
    faqs.forEach((faq) => {
      if (
        faq[currentLang].question.toLowerCase().includes(query) ||
        faq[currentLang].answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query)
      ) {
        results.push({
          type: "faq",
          title: faq[currentLang].question,
          description: faq[currentLang].answer,
          category: faq.category,
          url: `/${locale}/faq`
        });
      }
    });
    
    projects.forEach((project) => {
      if (
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      ) {
        results.push({
          type: "project",
          title: project.title,
          description: project.description,
          url: `/${locale}/projects`
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
          url: `/${locale}/about`
        });
      }
    });
    
    workExperiences.forEach((exp) => {
      if (
        exp[currentLang].projectOverview.toLowerCase().includes(query) ||
        exp[currentLang].role.toLowerCase().includes(query) ||
        exp.company.toLowerCase().includes(query) ||
        exp[currentLang].description.some(desc => desc.toLowerCase().includes(query)) ||
        exp[currentLang].archivement.some(arch => arch.toLowerCase().includes(query)) ||
        exp[currentLang].technologies.some(tech => tech.toLowerCase().includes(query))
      ) {
        results.push({
          type: "experience",
          title: exp[currentLang].projectOverview,
          description: exp[currentLang].role,
          category: exp.company,
          url: `/${locale}/about`
        });
      }
    });
    
    certifications.forEach((cert) => {
      if (
        cert.name.toLowerCase().includes(query) ||
        cert.organization.toLowerCase().includes(query) ||
        cert.date.toLowerCase().includes(query)
      ) {
        results.push({
          type: "certification",
          title: cert.name,
          description: `${cert.organization} - ${cert.date}`,
          url: `/${locale}/certifications`
        });
      }
    });
    
    strongPoint.forEach((point) => {
      if (
        point[currentLang].question.toLowerCase().includes(query) ||
        point[currentLang].answer.toLowerCase().includes(query)
      ) {
        results.push({
          type: "strongPoint",
          title: point[currentLang].question,
          description: point[currentLang].answer,
          url: `/${locale}/about`
        });
      }
    });
    
    return results;
  };

  const searchResults = getSearchResults();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleResultClick = (result: SearchResult) => {
    setIsOpen(false);
    setSearchQuery("");
    router.push(result.url);
  };

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

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </button>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        modalTitle={currentLang === 'ja' ? "サイト内検索" : "Site Search"}
        modalDescription={currentLang === 'ja' ? "キーワードを入力して検索" : "Enter keywords to search"}
      >
        <div className="relative">
          <div className="flex items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <input
              ref={inputRef}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'ja' ? "検索..." : "Search..."}
              className="ml-3 flex-1 bg-transparent text-gray-900 outline-none dark:text-gray-100"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </button>
            )}
          </div>
          <div className="max-h-[50vh] overflow-y-auto">
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <div
                  key={index}
                  className={`cursor-pointer px-4 py-3 ${
                    selectedIndex === index
                      ? "bg-blue-50 dark:bg-gray-700"
                      : "hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => handleResultClick(result)}
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-lg" aria-hidden="true">
                      {getTypeIcon(result.type)}
                    </span>
                    <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                      {result.type}
                    </span>
                    {result.category && (
                      <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                        {result.category}
                      </span>
                    )}
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      {result.title}
                    </h3>
                  </div>
                  <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
                    {result.description}
                  </p>
                </div>
              ))
            ) : searchQuery ? (
              <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                {currentLang === 'ja' ? "検索結果がありません" : "No results found"}
              </div>
            ) : (
              <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                {currentLang === 'ja' 
                  ? "キーワードを入力して検索してください" 
                  : "Type to search across the site"}
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SearchModal;
