export type MultilingualFaqContent = {
  question: string;
  answer: string;
};

export type MultilingualFaqProps = {
  size: string;
  category: string;
  ja: MultilingualFaqContent;
  en: MultilingualFaqContent;
};

export const faqs: MultilingualFaqProps[] = [
  {
    size: "large",
    category: "Others",
    ja: {
      question: "なぜWeb開発を専門としていますか？",
      answer:
        "Webはほとんどのデバイスに対応しており、開発およびシステムの提供を世界中どこからでも可能です。Webシステムが一番汎用的で効率が良いためです。またこれからの理由により、より競争的、高い技術が求められるため、その中で技術力を高めていきたいと考えているためです。",
    },
    en: {
      question: "Why do you specialize in web development?",
      answer:
        "Web technologies are compatible with most devices, allowing development and system delivery from anywhere in the world. Web systems are the most versatile and efficient. Additionally, as web development becomes increasingly competitive and technically demanding, I want to enhance my technical skills within this challenging field.",
    },
  },
  {
    size: "small",
    category: "Others",
    ja: {
      question: "なぜインフラではなく、開発をメインとしています？",
      answer:
        "システムを必要とする人は、主にシステムが提供するサービスおよび、機能を必要としており、それらが完成して初めて、その他安全性や、信頼性、可用性等にも価値が生まれるため、よりサービス面、機能面を作り出す開発に携わっております。",
    },
    en: {
      question: "Why do you focus on development rather than infrastructure?",
      answer:
        "People who need systems primarily require the services and functionality those systems provide. Only after these are completed do aspects like security, reliability, and availability gain value. That's why I focus on development, which creates the service and functional aspects of systems.",
    },
  },
  {
    size: "medium",
    category: "Others",
    ja: {
      question:
        "なぜバックエンドではなく、フロントエンドをメインとしていますか？",
      answer:
        "フロントエンドは、ユーザーが触れる一番近い部分である、画面の開発を行うため、より良い画面の開発はユーザーの満足度に直結しやすいためです。SPAが広がっていることにより、よりフロントエンドが担う部分が増え、フロントエンドの重要度が上がっていると感じます。またAWSやAzureなどのクラウドの使用が増え、それらの使用は基本的に従量課金であり、サーバーの負荷がかかるほどコストがかかります。今ではクライアント側の端末は基本的に計算処理を行うのに十分な環境が整っているため、よりクライアント側に処理を任せることで、サーバーの負担、コストを減らすという選択肢をとることもできるようになります。これらの理由で、フロントエンドをメインとしています。",
    },
    en: {
      question: "Why do you focus on frontend rather than backend development?",
      answer:
        "Frontend development creates the interface that users directly interact with, so better screen development more directly impacts user satisfaction. With the spread of Single Page Applications (SPAs), the frontend's role has expanded, increasing its importance. Additionally, as cloud services like AWS and Azure become more common with their pay-as-you-go pricing models, server load directly affects costs. Modern client devices now have sufficient processing power, allowing us to shift more processing to the client side, reducing server load and costs. For these reasons, I focus on frontend development.",
    },
  },
  {
    size: "small",
    category: "Timeline",
    ja: {
      question: "なぜ大学を退学されていますか？",
      answer:
        "必修単位を1つ落としてしまい、留年が確定し、奨学金の支給が停止し、金銭的に続けられなかったためです。",
    },
    en: {
      question: "Why did you leave university?",
      answer:
        "I failed one required course, which meant I had to repeat a year. This resulted in the suspension of my scholarship, making it financially impossible for me to continue my studies.",
    },
  },
  {
    size: "small",
    category: "Timeline",
    ja: {
      question:
        "なぜ大学退学後、すぐにIT業界に就職せず、ホテルのフロントを選ばれたのですか？",
      answer:
        "大学退学後、最低限の金銭的余裕を確保し、改めてITの仕事に就職しようと考えていたためです。ホテルのフロントを選んだ理由は、自分の強みである英語を活かすためです。プログラミングを活かしたかったのですが、適切なアルバイトがなかったため、ホテルの仕事に就きました。",
    },
    en: {
      question:
        "Why did you choose to work at a hotel front desk instead of immediately joining the IT industry after leaving university?",
      answer:
        "After leaving university, I wanted to secure a minimum financial stability before pursuing an IT career. I chose to work at a hotel front desk to leverage my strength in English. While I wanted to use my programming skills, there weren't suitable part-time opportunities available in that field, so I took the hotel position.",
    },
  },
  {
    size: "large",
    category: "Certification",
    ja: {
      question: "資格を取得されている理由は何ですか？",
      answer:
        "経験年数が少ないうちは、一緒に仕事するまでは、どうしても実力がないと判断されがちです。「資格取得している=技術力がある」というよりは、プライベートの時間およびお金を仕事のために使用できるという証明になります。多くの資格を取得していることで、「仕事のためにプライベートを犠牲にすることができる」、「努力する力」、「知識習得能力の高さ」のいずれかを証明できます。資格認定団体という第3者が資格取得を保証していることにより、これらの3ついずれかの能力は自称ではなく第3者に保証された確かなものだと証明できます。私の情報を確認された際に、(良いか悪いかは置いておきまして)他の人と何か違うと感じていただければ、成功だと感じています。",
    },
    en: {
      question: "Why do you obtain so many certifications?",
      answer:
        "When you have limited years of experience, people tend to judge your abilities negatively until they work with you. Rather than suggesting that 'having certifications equals technical skill,' it demonstrates that I can dedicate my private time and money to my profession. Obtaining numerous certifications proves at least one of these qualities: 'ability to sacrifice personal time for work,' 'capacity for effort,' or 'high aptitude for knowledge acquisition.' Since these certifications are validated by third-party certification bodies, these abilities are objectively verified rather than self-proclaimed. When someone reviews my information, I consider it a success if they feel there's something different about me (whether that's perceived positively or negatively).",
    },
  },
  {
    size: "large",
    category: "Certification",
    ja: {
      question: "取得している資格の方向性にばらつきがある理由は何ですか？",
      answer:
        "その時のプロジェクト、会社で必要とされる知識を取得するため、資格を取得していたためです。このばらつきにより、やりたいことが定まっていないのではないか、等良い印象を持たれない方がいらっしゃるかもしれませんが、そのばらついている労力が1つのもの集約されるとどうなるかと想像されると良いかと思います。",
    },
    en: {
      question:
        "Why is there such variety in the types of certifications you've obtained?",
      answer:
        "I obtained certifications to acquire knowledge needed for specific projects and companies at different times. Some might get the impression that this variety indicates a lack of focus or direction, but I'd encourage you to imagine what could be achieved if all that diverse effort were concentrated on a single goal.",
    },
  },
  {
    size: "large",
    category: "Certification",
    ja: {
      question: "開発なのになぜAWSの資格を多く取得されていますか？",
      answer:
        "現在の会社が、AWSのパートナーになることを目指しているため、AWSの資格取得を推奨していること、AWS All Certified Engineerの表彰により、会社の知名度向上に微力ながら助力できると考えたためです。また認知度のない資格を取得しても、評価されない可能性があったためです。",
    },
    en: {
      question:
        "As a developer, why have you obtained so many AWS certifications?",
      answer:
        "My current company aims to become an AWS partner, so they encourage obtaining AWS certifications. I believed that achieving AWS All Certified Engineer recognition could help increase the company's visibility. Additionally, obtaining certifications that lack recognition might not be valued as highly.",
    },
  },
  {
    size: "large",
    category: "Timeline",
    ja: {
      question: "1社目の会社の退職理由は何ですか？",
      answer:
        "Webの開発ができると聞いて、入社しましたが、取り扱っている案件が、基本的に組み込みの案件が多く、Webの案件を紹介してもらえず、強制的に組み込みを行っている会社に就業させられたためです。偶然にも、Javaで開発を行っているプロジェクトに参画できましたが、そのプロジェクトのみがWebであり、他は組み込みだったためです。",
    },
    en: {
      question: "Why did you leave your first company?",
      answer:
        "I joined the company after being told I could do web development, but most of their projects were embedded systems. I wasn't offered web development projects and was forced to work at a company doing embedded systems. By chance, I was able to join a project using Java, but that was the only web project—everything else was embedded systems.",
    },
  },
  {
    size: "large",
    category: "Timeline",
    ja: {
      question: "現在転職を考えている理由は何ですか？",
      answer:
        "会社が方向転換をし、ローコードを主体に受託開発を進めたいと考えており、私の考えと相反するためです。フルスクラッチで、技術力が求められる環境での開発を行いと考えています。また、現在の会社はJavaの案件がメインであり、現在携わっている案件以外に携わるとなった場合に、Javaの案件もしくは、ローコードのプロジェクトしかない可能性があるためです。",
    },
    en: {
      question: "Why are you considering changing jobs now?",
      answer:
        "My company has shifted direction and wants to focus on low-code development for contract projects, which contradicts my own goals. I want to work in an environment that requires technical skills and full-scratch development. Additionally, my current company primarily handles Java projects, so if I were to work on something other than my current project, I might only have options for Java or low-code projects.",
    },
  },
];
