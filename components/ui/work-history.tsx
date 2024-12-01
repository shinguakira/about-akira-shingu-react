"use client";

import { useState } from 'react'
import { ChevronDown, ChevronUp, Building2, Calendar } from 'lucide-react'

type WorkExperience = {
  id: number 
  company: string // comapny name
  projectOverview: string // project name
  period: string // period
  teamSize?: string // teamSize include me, include unit
  role: string
  manMonth: string
  description: string[]
  archivement: string[] // archivement
  technologies: string[]
}

// skillset for Voice Of Customer Management System
const VOCSkillSet: string[] = [
  "Typescript","React", "Java", "Springboot", "MySQL", "Selenium(Python)","Mybatis(Java ORM)","axios","Backlog","アジャイル開発(スクラム)"
]

const workExperiences: WorkExperience[] = [
  
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

export default function WorkHistory() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number): void => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">My Work History</h1>
        <div className="space-y-6">
          {workExperiences.map((experience) => (
            <div key={experience.id} className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    {experience.projectOverview}
                  </h3>
                  <button
                    onClick={() => toggleExpand(experience.id)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-expanded={expandedId === experience.id}
                  >
                    {expandedId === experience.id ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                  {experience.role}
                </p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
                      <Building2 className="h-5 w-5 mr-2" />
                      Company
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white">{experience.company}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Period
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white">{experience.period}</dd>
                  </div>
                  {expandedId === experience.id && (
                    <>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Description</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          <ul className="list-disc pl-5 space-y-1">
                            {experience.description.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </dd>
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Archivement</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          <ul className="list-disc pl-5 space-y-1">
                            {experience.archivement.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Technologies</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, index) => (
                              <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </dd>
                      </div>
                    </>
                  )}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}