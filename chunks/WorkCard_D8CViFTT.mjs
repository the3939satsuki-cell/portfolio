import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_fxdlj3RW.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://example.com");
const $$WorkCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorkCard;
  const { href, num, title, category, cover } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="card"${addAttribute(href, "href")}${addAttribute(category, "data-category")} data-astro-cid-r7kjq4ip> <div class="card__meta" data-astro-cid-r7kjq4ip> <span class="card__num neon" data-astro-cid-r7kjq4ip>${num}</span> <span class="label" data-astro-cid-r7kjq4ip>${category}</span> </div> <div class="card__media" data-astro-cid-r7kjq4ip> ${cover ? renderTemplate`<img${addAttribute(cover, "src")}${addAttribute(title, "alt")} loading="lazy" data-astro-cid-r7kjq4ip>` : renderTemplate`<span class="card__ph mono" data-astro-cid-r7kjq4ip>NO IMAGE</span>`} </div> <div class="card__foot" data-astro-cid-r7kjq4ip> <span class="card__title" data-astro-cid-r7kjq4ip>${title}</span> <span class="card__arrow neon" data-astro-cid-r7kjq4ip>↗</span> </div> </a> `;
}, "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/components/WorkCard.astro", void 0);

export { $$WorkCard as $ };
