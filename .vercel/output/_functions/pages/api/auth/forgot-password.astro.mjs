/* empty css                                       */
import { c as createComponent, r as renderTemplate } from '../../../chunks/astro/server_DzPnjQAP.mjs';
import 'kleur/colors';
import 'clsx';
import { u as userService } from '../../../chunks/database_6kt41mMB.mjs';
import { e as emailService } from '../../../chunks/email_8ZiYaP-d.mjs';
import { v4 } from 'uuid';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
  try {
    const { email } = await request.json();
    if (!email) {
      return new Response(JSON.stringify({
        error: "Email is required"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const user = await userService.findUserByEmail(email);
    if (!user) {
      return new Response(JSON.stringify({
        success: true,
        message: "If an account with this email exists, a password reset link has been sent."
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const resetToken = v4();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1e3);
    await userService.setResetToken(email, resetToken, expiresAt.toISOString());
    const emailSent = await emailService.sendPasswordResetEmail(
      email,
      user.name,
      resetToken
    );
    if (!emailSent) {
      return new Response(JSON.stringify({
        error: "Failed to send password reset email. Please try again later."
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({
      success: true,
      message: "Password reset link has been sent to your email address."
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    return new Response(JSON.stringify({
      error: "Internal server error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
const $$ForgotPassword = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/api/auth/forgot-password.astro", void 0);

const $$file = "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/api/auth/forgot-password.astro";
const $$url = "/api/auth/forgot-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  default: $$ForgotPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
