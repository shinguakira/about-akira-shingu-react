/**
 * constans for changelog history
 */
export const changelogs: ChangelogProps[] = [
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
