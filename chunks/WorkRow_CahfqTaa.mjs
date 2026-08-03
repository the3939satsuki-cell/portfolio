import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_fxdlj3RW.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://example.com");
const $$WorkRow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorkRow;
  const { href, num, name, category, cover, grad } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="work-item"${addAttribute(href, "href")}${addAttribute(num, "data-num")}${addAttribute(grad, "data-grad")}${addAttribute(cover, "data-cover")}> <span class="work-item__num">${num}</span> <span class="work-item__name">${name}</span> <span class="work-item__cat label">${category}</span> </a>`;
}, "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/components/WorkRow.astro", void 0);

export { $$WorkRow as $ };
