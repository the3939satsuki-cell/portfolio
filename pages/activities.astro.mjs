import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_fxdlj3RW.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_C1VMlRRC.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Activities = createComponent(($$result, $$props, $$slots) => {
  const activities = [
    { name: "\u30A4\u30E9\u30B9\u30C8\u30B5\u30FC\u30AF\u30EB", role: "\u4E3B\u5BB0 / \u30E1\u30A4\u30F3\u30D3\u30B8\u30E5\u30A2\u30EB\u62C5\u5F53", period: "2024\u2014", desc: "\u90E8\u8A8C\u306E\u8868\u7D19\u30FB\u5E83\u5831\u7269\u306E\u30C7\u30B6\u30A4\u30F3\u3092\u62C5\u5F53\u3002" },
    { name: "\u6620\u50CF\u5236\u4F5C\u30C1\u30FC\u30E0", role: "\u30E2\u30FC\u30B7\u30E7\u30F3\u62C5\u5F53", period: "2025\u2014", desc: "\u30A4\u30D9\u30F3\u30C8\u7528\u306E\u30AA\u30FC\u30D7\u30CB\u30F3\u30B0\u6620\u50CF\u306A\u3069\u3092\u5236\u4F5C\u3002" },
    { name: "\u5B66\u5185\u5C55\u793A", role: "\u51FA\u5C55", period: "2025", desc: "\u30B0\u30EB\u30FC\u30D7\u5C55\u306B\u30A4\u30E9\u30B9\u30C8\u4F5C\u54C1\u3092\u51FA\u5C55\u3002" }
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Activities \u2014 GOTO SATSUKI", "data-astro-cid-yavo4qgd": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="wrap head" data-astro-cid-yavo4qgd> <span class="label" data-astro-cid-yavo4qgd>Extracurricular</span> <h1 class="display display--xl" data-astro-cid-yavo4qgd>課外活動</h1> </section> <section class="wrap section" data-astro-cid-yavo4qgd> <ul class="list" data-astro-cid-yavo4qgd> ${activities.map((a, i) => renderTemplate`<li class="row reveal-up" data-astro-cid-yavo4qgd> <span class="row__num display display--sm" data-astro-cid-yavo4qgd>${String(i + 1).padStart(2, "0")}</span> <div class="row__body" data-astro-cid-yavo4qgd> <div class="row__top" data-astro-cid-yavo4qgd> <h2 class="row__name display display--sm" data-astro-cid-yavo4qgd>${a.name}</h2> <span class="label" data-astro-cid-yavo4qgd>${a.period}</span> </div> <p class="row__role label" data-astro-cid-yavo4qgd>${a.role}</p> <p class="row__desc" data-astro-cid-yavo4qgd>${a.desc}</p> </div> </li>`)} </ul> </section> ` })} `;
}, "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/activities.astro", void 0);

const $$file = "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/activities.astro";
const $$url = "/activities";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Activities,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
