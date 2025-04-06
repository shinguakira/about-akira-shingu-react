/**
 * constans for changelog history
 */
export const changelogs: ChangelogProps[] = [
  {
    version: "1.3.0",
    date: "2025-04-06",
    changes: [
      {
        type: "feature",
        description: `タイピングゲームプロジェクト追加
バンキングアプリのgithubURLおよび公開URL追加
サイト表示時、各ページに関する説明を表示
データベース制御アプリのgithubURLおよび公開URL追加`,
      },
      {
        type: "improvement",
        description: `プロジェクトページにレインボーフレーム効果追加
資格ページのアイコン追加`,
      },
      // {
      //   type: "bugfix",
      //   description: "ヘッダーのアイコン、履歴書ダウンロードリンクデザイン修正",
      // },
    ],
  },
  {
    version: "1.2.0",
    date: "2024-01-24",
    changes: [
      {
        type: "feature",
        description: `Qiita記事をArticleページに追加`,
      },
      {
        type: "improvement",
        description: `スキルセットのアイコン追加`,
      },
      // {
      //   type: "bugfix",
      //   description: "ヘッダーのアイコン、履歴書ダウンロードリンクデザイン修正",
      // },
    ],
  },
  {
    version: "1.1.0",
    date: "2024-12-30",
    changes: [
      {
        type: "feature",
        description: `EnglishCV追加。
Youtube検索プロジェクト追加。
取得資格追加(Google Cloud)。
アップデート履歴を追加`,
      },
      {
        type: "improvement",
        description: `ヘッダーのアイコン、履歴書ダウンロードリンクデザイン修正。
東京ガスに関するプロジェクトページの詳細リンク説明追加`,
      },
      // {
      //   type: "bugfix",
      //   description: "ヘッダーのアイコン、履歴書ダウンロードリンクデザイン修正",
      // },
    ],
  },
  {
    version: "1.0.0",
    date: "2024-12",
    changes: [{ type: "feature", description: "サイト公開" }],
  },
];
