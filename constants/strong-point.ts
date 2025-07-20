export type MultilingualFaqContent = {
  question: string;
  answer: string;
};

export type MultilingualFaqProps = {
  size: string;
  category?: string;
  ja: MultilingualFaqContent;
  en: MultilingualFaqContent;
};

export const strongPoint: MultilingualFaqProps[] = [
  {
    size: "large",
    ja: {
      question: "新しい知識の習得、適応の早さ fallback",
      answer: `新しい知識への習得の早さに自信があります。スタッフサービスやイースト・コースト・ワンでは、どちらも未知の言語、技術ですが、知識がある人にも劣らず、プロジェクトを完遂することができました。
これらの経験が、習得の早さの証明になります。
現在の私のスキルに不足を感じられた場合でも、実際は想像以上の早さでスキル不足を埋めることができます。
基本的に入社までにも時間があるため、使用している環境の情報をいただけましたら、よりスムーズに案件に参画が可能です。
新しい言語での開発時、各プロジェクトのルール、ベストプラクティスに従うには、1-3か月以上かかりますが、「動くもの」を作るのであれば、1週間ほどで十分な知識を身に着けることができます。
`,
    },
    en: {
      question: "Quick Learning and AdaptabilityFallback",
      answer: `I am confident in my ability to quickly learn new knowledge. At both Staff Service and East Coast One, I was able to complete projects using unfamiliar languages and technologies, performing as well as those with prior knowledge.
These experiences demonstrate my quick learning ability.
Even if you feel my current skills are lacking, I can fill those gaps faster than you might expect.
Since there is typically time before starting a new position, if you can provide information about your environment, I can prepare for a smoother transition to your projects.
While it may take 1-3 months to follow project rules and best practices when developing in a new language, I can acquire sufficient knowledge to create "working solutions" in about a week.
`,
    },
  },
  {
    size: "large",
    ja: {
      question: "高い仕様理解能力",
      answer: `その業界、システムに無知であっても、要件書から、実装を行う上で、確認しておかないといけない項目を見つけることができます。
特に、東京ガスの案件では、要件が固まってないことが多く、実装を進めつつ、要件を詰める必要がある事柄に関しましては、要件の確認を依頼していました。
東京ガスの案件では、そのプロジェクトに長年携われた方でも見抜けなかった実際の要件をプロジェクト参画初日で1つ見抜くことができました。
アクセスが許された範囲で、資料を読み漁り、適切な仕様および実装を決定することができます。
BtoC向けのWebサイトでは、実際にサイトにアクセスして担当しているシステムの理解を深めます。
`,
    },
    en: {
      question: "Strong Specification Understanding",
      answer: `Even without prior knowledge of an industry or system, I can identify critical items that need verification from requirement documents before implementation.
Particularly in Tokyo Gas projects, where requirements were often not finalized, I would request requirement confirmations while proceeding with implementation.
In one Tokyo Gas project, I was able to identify an actual requirement on my first day that even long-term project members had not noticed.
I can determine appropriate specifications and implementations by thoroughly reviewing available documentation within permitted access.
For B2C websites, I deepen my understanding of the system by actually accessing the site and exploring its functionality.
`,
    },
  },
  {
    size: "large",
    ja: {
      question: "自発能力",
      answer: `指示された内容のみならず、そのチーム、プロジェクトにおいて足りていないものをなんでも可能な範囲で行います。「時間的余裕があれば」自分のプロジェクトのみならず、他関連するシステムの情報を確認することで、システム全体の知識を深めることができます。
イースト・コースト・ワンでは、要件からタスクの割り出し各人へのタスクの割り振り、新人への教育資料の作成を行いました。
`,
    },
    en: {
      question: "Self-Initiative",
      answer: `I not only complete assigned tasks but also address any deficiencies in the team or project within my capabilities. When time permits, I deepen my knowledge of the entire system by examining information about related systems beyond my own project.
At East Coast One, I identified tasks from requirements, assigned them to team members based on their abilities, and created educational materials for new employees.
`,
    },
  },
  {
    size: "large",
    ja: {
      question: "自己研鑽能力",
      answer: `平日、休日問わず、プライベートの時間を技術力向上、会社の貢献のために時間を使うことができる。
なおかつ、実際に資格取得など、目に見える形で自己研鑽の結果を出すことができる。
学生時代のスポーツで磨いた競争力、本来の負けず嫌いのため、仕事のどのような部分(テスト作業)でも自身の知識になりそうなものを積極的に探究し、吸収する。
スタッフサービス(東日本技術研究所)では自己学習力の向上を掲げており、最初に携わったModbusの通信プログラムの開発では、「何がわからないかわからない」状態からなんとかほとんど自己学習のみで開発を行うことができました。

イースト・コースト・ワンでは、Webの開発に対してほぼ未経験、Reactも未経験の状態かつ、同チームに有識者がいない状態で、無事プロジェクトを完遂することができました。`,
    },
    en: {
      question: "Self-Improvement Ability",
      answer: `I can dedicate my private time to improving technical skills and contributing to the company, regardless of whether it's a weekday or weekend.
Moreover, I can demonstrate tangible results of self-improvement, such as obtaining certifications.
With competitive spirit honed through sports during my student years and my inherently competitive nature, I actively explore and absorb anything that could enhance my knowledge in any aspect of work, including testing.
At Staff Service (Higashi Nihon Technology Laboratory), which emphasized self-learning ability, I was able to develop a Modbus communication program almost entirely through self-study, starting from a state where "I didn't know what I didn't know."

At East Coast One, I successfully completed a project in web development with almost no prior experience, no experience with React, and no experts on the team.`,
    },
  },
  {
    size: "small",
    ja: {
      question: "会社への貢献とビジネスへの理解",
      answer: `Freelancers.com にて案件を自分で取得し、翻訳業務を行っている経験があるため、仕事の大まかな全体の流れを理解しています。ただ与えられた仕事をこなすだけでなく、どうやったら会社の利益になるかを考え、いただいている給料を超える利益を会社に提供できることを目標し業務に取り組みます。
現在の会社で、どうやって受託の案件を獲得するかを模索する中で、受託の際には、フェーズごとに契約を行う、SES のビジネス形態と受託のビジネス形態はどう違うかなど、同年代、同経験数では比較的に身についていない知識を持っています。
`,
    },
    en: {
      question: "Business Understanding and Company Contribution",
      answer: `Having acquired projects and performed translation work on Freelancers.com, I understand the general workflow of business. I approach work with the goal of not just completing assigned tasks, but considering how to benefit the company and provide value that exceeds my salary.
In my current company, while exploring how to acquire contract projects, I've gained knowledge that is relatively uncommon among peers of my age and experience level, such as understanding phase-by-phase contracting and the differences between SES (System Engineering Service) and contract business models.
`,
    },
  },
  {
    size: "medium",
    ja: {
      question: "健康管理能力と体力",
      answer: `学生時代に鍛えた体力で、過酷な環境でも働き続けることができます。ホテルでの週5夜勤8時間労働を1年間行う体力があり、病気にもほとんどならないため、病気で休むことなく、仕事のパフォーマンスも落とすことなく仕事に従事することができます。
仕事を始めて、現在まで病気等での休みをいただいたことがありません。`,
    },
    en: {
      question: "Health Management and Physical Stamina",
      answer: `With physical strength developed during my student years, I can continue working even in demanding environments. I have the stamina to work night shifts 5 days a week, 8 hours a day for a year at a hotel. I rarely get sick, allowing me to work without taking sick leave and maintaining consistent performance.
Since starting my professional career, I have never taken time off due to illness.`,
    },
  },
  {
    size: "small",
    ja: {
      question: "システム使用者への気遣い",
      answer: `ホテルにて働いた経験から、どのように気遣いを行いお客様を喜ばせるかを考えるようになったため、お客様目線になって、どういったシステムが使いやすいかを考え開発をすることができます。
一部システム使用者への気遣いを行いすぎて、逆に一度ダメな実装を行ってしまった経験があります。

(非ITの方は、CSVファイルをexcelで開いてしまうため、excelで開いた際にも、勝手な変換などが行われないように、出力のフォーマットを調整していましたが、データ連携でもCSVを使用するということで、余計なフォーマットを入れてしまいました。)
`,
    },
    en: {
      question: "Consideration for System Users",
      answer: `From my experience working at a hotel, I learned how to be attentive to customers and make them happy. This allows me to develop systems from the user's perspective, considering what would be most user-friendly.
I once had an experience where I was overly considerate of system users, which ironically led to a poor implementation.

(Non-IT users often open CSV files in Excel, so I adjusted the output format to prevent automatic conversions when opened in Excel. However, this became problematic when the CSV was also used for data integration, as I had added unnecessary formatting.)
`,
    },
  },
  {
    size: "small",
    ja: {
      question: "効率化を求める性格",
      answer: `日頃の生活にて、効率を求めて生活をしているため、ただシステムを開発するだけでなく、最適化を求め、拡張性や柔軟性を考え開発を行うことができます。`,
    },
    en: {
      question: "Efficiency-Oriented Personality",
      answer: `Because I seek efficiency in my daily life, I can develop systems with not just functionality in mind, but also optimization, extensibility, and flexibility.`,
    },
  },
  {
    size: "large",
    ja: {
      question: "学生時代と家庭教師のアルバイトで培った教育力",
      answer: `学生時代から人に物事を教えたりする経験があり、家庭教師のアルバイトでは、指導させていただいたお子様を見事志望校へ合格させることができました。
ホテルでの経験も合わせまして、人の気持ちにたった指導を行うことができるため、わかりやすく、指導することができます。

ホテルのアルバイト、スタッフサービス、イースト・コースト・ワンいずれの職場でも、新人の教育を行ったり、新人教育用の資料作成を行い、教育に貢献出来ました。`,
    },
    en: {
      question: "Teaching Skills Developed Through Tutoring",
      answer: `I have experience teaching others since my student days, and as a private tutor, I successfully helped a student gain admission to their desired school.
Combined with my hotel experience, I can provide instruction that considers others' feelings, making my teaching clear and easy to understand.

In all my workplaces—the hotel part-time job, Staff Service, and East Coast One—I contributed to education by training new employees and creating educational materials for newcomers.`,
    },
  },
];
