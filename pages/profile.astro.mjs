import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_fxdlj3RW.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_C1VMlRRC.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Profile = createComponent(($$result, $$props, $$slots) => {
  const skills = [
    "\u30A4\u30E9\u30B9\u30C8\u30EC\u30FC\u30B7\u30E7\u30F3",
    "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u30C7\u30B6\u30A4\u30F3",
    "\u30E2\u30FC\u30B7\u30E7\u30F3\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9",
    "\u30A2\u30FC\u30C8\u30C7\u30A3\u30EC\u30AF\u30B7\u30E7\u30F3",
    "Photoshop",
    "Illustrator",
    "After Effects",
    "Procreate"
  ];
  const timeline = [
    { year: "2026", text: "\u30D5\u30EA\u30FC\u30E9\u30F3\u30B9\u306E\u30D3\u30B8\u30E5\u30A2\u30EB\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u3068\u3057\u3066\u6D3B\u52D5\u958B\u59CB" },
    { year: "2025", text: "\u5B66\u5185\u5916\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u4F5C\u54C1\u5236\u4F5C\u30FB\u5C55\u793A" },
    { year: "2024", text: "\u30A4\u30E9\u30B9\u30C8\u30FB\u30E2\u30FC\u30B7\u30E7\u30F3\u5236\u4F5C\u3092\u672C\u683C\u7684\u306B\u30B9\u30BF\u30FC\u30C8" }
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Profile \u2014 GOTO SATSUKI", "data-astro-cid-wwes6yjo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="wrap head" data-astro-cid-wwes6yjo> <span class="label" data-astro-cid-wwes6yjo>About</span> <h1 class="display display--xl" data-astro-cid-wwes6yjo>profile</h1> </section> <section class="wrap grid2" data-astro-cid-wwes6yjo> <div class="bio reveal-up" data-astro-cid-wwes6yjo> <p class="bio__lead" data-astro-cid-wwes6yjo>後藤颯希（さつき）。イラストとモーションを軸に活動するビジュアルアーティストです。</p> <p data-astro-cid-wwes6yjo>静止画と動きの境界にあるビジュアルづくりが好きで、鮮やかな色と大胆な構図で「思わず目が留まる」表現を追いかけています。ここに自己紹介の文章を自由に書き換えてください。</p> </div> <aside class="skills reveal-up" data-astro-cid-wwes6yjo> <span class="label" data-astro-cid-wwes6yjo>Skills</span> <ul data-astro-cid-wwes6yjo>${skills.map((s) => renderTemplate`<li data-astro-cid-wwes6yjo>${s}</li>`)}</ul> </aside> </section> <section class="wrap section reveal-up" data-astro-cid-wwes6yjo> <span class="label" data-astro-cid-wwes6yjo>Timeline</span> <ul class="timeline" data-astro-cid-wwes6yjo> ${timeline.map((t) => renderTemplate`<li class="tl" data-astro-cid-wwes6yjo> <span class="tl__year display display--sm" data-astro-cid-wwes6yjo>${t.year}</span> <span class="tl__text" data-astro-cid-wwes6yjo>${t.text}</span> </li>`)} </ul> </section> ` })} `;
}, "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/profile.astro", void 0);

const $$file = "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/profile.astro";
const $$url = "/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profile,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
