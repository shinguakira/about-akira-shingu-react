import { Project } from "@/components/ui/project-item";
import {
  receptionInnovationSkillSet,
  nextjsSkillSet,
  links,
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

// object for projects
export const projects: Project[] = [
  {
    title: "開発予定を考えているアプリ",
    description: `[採用サイト間のプロフィール自動入力(データ連携)]
[現在いる最寄り駅の飲食店情報リスト表示アプリ]
[画像認識を使用した何か]
[Visual Studioのプロジェクトファイル変換アプリ]
[タイピングアプリ]
[何かのマッチングアプリ]
[何かのサイトのadvanced検索]
]`,
    image: `${onDevelopingPic}`,
    technologies: nextjsSkillSet,
    githubUrl: "",
    liveUrl: "",
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
  {
    title: "東京ガスWebサイト(名義変更、支払者変更 等)",
    description: `お客さま情報変更 12月にリリース済みだが追加仕様変更対応中
もし東京ガスのアカウントのお持ちの場合は、実際の名義変更、支払者変更の画面が確認できます。`,
    image: `${tokyoGasHenkoPic}`,
    technologies: receptionInnovationSkillSet,
    githubUrl: "",
    liveUrl:
      "https://ryokin.tokyo-gas.co.jp/meigi_henko/contract_search?henkoKbn=1&kbn=2&hist=1:1-2:2",
  },
  {
    title: "東京ガスWebサイト(お客さま情報検索)",
    description: `お客さま情報検索画面およびそのバックエンドのAPIを開発。12月にリリース済みだが追加の仕様変更
※直接お客さま画面にアクセスできないようになっているため、ひとつ前の名義変更等の画面から「お客さま検索」選択で画面表示ができます。`,
    image: `${tokyoGasCustomerSearchPic}`,
    technologies: receptionInnovationSkillSet,
    githubUrl: "",
    liveUrl:
      "https://ryokin.tokyo-gas.co.jp/meigi_henko/contract_search?henkoKbn=1&kbn=2&hist=1:1-2:2",
  },
  {
    title: "東京ガスWebサイト(振り分け画面)",
    description:
      "サイトにアクセスしたユーザーがどの問い合わせサイトにアクセスするべきかを設定する振り分け画面12月にリリース済み",
    image: `${tokyoGasFuriwakePic}`,
    technologies: receptionInnovationSkillSet,
    githubUrl: "",
    liveUrl: "https://ryokin.tokyo-gas.co.jp/meigi_henko_select",
  },
  {
    title: "東京ガスWebサイト(申込書送付)",
    description: "申込書送付 12月にリリース済みだが追加仕様変更対応中",
    image: `${tokyoGasPic}`,
    technologies: receptionInnovationSkillSet,
    githubUrl: "",
    liveUrl: "https://reception.tokyo-gas.co.jp/mskmsy/mtg?mskmsySyriKbn=10",
  },
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
    githubUrl: "https://github.com/shinguakira/about-akira-shingu-react",
    liveUrl: "/",
  },
];
