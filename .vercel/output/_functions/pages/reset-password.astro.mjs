/* empty css                                 */
import { c as createComponent, e as createAstro, d as renderHead, b as renderScript, r as renderTemplate, a as renderComponent, F as Fragment, f as addAttribute } from '../chunks/astro/server_DzPnjQAP.mjs';
import 'kleur/colors';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ResetPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResetPassword;
  const url = new URL(Astro2.request.url);
  const token = url.searchParams.get("token");
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><title>Reset Password | Astrix Digital Media</title><meta name="description" content="Reset your Astrix Digital Media account password."><link rel="icon" type="image/png" href="/Astrix_favicon.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4"> <main class="w-full max-w-md sm:max-w-lg lg:max-w-xl p-6 sm:p-8 lg:p-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-transform duration-300 ease-in-out hover:scale-105"> <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primary-600 dark:text-white mb-6">Reset Password</h1> ${!token ? renderTemplate`<div class="text-center"> <p class="text-red-600 dark:text-red-400 mb-4">Invalid reset link. Please request a new password reset.</p> <a href="/forgot-password" class="text-primary-600 dark:text-primary-400 hover:underline">Request Password Reset</a> </div>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <p class="text-center text-gray-600 dark:text-gray-400 mb-6">
Enter your new password below.
</p>  <div id="message" class="hidden mb-4 p-3 rounded-lg text-sm"></div> <form id="resetPasswordForm" class="space-y-5"> <input type="hidden" id="token"${addAttribute(token, "value")}> <div> <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">New Password</label> <input type="password" id="password" name="password" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-200 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="••••••••"> <div id="passwordRequirements" class="mt-2 text-xs text-gray-500 dark:text-gray-400"> <p>Password must contain:</p> <ul class="list-disc list-inside space-y-1 mt-1"> <li id="length">At least 8 characters</li> <li id="uppercase">One uppercase letter</li> <li id="lowercase">One lowercase letter</li> <li id="number">One number</li> <li id="special">One special character (@$!%*?&)</li> </ul> </div> </div> <div> <label for="confirmPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Confirm New Password</label> <input type="password" id="confirmPassword" name="confirmPassword" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-200 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="••••••••"> </div> <button type="submit" id="submitBtn" class="w-full py-3 px-4 bg-primary-600 dark:bg-neutral-800 text-white font-semibold rounded-lg shadow hover:bg-primary-700 dark:hover:bg-neutral-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> <span id="btnText">Reset Password</span> <span id="btnSpinner" class="hidden">Resetting...</span> </button> </form> ` })}`} <p class="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
Remember your password?
<a href="/login" class="text-primary-600 dark:text-primary-400 hover:underline">Log in</a> </p> </main> ${renderScript($$result, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/reset-password.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/reset-password.astro", void 0);

const $$file = "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/reset-password.astro";
const $$url = "/reset-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ResetPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
