/* empty css                                 */
import { c as createComponent, d as renderHead, b as renderScript, r as renderTemplate } from '../chunks/astro/server_DzPnjQAP.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ForgotPassword = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><title>Forgot Password | Astrix Digital Media</title><meta name="description" content="Reset your Astrix Digital Media account password."><link rel="icon" type="image/png" href="/Astrix_favicon.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4"> <main class="w-full max-w-md sm:max-w-lg lg:max-w-xl p-6 sm:p-8 lg:p-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-transform duration-300 ease-in-out hover:scale-105"> <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primary-600 dark:text-white mb-6">Forgot Password</h1> <p class="text-center text-gray-600 dark:text-gray-400 mb-6">
Enter your email address and we'll send you a link to reset your password.
</p> <!-- Error/Success Messages --> <div id="message" class="hidden mb-4 p-3 rounded-lg text-sm"></div> <form id="forgotPasswordForm" class="space-y-5"> <div> <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email address</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-200 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="you@example.com"> </div> <button type="submit" id="submitBtn" class="w-full py-3 px-4 bg-primary-600 dark:bg-neutral-800 text-white font-semibold rounded-lg shadow hover:bg-primary-700 dark:hover:bg-neutral-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> <span id="btnText">Send Reset Link</span> <span id="btnSpinner" class="hidden">Sending...</span> </button> </form> <p class="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
Remember your password?
<a href="/login" class="text-primary-600 dark:text-primary-400 hover:underline">Log in</a> </p> </main> ${renderScript($$result, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/forgot-password.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/forgot-password.astro", void 0);

const $$file = "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/forgot-password.astro";
const $$url = "/forgot-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ForgotPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
