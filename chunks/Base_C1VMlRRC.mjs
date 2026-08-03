import { c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, d as createAstro, i as renderHead, r as renderComponent, j as renderSlot, e as renderScript } from './astro/server_fxdlj3RW.mjs';
import 'piccolore';
import 'clsx';
/* empty css                              */

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { href: "/works", label: "works" },
    { href: "/profile", label: "profile" },
    { href: "/activities", label: "activities" },
    { href: "/contact", label: "contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="nav" data-astro-cid-dmqpwcec> <div class="wrap nav__inner" data-astro-cid-dmqpwcec> <a class="nav__brand" href="/" data-astro-cid-dmqpwcec>後藤颯希<small data-astro-cid-dmqpwcec>SATSUKI</small></a> <nav class="nav__links" data-astro-cid-dmqpwcec> ${links.map((l) => renderTemplate`<a data-mag${addAttribute(l.href, "href")} data-astro-cid-dmqpwcec>${l.label}</a>`)} </nav> </div> </header> `;
}, "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/components/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const socials = [
    { href: "https://instagram.com/", label: "instagram" },
    { href: "https://x.com/", label: "x" },
    { href: "https://www.behance.net/", label: "behance" }
  ];
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="wrap reveal-up" data-astro-cid-sz7xmlte> <span class="label" data-astro-cid-sz7xmlte>Get in touch</span> <a class="footer__cta display display--xl" href="/contact" data-astro-cid-sz7xmlte>let's make something <span class="accent" data-astro-cid-sz7xmlte>together.</span></a> <div class="footer__row" data-astro-cid-sz7xmlte> <span class="label" data-astro-cid-sz7xmlte>© ${year} goto satsuki</span> <nav class="footer__soc" data-astro-cid-sz7xmlte> ${socials.map((s) => renderTemplate`<a data-mag${addAttribute(s.href, "href")} target="_blank" rel="noopener" data-astro-cid-sz7xmlte>${s.label}</a>`)} </nav> </div> </div> </footer> `;
}, "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    title = "GOTO SATSUKI \u2014 Portfolio",
    description = "Visual artist \u2014 illustration & motion. \u5F8C\u85E4\u98AF\u5E0C\u306E\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA\u3002"
  } = Astro2.props;
  return renderTemplate`<html lang="ja"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} <div class="reveal-img" id="revealImg"><span class="reveal-img__num" id="revealNum"></span></div> <div class="cursor" id="cursor"></div> <div class="cursor-txt" id="cursorTxt">view</div> ${renderScript($$result, "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/layouts/Base.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/layouts/Base.astro", void 0);

export { $$Base as $ };
