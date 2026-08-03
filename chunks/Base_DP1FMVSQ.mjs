import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, i as renderHead, r as renderComponent, j as renderSlot } from './astro/server_fxdlj3RW.mjs';
import 'piccolore';
import 'clsx';
/* empty css                              */

const $$Astro$1 = createAstro("https://example.com");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nav;
  const path = Astro2.url.pathname;
  const isActive = (href) => href === "/" ? path === "/" : path.startsWith(href);
  const links = [
    { href: "/profile", label: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB" },
    { href: "/works", label: "\u4F5C\u54C1" },
    { href: "/activities", label: "\u8AB2\u5916\u6D3B\u52D5" },
    { href: "/contact", label: "\u30B3\u30F3\u30BF\u30AF\u30C8" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="nav" data-astro-cid-dmqpwcec> <div class="wrap nav__inner" data-astro-cid-dmqpwcec> <a class="nav__logo" href="/" data-astro-cid-dmqpwcec>SATSUKI<span class="neon" data-astro-cid-dmqpwcec>®</span></a> <nav class="nav__links" data-astro-cid-dmqpwcec> ${links.map((l) => renderTemplate`<a${addAttribute(l.href, "href")}${addAttribute(["nav__link", "link-underline", { "is-active": isActive(l.href) }], "class:list")} data-astro-cid-dmqpwcec>${l.label}</a>`)} </nav> </div> </header> `;
}, "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/components/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const socials = [
    { href: "https://instagram.com/", label: "INSTAGRAM" },
    { href: "https://x.com/", label: "X" },
    { href: "https://www.behance.net/", label: "BEHANCE" }
  ];
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="wrap" data-astro-cid-sz7xmlte> <div class="footer__top" data-astro-cid-sz7xmlte> <span class="label neon" data-astro-cid-sz7xmlte>( CONTACT )</span> <span class="label" data-astro-cid-sz7xmlte>AVAILABLE FOR WORK — ${year}</span> </div> <a class="footer__cta" href="/contact" data-astro-cid-sz7xmlte>
LET'S TALK <span class="neon" data-astro-cid-sz7xmlte>↗</span> </a> <a class="footer__mail mono" href="mailto:hello@satsuki.studio" data-astro-cid-sz7xmlte>hello@satsuki.studio</a> <div class="footer__bottom" data-astro-cid-sz7xmlte> <span class="label" data-astro-cid-sz7xmlte>© ${year} GOTO SATSUKI — ALL RIGHTS RESERVED</span> <nav class="footer__soc" data-astro-cid-sz7xmlte> ${socials.map((s) => renderTemplate`<a class="mono link-underline"${addAttribute(s.href, "href")} target="_blank" rel="noopener" data-astro-cid-sz7xmlte>${s.label} ↗</a>`)} </nav> </div> </div> </footer> `;
}, "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    title = "GOTO SATSUKI \u2014 Portfolio",
    description = "Visual artist \u2014 illustration & motion. \u5F8C\u85E4\u98AF\u5E0C\u306E\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA\u3002"
  } = Astro2.props;
  return renderTemplate`<html lang="ja"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/layouts/Base.astro", void 0);

export { $$Base as $ };
