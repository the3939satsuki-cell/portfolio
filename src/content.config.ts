import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// 作品コレクション：src/content/works/ に Markdown を1ファイル置くだけで
// 一覧・詳細ページが自動生成されます。項目は下記スキーマで型チェックされます。
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),            // 'design' / 'movie' / 'illustration'（一覧はこの区分で絞り込み。区分は src/lib/works.ts の CATEGORIES で管理）
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),  // 一覧・詳細に出る短い説明
    cover: z.string().optional(),    // /public 配下の画像パス 例: '/works/01.jpg'
    gallery: z.array(z.string()).default([]), // 詳細ページに並べる複数画像 例: ['/works/01-a.jpg','/works/01-b.jpg']
    video: z.string().optional(),    // 動画作品のとき YouTube/Vimeo の埋め込みURL
    featured: z.boolean().default(false), // トップの代表作に出すか
    order: z.number().default(0),    // 並び順（小さいほど先。0なら日付順）
  }),
});

export const collections = { works };
