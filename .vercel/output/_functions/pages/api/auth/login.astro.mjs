/* empty css                                       */
import { c as createComponent, r as renderTemplate } from '../../../chunks/astro/server_DzPnjQAP.mjs';
import 'kleur/colors';
import 'clsx';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { u as userService, s as sessionService } from '../../../chunks/database_6kt41mMB.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return new Response(JSON.stringify({
        error: "Email and password are required"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const user = await userService.findUserByEmail(email);
    if (!user) {
      return new Response(JSON.stringify({
        error: "Invalid email or password"
      }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (!user.email_verified) {
      return new Response(JSON.stringify({
        error: "Please verify your email address before logging in. Check your inbox for a verification link."
      }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return new Response(JSON.stringify({
        error: "Invalid email or password"
      }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role,
        uuid: user.uuid
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3);
    await sessionService.createSession(user.uuid, token, expiresAt.toISOString());
    await sessionService.cleanExpiredSessions();
    return new Response(JSON.stringify({
      success: true,
      token,
      user: {
        id: user.id,
        uuid: user.uuid,
        email: user.email,
        name: user.name,
        role: user.role,
        emailVerified: user.email_verified
      }
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": `auth_token=${token}; HttpOnly; Secure; SameSite=Strict; Max-Age=${7 * 24 * 60 * 60}`
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    return new Response(JSON.stringify({
      error: "Internal server error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  process.env["JWT_SECRET"] || "your-secret-key-change-in-production";
  return renderTemplate``;
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/api/auth/login.astro", void 0);

const $$file = "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/api/auth/login.astro";
const $$url = "/api/auth/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
