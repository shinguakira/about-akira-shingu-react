# AGENTS.md - AI Agent Development Guide

このドキュメントは、本プロジェクトで開発を行うAIエージェント向けの包括的なガイドです。

## プロジェクト概要

**プロジェクト名**: Akira Shingu Portfolio Website
**種類**: 個人ポートフォリオサイト（バイリンガル対応）
**主な目的**: フルスタック開発者のスキル、職歴、実績、プロジェクトの紹介

### 主要機能

- ✅ 多言語対応（英語/日本語）
- ✅ スキル・職歴・学歴の表示
- ✅ 認定資格の管理と検証
- ✅ プロジェクトポートフォリオ
- ✅ FAQ・お問い合わせフォーム
- ✅ ダークモード対応
- ✅ ロールベースアクセス制御
- ✅ アナリティクス統合（GTM、Clarity）

---

## 技術スタック

### コアフレームワーク

```json
{
  "runtime": "Node.js 20.x",
  "framework": "Next.js 15.0.2 (App Router)",
  "language": "TypeScript 5.x",
  "ui": "React 19.0.0-rc"
}
```

### スタイリング

- **Tailwind CSS 3.4.14** - ユーティリティファーストCSS
- **Shadcn/UI** - コンポーネントライブラリ（new-york style）
- **Radix UI** - ヘッドレスUIプリミティブ
- **Lucide React 0.460.0** - アイコンライブラリ
- **next-themes 0.4.6** - テーマ切り替え
- **CVA (class-variance-authority)** - バリアントベースのスタイリング

### 国際化 (i18n)

- **next-i18next 15.4.2** - ルーティングと翻訳
- **i18next 24.2.3** - 国際化フレームワーク
- **react-i18next 15.4.1** - React バインディング

### データフェッチング

- **カスタムPortfolio API**: `@shinguakira/portfolio-api-types` v1.0.0
- **APIエンドポイント**: `https://portfolio-api-ten-delta.vercel.app/api`
- **Nodemailer 6.10.0** - お問い合わせフォーム用

### 開発ツール

- **pnpm** - パッケージマネージャー
- **oxlint 1.85.0** - コード品質チェック（ESLint から移行。`oxlint-migration.md` 参照）
- **Prettier 3.3.3** - コードフォーマット（Tailwindプラグイン付き）

---

## ディレクトリ構造

```
about-akira-shingu-react/
├── app/                          # Next.js App Router
│   ├── (localized)/             # ローカライズされたルート
│   │   └── [locale]/            # 動的ロケールセグメント (en/ja)
│   │       ├── about/           # スキル・職歴ページ
│   │       ├── articles/        # 記事一覧
│   │       ├── certifications/  # 認定資格
│   │       ├── contact/         # お問い合わせフォーム
│   │       ├── faq/             # FAQ
│   │       ├── projects/        # プロジェクト
│   │       ├── page/            # ホームページ（クライアント）
│   │       ├── layout.tsx       # ローカライズレイアウト
│   │       └── page.tsx         # ローカライズホーム
│   ├── api/                     # APIルート
│   │   └── contact/route.ts     # お問い合わせメール送信
│   ├── globals.css              # グローバルスタイル
│   ├── layout.tsx               # ルートレイアウト
│   └── page.tsx                 # ルートページ（リダイレクト）
│
├── components/                  # Reactコンポーネント
│   ├── analytics/               # アナリティクス
│   ├── ui/                      # UIコンポーネント
│   │   ├── shadcn/             # Shadcn/UIコンポーネント
│   │   └── [各種].tsx          # カスタムUIコンポーネント
│   ├── providers.tsx            # コンテキストプロバイダー
│   ├── client-layout-wrapper.tsx
│   └── user-role-wrapper.tsx
│
├── contexts/                    # Reactコンテキスト
│   ├── LanguageContext.tsx     # 言語切り替えロジック
│   └── UserRoleContext.tsx     # ユーザーロール管理
│
├── services/                    # APIサービス層
│   └── portfolioApi.ts         # 集中化されたAPIクライアント
│
├── constants/                   # 静的データ定数
│   ├── certification.ts        # 認定資格データ
│   ├── project.ts              # プロジェクトデータ
│   ├── skill.ts                # スキルデータ
│   ├── strong-point.ts         # アピールポイント
│   ├── faq.ts                  # FAQデータ
│   ├── work-experience.ts      # 職務経歴
│   ├── education-history.ts    # 学歴
│   └── index.ts                # エクスポート
│
├── hooks/                       # カスタムReactフック
│   └── use-media-query.ts
│
├── lib/                         # ユーティリティ関数
│   └── utils.ts                # cn()ユーティリティ
│
├── types/                       # TypeScript型定義
│
├── public/                      # 静的アセット
│   ├── images/                 # 画像
│   └── locales/                # 翻訳ファイル
│       ├── en/common.json      # 英語翻訳
│       └── ja/common.json      # 日本語翻訳
│
├── proxy.ts                     # Next.js proxy（旧middleware / i18n + ロール）
├── next.config.ts               # Next.js設定
├── tailwind.config.ts           # Tailwind CSS設定
├── tsconfig.json                # TypeScript設定
├── next-i18next.config.js      # i18n設定
├── components.json              # Shadcn/UI設定
└── package.json                # 依存関係とスクリプト
```

