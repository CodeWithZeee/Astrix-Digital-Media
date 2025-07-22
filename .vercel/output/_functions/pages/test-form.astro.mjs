/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_DzPnjQAP.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$TestForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html> ${maybeRenderHead()}<body> <form action="/api/contact" method="POST" id="contact_form"> <input name="firstName" value="Test"> <input name="lastName" value="User"> <input name="email" value="test@example.com"> <input name="phone" value="1234567890"> <input name="company" value="TestCo"> <input name="industry" value="Other"> <input name="message" value="Hello"> <button type="submit">Submit</button> </form> </body></html>`;
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/test-form.astro", void 0);

const $$file = "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/test-form.astro";
const $$url = "/test-form";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TestForm,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
