import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CGOSp6sE.mjs';
import { manifest } from './manifest_1hk8ZFdw.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/ai-demo.astro.mjs');
const _page3 = () => import('./pages/api/auth/forgot-password.astro.mjs');
const _page4 = () => import('./pages/api/auth/login.astro.mjs');
const _page5 = () => import('./pages/api/auth/logout.astro.mjs');
const _page6 = () => import('./pages/api/auth/register.astro.mjs');
const _page7 = () => import('./pages/api/auth/reset-password.astro.mjs');
const _page8 = () => import('./pages/api/auth/verify.astro.mjs');
const _page9 = () => import('./pages/api/auth/verify-email.astro.mjs');
const _page10 = () => import('./pages/api/contact.astro.mjs');
const _page11 = () => import('./pages/api/hello.astro.mjs');
const _page12 = () => import('./pages/contact.astro.mjs');
const _page13 = () => import('./pages/forgot-password.astro.mjs');
const _page14 = () => import('./pages/privacy-policy.astro.mjs');
const _page15 = () => import('./pages/reset-password.astro.mjs');
const _page16 = () => import('./pages/signup.astro.mjs');
const _page17 = () => import('./pages/terms-of-service.astro.mjs');
const _page18 = () => import('./pages/test-contact.astro.mjs');
const _page19 = () => import('./pages/test-form.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/ai-demo.astro", _page2],
    ["src/pages/api/auth/forgot-password.astro", _page3],
    ["src/pages/api/auth/login.astro", _page4],
    ["src/pages/api/auth/logout.astro", _page5],
    ["src/pages/api/auth/register.astro", _page6],
    ["src/pages/api/auth/reset-password.astro", _page7],
    ["src/pages/api/auth/verify.astro", _page8],
    ["src/pages/api/auth/verify-email.astro", _page9],
    ["src/pages/api/contact.js", _page10],
    ["src/pages/api/hello.js", _page11],
    ["src/pages/contact.astro", _page12],
    ["src/pages/forgot-password.astro", _page13],
    ["src/pages/privacy-policy.astro", _page14],
    ["src/pages/reset-password.astro", _page15],
    ["src/pages/signup.astro", _page16],
    ["src/pages/terms-of-service.astro", _page17],
    ["src/pages/test-contact.astro", _page18],
    ["src/pages/test-form.astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5805d232-c606-4b5a-8c5c-78ba1ec25a7c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
