import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_fxdlj3RW.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_C1VMlRRC.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const email = "hello@satsuki.studio";
  const channels = [
    { label: "instagram", handle: "@satsuki", href: "https://instagram.com/" },
    { label: "x (twitter)", handle: "@satsuki", href: "https://x.com/" },
    { label: "behance", handle: "satsuki", href: "https://www.behance.net/" }
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Contact \u2014 GOTO SATSUKI", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="wrap head" data-astro-cid-uw5kdbxl> <span class="label" data-astro-cid-uw5kdbxl>Get in touch</span> <h1 class="display display--xl title" data-astro-cid-uw5kdbxl>say <span class="accent" data-astro-cid-uw5kdbxl>hello.</span></h1> <p class="lead sub" data-astro-cid-uw5kdbxl>お仕事のご相談・ご依頼はメール、または各SNSのDMからお気軽にどうぞ。</p> </section> <section class="wrap section reveal-up" data-astro-cid-uw5kdbxl> <a class="mail display display--sm ul"${addAttribute(`mailto:${email}`, "href")} data-astro-cid-uw5kdbxl>${email}</a> <ul class="channels" data-astro-cid-uw5kdbxl> ${channels.map((c) => renderTemplate`<li data-astro-cid-uw5kdbxl> <a class="ch" data-mag${addAttribute(c.href, "href")} target="_blank" rel="noopener" data-astro-cid-uw5kdbxl> <span class="ch__label display display--sm" data-astro-cid-uw5kdbxl>${c.label}</span> <span class="ch__handle label" data-astro-cid-uw5kdbxl>${c.handle} <span class="accent" data-astro-cid-uw5kdbxl>↗</span></span> </a> </li>`)} </ul> </section> ` })} `;
}, "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/contact.astro", void 0);

const $$file = "/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
