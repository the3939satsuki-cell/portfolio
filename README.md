# SATSUKI — Portfolio (Astro)

黒背景 × ブルータリスト × ネオンのポートフォリオサイト。
作品は Markdown を1ファイル足すだけで追加・管理できます。

## セットアップ

```bash
npm install      # 初回のみ
npm run dev      # http://localhost:4321 で確認
npm run build    # dist/ に本番用ファイルを書き出し
```

Node.js 18.20 以上（推奨: 20 以上）が必要です。

## サイト構成（導線）

- `/`            ホーム（自己紹介 / 代表作）
- `/profile`     プロフィール（経歴・スキル）
- `/works`       作品一覧（カテゴリ絞り込み付き）
- `/works/xxxx`  作品詳細（Markdown 1枚 = 1ページ、自動生成）
- `/activities`  課外活動（サークル等）
- `/contact`     コンタクト（SNS・メール）

## 作品の追加方法（ここが一番のポイント）

`src/content/works/` に Markdown ファイルを1枚足すだけで、一覧・詳細・カテゴリ絞り込みに自動反映されます。

```markdown
---
title: 作品タイトル
date: 2026-08-01
category: イラスト          # 一覧の絞り込みタブに自動で追加されます
tags: [キャラデザ, 水彩]
summary: 一覧と詳細に出る短い説明。
cover: /works/05.jpg        # public/works/ に画像を置く。無ければ省略でOK
video: https://www.youtube.com/embed/xxxx   # 動画作品のときだけ
featured: true              # トップの代表作に出すなら true
order: 5                    # 並び順（小さいほど先。同じなら日付順）
---

ここに本文（制作背景・コンセプトなど）を Markdown で書きます。
```

- 画像は `public/works/` に置き、`cover` のパスを合わせます。
- カテゴリは作品の `category` から自動で絞り込みタブが作られます。
- 項目名や型は `src/content.config.ts` で管理されており、書き忘れるとビルド時に警告が出ます。

## デザインの調整

配色・フォント・余白は `src/styles/global.css` の `:root` にまとまっています。
`--neon` を変えればアクセント色が全ページ一括で変わります。

## 公開（デプロイ）

GitHub にプッシュして [Vercel](https://vercel.com) か [Netlify](https://netlify.com) に接続すると、
以後は push するだけで自動デプロイされます（フレームワークは Astro を自動検出）。
`astro.config.mjs` の `site` を本番URLに書き換えてください。
