/* empty css                                       */
import { c as createComponent, r as renderTemplate } from '../../../chunks/astro/server_DzPnjQAP.mjs';
import 'kleur/colors';
import 'clsx';
import * as jwt from 'jsonwebtoken';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(JSON.stringify({
        error: "No token provided"
      }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const token = authHeader.substring(7);
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      return new Response(JSON.stringify({
        valid: true,
        user: {
          userId: decoded.userId,
          email: decoded.email,
          role: decoded.role
        }
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } catch (jwtError) {
      return new Response(JSON.stringify({
        error: "Invalid token"
      }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    console.error("Token verification error:", error);
    return new Response(JSON.stringify({
      error: "Internal server error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
const $$Verify = createComponent(($$result, $$props, $$slots) => {
  process.env.JWT_SECRET || "your-secret-key-change-in-production";
  return renderTemplate``;
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/api/auth/verify.astro", void 0);

const $$file = "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/api/auth/verify.astro";
const $$url = "/api/auth/verify";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  default: $$Verify,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
