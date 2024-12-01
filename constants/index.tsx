import { WorkExperience } from "@/components/ui/work-history";
import { Project } from "@/components/ui/project-item";
import {Faq} from "@/components/ui/accordion";
import {CertificationItemProps} from "@/components/ui/certification-item";

const tmpPic = "/public/images/profile/developer-pic-1.png";

// skillset for Voice Of Customer Management System
const VOCSkillSet: string[] = [
    "Typescript","React", "Java", "Springboot", "MySQL", "Selenium(Python)","Mybatis(Java ORM)","axios","Backlog","アジャイル開発(スクラム)"
]
// object for work experience
export const workExperiences: WorkExperience[] = [
{
    id: 1,
    company: "CurrentCompany()",
    projectOverview: "お客さま情報検索、取得、特定APIの改修",
    period: "2024年10月 - 2024年11月(20日)",
    teamSize: "3",
    role: "フルスタック(基本詳細仕様書作成、開発、テスト)",
    manMonth:"3,4人月",
    description: [
    "一般の人がアクセスできる、東京ガスにに登録した会員情報に関する名義変更、支払い変更等を受け付けるシステムの改修",
    "BtoC",
    "リリースは1月現在、結合テストおよびペネトレーションテスト期間中。12/1時点では特に問題なし"
    ],
    archivement:["前プロジェクト同様、仕様を理解し、各人の能力に合わせたタスク割り振りおよび、開発に携わった。",

    ],
    technologies: ["Typescript","React","Node.js","MySQL","Selenium(Python)","little state machine","React Hook Form","axios","TypeORM","class-validator","Apollo Client Server(GraphQL)","Azure(App Service,Azure Functions)","Backlog","Redmine","Swagger","アジャイル開発(スクラム)"]
},
{
    id: 2,
    company: "CurrentCompany()",
    projectOverview: "お客さまの声のシステム追加改修",
    period: "2024年10月 - 2024年11月(20日)",
    teamSize: "3",
    role: "フルスタック(基本詳細仕様書作成、開発、テスト)",
    manMonth:"3,4人月",
    description: [
    "2024年4月に納品、リリースしたシステムの追加改修",
    ],
    archivement:["見積もりも合わせて必要だったため、見積もりを行い、見積もりより少し、早く完了し、リリース。特に問題の問い合わせ等なく、現在稼働中",

    ],
    technologies: VOCSkillSet
},
{
    id: 3,
    company: "CurrentCompany()",
    projectOverview: "受付革新プロジェクト",
    period: "2024年5月 - 2024年1月(予定)",
    teamSize: "7-8",
    role: "フルスタック(基本詳細仕様書作成、開発、テスト)",
    manMonth:"15+人月",
    description: [
    "一般の人がアクセスできる、東京ガスにに登録した会員情報に関する名義変更、支払い変更等を受け付けるシステムの改修",
    "BtoC",
    "リリースは1月現在、結合テストおよびペネトレーションテスト期間中。12/1時点では特に問題なし"
    ],
    archivement:["前プロジェクト同様、仕様を理解し、各人の能力に合わせたタスク割り振りおよび、開発に携わった。",

    ],
    technologies: ["Typescript","React","Node.js","MySQL","Selenium(Python)","little state machine","React Hook Form","axios","TypeORM","class-validator","Apollo Client Server(GraphQL)","Azure(App Service,Azure Functions)","Backlog","Redmine","Swagger","アジャイル開発(スクラム)"]
},
{
    id: 4,
    company: "CurrentCompany()",
    projectOverview: "お客さまの声システムの改修リプレイス",
    period: "2024年1月 - 2024年4月(4か月)",
    teamSize: "3-4",
    manMonth:"15人月",
    role: "フルスタック(基本詳細仕様書作成、開発、テスト)",
    description: [
    "感謝やご不満といったお客様の声を社内のシステムに記録し、東京ガスのグループで記録を参照、修正を行うことができるシステム。",
    "法的な情報遮断に対応し、権限や所属に応じた厳格な情報遮断機能を有したシステム。",
    "BtoB",
    ],
    archivement:["チームの初期メンバーであり、社内に該当の技術スタックおよび業務知識を持つものがいない状態で、15 人月で見積もられた当プロジェクトを 2 人でこなし、軽微な問題はあれど、大きな問題もなく、不必要な増員もなくプロジェクトを終えることができた。工数に余裕ができたことで、1 か月後にプロジェクト加入したメンバーが、予定になかった追加の機能、画面の開発に着手、同時期に完了、リリースまで行うことができ、プロジェクトに貢献できた。取引先に、質問することでいち早く、東京ガスの業務の流れを理解し、追加で要件定義が必要なものを洗い出したり、各人の能力を把握し、要望に対してのタスクの割り振りを行った。"],
    technologies: VOCSkillSet
},
{
    id: 5,
    company: "CompanyA(東日本技術研究所)",
    projectOverview: "空港の電力監視制御システム MISE の改造",
    period: "2023年6月 - 2023年12月(6か月)",
    teamSize: "4-10",
    manMonth:"不明(2021年頃スタート)",
    role: "フルスタック(仕様書作成、開発、テスト、テスト環境構築)",
    description: [
    "計12以上の各空港や性能評価センターなどの電力監視制御システムの改造",
    "一部灯電の制御ソフトウェア(滑走路の点滅)の改修",
    "航空局での結合テスト時の現地での問題対応",
    "日立、東芝、富士電機、NEC、沖電気の複数の会社で構成されるプロジェクト",
    "担当空港(官署)は、成田、札幌、長崎、南紀白浜、奄美大島、松山、岡山など",
    "株式会社日立産業制御ソリューションズの作業場にて共同開発"
    ],
    archivement:["プロジェクトに途中参加にも関わらず、ソフトのソース、仕様を理解し、開発に貢献。プロジェクトの是非が決まる、技術管理センター(TMC)でのソフトウェア品質チェックにソフト側の代表として参加し、現地にて起こった問題を解決しました。"],
    technologies: ["C", "C++", "C#", "Java", "javascript","Springboot","Visual Studio 2010,2015,2019","PDB","HDB"]
},
{
    id: 6,
    company: "CompanyA(東日本技術研究所)",
    projectOverview: "PLC通信TCP/IPプログラム",
    period: "2023年4月 - 2023年6月(2ヶ月)",
    teamSize: "1",
    manMonth:"9人月",
    role: "フルスタック(仕様書作成、開発、テスト)",
    description: [
    "電力監視のための PLC などの機器と Modbus というプロトコルで通信するプログラムの開発 ",
    "ソケット通信をベースに作成",
    ],
    archivement:["本来は、コンソールでのプログラムの開発だったが、時間に余裕があったため、Window Form を使ってGUI の画面があるプログラムを改めて作成"],
    technologies: ["C#","Visual Studio2017","Windows Form","Modbus","Omron製PLC"]
},
]
// Creadly link for certifications object
const creadlyLink = "https://www.credly.com/users/username.aff80586"
// object for certifications
export const certifications:CertificationItemProps[] = [
    {
    id: 1,
    name: "基本情報技術者試験",
    organization: "IPA",
    date: "2023-05",
    verifyLink: "https://example.com/verify/123"
    },
    {
    id: 2,
    name: "ドットコムマスターアドバンス シングルスター",
    organization: ".com",
    date: "2023-5",
    verifyLink: "https://example.com/verify/456"
    },
    {
    id: 3,
    name: "情報セキュリティマネジメント",
    organization: "IPA",
    date: "2023-06",
    verifyLink: "https://example.com/verify/789"
    },
    {
    id: 4,
    name: "ディジタル技術検定 2級 情報",
    organization: "",
    date: "2023-07",
    verifyLink: "https://example.com/verify/101"
    }
    ,
    {
    id: 5,
    name: "組み込みソフトウェア技術者クラス2 グレードB",
    organization: "",
    date: "2023-07",
    verifyLink: "https://example.com/verify/101"
    }
    ,
    {
    id: 6,
    name: "Oracle Certified Java Programmer, Gold SE 11",
    organization: "Oracle",
    date: "2024-02",
    verifyLink: "https://example.com/verify/101"
    }
    ,
    {
    id: 7,
    name: "Python3 エンジニア認定基礎試験",
    organization: "Python",
    date: "2023-02",
    verifyLink: "https://example.com/verify/101"
    }
    ,
    {
    id: 8,
    name: "Python3 エンジニア認定データ分析試験",
    organization: "Python",
    date: "2024-02",
    verifyLink: "https://example.com/verify/101"
    }
    ,
    {
    id: 9,
    name: "Python3 エンジニア認定実践試験",
    organization: "Python",
    date: "2024-02",
    verifyLink: "https://example.com/verify/101"
    },
    {
    id: 10,
    name: "AZ-900 Microsoft Azure Fundamentals",
    organization: "Microsoft",
    date: "2024-03",
    verifyLink: "https://example.com/verify/101"
    },
    {
    id: 11,
    name: "HTML5プロフェッショナル認定試験レベル1",
    organization: "LPI-Japan",
    date: "2024-03",
    verifyLink: "https://ma.educo-j.or.jp/h/EID900045390/qntzzbkx3h"
    },{
    id: 12,
    name: "AWS Certified Solutions Architect – Associate",
    organization: "AWS",
    date: "2024-03",
    verifyLink: creadlyLink
    },{
    id: 13,
    name: "HTML5プロフェッショナル認定試験レベル2",
    organization: "LPI-Japan",
    date: "2024-04",
    verifyLink: "https://ma.educo-j.or.jp/h/EID900045390/qntzzbkx3h"
    },
    {
    id: 40,
    name: "AWS Certified SysOps Administrator – Associate",
    organization: "AWS",
    date: "2024-04",
    verifyLink: creadlyLink
    },
    {
    id: 14,
    name: "AWS Certified Developer – Associate",
    organization: "AWS",
    date: "2024-05",
    verifyLink: creadlyLink
    },
    {
    id: 15,
    name: "AWS Certified DevOpes Engineer – Professional",
    organization: "AWS",
    date: "2024-05",
    verifyLink: creadlyLink
    },
    {
    id: 16,
    name: "AWS Certified Machine Learning – Specialty",
    organization: "AWS",
    date: "2024-06",
    verifyLink: creadlyLink
    },
    {
    id: 17,
    name: "AWS Certified Data Enginner - Associate",
    organization: "AWS",
    date: "2024-06",
    verifyLink: creadlyLink
    },
    {
    id: 18,
    name: "AWS Certified Solutions Architect – Professional",
    organization: "AWS",
    date: "2024-07",
    verifyLink: creadlyLink
    },
    {
    id: 19,
    name: "AZ-204 Developing Solutions for Microsoft Azure",
    organization: "Microsoft",
    date: "2024-07",
    verifyLink: "https://learn.microsoft.com/api/credentials/share/ja-jp/08201797/8238075B8F146208?sharingId=EC8829B80AA18FB2"
    },
    {
    id: 20,
    name: "OSS DB Silver",
    organization: "LPI-Japan",
    date: "2024-07",
    verifyLink: "https://ma.educo-j.or.jp/d/EID900045390/unpqcjywm8"
    },
    {
    id: 21,
    name: "AWS Certified Advanced Networking – Specialty",
    organization: "AWS",
    date: "2024-08",
    verifyLink: creadlyLink
    },
    {
    id: 22,
    name: "REACT DEVELOPER CERTIED LEVEL 1",
    organization: "Certificates.dev",
    date: "2024-08",
    verifyLink: "https://interstate21.com/certificate/?code=5H11TDN"
    }
    ,
    {
    id: 23,
    name: "Certified Junior Angular Developer",
    organization: "Certificates.dev Angular Traning",
    date: "2024-09",
    verifyLink: "	https://certificates.dev/c/9cea8a10-14d5-44e4-9343-70c02f44c9b7"
    },
    {
    id: 24,
    name: "Certified Typescript Developer Professional",
    organization: "w3schools",
    date: "2024-09",
    verifyLink: "https://verify.w3schools.com/1P5VV1GZ0S"
    },
    {
    id: 25,
    name: "AZ-104 Microsoft Azure Administrator",
    organization: "Microsoft",
    date: "2024-10",
    verifyLink: "https://learn.microsoft.com/api/credentials/share/ja-jp/08201797/5656C6EBDF249EA9?sharingId=EC8829B80AA18FB2"
    },
    {
    id: 26,
    name: "AWS Certified AI Practitioner",
    organization: "AWS",
    date: "2024-10",
    verifyLink: creadlyLink
    },
    {
    id: 27,
    name: "AWS Certified Machine Learning - Associate",
    organization: "AWS",
    date: "2024-11",
    verifyLink: creadlyLink
    },
    {
    id: 28,
    name: "Certified Sass Developer Professional",
    organization: "w3schools",
    date: "2024-11",
    verifyLink: "https://verify.w3schools.com/1PD7RE2K1Y"
    }
]

export const faqs:Faq[] = [
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

// object for projects
export const projects: Project[] = [
    {
      id: '1',
      title: '東京ガスWebサイト',
      description: '東京ガスの一部Website、お客さま情報変更、申込書送付',
      image: `${tmpPic}?height=400&width=600`,
      technologies: ['React',"Typescript","Node.js",""],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://reception.tokyo-gas.co.jp/mskmsy/mtg?mskmsySyriKbn=10'
    },
    {
      id: '2',
      title: 'ChatGPT クローン',
      description: 'フロントVite,React,バックExpress.js使用のChatGPTクローン',
      image: `${tmpPic}?height=400&width=600`,
      technologies: ['React', 'Vite', 'Typescript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/yourusername/task-management-app',
      liveUrl: 'https://task-app-demo.com'
    },
    {
      id: '3',
      title: 'ポートフォリオWebサイト',
      description: '経歴、職務経歴等の情報を記載',
      image: `${tmpPic}?height=400&width=600`,
      technologies: ["React","Typescript","Next.js","Tailwind CSS","Vercel"],
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      liveUrl: 'https://weather-dashboard-demo.com'
    }
  ]

