import {
  receptionInnovationSkillSet,
  nextjsSkillSet,
  links,
  T3StackSkillSet,
} from "@/constants";

const tmpPic = "/images/profile/developer-pic-1.png"; // ポートフォリオサイトの画像
const tokyoGasPic = "/images/projects/tokyo-gas2.png"; // 東京ガスの画像
const tokyoGasHenkoPic = "/images/projects/tokyo-gas-henko.png"; // picture for tokyo gas henko screens
const tokyoGasCustomerSearchPic =
  "/images/projects/tokyo-gas-customer-search.png"; // picture for tokyo gas customer search screens
const tokyoGasFuriwakePic = "/images/projects/tokyo-gas-furiwake.png"; // picture for tokyo gas furiwake screens
const chatGptColonePic = "/images/projects/chat-gpt-clone.png"; // ChatGPT クローンの画像
const chatBot3dPic = "/images/projects/3d-chatbot.png"; // 3Dチャットボットの画像
const onDevelopingPic = "/images/projects/onDeveloping.jpg"; // 開発中の画像
const advancedSearchYoutubePic = "/images/projects/advanced-search-youtube.png"; // picture for advanced search youtube
const restaurantAroundStationPic =
  "/images/projects/restaurant-around-station.png"; // picture for restaurant around station
const bankingAppPic = "/images/projects/banking-app.png"; // picture for banking app
const typingGamePic = "/images/projects/typing-game.png"; // picture for typing game
const TwodRpgPic = "/images/projects/2d-rpg-react.png"; // picture for 2d rpg
const ragChatBotAkiraShinguPic = "/images/projects/rag-chatbot-akirashingu.jpg"; // picture for rag chatbot akira shingu

