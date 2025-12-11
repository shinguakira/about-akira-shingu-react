"use client";
import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { faqs } from "@/constants/faq";
import Accordion from "./accordion";
import ItemPadding from "./style/item-padding";

// TODO SEPARATE COMPONENTS INTO SEARCH MODAL and ACCORDION

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.ja.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.ja.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.en.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.en.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getSizeClass = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-2 md:row-span-2";
      default:
        return "md:col-span-2 md:row-span-2";
    }
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k") {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="mx-auto px-8 pb-36">
      <div className="mb-12 text-center">
        <h1 className="mb-6 text-4xl font-bold">FAQ</h1>
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center space-x-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-600 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800"
          >
            <Search className="h-4 w-4" />
            <span>Search FAQ</span>
            <kbd className="ml-2 rounded border border-gray-200 px-1.5 py-0.5 text-xs">
              ⌘press k
            </kbd>
          </button>
        </div>
      </div>

      {/* Command Palette Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-x-0 top-[20%] mx-auto max-w-2xl">
            <div className="relative rounded-xl border border-gray-200 shadow-2xl">
              <div className="border-b">
                <div className="flex items-center px-4 py-3">
                  <Search className="h-5 w-5 text-gray-500" />
                  <input
                    ref={inputRef}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search FAQ..."
                    className="ml-3 flex-1 bg-transparent text-gray-900 outline-none dark:text-gray-100"
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="rounded p-1 hover:bg-gray-100"
                    >
                      <X className="h-4 w-4 text-gray-500 dark:text-gray-100" />
                    </button>
                  )}
                  <kbd className="ml-2 rounded border border-gray-200 px-1.5 py-0.5 text-xs text-gray-400">
                    ESC
                  </kbd>
                </div>
              </div>
              <div className="max-w-6xl bg-white dark:bg-slate-600">
                {filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer px-4 py-3 ${
                      selectedIndex === index
                        ? "bg-blue-50 dark:bg-slate-600"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setExpandedId(index);
                      setIsOpen(false);
                      setSearchQuery("");
                    }}
                  >
                    <div className="mb-1 flex items-center gap-2">
                      <span className="rounded px-2 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-100">
                        {faq.category}
                      </span>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">
                        {faq.ja.question}
                      </h3>
                    </div>
                    <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-100">
                      {faq.ja.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0"
            onClick={() => {
              setIsOpen(false);
              setSearchQuery("");
            }}
          />
        </div>
      )}
      <ItemPadding>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            index={index}
            question={faq.ja.question}
            answer={faq.ja.answer}
            size={faq.size}
            category={faq.category}
          />
        ))}
      </ItemPadding>
    </div>
  );
};

export default Faq;
