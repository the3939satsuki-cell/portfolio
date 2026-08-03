import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_fxdlj3RW.mjs';
import 'piccolore';
import { $ as $$Base } from '../../chunks/Base_C1VMlRRC.mjs';
import { r as renderEntry, g as getWorks } from '../../chunks/works_CA2uQwYs.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const works = await getWorks();
  return works.map((w, i) => {
    const next = works[(i + 1) % works.length];
    return { params: { slug: w.entry.id }, props: { entry: w.entry, num: w.num, next } };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry, num, next } = Astro2.props;
  const { Content } = await renderEntry(entry);
  const d = entry.data;
  const dateStr = d.date.toLocaleDateString("ja-JP", { year: "numeric", month: "long" });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${d.title} \u2014 GOTO SATSUKI`, "description": d.summary, "data-astro-cid-4vgqnzw6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article data-astro-cid-4vgqnzw6> <header class="wrap head" data-astro-cid-4vgqnzw6> <a class="label ul back" href="/works" data-astro-cid-4vgqnzw6>← works</a> <span class="label num" data-astro-cid-4vgqnzw6>${num}</span> <h1 class="display display--xl title" data-astro-cid-4vgqnzw6>${d.title}</h1> <div class="meta" data-astro-cid-4vgqnzw6> <span class="label" data-astro-cid-4vgqnzw6><span class="accent" data-astro-cid-4vgqnzw6>category</span> — ${d.category}</span> <span class="label" data-astro-cid-4vgqnzw6><span class="accent" data-astro-cid-4vgqnzw6>date</span> — ${dateStr}</span> ${d.tags.length > 0 && renderTemplate`<span class="label" data-astro-cid-4vgqnzw6><span class="accent" data-astro-cid-4vgqnzw6>tags</span> — ${d.tags.join(", ")}</span>`} </div> </header> <div class="wrap" data-astro-cid-4vgqnzw6> <div class="media reveal-up" data-astro-cid-4vgqnzw6> ${d.video ? renderTemplate`<div class="media__v" data-astro-cid-4vgqnzw6><iframe${addAttribute(d.video, "src")}${addAttribute(d.title, "title")} allowfullscreen loading="lazy" data-astro-cid-4vgqnzw6></iframe></div>` : d.cover ? renderTemplate`<img${addAttribute(d.cover, "src")}${addAttribute(d.title, "alt")} data-astro-cid-4vgqnzw6>` : renderTemplate`<span class="media__ph label" data-astro-cid-4vgqnzw6>no image — /public/works/ に画像を置いてください</span>`} </div> ${d.summary && renderTemplate`<p class="lead sum reveal-up" data-astro-cid-4vgqnzw6>${d.summary}</p>`} <div class="prose reveal-up" data-astro-cid-4vgqnzw6>${renderComponent($$result2, "Content", Content, { "data-astro-cid-4vgqnzw6": true })}</div> </div> <a class="next"${addAttribute(`/works/${next.entry.id}`, "href")} data-astro-cid-4vgqnzw6> <div class="wrap" data-astro-cid-4vgqnzw6> <span class="label" data-astro-cid-4vgqnzw6>next project</span> <span class="next__title display display--sm" data-astro-cid-4vgqnzw6>${next.entry.data.title} <span class="accent" data-astro-cid-4vgqnzw6>↗</span></span> </div> </a> </article> ` })} `;
}, "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/works/[slug].astro", void 0);

const $$file = "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/works/[slug].astro";
const $$url = "/works/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
