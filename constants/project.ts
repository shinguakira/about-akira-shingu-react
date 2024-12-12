import { Project } from "@/components/ui/project-item";
import chatBot3dPic from "@/assets/images/chatbot3d.png";
import chatGptColonePic from "@/assets/images/chatgpt-clone.png";
import tokyoGasPic from "@/assets/images/tokyo-gas.png";
import tmpPic from "@/assets/images/developer-pic-1.png";
import { receptionInnovationSkillSet } from "@/constants";

// object for projects
export const projects: Project[] = [
  {
    id: "1",
    title: "開発予定を考えているアプリ",
    description:
      "[Youtube動画のadvanced検索],[採用サイト間のプロフィール自動入力(データ連携)],[現在いる最寄り駅の飲食店情報リスト表示アプリ],[画像認識を使用した何か],[Visual Studioのプロジェクトファイル変換アプリ]",
    image: "",
    technologies: ["React", "Typescript"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "2",
    title: "パワハラ訓練3Dチャットボット",
    description:
      "パワハラ気質の上司になりきったチャットボットと会話ができるアプリ「開発中」※開発者は考案者ではありません。",
    image: `${chatBot3dPic}`,
    technologies: [
      "React",
      "Typescript",
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "Google Text-to-Speech API",
      "OpenAI API",
      "babyron.js",
    ],
    githubUrl: "https://github.com/shinguakira/3d-chatbot-power",
    liveUrl: "https://3d-chatbot-power.vercel.app/",
  },
  {
    id: "3",
    title: "東京ガスWebサイト",
    description:
      "東京ガスの一部Website、お客さま情報変更、申込書送付 1月に名義変更を行う画面リリース予定",
    image: `${tokyoGasPic}`,
    technologies: receptionInnovationSkillSet,
    githubUrl: "",
    liveUrl: "https://reception.tokyo-gas.co.jp/mskmsy/mtg?mskmsySyriKbn=10",
  },
  {
    id: "4",
    title: "ChatGPT クローン",
    description: "フロントVite,React,バックExpress.js使用のChatGPTクローン",
    image: `${chatGptColonePic}`,
    technologies: ["React", "Vite", "Typescript"],
    githubUrl: "https://github.com/shinguakira/gpt-clone",
    liveUrl: "",
  },
  {
    id: "5",
    title: "ポートフォリオWebサイト",
    description: "経歴、職務経歴等の情報を記載",
    image: `${tmpPic}?height=400&width=600`,
    technologies: ["React", "Typescript", "Next.js", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/shinguakira/about-akira-shingu-react",
    liveUrl: "/",
  },
];