---

## 重要ファイルの役割

### 設定ファイル

#### `proxy.ts`

**役割**: ロケール検出・リダイレクト、ロールベースアクセス制御
（Next.js 16 で `middleware.ts` から改名。関数名も `proxy`）

```typescript
// 機能:
// 1. ブラウザ言語からロケール検出
// 2. クッキーからロケール読み込み
// 3. /{locale}へのリダイレクト
// 4. ロールベースでページ制限（certificationロールは/certificationsへ）
```

#### `services/portfolioApi.ts`

**役割**: 集中化されたAPIクライアント

```typescript
// 主要メソッド:
fetchCertifications(lang?: string): Promise<CertificationsResponse>
fetchProjects(lang?: string): Promise<ProjectsResponse>
fetchSkills(lang?: string): Promise<SkillsResponse>
fetchEducation(lang?: string): Promise<EducationResponse>
fetchStrongPoints(lang?: string): Promise<StrongPointsResponse>
fetchFaqs(lang?: string): Promise<FaqResponse>

// 特徴:
// - Next.jsキャッシング（ISR: 1週間デフォルト）
// - ローカルコンスタントへのフォールバック
// - 型安全（@shinguakira/portfolio-api-types）
```

#### `components/providers.tsx`

**役割**: グローバルコンテキストプロバイダー

```typescript
// 統合するプロバイダー:
// - ThemeProvider (ダークモード)
// - LanguageProvider (言語切り替え)
// - UserRoleProvider (ロール管理)
```

### ページアーキテクチャパターン

**ハイブリッドServer/Clientコンポーネント**:

```
/about/
├── page.tsx          # Server: データフェッチ、メタデータ、静的生成
└── client-page.tsx   # Client: インタラクティビティ、ステート管理
```

**実装例**:

```typescript
// page.tsx (Server Component)
export default async function AboutPage({ params: { locale } }) {
  const skillsData = await fetchSkills(locale);
  const educationData = await fetchEducation(locale);

  return <ClientPage skills={skillsData} education={educationData} />;
}

// client-page.tsx (Client Component)
'use client';
export default function ClientPage({ skills, education }) {
  const [activeTab, setActiveTab] = useState('skills');
  // インタラクティブなUI
}
```

---

## コーディング規約

### 1. インポートパス

**絶対パスを使用** (`@/` エイリアス):

```typescript
// ✅ Good
import { cn } from "@/lib/utils";
import NavBar from "@/components/ui/nav-bar";

// ❌ Bad
import { cn } from "../../lib/utils";
import NavBar from "../components/ui/nav-bar";
```

### 2. コンポーネントの命名

```typescript
// ファイル名: kebab-case
skill-item.tsx

// コンポーネント名: PascalCase
export default function SkillItem() {}

// 型名: PascalCase + Props suffix
type SkillItemProps = { ... }
```

### 3. TypeScript型定義

**外部パッケージから型をインポート**:

```typescript
import type { SkillItem } from "@shinguakira/portfolio-api-types";

// ローカルで拡張する場合
type SkillItemProps = SkillItem & {
  className?: string;
  proficyency?: string; // 後方互換性のため
};
```

### 4. スタイリング

**Tailwind + cn()ユーティリティ**:

```typescript
import { cn } from "@/lib/utils";

<div className={cn(
  "base-class",
  condition && "conditional-class",
  props.className // 外部からのクラス拡張を許可
)} />
```

**レスポンシブ + ダークモード**:

