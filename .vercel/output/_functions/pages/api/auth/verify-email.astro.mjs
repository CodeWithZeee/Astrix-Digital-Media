/* empty css                                       */
import { c as createComponent, r as renderTemplate } from '../../../chunks/astro/server_DzPnjQAP.mjs';
import 'kleur/colors';
import 'clsx';
import { u as userService } from '../../../chunks/database_6kt41mMB.mjs';
import { e as emailService } from '../../../chunks/email_8ZiYaP-d.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
  try {
    const { token } = await request.json();
    if (!token) {
      return new Response(JSON.stringify({
        error: "Verification token is required"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const verified = await userService.verifyEmail(token);
    if (!verified) {
      return new Response(JSON.stringify({
        error: "Invalid or expired verification token"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const user = await userService.findUserByVerificationToken(token);
    if (user) {
      await emailService.sendWelcomeEmail(user.email, user.name);
    }
    return new Response(JSON.stringify({
      success: true,
      message: "Email verified successfully! You can now log in to your account."
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Email verification error:", error);
    return new Response(JSON.stringify({
      error: "Internal server error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
async function GET({ url }) {
  try {
    const token = url.searchParams.get("token");
    if (!token) {
      return new Response(JSON.stringify({
        error: "Verification token is required"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const user = await userService.findUserByVerificationToken(token);
    const verified = await userService.verifyEmail(token);
    if (!verified) {
      return new Response(JSON.stringify({
        error: "Invalid or expired verification token"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (user) {
      await emailService.sendWelcomeEmail(user.email, user.name);
    }
    return new Response(null, {
      status: 302,
      headers: {
        "Location": "/login?verified=true"
      }
    });
  } catch (error) {
    console.error("Email verification error:", error);
    return new Response(JSON.stringify({
      error: "Internal server error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
const $$VerifyEmail = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/api/auth/verify-email.astro", void 0);

const $$file = "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/api/auth/verify-email.astro";
const $$url = "/api/auth/verify-email";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  default: $$VerifyEmail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
