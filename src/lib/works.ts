import { getCollection, type CollectionEntry } from 'astro:content';

// 作品プレビュー画像が無いときにホバーで表示するグラデーション
const GRADS = [
  'linear-gradient(135deg,#b06ab3,#4568dc)',
  'linear-gradient(135deg,#00c6ff,#0072ff)',
  'linear-gradient(135deg,#a8ff78,#56ab2f)',
  'linear-gradient(135deg,#ff9966,#ff5e62)',
  'linear-gradient(135deg,#7f7fd5,#86a8e7)',
  'linear-gradient(135deg,#8e9eab,#414345)',
];
export const grad = (i: number) => GRADS[i % GRADS.length];

export interface WorkItem {
  entry: CollectionEntry<'works'>;
  num: string;
  grad: string;
}

export async function getWorks(): Promise<WorkItem[]> {
  const all = (await getCollection('works')).sort((a, b) => {
    if (a.data.order !== b.data.order) return a.data.order - b.data.order;
    return b.data.date.valueOf() - a.data.date.valueOf();
  });
  return all.map((entry, i) => ({ entry, num: String(i + 1).padStart(2, '0'), grad: grad(i) }));
}