```typescript
<div className="
  text-sm md:text-base lg:text-lg
  bg-white dark:bg-gray-900
  text-black dark:text-white
" />
```

### 5. データフェッチング

**Server Componentでフェッチ**:

```typescript
// page.tsx
import { fetchSkills } from "@/services/portfolioApi";

export default async function Page({ params: { locale } }) {
  const skillsData = await fetchSkills(locale);
  return <ClientPage skills={skillsData} />;
}
```

**キャッシング設定**:

```typescript
// 強制的に静的生成
export const dynamic = "force-static";

// 再検証期間の設定
export const revalidate = 604800; // 1週間
```

### 6. 翻訳の扱い

**Server Component（静的）**:

```typescript
const translations = {
  en: { title: "Home", description: "..." },
  ja: { title: "ホーム", description: "..." },
};
const t = translations[locale === "ja" ? "ja" : "en"];
```

**Client Component（コンテキスト）**:

```typescript
import { useLanguage } from "@/contexts/LanguageContext";

const { locale, changeLanguage } = useLanguage();
```

---

## よくあるタスクの実装方法

### 新しいページを追加する

1. **ディレクトリ作成**:

```bash
mkdir -p app/(localized)/[locale]/new-page
```

2. **Server Component作成** (`page.tsx`):

```typescript
import type { Metadata } from "next";

export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  return {
    title: locale === "ja" ? "新しいページ" : "New Page",
    description: "..."
  };
}

export default async function NewPage({ params: { locale } }) {
  // データフェッチ
  const data = await fetchData(locale);

  return <ClientPage data={data} />;
}
```

3. **Client Component作成** (`client-page.tsx`):

```typescript
'use client';

export default function ClientPage({ data }) {
  return (
    <div className="container mx-auto">
      {/* UI実装 */}
    </div>
  );
}
```

4. **ナビゲーションに追加** (`components/ui/nav-bar.tsx`):

```typescript
const links = [
  { href: `/${locale}/about`, label: t("nav.about") },
  { href: `/${locale}/new-page`, label: t("nav.newPage") }, // 追加
];
```

5. **翻訳追加** (`public/locales/*/common.json`):

```json
{
  "nav": {
    "newPage": "New Page"  // en
    "newPage": "新しいページ"  // ja
  }
}
```

### 新しいAPIエンドポイントを追加する

1. **`services/portfolioApi.ts`に追加**:

```typescript
export async function fetchNewData(
  lang?: string,
  options?: RequestOptions
): Promise<NewDataResponse> {
  const endpoint = `${BASE_URL}/new-endpoint${lang ? `?lang=${lang}` : ""}`;

  try {
    const response = await fetch(endpoint, {
      ...options,
      next: { revalidate: options?.revalidate ?? 604800 },
    });

    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch new data:", error);
    // フォールバック
    const { newData } = await import("../constants/new-data");
    return { data: newData };
  }
}
```

2. **型定義を確認** (`@shinguakira/portfolio-api-types`):

```typescript
import type { NewDataResponse } from "@shinguakira/portfolio-api-types";
```

### 新しいUIコンポーネントを追加する

1. **Shadcn/UIコンポーネントの場合**:

```bash
npx shadcn-ui@latest add [component-name]
```

2. **カスタムコンポーネントの場合** (`components/ui/new-component.tsx`):

```typescript
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type NewComponentProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outlined";
};

export default function NewComponent({
  children,
  className,
  variant = "default"
}: NewComponentProps) {
  return (
    <div className={cn(
      "base-styles",
      variant === "outlined" && "border-2",
      className
    )}>
      {children}
    </div>
  );
}
```

### 環境変数を追加する

1. **`.env.local`に追加**:

```bash
NEXT_PUBLIC_NEW_VAR=value  # クライアント側でアクセス可能
NEW_SERVER_VAR=secret      # サーバー側のみ
```

2. **コードで使用**:

```typescript
// クライアント側
const publicVar = process.env.NEXT_PUBLIC_NEW_VAR;

// サーバー側
const serverVar = process.env.NEW_SERVER_VAR;
```

3. **Vercelにデプロイする場合**:
   - Vercelダッシュボード → Settings → Environment Variables
   - 変数を追加（Production / Preview / Development）

---

## ユニークなパターンとベストプラクティス

### 1. ロールベースアクセス制御（RBAC）

**3つのユーザーロール**:

