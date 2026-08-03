import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_fxdlj3RW.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_C1VMlRRC.mjs';
import { $ as $$WorkRow } from '../chunks/WorkRow_CahfqTaa.mjs';
import { g as getWorks } from '../chunks/works_CA2uQwYs.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const works = await getWorks();
  const featured = works.filter((w) => w.entry.data.featured);
  const list = (featured.length ? featured : works).slice(0, 6);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="hero" data-astro-cid-j7pv25f6> <div class="wrap" data-astro-cid-j7pv25f6> <span class="label hero__eyebrow" data-astro-cid-j7pv25f6>Visual artist — portfolio 2026</span> <h1 class="display display--xl hero__title" data-astro-cid-j7pv25f6>illustration<br data-astro-cid-j7pv25f6>&amp; motion, <span class="accent" data-astro-cid-j7pv25f6>by satsuki.</span></h1> <p class="lead hero__intro" data-astro-cid-j7pv25f6>静止画と動きの境界で、思わず目が留まるビジュアルを。カーソルを作品名に重ねると、作品が現れます。</p> </div> </header> <section class="works" data-astro-cid-j7pv25f6> <div class="wrap" data-astro-cid-j7pv25f6> <div class="works__head" data-astro-cid-j7pv25f6> <span class="label" data-astro-cid-j7pv25f6>Selected works</span> <span class="label" data-astro-cid-j7pv25f6>( ${String(list.length).padStart(2, "0")} )</span> </div> <ul class="worklist" data-astro-cid-j7pv25f6> ${list.map((w) => renderTemplate`${renderComponent($$result2, "WorkRow", $$WorkRow, { "href": `/works/${w.entry.id}`, "num": w.num, "name": w.entry.data.title, "category": w.entry.data.category, "cover": w.entry.data.cover, "grad": w.grad, "data-astro-cid-j7pv25f6": true })}`)} </ul> <a class="all label ul" href="/works" data-astro-cid-j7pv25f6>all works ↗</a> </div> </section> <div class="marquee" data-astro-cid-j7pv25f6> <div class="marquee__t" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>available for work <b data-astro-cid-j7pv25f6>✦</b> illustration <b data-astro-cid-j7pv25f6>✦</b> motion <b data-astro-cid-j7pv25f6>✦</b> art direction <b data-astro-cid-j7pv25f6>✦</b> </span> <span data-astro-cid-j7pv25f6>available for work <b data-astro-cid-j7pv25f6>✦</b> illustration <b data-astro-cid-j7pv25f6>✦</b> motion <b data-astro-cid-j7pv25f6>✦</b> art direction <b data-astro-cid-j7pv25f6>✦</b> </span> </div> </div> <section class="wrap about reveal-up" data-astro-cid-j7pv25f6> <p class="lead about__t" data-astro-cid-j7pv25f6>イラストとモーションを軸に、色と余韻でひとつの世界を立ち上げるビジュアルアーティスト。
<a class="ul accent" href="/profile" data-astro-cid-j7pv25f6>プロフィールを見る ↗</a></p> </section> ` })} `;
}, "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/index.astro", void 0);

const $$file = "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
