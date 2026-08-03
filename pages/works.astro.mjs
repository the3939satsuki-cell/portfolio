import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_fxdlj3RW.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_C1VMlRRC.mjs';
import { $ as $$WorkRow } from '../chunks/WorkRow_CahfqTaa.mjs';
import { g as getWorks } from '../chunks/works_CA2uQwYs.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const works = await getWorks();
  const categories = ["all", ...Array.from(new Set(works.map((w) => w.entry.data.category)))];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Works \u2014 GOTO SATSUKI", "data-astro-cid-3vzc7iem": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="wrap head" data-astro-cid-3vzc7iem> <span class="label" data-astro-cid-3vzc7iem>Index — ${String(works.length).padStart(2, "0")} projects</span> <h1 class="display display--xl" data-astro-cid-3vzc7iem>works</h1> <div class="filters" role="tablist" data-astro-cid-3vzc7iem> ${categories.map((c, i) => renderTemplate`<button${addAttribute(["filter", { "is-active": i === 0 }], "class:list")}${addAttribute(c, "data-filter")} data-astro-cid-3vzc7iem>${c}</button>`)} </div> </section> <section class="wrap" data-astro-cid-3vzc7iem> <ul class="worklist" id="list" data-astro-cid-3vzc7iem> ${works.map((w) => renderTemplate`${renderComponent($$result2, "WorkRow", $$WorkRow, { "href": `/works/${w.entry.id}`, "num": w.num, "name": w.entry.data.title, "category": w.entry.data.category, "cover": w.entry.data.cover, "grad": w.grad, "data-astro-cid-3vzc7iem": true })}`)} </ul> <p class="empty lead" id="empty" hidden data-astro-cid-3vzc7iem>該当する作品がありません。</p> </section> ` })} ${renderScript($$result, "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/works/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/works/index.astro", void 0);

const $$file = "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/works/index.astro";
const $$url = "/works";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