- `normalUser`: デフォルト訪問者
- `adminUser`: 管理者（クエリパラメータ経由）
- `certification`: 認定資格検証用（`/certifications`にリダイレクト）

**実装**:

```typescript
// URLクエリパラメータでロール設定
?usr_type_a7x9z=adm_8d92x7  // 管理者
?usr_type_c3r7f=cert_5f3g2h // 認定資格

// middleware.tsで自動リダイレクト
if (role === "certification") {
  return NextResponse.redirect(new URL(`/${locale}/certifications`, req.url));
}
```

### 2. フォールバックデータ戦略

**API障害時のローカルデータ**:

```typescript
try {
  return await fetchFromPortfolioApi("endpoint");
} catch (error) {
  console.warn("API failed, using local fallback");
  const { localData } = await import("../constants/data");
  return { data: localData };
}
```

### 3. CSS変数ベースのテーマ

**デザインシステム**:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 47.4% 11.2%;
}

.dark {
  --background: 224 71% 4%;
  --foreground: 213 31% 91%;
}
```

**Tailwindで使用**:

```typescript
<div className="bg-background text-foreground" />
```

### 4. 型安全なAPI統合

**外部型パッケージ使用**:

```typescript
// フロントエンドとバックエンドで同じ型を共有
import type {
  SkillItem,
  CertificationItem,
  ApiResponse,
} from "@shinguakira/portfolio-api-types";
```

### 5. ISR（インクリメンタル静的再生成）

**静的生成 + 自動再検証**:

```typescript
export const revalidate = 604800; // 1週間ごとに再生成

// または fetch単位で
fetch(url, {
  next: { revalidate: 86400 }, // 1日
});
```

---

## デバッグとトラブルシューティング

### よくあるエラーと解決方法

#### 1. 型エラー: "Cannot find name 'XxxProps'"

**原因**: 型定義のインポート漏れ

**解決**:

```typescript
import type { SkillItem } from "@shinguakira/portfolio-api-types";

type SkillItemProps = SkillItem & {
  className?: string;
};
```

#### 2. ビルドエラー: "You're importing a component that needs useState"

**原因**: Server ComponentでClient専用機能を使用

**解決**: ファイル先頭に `'use client'` を追加

```typescript
"use client";

import { useState } from "react";
```

#### 3. 画像が表示されない

**原因**: `next.config.ts`でドメインが許可されていない

**解決**:

```typescript
// next.config.ts
export default {
  images: {
    domains: ["portfolio-api-ten-delta.vercel.app"],
  },
};
```

#### 4. 翻訳が反映されない

**チェックリスト**:

1. `public/locales/{locale}/common.json`に追加済みか
2. キーが正しいか（ドット記法: `nav.home`）
3. ブラウザキャッシュをクリア
4. 開発サーバーを再起動

#### 5. スタイルが適用されない

**チェックリスト**:

1. Tailwindクラスが正しいか
2. `globals.css`で`@tailwind`ディレクティブが読み込まれているか
3. `tailwind.config.ts`で`content`パスが正しいか
4. 動的クラス名を避ける（`text-${color}`は動作しない）

### デバッグコマンド

```bash
# 型チェック
pnpm run build  # または
npx tsc --noEmit

# リント
pnpm run lint

# フォーマット確認
pnpm run check-format

# 開発サーバー（詳細ログ）
pnpm dev --debug
```

---

## パフォーマンス最適化

### 画像最適化

```typescript
import Image from "next/image";

<Image
  src="/images/profile.jpg"
  alt="Profile"
  width={200}
  height={200}
  priority  // LCPの場合
/>
```

### フォント最適化

```typescript
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
```

### コンポーネントのメモ化

```typescript
import { memo } from "react";

const SkillItem = memo(({ name, category }: SkillItemProps) => {
  // ...
});

export default SkillItem;
```

### 動的インポート

```typescript
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("@/components/heavy"), {
  loading: () => <p>Loading...</p>,
  ssr: false  // クライアントのみ
});
```

---

## セキュリティベストプラクティス

### 環境変数の取り扱い

```typescript
// ✅ Good: サーバー側のみ
const secret = process.env.EMAIL_PASSWORD;

// ⚠️ Warning: クライアント側でもアクセス可能
const publicKey = process.env.NEXT_PUBLIC_GTM_ID;
```

### XSS対策

```typescript
// ✅ Good: エスケープされる
<div>{userInput}</div>

