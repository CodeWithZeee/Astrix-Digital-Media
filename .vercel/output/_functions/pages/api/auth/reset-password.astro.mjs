/* empty css                                       */
import { c as createComponent, r as renderTemplate } from '../../../chunks/astro/server_DzPnjQAP.mjs';
import 'kleur/colors';
import 'clsx';
import { u as userService } from '../../../chunks/database_EbR-lz9c.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
  try {
    const { token, password } = await request.json();
    if (!token || !password) {
      return new Response(JSON.stringify({
        error: "Token and new password are required"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (password.length < 8) {
      return new Response(JSON.stringify({
        error: "Password must be at least 8 characters long"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
    if (!passwordRegex.test(password)) {
      return new Response(JSON.stringify({
        error: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const success = await userService.resetPassword(token, password);
    if (!success) {
      return new Response(JSON.stringify({
        error: "Invalid or expired reset token"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({
      success: true,
      message: "Password has been reset successfully. You can now log in with your new password."
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Reset password error:", error);
    return new Response(JSON.stringify({
      error: "Internal server error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
const $$ResetPassword = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/api/auth/reset-password.astro", void 0);

const $$file = "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/api/auth/reset-password.astro";
const $$url = "/api/auth/reset-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  default: $$ResetPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
