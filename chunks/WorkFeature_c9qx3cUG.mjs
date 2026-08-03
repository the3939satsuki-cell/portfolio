import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_fxdlj3RW.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://example.com");
const $$WorkFeature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorkFeature;
  const { href, num, title, category, cover, summary, aspect = "wide" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="feature reveal"${addAttribute(href, "href")}${addAttribute(category, "data-category")} data-astro-cid-qhl6ayxl> <div${addAttribute(["frame", aspect === "cine" ? "frame--cine" : "frame--wide"], "class:list")} data-astro-cid-qhl6ayxl> ${cover ? renderTemplate`<img${addAttribute(cover, "src")}${addAttribute(title, "alt")} loading="lazy" data-astro-cid-qhl6ayxl>` : renderTemplate`<span class="feature__ph label" data-astro-cid-qhl6ayxl>No image</span>`} <span class="feature__num label" data-astro-cid-qhl6ayxl>${num}</span> </div> <div class="feature__cap" data-astro-cid-qhl6ayxl> <div data-astro-cid-qhl6ayxl> <h3 class="feature__title display display--sm" data-astro-cid-qhl6ayxl>${title}</h3> ${summary && renderTemplate`<p class="feature__sum muted" data-astro-cid-qhl6ayxl>${summary}</p>`} </div> <div class="feature__meta" data-astro-cid-qhl6ayxl> <span class="label" data-astro-cid-qhl6ayxl>${category}</span> <span class="feature__view label accent" data-astro-cid-qhl6ayxl>View ↗</span> </div> </div> </a> `;
}, "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/components/WorkFeature.astro", void 0);

export { $$WorkFeature as $ };
