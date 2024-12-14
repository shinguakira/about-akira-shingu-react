import { WorkExperience } from "@/components/ui/work-history";
import { receptionInnovationSkillSet, VOCSkillSet } from "@/constants";

// object for work experience
export const workExperiences: WorkExperience[] = [
  {
    company: "CurrentCompany()",
    projectOverview: "お客さま情報検索、取得、特定APIの改修",
    period: "2024年10月 - 2024年1月(予定)",
    teamSize: "3",
    role: "フルスタック(基本詳細仕様書作成、開発、テスト)",
    manMonth: "3,4人月",
    description: [
      "一般の人がアクセスできる、東京ガスにに登録した会員情報に関する名義変更、支払い変更等を受け付けるシステムの改修",
      "BtoC",
      "リリースは1月現在、結合テストおよびペネトレーションテスト期間中。12/1時点では特に問題なし",
    ],
    archivement: [
      "前プロジェクト同様、仕様を理解し、各人の能力に合わせたタスク割り振りおよび、開発に携わった。",
    ],
    technologies: [],
  },
  {
    company: "CurrentCompany()",
    projectOverview: "お客さま情報検索、取得、特定APIの改修",
    period: "2024年10月 - 2024年1月(予定)",
    teamSize: "3",
    role: "フルスタック(基本詳細仕様書作成、開発、テスト)",
    manMonth: "3,4人月",
    description: [
      "一般の人がアクセスできる、東京ガスにに登録した会員情報に関する名義変更、支払い変更等を受け付けるシステムの改修",
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
  {
    company: "CurrentCompany()",
    projectOverview: "お客さまの声のシステム追加改修",
    period: "2024年10月 - 2024年11月(20日)",
    teamSize: "3",
    role: "フルスタック(基本詳細仕様書作成、開発、テスト)",
    manMonth: "3,4人月",
    description: ["2024年4月に納品、リリースしたシステムの追加改修"],
    archivement: [
      "見積もりも合わせて必要だったため、見積もりを行い、見積もりより少し、早く完了し、リリース。特に問題の問い合わせ等なく、現在稼働中",
    ],
    technologies: VOCSkillSet,
  },
  {
    company: "CurrentCompany()",
    projectOverview: "受付革新プロジェクト",
    period: "2024年5月 - 2024年1月(予定)",
    teamSize: "7-8",
    role: "フルスタック(基本詳細仕様書作成、開発、テスト)",
    manMonth: "15+人月",
    description: [
      "一般の人がアクセスできる、東京ガスにに登録した会員情報に関する名義変更、支払い変更等を受け付けるシステムの改修",
      "BtoC",
      "リリースは1月現在、結合テストおよびペネトレーションテスト期間中。12/1時点では特に問題なし",
    ],
    archivement: [
      "前プロジェクト同様、仕様を理解し、各人の能力に合わせたタスク割り振りおよび、開発に携わった。",
    ],
    technologies: receptionInnovationSkillSet,
  },
  {
    company: "CurrentCompany()",
    projectOverview: "お客さまの声システムの改修リプレイス",
    period: "2024年1月 - 2024年4月(4か月)",
    teamSize: "3-4",
    manMonth: "15人月",
    role: "フルスタック(基本詳細仕様書作成、開発、テスト)",
    description: [
      "感謝やご不満といったお客様の声を社内のシステムに記録し、東京ガスのグループで記録を参照、修正を行うことができるシステム。",
      "法的な情報遮断に対応し、権限や所属に応じた厳格な情報遮断機能を有したシステム。",
      "BtoB",
    ],
    archivement: [
      "チームの初期メンバーであり、社内に該当の技術スタックおよび業務知識を持つものがいない状態で、15 人月で見積もられた当プロジェクトを 2 人でこなし、軽微な問題はあれど、大きな問題もなく、不必要な増員もなくプロジェクトを終えることができた。工数に余裕ができたことで、1 か月後にプロジェクト加入したメンバーが、予定になかった追加の機能、画面の開発に着手、同時期に完了、リリースまで行うことができ、プロジェクトに貢献できた。取引先に、質問することでいち早く、東京ガスの業務の流れを理解し、追加で要件定義が必要なものを洗い出したり、各人の能力を把握し、要望に対してのタスクの割り振りを行った。",
    ],
    technologies: VOCSkillSet,
  },
  {
    company: "CompanyA(東日本技術研究所)",
    projectOverview: "空港の電力監視制御システム MISE の改造",
    period: "2023年6月 - 2023年12月(6か月)",
    teamSize: "4-10",
    manMonth: "不明(2021年頃スタート)",
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
  {
    company: "CompanyA(東日本技術研究所)",
    projectOverview: "PLC通信TCP/IPプログラム",
    period: "2023年4月 - 2023年6月(2ヶ月)",
    teamSize: "1",
    manMonth: "9人月",
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
  {
    company: "ホテルテラスザスクエア日立",
    projectOverview: "フロント(アルバイト)",
    period: "約1年",
    teamSize: "",
    manMonth: "",
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
  {
    company: "iMobilePhoneX(アルバイト)",
    projectOverview: "英語日本語翻訳(アルバイト)",
    period: "2019- 約1年",
    teamSize: "",
    manMonth: "",
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
  {
    company: "Freelancer.com(フリーランス)",
    projectOverview: "翻訳フリーランス",
    period: "2019- ",
    teamSize: "",
    manMonth: "",
    role: "",
    description: ["英語日本語翻訳", "動画、Webサイト、軍事はがきなどの翻訳"],
    archivement: [""],
    technologies: [""],
  },
  {
    company: "家庭教師(アルバイト)",
    projectOverview: "数学、英語中心の家庭教師",
    period: "2019 -",
    teamSize: "",
    manMonth: "",
    role: "",
    description: [
      "小学生、中学生一人ずつ指導",
      "小学生は私立の中学受験を控えていた",
    ],
    archivement: ["割り算にも苦戦していた生徒を私立の中学の受験に合格させた"],
    technologies: [""],
  },
];
