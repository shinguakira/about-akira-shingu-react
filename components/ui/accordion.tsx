"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Command, Search, X } from 'lucide-react';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "I specialize in full-stack web development, creating responsive websites, dynamic web applications, and custom software solutions. My services include frontend development, backend integration, database design, and API development. I work closely with clients to understand their needs and deliver tailored solutions.",
      size: "large",
      category: "Services"
    },
    {
      id: 2,
      question: "What is your development process?",
      answer: "My development process begins with a thorough consultation, followed by wireframing and design approval. I use an agile approach with regular updates and iterations based on your feedback.",
      size: "small",
      category: "Process"
    },
    {
      id: 3,
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A basic website typically takes 4-6 weeks, while more complex applications may take 2-4 months. I'll provide a detailed timeline after understanding your requirements.",
      size: "medium",
      category: "Timeline"
    },
    {
      id: 4,
      question: "What technologies do you use?",
      answer: "I work with modern web technologies including React, Next.js, Node.js, TypeScript, and various databases like MongoDB and PostgreSQL. I stay updated with the latest technologies to ensure optimal performance and scalability.",
      size: "small",
      category: "Technical"
    },
    {
      id: 5,
      question: "Do you provide ongoing support?",
      answer: "Yes, I offer comprehensive maintenance and support packages. This includes regular updates, bug fixes, performance optimization, and feature enhancements as needed.",
      size: "medium",
      category: "Support"
    },
    {
      id: 6,
      question: "How do you handle project communication?",
      answer: "I maintain clear and consistent communication through your preferred channels. Regular status updates, weekly meetings, and a project management system keep everyone aligned and informed throughout the development process.",
      size: "large",
      category: "Process"
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-2 md:row-span-1';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">FAQ</h1>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center px-4 py-2 space-x-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 shadow-sm transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Search FAQ</span>
            <kbd className="ml-2 text-xs border border-gray-200 rounded px-1.5 py-0.5 bg-gray-50">
              ⌘K
            </kbd>
          </button>
        </div>
      </div>

      {/* Command Palette Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-x-0 top-[20%] max-w-2xl mx-auto">
            <div className="relative bg-white rounded-xl shadow-2xl border border-gray-200">
              <div className="border-b">
                <div className="flex items-center px-4 py-3">
                  <Search className="w-5 h-5 text-gray-500" />
                  <input
                    ref={inputRef}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search FAQ..."
                    className="flex-1 ml-3 bg-transparent outline-none text-gray-900"
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <X className="w-4 h-4 text-gray-500" />
                    </button>
                  )}
                  <kbd className="ml-2 text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">
                    ESC
                  </kbd>
                </div>
              </div>
              <div className="max-h-[60vh] overflow-y-auto">
                {filteredFaqs.map((faq, index) => (
                  <div
                    key={faq.id}
                    className={`px-4 py-3 cursor-pointer ${
                      selectedIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      setExpandedId(faq.id);
                      setIsOpen(false);
                      setSearchQuery('');
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                        {faq.category}
                      </span>
                      <h3 className="font-medium text-gray-900">
                        {faq.question}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {faq.answer}
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
              setSearchQuery('');
            }}
          />
        </div>
      )}

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 auto-rows-min">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`${getSizeClass(faq.size)} transition-all duration-300`}
          >
            <div 
              className={`h-full p-6 rounded-xl transition-all duration-300 cursor-pointer 
                ${expandedId === faq.id 
                  ? 'bg-blue-50 border-blue-200 shadow-lg' 
                  : 'bg-white border-gray-200 hover:border-blue-200 hover:shadow-md'
                } border`}
              onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600 mb-2">
                      {faq.category}
                    </span>
                    <h3 className={`font-medium ${
                      expandedId === faq.id ? 'text-blue-700' : 'text-gray-900'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <span className={`ml-4 text-xl transition-transform duration-300 ${
                    expandedId === faq.id ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;