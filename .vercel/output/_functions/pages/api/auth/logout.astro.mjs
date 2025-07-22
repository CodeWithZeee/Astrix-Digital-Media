/* empty css                                       */
import { c as createComponent, r as renderTemplate } from '../../../chunks/astro/server_DzPnjQAP.mjs';
import 'kleur/colors';
import 'clsx';
import { s as sessionService } from '../../../chunks/database_EbR-lz9c.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "") || request.cookies.get("auth_token")?.value;
    if (token) {
      await sessionService.deleteSession(token);
    }
    return new Response(JSON.stringify({
      success: true,
      message: "Logged out successfully"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "auth_token=; HttpOnly; Secure; SameSite=Strict; Max-Age=0"
      }
    });
  } catch (error) {
    console.error("Logout error:", error);
    return new Response(JSON.stringify({
      error: "Internal server error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
const $$Logout = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/api/auth/logout.astro", void 0);

const $$file = "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/api/auth/logout.astro";
const $$url = "/api/auth/logout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  default: $$Logout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
