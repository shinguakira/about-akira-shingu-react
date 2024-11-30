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
      question: "なぜWeb開発を専門としていますか？",
      answer: "Webはほとんどのデバイスに対応しており、開発およびシステムの提供を世界中どこからでも可能です。Webシステムが一番汎用的で効率が良いためです。またこれからの理由により、より競争的、高い技術が求められるため、その中で技術力を高めていきたいと考えているためです。",
      size: "large",
      category: "Others"
    },
    {
      id: 2,
      question: "なぜインフラではなく、開発をメインとしています？",
      answer: "システムを必要とする人は、主にシステムが提供するサービスおよび、機能を必要としており、それらが完成して初めて、その他安全性や、信頼性、可用性等にも価値が生まれるため、よりサービス面、機能面を作り出す開発に携わっております。",
      size: "small",
      category: "Others"
    },
    {
      id: 3,
      question: "なぜバックエンドではなく、フロントエンドをメインとしていますか？",
      answer: "フロントエンドは、ユーザーが触れる一番近い部分である、画面の開発を行うため、より良い画面の開発はユーザーの満足度に直結しやすいためです。SPAが広がっていることにより、よりフロントエンドが担う部分が増え、フロントエンドの重要度が上がっていると感じます。またAWSやAzureなどのクラウドの使用が増え、それらの使用は基本的に従量課金であり、サーバーの負荷がかかるほどコストがかかります。今ではクライアント側の端末は基本的に計算処理を行うのに十分な環境が整っているため、よりクライアント側に処理を任せることで、サーバーの負担、コストを減らすという選択肢をとることもできるようになります。これらの理由で、フロントエンドをメインとしています。",
      size: "medium",
      category: "Others"
    },
    {
      id: 4,
      question: "なぜ大学を退学されていますか？",
      answer: "必修単位を1つ落としてしまい、留年が確定し、奨学金の支給が停止し、金銭的に続けられなかったためです。",
      size: "small",
      category: "Timeline"
    },
    {
      id: 5,
      question: "なぜ大学退学後、すぐにIT業界に就職せず、ホテルのフロントを選ばれたのですか？",
      answer: "大学退学後、最低限の金銭的余裕を確保し、改めてITの仕事に就職しようと考えていたためです。ホテルのフロントを選んだ理由は、自分の強みである英語を活かすためです。プログラミングを活かしたかったのですが、適切なアルバイトがなかったため、ホテルの仕事に就きました。",
      size: "small",
      category: "Timeline"
    },
    {
      id: 6,
      question: "資格を取得されている理由は何ですか？",
      answer: "経験年数が少ないうちは、一緒に仕事するまでは、どうしても実力がないと判断されがちです。「資格取得している=技術力がある」というよりは、プライベートの時間およびお金を仕事のために使用できるという証明になります。多くの資格を取得していることで、「仕事のためにプライベートを犠牲にすることができる」、「努力する力」、「知識習得能力の高さ」のいずれかを証明できます。資格認定団体という第3者が資格取得を保証していることにより、これらの3ついずれかの能力は自称ではなく第3者に保証された確かなものだと証明できます。私の情報を確認された際に、(良いか悪いかは置いておきまして)他の人と何か違うと感じていただければ、成功だと感じています。",
      size: "large",
      category: "Certification"
    },
    {
      id: 7,
      question: "なぜポートフォリオ作成ではなく、資格ばかり取得されていますか？",
      answer: "面談いただく人が、エンジニア以外である可能性があり、ポートフォリオを見てもよくわからないという状況もあり得ると考え、資格取得を優先しました。ただ実際の実力証明にはポートフォリオが一番かと思いますので、現在随時ポートフォリオ作成を進めております。",
      size: "large",
      category: "Certification"
    },
    {
      id: 8,
      question: "取得している資格の方向性にばらつきがある理由は何ですか？",
      answer: "その時のプロジェクト、会社で必要とされる知識を取得するため、資格を取得していたためです。このばらつきにより、やりたいことが定まっていないのではないか、等良い印象を持たれない方がいらっしゃるかもしれませんが、そのばらついている労力が1つのもの集約されるとどうなるかと想像されると良いかと思います。",
      size: "large",
      category: "Certification"
    },
    {
      id: 9,
      question: "開発なのになぜAWSの資格を多く取得されていますか？",
      answer: "現在の会社が、AWSのパートナーになることを目指しているため、AWSの資格取得を推奨していること、AWS All Certified Engineerの表彰により、会社の知名度向上に微力ながら助力できると考えたためです。また認知度のない資格を取得しても、評価されない可能性があったためです。",
      size: "large",
      category: "Certification"
    },
    {
      id: 10,
      question: "1社目の会社の退職理由は何ですか？",
      answer: "Webの開発ができると聞いて、入社しましたが、取り扱っている案件が、基本的に組み込みの案件が多く、Webの案件を紹介してもらえず、強制的に組み込みを行っている会社に就業させられたためです。偶然にも、Javaで開発を行っているプロジェクトに参画できましたが、そのプロジェクトのみがWebであり、他は組み込みだったためです。",
      size: "large",
      category: "Timeline"
    },
    {
      id: 11,
      question: "現在転職を考えている理由は何ですか？",
      answer: "会社が方向転換をし、ローコードを主体に受託開発を進めたいと考えており、私の考えと相反するためです。フルスクラッチで、技術力が求められる環境での開発を行いと考えています。また、現在の会社はJavaの案件がメインであり、現在携わっている案件以外に携わるとなった場合に、Javaの案件もしくは、ローコードのプロジェクトしかない可能性があるためです。",
      size: "large",
      category: "Timeline"
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
        return 'md:col-span-2 md:row-span-2';
      default:
        return 'md:col-span-2 md:row-span-2';
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
    <div className="max-w-6xl mx-auto px-4">
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
              <div className=" max-w-6xl">
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
      <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-1 gap-6 auto-rows-min">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`${getSizeClass(faq.size)} transition-all duration-300`}
          >
            <div 
              className={` p-6 rounded-xl transition-all duration-300 cursor-pointer 
                ${expandedId === faq.id 
                  ? 'bg-blue-50 border-blue-200 shadow-lg' 
                  : 'bg-white border-gray-200 hover:border-blue-200 hover:shadow-md'
                } border`}
              onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
            >
              <div className="flex flex-col">
                <div className="flex  justify-between mb-2">
                  <div>
                    {/* <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600 mb-2">
                      {faq.category}
                    </span> */}
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