// object for projects
export const projects: Project[] = [
  {
    title: "開発予定を考えているアプリ",
    description: `[採用サイト間のプロフィール自動入力(データ連携)]
[画像認識を使用した何か]
[Visual Studioのプロジェクトファイル変換アプリ]
[何かのマッチングアプリ]
[何かのサイトのadvanced検索]
[オンライン会議アプリ]
[タイピング×パワハラ3Dボット]
[タイピング×Google Map]
[タイピング×2Dゲーム]  
`,
    image: `${onDevelopingPic}`,
    technologies: nextjsSkillSet,
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "2Dゲーム",
    description: `KaPlayライブラリを使用した2Dゲーム
    ChatGPTが考えたストーリーを元にゲームボーイ風のグラフィックでの実装中。
    あえてゲーム開発で、ReactおよびReact関連のライブラリを使用することで、
    普段の開発では気づかない各ライブラリを使用時の特徴や、最適化について学習する。
`,
    image: `${TwodRpgPic}`,
    technologies: [
      "React",
      "TypeScript",
      "Remix",
      "Hono.js",
      "DB(未定)",
      "Tailwind CSS",
      "lucide-react",
      "kaPlay",
    ],
    githubUrl: "https://github.com/shinguakira/2d-rpg-react",
    liveUrl: "",
  },
  {
    title: "神宮章情報取得API(開発中)",
    description: `神宮章情報取得API
ポートフォリオを別パターン作成や、履歴書作成処理のために、メンテナンス時間削減のため、共通に使用できるAPI
データはDBなしでjsonで定義。
`,
    image: `${onDevelopingPic}`,
    technologies: [
      "TypeScript",
      "Hono.js",
      "AWS Lambda",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "国検索アプリ(開発中)",
    description: `国検索アプリ
公開APIを使用して国情報を取得し、国名を検索するアプリ。
タイピングゲームと紐づけたり、国名検索だけでなくより細かい、州や県、市などを検索する実装も検討中
`,
    image: `${onDevelopingPic}`,
    technologies: [
      "React",
      "TypeScript",
      "Remix",
      "Context API",
      "Tailwind CSS",
      "lucide-react",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "神宮章情報用RAGチャットボット",
    description: `神宮章情報用RAGチャットボット
読み込ませたベクトル情報から神宮章に関する情報を取得するRAGチャットボット
精度向上のためベクトルの近似の調整や、データの区切りの適切かが必要そう。
Amazon Kendraを使ったRAGチャットボットに似た挙動
`,
    image: `${ragChatBotAkiraShinguPic}`,
    technologies: [
      ...nextjsSkillSet,
      "AstraDB(Apache Cassandra)",
      "@ai-sdk/react",
      "OpenAI API",
      "shadcn",
      "lucide-react",
    ],
    githubUrl: "https://github.com/shinguakira/rag-skill-match",
    liveUrl: "",
  },
  {
    title: "タイピングゲーム",
    description: `タイピングゲーム
様々なモードを実装。tailWindCSSやshadcnなどのコードを練習できるモードあり
効果音を選択できることによって好きな効果音でプレイできます
`,
    image: `${typingGamePic}`,
    technologies: [
      ...nextjsSkillSet,
      "Hono.js",
      "Redis(Upstash)",
      "Bun",
      "shadcn",
      "lucide-react",
    ],
    githubUrl: "https://github.com/shinguakira/typing-game-hono",
    liveUrl: "https://typing-game-hono.vercel.app/",
  },
  {
    title: "バンキングアプリ",
    description: `バンキングアプリ、Sentryによるエラーログ、エラー発生時のリプレイ機能付き
`,
    image: `${bankingAppPic}`,
    technologies: [
      ...nextjsSkillSet,
      "Sentry",
      "Appwrite",
      "Dwolla",
      "shadcn",
      "lucide-react",
    ],
    githubUrl: "https://github.com/shinguakira/banking-nextjs",
    liveUrl: "https://banking-horizon-sooty.vercel.app/sign-in",
  },
  {
    title: "現在いる最寄り駅の飲食店情報リスト表示アプリ",
    description: `最寄りの駅の飲食店情報リストをGooogle Mapで表示するアプリ
`,
    image: `${restaurantAroundStationPic}`,
    technologies: [
      ...T3StackSkillSet,
      "Google Map API",
      "shadcn",
      "lucide-react",
    ],
    githubUrl: "",
    liveUrl: links.restaurantAroundStationLink,
  },
  {
    title: "Youtube動画のadvanced検索(随時更新中)",
    description: `Youtubeの詳細検索サイト
公式のYoutubeではできない詳細な検索によって効率よく目的の動画を探すことができるサイト
検索条件を随時更新いたしますので、ご要望お問い合わせお待ちしております。
他のサービスのバージョンも開発予定です。`,
    image: `${advancedSearchYoutubePic}`,
    technologies: [
      ...nextjsSkillSet,
      "Youtube Data API",
      "shadcn",
      "lucide-react",
    ],
    githubUrl: "",
    liveUrl: links.advancedSearchYoutubeLink,
  },
  {
    title: "パワハラ訓練3Dチャットボット",
    description: `パワハラ気質の上司になりきったチャットボットと会話ができるアプリ
※開発者は考案者ではありません。
会話の内容は、OpenAIのGPT-4を使用しています。
他のリポジトリをfolkして、要件に合うようにカスタマイズしています。
元のソースとの変更点
・パワハラ上司っぽい会話内容
・一定の期間(30秒)ごとに特定の音声付きチャットをボットが送信する。十数パターンあります。`,
    image: `${chatBot3dPic}`,
    technologies: [
      "React",
      "Typescript",
      "Next.js",
      "Styled Components",
      "Vercel",
      "Google Text-to-Speech API",
      "OpenAI API",
      "babyron.js",
    ],
    githubUrl: "https://github.com/shinguakira/3d-chatbot-power",
    liveUrl: "https://3d-chatbot-power.vercel.app/",
  },
  //   {
  //     title: "東京ガスWebサイト(名義変更、支払者変更 等)",
  //     description: `お客さま情報変更 12月にリリース済みだが追加仕様変更対応中
  // もし東京ガスのアカウントのお持ちの場合は、実際の名義変更、支払者変更の画面が確認できます。`,
  //     image: `${tokyoGasHenkoPic}`,
  //     technologies: receptionInnovationSkillSet,
  //     githubUrl: "",
  //     liveUrl:
  //       "https://ryokin.tokyo-gas.co.jp/meigi_henko/contract_search?henkoKbn=1&kbn=2&hist=1:1-2:2",
  //   },
  //   {
  //     title: "東京ガスWebサイト(お客さま情報検索)",
  //     description: `お客さま情報検索画面およびそのバックエンドのAPIを開発。12月にリリース済みだが追加の仕様変更
  // ※直接お客さま画面にアクセスできないようになっているため、ひとつ前の名義変更等の画面から「お客さま検索」選択で画面表示ができます。`,
  //     image: `${tokyoGasCustomerSearchPic}`,
  //     technologies: receptionInnovationSkillSet,
  //     githubUrl: "",
  //     liveUrl:
  //       "https://ryokin.tokyo-gas.co.jp/meigi_henko/contract_search?henkoKbn=1&kbn=2&hist=1:1-2:2",
  //   },
  //   {
  //     title: "東京ガスWebサイト(振り分け画面)",
  //     description:
  //       "サイトにアクセスしたユーザーがどの問い合わせサイトにアクセスするべきかを設定する振り分け画面12月にリリース済み",
  //     image: `${tokyoGasFuriwakePic}`,
  //     technologies: receptionInnovationSkillSet,
  //     githubUrl: "",
  //     liveUrl: "https://ryokin.tokyo-gas.co.jp/meigi_henko_select",
  //   },
  //   {
  //     title: "東京ガスWebサイト(申込書送付)",
  //     description: "申込書送付 12月にリリース済みだが追加仕様変更対応中",
  //     image: `${tokyoGasPic}`,
  //     technologies: receptionInnovationSkillSet,
  //     githubUrl: "",
  //     liveUrl: "https://reception.tokyo-gas.co.jp/mskmsy/mtg?mskmsySyriKbn=10",
  //   },
  {
    title: "ChatGPT クローン",
    description: "フロントVite,React,バックExpress.js使用のChatGPTクローン",
    image: `${chatGptColonePic}`,
    technologies: ["React", "Vite", "Typescript"],
    githubUrl: "https://github.com/shinguakira/gpt-clone",
    liveUrl: "",
  },
  {
    title: "ポートフォリオWebサイト",
    description: "経歴、職務経歴等の情報を記載",
    image: `${tmpPic}?height=400&width=600`,
    technologies: [...nextjsSkillSet, "lucide-react"],
    githubUrl: "",
    liveUrl: "/",
  },
];
