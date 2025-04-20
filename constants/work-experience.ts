import { receptionInnovationSkillSet, VOCSkillSet } from "@/constants";
import { company } from "@/constants";

export type WorkExperienceContent = {
  projectOverview: string;
  role: string;
  description: string[];
  archivement: string[];
  technologies: string[];
};

export type MultilingualWorkExperience = {
  company: string;
  period: string;
  teamSize: string;
  manMonth: string;
  ja: WorkExperienceContent;
  en: WorkExperienceContent;
};

// object for work experience
export const workExperiences: MultilingualWorkExperience[] = [
  {
    company: company.eastCoast,
    period: "2025年4月",
    teamSize: "1",
    manMonth: "0.5人月",
    ja: {
      projectOverview: "ポートフォリオサイト多言語対応",
      role: "フルスタック開発者",
      description: [
        "個人ポートフォリオサイトの日本語・英語対応",
        "Next.js App Routerを使用した動的ルーティングによる多言語対応",
        "SEO対応のためのgenerateStaticParamsの実装",
        "言語切替時に現在のページを維持する機能の実装",
      ],
      archivement: [
        "Next.js 15.3.1の最新機能を活用した効率的な多言語対応の実装",
        "ユーザー体験を向上させる言語切替機能の実装",
        "検索エンジン最適化のための静的ページ生成の実装",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "App Router",
        "Dynamic Routes",
        "generateStaticParams",
        "Internationalization",
        "SEO最適化",
      ],
    },
    en: {
      projectOverview: "Portfolio Website Multilingual Support",
      role: "Full Stack Developer",
      description: [
        "Japanese and English support for personal portfolio website",
        "Multilingual support using dynamic routing with Next.js App Router",
        "Implementation of generateStaticParams for SEO optimization",
        "Implementation of language switching while maintaining current page",
      ],
      archivement: [
        "Efficient multilingual implementation using Next.js 15.3.1 latest features",
        "Implementation of language switching feature to enhance user experience",
        "Implementation of static page generation for search engine optimization",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "App Router",
        "Dynamic Routes",
        "generateStaticParams",
        "Internationalization",
        "SEO Optimization",
      ],
    },
  },
  {
    company: company.eastCoast,
    period: "2024年10月 - 2024年1月(予定)",
    teamSize: "3",
    manMonth: "3,4人月",
    ja: {
      projectOverview: "お客さま情報検索、取得、特定APIの改修",
      role: "フルスタック(基本詳細仕様書作成、開発、テスト)",
      description: [
        "一般の人がアクセスできる、某ガス会社にに登録した会員情報に関する名義変更、支払い変更等を受け付けるシステムの改修",
        "BtoC",
        "リリースは1月現在、結合テストおよびペネトレーションテスト期間中。12/1時点では特に問題なし",
      ],
      archivement: [
        "前プロジェクト同様、仕様を理解し、各人の能力に合わせたタスク割り振りおよび、開発に携わった。",
      ],
      technologies: [],
    },
    en: {
      projectOverview: "Customer Information Search and API Modification",
      role: "Full Stack Developer (Specification, Development, Testing)",
      description: [
        "Modification of a system that allows general users to request name changes and payment method changes for member information registered with a gas company",
        "B2C service",
        "Release is currently in integration testing and penetration testing phase. No issues as of December 1",
      ],
      archivement: [
        "Similar to the previous project, understood the specifications, assigned tasks according to each person's abilities, and contributed to development",
      ],
      technologies: [],
    },
  },
  {
    company: company.eastCoast,
    period: "2024年10月 - 2024年1月(予定)",
    teamSize: "3",
    manMonth: "3,4人月",
    ja: {
      projectOverview: "お客さま情報検索、取得、特定APIの改修",
      role: "フルスタック(基本詳細仕様書作成、開発、テスト)",
      description: [
        "一般の人がアクセスできる、某ガス会社にに登録した会員情報に関する名義変更、支払い変更等を受け付けるシステムの改修",
        "BtoC",
        "リリースは1月現在、結合テストおよびペネトレーションテスト期間中。12/1時点では特に問題なし",
      ],
      archivement: [
        "前プロジェクト同様、仕様を理解し、各人の能力に合わせたタスク割り振りおよび、開発に携わった。",
      ],
      technologies: [
        "Typescript",
        "React",
        "Node.js",
        "MySQL",
        "Selenium(Python)",
        "little state machine",
        "React Hook Form",
        "axios",
        "TypeORM",
        "class-validator",
        "Apollo Client Server(GraphQL)",
        "Azure(App Service,Azure Functions)",
        "Backlog",
        "Redmine",
        "Swagger",
        "アジャイル開発(スクラム)",
      ],
    },
    en: {
      projectOverview: "Customer Information Search and API Modification",
      role: "Full Stack Developer (Specification, Development, Testing)",
      description: [
        "Modification of a system that allows general users to request name changes and payment method changes for member information registered with a gas company",
        "B2C service",
        "Release is currently in integration testing and penetration testing phase. No issues as of December 1",
      ],
      archivement: [
        "Similar to the previous project, understood the specifications, assigned tasks according to each person's abilities, and contributed to development",
      ],
      technologies: [
        "Typescript",
        "React",
        "Node.js",
        "MySQL",
        "Selenium(Python)",
        "little state machine",
        "React Hook Form",
        "axios",
        "TypeORM",
        "class-validator",
        "Apollo Client Server(GraphQL)",
        "Azure(App Service,Azure Functions)",
        "Backlog",
        "Redmine",
        "Swagger",
        "Agile Development (Scrum)",
      ],
    },
  },
  {
    company: company.eastCoast,
    period: "2024年10月 - 2024年11月(20日)",
    teamSize: "3",
    manMonth: "3,4人月",
    ja: {
      projectOverview: "お客さまの声のシステム追加改修",
      role: "フルスタック(基本詳細仕様書作成、開発、テスト)",
      description: ["2024年4月に納品、リリースしたシステムの追加改修"],
      archivement: [
        "見積もりも合わせて必要だったため、見積もりを行い、見積もりより少し、早く完了し、リリース。特に問題の問い合わせ等なく、現在稼働中",
      ],
      technologies: VOCSkillSet,
    },
    en: {
      projectOverview: "Voice of Customer System Additional Modifications",
      role: "Full Stack Developer (Specification, Development, Testing)",
      description: ["Additional modifications to the system delivered and released in April 2024"],
      archivement: [
        "Completed the project ahead of the estimated schedule, including the estimation work that was required. Released without issues and currently in operation",
      ],
      technologies: VOCSkillSet,
    },
  },
  {
    company: company.eastCoast,
    period: "2024年5月 - 2024年1月(予定)",
    teamSize: "7-8",
    manMonth: "15+人月",
    ja: {
      projectOverview: "受付革新プロジェクト",
      role: "フルスタック(基本詳細仕様書作成、開発、テスト)",
      description: [
        "一般の人がアクセスできる、某ガス会社にに登録した会員情報に関する名義変更、支払い変更等を受け付けるシステムの改修",
        "BtoC",
        "リリースは1月現在、結合テストおよびペネトレーションテスト期間中。12/1時点では特に問題なし",
      ],
      archivement: [
        "前プロジェクト同様、仕様を理解し、各人の能力に合わせたタスク割り振りおよび、開発に携わった。",
      ],
      technologies: receptionInnovationSkillSet,
    },
    en: {
      projectOverview: "Reception Innovation Project",
      role: "Full Stack Developer (Specification, Development, Testing)",
      description: [
        "Modification of a system that allows general users to request name changes and payment method changes for member information registered with a gas company",
        "B2C service",
        "Release is currently in integration testing and penetration testing phase. No issues as of December 1",
      ],
      archivement: [
        "Similar to the previous project, understood the specifications, assigned tasks according to each person's abilities, and contributed to development",
      ],
      technologies: receptionInnovationSkillSet,
    },
  },
  {
    company: company.eastCoast,
    period: "2024年1月 - 2024年4月(4か月)",
    teamSize: "3-4",
    manMonth: "15人月",
    ja: {
      projectOverview: "お客さまの声システムの改修リプレイス",
      role: "フルスタック(基本詳細仕様書作成、開発、テスト)",
      description: [
        "感謝やご不満といったお客様の声を社内のシステムに記録し、某ガス会社のグループで記録を参照、修正を行うことができるシステム。",
        "法的な情報遮断に対応し、権限や所属に応じた厳格な情報遮断機能を有したシステム。",
        "BtoB",
      ],
      archivement: [
        "チームの初期メンバーであり、社内に該当の技術スタックおよび業務知識を持つものがいない状態で、15 人月で見積もられた当プロジェクトを 2 人でこなし、軽微な問題はあれど、大きな問題もなく、不必要な増員もなくプロジェクトを終えることができた。工数に余裕ができたことで、1 か月後にプロジェクト加入したメンバーが、予定になかった追加の機能、画面の開発に着手、同時期に完了、リリースまで行うことができ、プロジェクトに貢献できた。取引先に、質問することでいち早く、某ガス会社の業務の流れを理解し、追加で要件定義が必要なものを洗い出したり、各人の能力を把握し、要望に対してのタスクの割り振りを行った。",
      ],
      technologies: VOCSkillSet,
    },
    en: {
      projectOverview: "Voice of Customer System Renovation and Replacement",
      role: "Full Stack Developer (Specification, Development, Testing)",
      description: [
        "A system that records customer feedback, both appreciation and complaints, in an internal system, allowing a gas company group to reference and modify records",
        "System with strict information segregation features according to authority and affiliation, complying with legal information barriers",
        "B2B service",
      ],
      archivement: [
        "As an initial team member, completed a project estimated at 15 person-months with just 2 people, despite no one in the company having the relevant technology stack or business knowledge. Finished with only minor issues and without unnecessary additional staffing. The efficiency created capacity for a member who joined a month later to develop additional unplanned features and screens, completing and releasing them simultaneously, contributing to the project's success. Quickly understood the gas company's business flow by asking questions to the client, identified additional requirements, assessed each person's abilities, and assigned tasks according to requests.",
      ],
      technologies: VOCSkillSet,
    },
  },
  {
    company: `${company.staffService}(${company.higashiTechLab})`,
    period: "2023年6月 - 2023年12月(6か月)",
    teamSize: "4-10",
    manMonth: "不明(2021年頃スタート)",
    ja: {
      projectOverview: "空港の電力監視制御システム MISE の改造",
      role: "フルスタック(仕様書作成、開発、テスト、テスト環境構築)",
      description: [
        "計12以上の各空港や性能評価センターなどの電力監視制御システムの改造",
        "一部灯電の制御ソフトウェア(滑走路の点滅)の改修",
        "航空局での結合テスト時の現地での問題対応",
        "日立、東芝、富士電機、NEC、沖電気の複数の会社で構成されるプロジェクト",
        "担当空港(官署)は、成田、札幌、長崎、南紀白浜、奄美大島、松山、岡山など",
        "株式会社日立産業制御ソリューションズの作業場にて共同開発",
      ],
      archivement: [
        "プロジェクトに途中参加にも関わらず、ソフトのソース、仕様を理解し、開発に貢献。プロジェクトの是非が決まる、技術管理センター(TMC)でのソフトウェア品質チェックにソフト側の代表として参加し、現地にて起こった問題を解決しました。",
      ],
      technologies: [
        "C",
        "C++",
        "C#",
        "Java",
        "javascript",
        "Springboot",
        "Visual Studio 2010,2015,2019",
        "PDB",
        "HDB",
      ],
    },
    en: {
      projectOverview: "Airport Power Monitoring and Control System (MISE) Modification",
      role: "Full Stack Developer (Specification, Development, Testing, Test Environment Setup)",
      description: [
        "Modification of power monitoring and control systems for more than 12 airports and performance evaluation centers",
        "Modification of lighting control software (runway flashing lights)",
        "On-site problem resolution during integration testing at the Civil Aviation Bureau",
        "Project involving multiple companies including Hitachi, Toshiba, Fuji Electric, NEC, and Oki Electric",
        "Responsible for airports including Narita, Sapporo, Nagasaki, Nanki-Shirahama, Amami Oshima, Matsuyama, and Okayama",
        "Collaborative development at Hitachi Industry & Control Solutions, Ltd. workplace",
      ],
      archivement: [
        "Despite joining the project midway, understood the software source code and specifications, contributing to development. Participated as a software representative in the Technical Management Center (TMC) software quality check, which determined the project's approval, and resolved issues that occurred on-site.",
      ],
      technologies: [
        "C",
        "C++",
        "C#",
        "Java",
        "JavaScript",
        "Spring Boot",
        "Visual Studio 2010,2015,2019",
        "PDB",
        "HDB",
      ],
    },
  },
  {
    company: `${company.staffService}(${company.higashiTechLab})`,
    period: "2023年4月 - 2023年6月(2ヶ月)",
    teamSize: "1",
    manMonth: "9人月",
    ja: {
      projectOverview: "PLC通信TCP/IPプログラム",
      role: "フルスタック(仕様書作成、開発、テスト)",
      description: [
        "電力監視のための PLC などの機器と Modbus というプロトコルで通信するプログラムの開発 ",
        "ソケット通信をベースに作成",
      ],
      archivement: [
        "本来は、コンソールでのプログラムの開発だったが、時間に余裕があったため、Window Form を使ってGUI の画面があるプログラムを改めて作成",
      ],
      technologies: [
        "C#",
        "Visual Studio2017",
        "Windows Form",
        "Modbus",
        "Omron製PLC",
      ],
    },
    en: {
      projectOverview: "PLC Communication TCP/IP Program",
      role: "Full Stack Developer (Specification, Development, Testing)",
      description: [
        "Development of a program that communicates with devices such as PLCs for power monitoring using the Modbus protocol",
        "Created based on socket communication",
      ],
      archivement: [
        "Originally planned as a console program development, but due to having extra time, created a program with a GUI screen using Windows Forms",
      ],
      technologies: [
        "C#",
        "Visual Studio 2017",
        "Windows Forms",
        "Modbus",
        "Omron PLC",
      ],
    },
  },
  {
    company: company.hotelTerrace,
    period: "約1年",
    teamSize: "",
    manMonth: "",
    ja: {
      projectOverview: "フロント(アルバイト)",
      role: "",
      description: [
        "フロントでのお客さま対応(海外のお客さま含む)",
        "お客さまデータの管理",
        "より良いサービスを目指すためのアイデア提案または試作作成",
      ],
      archivement: [
        "Excelを使った資料や、書類作成の効率化を図った。英語でのお客さま対応用のマニュアル作成、システム移行の担当をし、問題なく完遂できた",
      ],
      technologies: [""],
    },
    en: {
      projectOverview: "Hotel Front Desk (Part-time)",
      role: "",
      description: [
        "Customer service at the front desk (including international guests)",
        "Management of customer data",
        "Proposal of ideas or creation of prototypes to improve service",
      ],
      archivement: [
        "Improved efficiency of document creation using Excel. Created manuals for handling English-speaking customers and managed system migration, completing the tasks without issues",
      ],
      technologies: [""],
    },
  },
  {
    company: "iMobilePhoneX(アルバイト)",
    period: "2019- 約1年",
    teamSize: "",
    manMonth: "",
    ja: {
      projectOverview: "英語日本語翻訳(アルバイト)",
      role: "",
      description: [
        "Amazonや他のネットショッピングでスマートフォンの並行輸入品を販売している会社のお客さまのメッセージを翻訳",
        "不具合品があった場合の、検品、一時的な保管",
        "日本語返信テンプレートの作成",
        "電話対応、Amazonの出品者の代表番号にかかってくる電話を対応",
      ],
      archivement: [""],
      technologies: [""],
    },
    en: {
      projectOverview: "English-Japanese Translation (Part-time)",
      role: "",
      description: [
        "Translated customer messages for a company selling parallel imported smartphones on Amazon and other online shopping platforms",
        "Inspection and temporary storage of defective products",
        "Creation of Japanese reply templates",
        "Phone support, handling calls to the Amazon seller's representative number",
      ],
      archivement: [""],
      technologies: [""],
    },
  },
  {
    company: "Freelancer.com(フリーランス)",
    period: "2019- ",
    teamSize: "",
    manMonth: "",
    ja: {
      projectOverview: "翻訳フリーランス",
      role: "",
      description: ["英語日本語翻訳", "動画、Webサイト、軍事はがきなどの翻訳"],
      archivement: [""],
      technologies: [""],
    },
    en: {
      projectOverview: "Freelance Translator",
      role: "",
      description: ["English-Japanese translation", "Translation of videos, websites, military postcards, etc."],
      archivement: [""],
      technologies: [""],
    },
  },
  {
    company: "家庭教師(アルバイト)",
    period: "2019 -",
    teamSize: "",
    manMonth: "",
    ja: {
      projectOverview: "数学、英語中心の家庭教師",
      role: "",
      description: [
        "小学生、中学生一人ずつ指導",
        "小学生は私立の中学受験を控えていた",
      ],
      archivement: ["割り算にも苦戦していた生徒を私立の中学の受験に合格させた"],
      technologies: [""],
    },
    en: {
      projectOverview: "Math and English Tutor (Part-time)",
      role: "",
      description: [
        "Tutored one elementary school student and one junior high school student",
        "The elementary school student was preparing for a private junior high school entrance exam",
      ],
      archivement: ["Helped a student who was struggling with division to pass the entrance exam for a private junior high school"],
      technologies: [""],
    },
  },
];
