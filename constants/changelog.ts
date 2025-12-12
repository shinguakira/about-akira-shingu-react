/**
 * constans for changelog history
 */
export const changelogs: ChangelogProps[] = [
  {
    version: "1.7.0",
    date: "2025-12",
    changes: [
      {
        type: "feature",
        description: `Aboutページを「履歴」「強み」「スキル」「作業履歴」に分離
Googleカレンダー連携によるスケジュールページ追加
外部APIとの連携により、データの一元管理を実現`,
      },
      {
        type: "improvement",
        description: `モバイルナビゲーションのUX改善（外側クリックで閉じる機能追加）
ヘッダーのスタイリング改善`,
      },
    ],
  },
  {
    version: "1.6.0",
    date: "2025-09",
    changes: [
      {
        type: "improvement",
        description: `モバイルナビゲーションに外側をクリックして閉じる機能を追加
ヘッダーレイアウトの改善`,
      },
    ],
  },
  {
    version: "1.5.0",
    date: "2025-07",
    changes: [
      {
        type: "feature",
        description: `プロジェクト、資格、スキルページを外部API連携に対応
強みページのデータをAPI経由で取得するように変更`,
      },
      {
        type: "improvement",
        description: `スマートフォン向けレイアウトの改善
スキル表示のスペーシングとカラム調整`,
      },
    ],
  },
  {
    version: "1.4.0",
    date: "2025-04-20",
    changes: [
      {
        type: "feature",
        description: `プロジェクト追加
多言語対応（日本語・英語）の実装
動的ルーティングによる言語切り替え機能の追加
SEO対応のためのgenerateStaticParamsの実装
言語切替時に現在のページを維持する機能追加`,
      },
      {
        type: "improvement",
        description: `Qiitaアイコン表示のためのAPIをLogo.devに変更
ページ構造の最適化とコード整理
資格証明書リンクの絶対パス参照に修正`,
      },
      {
        type: "bugfix",
        description: "Vercelデプロイメントエラーの修正",
      },
    ],
  },
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
