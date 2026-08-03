import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_fxdlj3RW.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///sessions/pensive-magical-feynman/mnt/outputs/portfolio/","cacheDir":"file:///sessions/pensive-magical-feynman/mnt/outputs/portfolio/node_modules/.astro/","outDir":"file:///sessions/pensive-magical-feynman/mnt/outputs/portfolio/dist/","srcDir":"file:///sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/","publicDir":"file:///sessions/pensive-magical-feynman/mnt/outputs/portfolio/public/","buildClientDir":"file:///sessions/pensive-magical-feynman/mnt/outputs/portfolio/dist/client/","buildServerDir":"file:///sessions/pensive-magical-feynman/mnt/outputs/portfolio/dist/server/","adapterName":"","routes":[{"file":"file:///sessions/pensive-magical-feynman/mnt/outputs/portfolio/dist/activities/index.html","links":[],"scripts":[],"styles":[{"type":"inline","content":".head[data-astro-cid-yavo4qgd]{padding-block:clamp(140px,22vh,240px) 0}.head[data-astro-cid-yavo4qgd] .display[data-astro-cid-yavo4qgd]{margin-top:12px;text-transform:none}.section[data-astro-cid-yavo4qgd]{padding-block:clamp(44px,8vh,90px) clamp(72px,12vh,150px)}.list[data-astro-cid-yavo4qgd]{list-style:none}.row[data-astro-cid-yavo4qgd]{display:flex;gap:clamp(24px,5vw,72px);padding:clamp(34px,5vh,54px) 0;border-top:1px solid var(--line)}.row__num[data-astro-cid-yavo4qgd]{color:var(--accent)}.row__name[data-astro-cid-yavo4qgd]{text-transform:none}.row__top[data-astro-cid-yavo4qgd]{display:flex;align-items:baseline;justify-content:space-between;gap:16px}.row__role[data-astro-cid-yavo4qgd]{margin:14px 0}.row__desc[data-astro-cid-yavo4qgd]{color:#33322d;max-width:52ch}@media(max-width:600px){.row[data-astro-cid-yavo4qgd]{gap:16px}.row__top[data-astro-cid-yavo4qgd]{flex-direction:column;gap:6px}}\n"},{"type":"external","src":"/_astro/activities.CHLq4gj-.css"}],"routeData":{"route":"/activities","isIndex":false,"type":"page","pattern":"^\\/activities\\/?$","segments":[[{"content":"activities","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/activities.astro","pathname":"/activities","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/pensive-magical-feynman/mnt/outputs/portfolio/dist/contact/index.html","links":[],"scripts":[],"styles":[{"type":"inline","content":".head[data-astro-cid-uw5kdbxl]{padding-block:clamp(140px,22vh,240px) 0}.title[data-astro-cid-uw5kdbxl]{margin:12px 0 26px}.sub[data-astro-cid-uw5kdbxl]{max-width:34ch}.section[data-astro-cid-uw5kdbxl]{padding-block:clamp(44px,8vh,90px) clamp(72px,12vh,150px);border-top:1px solid var(--line);margin-top:44px}.mail[data-astro-cid-uw5kdbxl]{display:inline-block;padding-top:8px}.channels[data-astro-cid-uw5kdbxl]{list-style:none;margin-top:clamp(44px,8vh,90px)}.ch[data-astro-cid-uw5kdbxl]{display:flex;align-items:baseline;justify-content:space-between;gap:20px;padding:clamp(22px,4vh,38px) 0;border-top:1px solid var(--line)}.ch__label[data-astro-cid-uw5kdbxl]{transition:color .3s var(--ease);text-transform:lowercase}.ch[data-astro-cid-uw5kdbxl]:hover .ch__label[data-astro-cid-uw5kdbxl]{color:var(--accent)}@media(max-width:560px){.ch[data-astro-cid-uw5kdbxl]{flex-direction:column;align-items:flex-start;gap:6px}}\n"},{"type":"external","src":"/_astro/activities.CHLq4gj-.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/pensive-magical-feynman/mnt/outputs/portfolio/dist/profile/index.html","links":[],"scripts":[],"styles":[{"type":"inline","content":".head[data-astro-cid-wwes6yjo]{padding-block:clamp(140px,22vh,240px) 0}.head[data-astro-cid-wwes6yjo] .display[data-astro-cid-wwes6yjo]{margin-top:12px}.grid2[data-astro-cid-wwes6yjo]{display:grid;grid-template-columns:1.7fr 1fr;gap:clamp(40px,6vw,96px);padding-block:clamp(52px,9vh,100px);border-top:1px solid var(--line);margin-top:44px}.bio__lead[data-astro-cid-wwes6yjo]{font-family:var(--font-display);font-weight:500;font-size:clamp(1.3rem,2.4vw,1.9rem);line-height:1.4;letter-spacing:-.02em;margin-bottom:22px}.bio[data-astro-cid-wwes6yjo] p[data-astro-cid-wwes6yjo]{max-width:46ch;margin-bottom:20px;color:#4a4842}.skills[data-astro-cid-wwes6yjo] ul[data-astro-cid-wwes6yjo]{list-style:none;margin-top:20px}.skills[data-astro-cid-wwes6yjo] li[data-astro-cid-wwes6yjo]{font-size:16px;padding:15px 0;border-bottom:1px solid var(--line);color:#33322d}.section[data-astro-cid-wwes6yjo]{padding-block:0 clamp(72px,12vh,150px)}.timeline[data-astro-cid-wwes6yjo]{list-style:none;margin-top:22px}.tl[data-astro-cid-wwes6yjo]{display:flex;gap:clamp(20px,4vw,60px);padding:28px 0;border-top:1px solid var(--line);align-items:baseline}.tl__year[data-astro-cid-wwes6yjo]{color:var(--accent);min-width:120px}.tl__text[data-astro-cid-wwes6yjo]{color:#33322d}@media(max-width:720px){.grid2[data-astro-cid-wwes6yjo]{grid-template-columns:1fr}.tl[data-astro-cid-wwes6yjo]{flex-direction:column;gap:8px}}\n"},{"type":"external","src":"/_astro/activities.CHLq4gj-.css"}],"routeData":{"route":"/profile","isIndex":false,"type":"page","pattern":"^\\/profile\\/?$","segments":[[{"content":"profile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/profile.astro","pathname":"/profile","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/pensive-magical-feynman/mnt/outputs/portfolio/dist/works/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/activities.CHLq4gj-.css"},{"type":"inline","content":".head[data-astro-cid-3vzc7iem]{padding-block:clamp(140px,22vh,240px) 0}.head[data-astro-cid-3vzc7iem] .display[data-astro-cid-3vzc7iem]{margin:12px 0 36px}.filters[data-astro-cid-3vzc7iem]{display:flex;flex-wrap:wrap;gap:24px;padding-bottom:4px;border-bottom:1px solid var(--line)}.filter[data-astro-cid-3vzc7iem]{background:none;border:none;cursor:pointer;padding:0 0 12px;font-family:var(--font-mono);font-size:13px;letter-spacing:.08em;text-transform:lowercase;color:var(--muted);position:relative;transition:color .3s var(--ease)}.filter[data-astro-cid-3vzc7iem]:after{content:\"\";position:absolute;left:0;bottom:-1px;width:100%;height:2px;background:var(--accent);transform:scaleX(0);transform-origin:left;transition:transform .4s var(--ease)}.filter[data-astro-cid-3vzc7iem]:hover,.filter[data-astro-cid-3vzc7iem].is-active{color:var(--ink)}.filter[data-astro-cid-3vzc7iem].is-active:after{transform:scaleX(1)}.worklist[data-astro-cid-3vzc7iem]{margin-top:8px;padding-bottom:clamp(60px,10vh,120px)}.empty[data-astro-cid-3vzc7iem]{padding:80px 0}\n"}],"routeData":{"route":"/works","isIndex":true,"type":"page","pattern":"^\\/works\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/works/index.astro","pathname":"/works","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/pensive-magical-feynman/mnt/outputs/portfolio/dist/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/activities.CHLq4gj-.css"},{"type":"inline","content":".hero[data-astro-cid-j7pv25f6]{padding:clamp(150px,22vh,260px) 0 clamp(56px,9vh,110px)}.hero__eyebrow[data-astro-cid-j7pv25f6]{display:block;margin-bottom:26px}.hero__title[data-astro-cid-j7pv25f6]{margin:0}.hero__intro[data-astro-cid-j7pv25f6]{margin-top:34px}.works[data-astro-cid-j7pv25f6]{padding:clamp(24px,4vh,60px) 0 clamp(60px,10vh,120px);border-top:1px solid var(--line)}.works__head[data-astro-cid-j7pv25f6]{display:flex;justify-content:space-between;align-items:baseline;padding:24px 0 6px}.all[data-astro-cid-j7pv25f6]{display:inline-block;margin-top:30px}.about[data-astro-cid-j7pv25f6]{padding-block:clamp(64px,11vh,140px)}.about__t[data-astro-cid-j7pv25f6]{max-width:32ch}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/lib/works.ts",{"propagation":"in-tree","containsHead":false}],["/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/works/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/works/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/works/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/works/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/activities.astro",{"propagation":"none","containsHead":true}],["/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/profile.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/activities@_@astro":"pages/activities.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/profile@_@astro":"pages/profile.astro.mjs","\u0000@astro-page:src/pages/works/[slug]@_@astro":"pages/works/_slug_.astro.mjs","\u0000@astro-page:src/pages/works/index@_@astro":"pages/works.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astrojs-manifest":"manifest_Bqm4wnZi.mjs","/sessions/pensive-magical-feynman/mnt/outputs/portfolio/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/sessions/pensive-magical-feynman/mnt/outputs/portfolio/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CmTbZn2h.mjs","/sessions/pensive-magical-feynman/mnt/outputs/portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_lhLpRCGU.mjs","/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/layouts/Base.astro?astro&type=script&index=0&lang.ts":"_astro/Base.astro_astro_type_script_index_0_lang.2oBXMdJE.js","/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/works/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.RMtPQzmt.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/layouts/Base.astro?astro&type=script&index=0&lang.ts","const x=window.matchMedia(\"(pointer:fine)\").matches,c=document.getElementById(\"revealImg\"),i=document.getElementById(\"revealNum\"),l=document.getElementById(\"cursor\"),d=document.getElementById(\"cursorTxt\"),s={x:innerWidth/2,y:innerHeight/2},r={x:s.x,y:s.y},o={x:s.x,y:s.y};x&&document.body.classList.add(\"cur\");window.addEventListener(\"mousemove\",e=>{s.x=e.clientX,s.y=e.clientY});document.querySelectorAll(\".work-item\").forEach(e=>{e.addEventListener(\"mouseenter\",()=>{const t=e.dataset.cover;c.style.background=t?`#111 url(\"${t}\") center/cover`:e.dataset.grad||\"#111\",i.textContent=e.dataset.num||\"\",i.style.display=t?\"none\":\"grid\",c.classList.add(\"show\"),l.classList.add(\"big\"),d.style.opacity=\"1\"}),e.addEventListener(\"mouseleave\",()=>{c.classList.remove(\"show\"),l.classList.remove(\"big\"),d.style.opacity=\"0\"})});document.querySelectorAll(\"[data-mag]\").forEach(e=>{e.addEventListener(\"mousemove\",t=>{const n=e.getBoundingClientRect(),m=t.clientX-(n.left+n.width/2),u=t.clientY-(n.top+n.height/2);e.style.transform=`translate(${m*.4}px, ${u*.5}px)`}),e.addEventListener(\"mouseleave\",()=>{e.style.transform=\"\"})});const y=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add(\"in\"),y.unobserve(t.target))})},{threshold:.14,rootMargin:\"0px 0px -8% 0px\"});document.querySelectorAll(\".reveal-up\").forEach(e=>y.observe(e));const a=(e,t,n)=>e+(t-e)*n;(function e(){r.x=a(r.x,s.x,.12),r.y=a(r.y,s.y,.12),c.style.left=r.x+\"px\",c.style.top=r.y+\"px\",o.x=a(o.x,s.x,.25),o.y=a(o.y,s.y,.25),l.style.left=o.x+\"px\",l.style.top=o.y+\"px\",d.style.left=o.x+\"px\",d.style.top=o.y+\"px\",requestAnimationFrame(e)})();"],["/sessions/pensive-magical-feynman/mnt/outputs/portfolio/src/pages/works/index.astro?astro&type=script&index=0&lang.ts","const s=document.querySelectorAll(\".filter\"),r=document.querySelectorAll(\"#list .work-item\"),n=document.getElementById(\"empty\");s.forEach(e=>{e.addEventListener(\"click\",()=>{const c=e.dataset.filter;s.forEach(t=>t.classList.toggle(\"is-active\",t===e));let o=0;r.forEach(t=>{const i=t.querySelector(\".work-item__cat\")?.textContent?.trim(),l=c===\"all\"||i===c;t.style.display=l?\"\":\"none\",l&&o++}),n&&(n.hidden=o!==0)})});"]],"assets":["/file:///sessions/pensive-magical-feynman/mnt/outputs/portfolio/dist/activities/index.html","/file:///sessions/pensive-magical-feynman/mnt/outputs/portfolio/dist/contact/index.html","/file:///sessions/pensive-magical-feynman/mnt/outputs/portfolio/dist/profile/index.html","/file:///sessions/pensive-magical-feynman/mnt/outputs/portfolio/dist/works/index.html","/file:///sessions/pensive-magical-feynman/mnt/outputs/portfolio/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"tm0crRn0wLApBuNSobZyKlQ9xjB0tfcThOjh4vlv1Ko="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