// ❌ Bad: dangerouslySetInnerHTML
<div dangerouslySetInnerHTML={{ __html: userInput }} />
```

### APIキーの保護

- `.env.local`をGitIgnoreに追加
- Vercelの環境変数機能を使用
- クライアント側でAPIキーを使わない

---

## デプロイメント

### Vercelへのデプロイ

1. **GitHubリポジトリと連携**:

   - Vercelダッシュボード → New Project
   - GitHubリポジトリを選択

2. **環境変数を設定**:

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx
NEXT_PUBLIC_VERCEL_PORTFOLIO_API_URL=https://...
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=app-password
```

3. **ビルド設定**:

   - Framework Preset: Next.js
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Node Version: 20.x

4. **カスタムドメイン**（オプション）:
   - Settings → Domains → Add Domain

### 本番前チェックリスト

- [ ] 型エラーなし（`npx tsc --noEmit`）
- [ ] リントエラーなし（`pnpm run lint`）
- [ ] ビルド成功（`pnpm run build`）
- [ ] 環境変数すべて設定済み
- [ ] 画像が正しく表示される
- [ ] 両言語で動作確認（en/ja）
- [ ] ダークモード動作確認
- [ ] モバイルレスポンシブ確認
- [ ] お問い合わせフォーム動作確認
- [ ] アナリティクス動作確認

---

## AIエージェントへの推奨事項

### 開発を始める前に理解すべきファイル

1. `middleware.ts` - ルーティングとロール制御
2. `services/portfolioApi.ts` - データフェッチロジック
3. `components/providers.tsx` - グローバルステート
4. `app/(localized)/[locale]/layout.tsx` - ページ構造

### コード変更時の注意点

- **型定義**: `@shinguakira/portfolio-api-types`から直接インポート（再エクスポートしない）
- **翻訳**: 英語と日本語の両方を更新
- **スタイル**: Tailwindクラスを使用（カスタムCSSは避ける）
- **パフォーマンス**: Server Componentを優先、必要な場合のみClient Component

### 質問する前に確認すること

1. 既存のコンポーネントで似た実装がないか
2. `constants/`にフォールバックデータが存在するか
3. `public/locales/`に翻訳キーが存在するか
4. `@shinguakira/portfolio-api-types`に型定義があるか

### コミット前のチェック

```bash
pnpm run lint:fix        # 自動修正
pnpm run format          # フォーマット
npx tsc --noEmit         # 型チェック
pnpm run build           # ビルド確認
```

### 作業終了時の必須チェックリスト

**すべてのコード変更後、必ず以下を実行してください:**

```bash
# 1. 型チェック
npx tsc --noEmit

# 2. Lint修正
pnpm run lint:fix

# 3. フォーマット
pnpm run format
```

**理由:**

- 型エラーを早期発見し、ランタイムエラーを防ぐ
- コードスタイルを統一し、可読性を向上
- チーム全体で一貫した品質を保つ

**注意:** これらのチェックをスキップすると、ビルドエラーやCI/CDの失敗につながります。

---

## 参考リンク

### 公式ドキュメント

- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/UI](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [React 19 RC](https://react.dev/blog/2024/04/25/react-19)

### プロジェクト固有

- **Portfolio API**: `https://portfolio-api-ten-delta.vercel.app/api`
- **型定義パッケージ**: `@shinguakira/portfolio-api-types`
- **デプロイ**: Vercel (プロジェクトID: `prj_63yj0spwD8yq2AU1au7ZGKhPPyxt`)

---

## まとめ

このプロジェクトは**Next.js 15 App Routerの最新パターン**を採用した、**本番環境レベルの個人ポートフォリオサイト**です。

**主要な特徴**:

- 🌐 完全バイリンガル（英語/日本語）
- 🎨 モダンなUI（Tailwind + Shadcn/UI）
- ⚡ 高パフォーマンス（ISR、画像最適化）
- 🔒 型安全（TypeScript + 外部型パッケージ）
- 📊 アナリティクス統合
- ♿ アクセシビリティ対応
- 📱 完全レスポンシブ

**開発の原則**:

- Server ComponentファーストでSEO最適化
- 型安全性を最優先
- フォールバック戦略でレジリエンス確保
- Tailwind CSSで一貫したスタイル
- 国際化をコアに組み込み

このガイドを参考に、効率的で保守性の高いコードを書いてください。不明点があれば、既存のコードパターンを参照するか、このドキュメントを再確認してください。

**Happy Coding! 🚀**
