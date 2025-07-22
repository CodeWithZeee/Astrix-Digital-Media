/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate, b as renderScript, a as renderComponent } from '../chunks/astro/server_DzPnjQAP.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header } from '../chunks/Header_CaW6Jzpv.mjs';
import 'clsx';
import { $ as $$Footer } from '../chunks/Footer_DOaDEaA4.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"> <!-- Animated Background Blobs --> <div class="absolute inset-0 z-0 pointer-events-none"> <svg class="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] opacity-60 animate-blob1" viewBox="0 0 600 600" fill="none"> <g filter="url(#blur1)"><ellipse cx="300" cy="300" rx="300" ry="300" fill="url(#paint0_radial)"></ellipse></g> <defs> <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(300 300) scale(300)" gradientUnits="userSpaceOnUse"> <stop stop-color="#a259ec"></stop> <stop offset="1" stop-color="#06b6d4"></stop> </radialGradient> <filter id="blur1" x="-100" y="-100" width="800" height="800" filterUnits="userSpaceOnUse"> <feGaussianBlur stdDeviation="60"></feGaussianBlur> </filter> </defs> </svg> <svg class="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] opacity-40 animate-blob2" viewBox="0 0 600 600" fill="none"> <g filter="url(#blur2)"><ellipse cx="300" cy="300" rx="300" ry="300" fill="url(#paint1_radial)"></ellipse></g> <defs> <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientTransform="translate(300 300) scale(300)" gradientUnits="userSpaceOnUse"> <stop stop-color="#06b6d4"></stop> <stop offset="1" stop-color="#a259ec"></stop> </radialGradient> <filter id="blur2" x="-100" y="-100" width="800" height="800" filterUnits="userSpaceOnUse"> <feGaussianBlur stdDeviation="60"></feGaussianBlur> </filter> </defs> </svg> </div> <div class="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center flex flex-col items-center justify-center"> <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight bg-gradient-to-r from-primary-600 via-blue-600 to-accent-600 text-transparent bg-clip-text dark:from-white dark:via-gray-200 dark:to-white" style="font-size: 4rem; font-weight: 700; letter-spacing: -2.2px; line-height: 1.1em;">
AI Infrastructure to accelerate your Business Growth
</h1> <p class="text-xl md:text-2xl text-neutral-600 dark:text-neutral-200 mb-10 max-w-2xl mx-auto" style="font-weight: 500;">
We build AI systems that capture leads, follow up instantly and close more deals — without extra staff.
</p> <a href="/contact" style="text-decoration:none;"> <button class="super-button"> <span>Build My AI Growth System</span> <svg fill="none" viewBox="0 0 24 24" class="arrow"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" d="M5 12h14M13 6l6 6-6 6"></path> </svg> </button> </a> <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"> <div class="text-center"> <div class="text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 text-transparent bg-clip-text hero-number">500+</div> <div class="text-base text-neutral-500 dark:text-neutral-300 mt-2">Businesses Automated</div> </div> <div class="text-center"> <div class="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-400 text-transparent bg-clip-text hero-number">95%</div> <div class="text-base text-neutral-500 dark:text-neutral-300 mt-2">Customer Satisfaction</div> </div> <div class="text-center"> <div class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 dark:from-white dark:to-white text-transparent bg-clip-text hero-number">24/7</div> <div class="text-base text-neutral-500 dark:text-neutral-300 mt-2">AI Support</div> </div> </div> </div> </section> <style>
@keyframes blob1 {
  0%, 100% { transform: scale(1) translateY(0) translateX(0); }
  50% { transform: scale(1.08) translateY(-30px) translateX(40px); }
}
@keyframes blob2 {
  0%, 100% { transform: scale(1) translateY(0) translateX(0); }
  50% { transform: scale(1.12) translateY(40px) translateX(-30px); }
}
.animate-blob1 { animation: blob1 18s ease-in-out infinite; }
.animate-blob2 { animation: blob2 22s ease-in-out infinite; }

/* New CTA Button Animation from Uiverse.io by jawad_8494 */
.super-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 28px;
  background: #2d05a969;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  z-index: 1;
}

.super-button::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, #00ffff, #ff00ff, #00ffff);
  animation: rotate 4s linear infinite;
  z-index: -2;
}

.super-button::after {
  content: "";
  position: absolute;
  inset: 2px;
  background: transparent;
  border-radius: inherit;
  z-index: -1;
}

.super-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.2);
}

.super-button:hover .arrow {
  transform: translateX(6px);
}

.arrow {
  width: 22px;
  height: 22px;
  transition: transform 0.3s ease-in-out;
  color: #00ffff;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>`;
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/components/Hero.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Features = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section id="features" class="py-24 relative overflow-x-clip reveal-on-scroll"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">What We Do</h2> <p class="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto" style="font-weight: 500;">
Proven Business Development \u2014 Designed for Real-World Operations
</p> <p class="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mt-4" style="font-weight: 400;">
We don't just provide tools \u2014 we act as your strategic partner, designing and installing complete AI growth systems that enhance how your business operates and scales
</p> </div> <!-- Card Carousel --> <div class="carousel" data-mask="true"> <!-- Original Set --> <!-- 1. AI Growth Consulting --> <article> <div class="lottie-container"> <div id="lottie-ai-growth" class="w-full h-full"></div> </div> <h2>AI Growth Consulting</h2> <div> <p>Get clear on what matters \u2014 fast. We cut through the noise around AI to develop a custom strategy aligned with your business goals. Whether you're starting from scratch or optimizing existing systems, we guide you every step of the way.</p> </div> </article> <!-- 2. Traffic Management --> <article> <div class="lottie-container"> <div id="lottie-traffic" class="w-full h-full"></div> </div> <h2>Traffic Management</h2> <div> <p>Attract the right audience with smarter outreach. We analyze your ideal customer, refine your messaging and identify the best platforms to maximize visibility and drive targeted traffic to your website or funnel.</p> </div> </article> <!-- 3. Chatbot Development --> <article> <div class="lottie-container"> <div id="lottie-chatbot" class="w-full h-full"></div> </div> <h2>Chatbot Development</h2> <div> <p>Turn your website and social media into lead machines. Our AI chatbots instantly engage visitors, answer questions, capture lead details and book appointments \u2014 all without manual input.</p> </div> </article> <!-- 4. AI Voice Agents --> <article> <div class="lottie-container"> <div id="lottie-voice-agent" class="w-full h-full"></div> </div> <h2>AI Voice Agents</h2> <div> <p>Automate bulk phone calls \u2014 inbound and outbound. We build natural-sounding AI voice assistants that handle customer service, appointment scheduling, reminders, lead qualification, and outbound promotions \u2014 24/7.</p> </div> </article> <!-- 5. Workflow Automations --> <article> <div class="lottie-container"> <div id="lottie-workflow" class="w-full h-full"></div> </div> <h2>Workflow Automations</h2> <div> <p>Save hours every week by eliminating repetitive tasks. We automate internal processes like reminders, reporting, data entry, and communications \u2014 so your team stays focused on high-impact work.</p> </div> </article> <!-- 6. CRM & Lead Management --> <article> <div class="lottie-container"> <div id="lottie-crm" class="w-full h-full"></div> </div> <h2>CRM & Lead Management</h2> <div> <p>Never lose a lead again. We optimize your sales pipeline with intelligent campaigns that track, nurtures and converts every opportunity \u2014 increasing close rates and reducing manual follow-up.</p> </div> </article> <!-- 7. Reputation Management --> <article> <div class="lottie-container"> <div id="lottie-reputation" class="w-full h-full"></div> </div> <h2>Reputation Management</h2> <div> <p>Automate your reviews to build trust \u2014 and protect your brand. Our AI asks customers for feedback, pushes positive reviews to Google and privately captures negative responses internally \u2014 so you build credibility while gaining feedback for improvement.</p> </div> </article> <!-- Duplicate Set for Seamless Loop --> <!-- 1. AI Growth Consulting (Duplicate) --> <article> <div class="lottie-container"> <div id="lottie-ai-growth-2" class="w-full h-full"></div> </div> <h2>AI Growth Consulting</h2> <div> <p>Get clear on what matters \u2014 fast. We cut through the noise around AI to develop a custom strategy aligned with your business goals. Whether you're starting from scratch or optimizing existing systems, we guide you every step of the way.</p> </div> </article> <!-- 2. Traffic Management (Duplicate) --> <article> <div class="lottie-container"> <div id="lottie-traffic-2" class="w-full h-full"></div> </div> <h2>Traffic Management</h2> <div> <p>Attract the right audience with smarter outreach. We analyze your ideal customer, refine your messaging and identify the best platforms to maximize visibility and drive targeted traffic to your website or funnel.</p> </div> </article> <!-- 3. Chatbot Development (Duplicate) --> <article> <div class="lottie-container"> <div id="lottie-chatbot-2" class="w-full h-full"></div> </div> <h2>Chatbot Development</h2> <div> <p>Turn your website and social media into lead machines. Our AI chatbots instantly engage visitors, answer questions, capture lead details and book appointments \u2014 all without manual input.</p> </div> </article> <!-- 4. AI Voice Agents (Duplicate) --> <article> <div class="lottie-container"> <div id="lottie-voice-agent-2" class="w-full h-full"></div> </div> <h2>AI Voice Agents</h2> <div> <p>Automate bulk phone calls \u2014 inbound and outbound. We build natural-sounding AI voice assistants that handle customer service, appointment scheduling, reminders, lead qualification, and outbound promotions \u2014 24/7.</p> </div> </article> <!-- 5. Workflow Automations (Duplicate) --> <article> <div class="lottie-container"> <div id="lottie-workflow-2" class="w-full h-full"></div> </div> <h2>Workflow Automations</h2> <div> <p>Save hours every week by eliminating repetitive tasks. We automate internal processes like reminders, reporting, data entry, and communications \u2014 so your team stays focused on high-impact work.</p> </div> </article> <!-- 6. CRM & Lead Management (Duplicate) --> <article> <div class="lottie-container"> <div id="lottie-crm-2" class="w-full h-full"></div> </div> <h2>CRM & Lead Management</h2> <div> <p>Never lose a lead again. We optimize your sales pipeline with intelligent campaigns that track, nurtures and converts every opportunity \u2014 increasing close rates and reducing manual follow-up.</p> </div> </article> <!-- 7. Reputation Management (Duplicate) --> <article> <div class="lottie-container"> <div id="lottie-reputation-2" class="w-full h-full"></div> </div> <h2>Reputation Management</h2> <div> <p>Automate your reviews to build trust \u2014 and protect your brand. Our AI asks customers for feedback, pushes positive reviews to Google and privately captures negative responses internally \u2014 so you build credibility while gaining feedback for improvement.</p> </div> </article> </div> </div> </section> <!-- Lottie-web for all feature cards --> <script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js" defer onload="window.addEventListener('DOMContentLoaded',function(){if(window.lottie){window.lottie.loadAnimation({container:document.getElementById('lottie-ai-growth'),renderer:'svg',loop:true,autoplay:true,path:'/AI Growth Consulting.json'});window.lottie.loadAnimation({container:document.getElementById('lottie-traffic'),renderer:'svg',loop:true,autoplay:true,path:'/Traffic Management.json'});window.lottie.loadAnimation({container:document.getElementById('lottie-chatbot'),renderer:'svg',loop:true,autoplay:true,path:'/Chatbot Development.json'});window.lottie.loadAnimation({container:document.getElementById('lottie-voice-agent'),renderer:'svg',loop:true,autoplay:true,path:'/AI Voice Agent.json'});window.lottie.loadAnimation({container:document.getElementById('lottie-workflow'),renderer:'svg',loop:true,autoplay:true,path:'/Workflow.json'});window.lottie.loadAnimation({container:document.getElementById('lottie-crm'),renderer:'svg',loop:true,autoplay:true,path:'/CRM & Lead Management.json'});window.lottie.loadAnimation({container:document.getElementById('lottie-reputation'),renderer:'svg',loop:true,autoplay:true,path:'/Last.json'});window.lottie.loadAnimation({container:document.getElementById('lottie-ai-growth-2'),renderer:'svg',loop:true,autoplay:true,path:'/AI Growth Consulting.json'});window.lottie.loadAnimation({container:document.getElementById('lottie-traffic-2'),renderer:'svg',loop:true,autoplay:true,path:'/Traffic Management.json'});window.lottie.loadAnimation({container:document.getElementById('lottie-chatbot-2'),renderer:'svg',loop:true,autoplay:true,path:'/Chatbot Development.json'});window.lottie.loadAnimation({container:document.getElementById('lottie-voice-agent-2'),renderer:'svg',loop:true,autoplay:true,path:'/AI Voice Agent.json'});window.lottie.loadAnimation({container:document.getElementById('lottie-workflow-2'),renderer:'svg',loop:true,autoplay:true,path:'/Workflow.json'});window.lottie.loadAnimation({container:document.getElementById('lottie-crm-2'),renderer:'svg',loop:true,autoplay:true,path:'/CRM & Lead Management.json'});window.lottie.loadAnimation({container:document.getElementById('lottie-reputation-2'),renderer:'svg',loop:true,autoplay:true,path:'/Last.json'});}});"><\/script> <style>
/* Card Carousel Styles */
.carousel {
  --items: 14;
  --carousel-duration: 40s;
  @media (width > 600px) {
    --carousel-duration: 30s;
  }
  --carousel-width: min(80vw, 1200px);
  --carousel-item-width: 280px;
  --carousel-item-height: 450px;
  --carousel-item-gap: 2rem;

  position: relative;
  width: var(--carousel-width);
  height: var(--carousel-item-height);
  overflow: clip;
  margin: 0 auto;
}

.carousel[data-mask="true"] {
  /* fade out on sides */
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10% 90%,
    transparent
  );
}

/* hover pauses animation immediately */
.carousel:hover > article {
  animation-play-state: paused !important;
  transition: none !important;
  animation-fill-mode: none !important;
}

.carousel > article {
  position: absolute;
  top: 0;
  left: calc(100% + var(--carousel-item-gap));
  width: var(--carousel-item-width);
  height: var(--carousel-item-height);
  display: grid;
  grid-template-rows: 200px auto 1fr;
  gap: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: rgb(49, 65, 88);
  transition: none;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(10px);

  /* animation */
  will-change: transform;
  animation-name: marquee;
  animation-duration: var(--carousel-duration);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: calc(
    var(--carousel-duration) / var(--items) * 1 * var(--i) * -1
  );
}

/* Dark theme styles */
html.dark .carousel > article {
  background: rgba(30, 30, 30, 0.2) !important;
  color: white !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(15px) !important;
  -webkit-backdrop-filter: blur(15px) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
}

.carousel > article:nth-child(1) { --i: 0; }
.carousel > article:nth-child(2) { --i: 1; }
.carousel > article:nth-child(3) { --i: 2; }
.carousel > article:nth-child(4) { --i: 3; }
.carousel > article:nth-child(5) { --i: 4; }
.carousel > article:nth-child(6) { --i: 5; }
.carousel > article:nth-child(7) { --i: 6; }
.carousel > article:nth-child(8) { --i: 7; }
.carousel > article:nth-child(9) { --i: 8; }
.carousel > article:nth-child(10) { --i: 9; }
.carousel > article:nth-child(11) { --i: 10; }
.carousel > article:nth-child(12) { --i: 11; }
.carousel > article:nth-child(13) { --i: 12; }
.carousel > article:nth-child(14) { --i: 13; }

.lottie-container {
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  display: flex;
  align-items: center;
  justify-content: center;
}

html.dark .lottie-container {
  background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
}

.carousel > article > *:not(.lottie-container) {
  padding: 0 1rem;
}

.carousel > article > div {
  grid-row: span 1;
  font-size: 0.8rem;
  line-height: 1.5;
}

.carousel > article h2 {
  font-family: 'Figtree', 'Figtree Placeholder', sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  padding-block: 0.75rem 0.25rem;
  margin: 0;
  text-align: center;
}

.carousel > article p {
  margin: 0;
  font-family: 'Figtree', 'Figtree Placeholder', sans-serif;
  line-height: 1.5;
}

@keyframes marquee {
  100% {
    transform: translateX(
      calc(
        (var(--items) * (var(--carousel-item-width) + var(--carousel-item-gap))) *
          -1
      )
    );
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .carousel {
    --carousel-item-width: 260px;
    --carousel-item-height: 420px;
    --carousel-item-gap: 1.5rem;
  }
  
  .carousel > article {
    grid-template-rows: 160px auto 1fr;
    padding: 0.75rem;
  }
  
  .carousel > article h2 {
    font-size: 1.1rem;
  }
  
  .carousel > article p {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .carousel {
    --carousel-item-width: 240px;
    --carousel-item-height: 400px;
    --carousel-item-gap: 1rem;
  }
  
  .carousel > article {
    grid-template-rows: 140px auto 1fr;
    padding: 0.5rem;
  }
}
</style>`])), maybeRenderHead());
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/components/Features.astro", void 0);

const $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="how-it-works" class="py-20 reveal-on-scroll"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Visual Diagram --> <div class="mt-4 bg-gray-50/80 dark:bg-darkbg-800/80 rounded-2xl p-8 backdrop-blur-md reveal-on-scroll"> <h3 class="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">Our Process</h3> <p class="text-xl text-gray-700 dark:text-gray-300 text-center mb-10">We Don't Just Set It Up — We Make Sure It Works</p> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> <div class="bg-white/80 dark:bg-darkbg-900/80 rounded-lg p-6 shadow-md backdrop-blur border border-primary-100 dark:border-white/20 process-pop-card text-center reveal-on-scroll relative"> <h4 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">1. Discover</h4> <p class="text-sm text-gray-600 dark:text-gray-300">We learn how your business works and where the gaps are.</p> </div> <div class="bg-white/80 dark:bg-darkbg-900/80 rounded-lg p-6 shadow-md backdrop-blur border border-primary-100 dark:border-white/20 process-pop-card text-center reveal-on-scroll relative"> <h4 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Build</h4> <p class="text-sm text-gray-600 dark:text-gray-300">We install the right AI systems around your workflows, tools and goals.</p> </div> <div class="bg-white/80 dark:bg-darkbg-900/80 rounded-lg p-6 shadow-md backdrop-blur border border-primary-100 dark:border-white/20 process-pop-card text-center reveal-on-scroll relative"> <h4 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">3. Launch</h4> <p class="text-sm text-gray-600 dark:text-gray-300">Everything goes live and immediately handles bookings, follow-ups and support — without manual effort.</p> </div> <div class="bg-white/80 dark:bg-darkbg-900/80 rounded-lg p-6 shadow-md backdrop-blur border border-primary-100 dark:border-white/20 process-pop-card text-center reveal-on-scroll relative"> <h4 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">4. Optimize</h4> <p class="text-sm text-gray-600 dark:text-gray-300">We continuously monitor and improve your AI systems for maximum performance.</p> </div> </div> <div class="text-center mt-12"> <a href="/contact" class="bg-gradient-to-r from-primary-600 to-blue-600 dark:from-black dark:to-blue-600 text-white dark:text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-primary-700 hover:to-blue-700 dark:hover:from-black dark:hover:to-blue-700 transition-all duration-300 inline-block shadow-lg dark:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(0,0,0,0.4)] border dark:border-black/30">
Let's Map Your AI System
</a> </div> </div> </div> </section> <style>
  .from-primary-600\\/80:is(.dark *) {
    --tw-gradient-from: rgb(94 0 255 / 80%) var(--tw-gradient-from-position);
  }

  @media (prefers-color-scheme: dark) {
    .dark #how-it-works {
      background-color: #000 !important;
    }
  }

  .process-pop-card {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s;
  }
  .process-pop-card:hover {
    transform: scale(1.08, 1.12);
    z-index: 10;
    box-shadow: 0 8px 32px 0 rgba(49,46,129,0.18), 0 1.5px 0 0 rgba(255,255,255,0.10);
  }
</style>`;
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/components/HowItWorks.astro", void 0);

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="pricing" class="py-24 reveal-on-scroll"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">Plans & Pricing</h2> <p class="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto" style="font-weight: 500;">
Built to Grow With Your Business — from Startup to Scale-Up
</p> </div> <div class="pricing-container reveal-on-scroll"> <!-- Foundation Plan --> <div data-text="Foundation" style="--r:-15;" class="glass"> <svg viewBox="0 0 24 24" height="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path> </svg> <div class="text-center mt-4 px-4"> <h3 class="text-xl font-bold mb-2"> Foundation Plan</h3> <p class="text-sm mb-3">Perfect for early-stage businesses ready to modernize operations.</p> <p class="text-xs mb-4 text-neutral-500 dark:text-neutral-400">Launch fast with essential AI tools and proven automations.</p> <div class="text-2xl font-bold mb-2">$297<span class="text-sm">/month</span></div> <div class="text-sm mb-4">$1,000 Setup</div> <ul class="text-xs space-y-1 mb-6 text-left"> <li>• AI Growth Strategy Session (1 hour)</li> <li>• Plug & Play AI Website (Pre-Built Template or Your Site)</li> <li>• Lead-Capturing AI Chatbot (Website + Meta)</li> <li>• Mobile App to Manage Conversations</li> <li>• Basic Workflow Automation (e.g., Reminders, Follow-ups)</li> <li>• Reputation Management Setup</li> <li>• Go Live in 48 Hours</li> <li>• Ongoing Monthly Support</li> </ul> </div> </div> <!-- Growth Plan --> <div data-text="Growth" style="--r:5;" class="glass"> <svg viewBox="0 0 24 24" height="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path> </svg> <div class="text-center mt-4 px-4"> <h3 class="text-xl font-bold mb-2"> Growth Plan</h3> <p class="text-sm mb-3">Best for businesses ready to scale using AI-driven systems.</p> <p class="text-xs mb-4 text-neutral-500 dark:text-neutral-400">Unlock full control with custom automation and tailored tools.</p> <div class="text-2xl font-bold mb-2">$497<span class="text-sm">/month</span></div> <div class="text-sm mb-4">Starting at $2,500 Setup</div> <p class="text-xs mb-3 text-neutral-500 dark:text-neutral-400">Customized based on project scope.</p> <ul class="text-xs space-y-1 mb-6 text-left"> <li>• Everything in Foundation, Plus:</li> <li>• Custom Website Development</li> <li>• Custom AI Chatbot Flows & Integrations</li> <li>• CRM Setup + Sales Pipeline Automation</li> <li>• Advanced Workflow Automation</li> <li>• AI Voice Agent (Inbound or Outbound)</li> <li>• 1:1 AI Growth Consulting Roadmap</li> <li>• Analytics Dashboard & KPI Tracking</li> <li>• Dedicated Success Manager</li> </ul> </div> </div> <!-- Executive Plan --> <div data-text="Executive" style="--r:25;" class="glass"> <svg viewBox="0 0 24 24" height="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path> </svg> <div class="text-center mt-4 px-4"> <h3 class="text-xl font-bold mb-2"> Executive Plan</h3> <p class="text-sm mb-3">Built for established teams seeking full AI growth infrastructure.</p> <p class="text-xs mb-4 text-neutral-500 dark:text-neutral-400">We partner as your outsourced AI Ops team — building, training, and optimizing end-to-end systems.</p> <div class="text-2xl font-bold mb-2">Custom Quote<span class="text-sm">/month</span></div> <div class="text-sm mb-4">After Discovery Call</div> <p class="text-xs mb-3 text-neutral-500 dark:text-neutral-400">Priced for ROI, not headcount.</p> <ul class="text-xs space-y-1 mb-6 text-left"> <li>• Everything in Growth, Plus:</li> <li>• Both Inbound & Outbound AI Voice Agents</li> <li>• AI Traffic Management System (SEO + Paid Ads Strategy)</li> <li>• Custom Integrations (Zapier, Webhooks, API)</li> <li>• Multi-Step AI Workflows & Internal Ops Automation</li> <li>• Full CRM Customization + Lead Scoring</li> <li>• Monthly Strategy Reviews & Optimization</li> <li>• Ongoing Staff Training & AI Adoption Support</li> </ul> </div> </div> </div> </div> </section> ${renderScript($$result, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/components/Pricing.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/components/Pricing.astro", void 0);

const $$LightBackground = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="light-background" data-astro-cid-xsowqlpr> <!-- Floating bubbles --> <div class="bubbles" data-astro-cid-xsowqlpr> <div class="bubble bubble-1" data-astro-cid-xsowqlpr></div> <div class="bubble bubble-2" data-astro-cid-xsowqlpr></div> <div class="bubble bubble-3" data-astro-cid-xsowqlpr></div> <div class="bubble bubble-4" data-astro-cid-xsowqlpr></div> <div class="bubble bubble-5" data-astro-cid-xsowqlpr></div> <div class="bubble bubble-6" data-astro-cid-xsowqlpr></div> <div class="bubble bubble-7" data-astro-cid-xsowqlpr></div> <div class="bubble bubble-8" data-astro-cid-xsowqlpr></div> </div> <!-- Subtle grid --> <div class="subtle-grid" data-astro-cid-xsowqlpr></div> </div>  `;
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/components/LightBackground.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- g -->${renderComponent($$result, "Layout", $$Layout, { "title": "Astrix Digital Media - AI Growth Infrastructure for Business Development", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "LightBackground", $$LightBackground, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Features", $$Features, { "data-astro-cid-j7pv25f6": true })} <!-- Pain Points Section --> <section id="pain-points" class="py-0 bg-gray-50 dark:bg-black reveal-on-scroll" data-astro-cid-j7pv25f6> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-astro-cid-j7pv25f6> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6" data-astro-cid-j7pv25f6>Pain Points</h2> <p class="text-xl text-gray-700 dark:text-gray-300 mb-6" data-astro-cid-j7pv25f6>
Most business owners are stuck managing admin tasks, underperforming websites and cold leads — all while everyone keeps talking about AI like it's magic.
</p> <p class="text-lg text-gray-700 dark:text-gray-300 mb-4" data-astro-cid-j7pv25f6>
You don't need more tools.<br data-astro-cid-j7pv25f6>
You need a partner who cuts through the hype, takes ownership and builds what actually works for your business.
</p> </div> </section> ${renderComponent($$result2, "HowItWorks", $$HowItWorks, { "data-astro-cid-j7pv25f6": true })} <!-- Who It's For Section --> <section id="who-its-for" class="py-20 border-y border-neutral-100 dark:border-neutral-800 relative reveal-on-scroll" data-astro-cid-j7pv25f6> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-astro-cid-j7pv25f6> <h2 class="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4" data-astro-cid-j7pv25f6>Who It's For</h2> <p class="text-xl text-neutral-600 dark:text-neutral-300 mb-10" style="font-weight: 500;" data-astro-cid-j7pv25f6>
If You're Running a Growing Business, This Was Built for You
</p> <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8" data-astro-cid-j7pv25f6> <div class="flex items-center gap-4 justify-center" data-astro-cid-j7pv25f6> <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-2xl shadow-md" data-astro-cid-j7pv25f6> <svg width="28" height="28" fill="none" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6></path><path d="M9 11V7a3 3 0 116 0v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6></path><rect x="4" y="11" width="16" height="6" rx="2" stroke="currentColor" stroke-width="2" data-astro-cid-j7pv25f6></rect></svg> </span> <span class="text-lg font-semibold text-neutral-800 dark:text-neutral-100" data-astro-cid-j7pv25f6>Contractors & home service pros</span> </div> <div class="flex items-center gap-4 justify-center" data-astro-cid-j7pv25f6> <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-2xl shadow-md" data-astro-cid-j7pv25f6> <svg width="28" height="28" fill="none" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><path d="M3 21V7a2 2 0 012-2h3V3h4v2h3a2 2 0 012 2v14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6></path><rect x="7" y="10" width="10" height="8" rx="2" stroke="currentColor" stroke-width="2" data-astro-cid-j7pv25f6></rect></svg> </span> <span class="text-lg font-semibold text-neutral-800 dark:text-neutral-100" data-astro-cid-j7pv25f6>Real estate & mortgage teams</span> </div> <div class="flex items-center gap-4 justify-center" data-astro-cid-j7pv25f6> <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 text-2xl shadow-md" data-astro-cid-j7pv25f6> <svg width="28" height="28" fill="none" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><path d="M12 21c-4.418 0-8-3.582-8-8 0-3.866 2.613-7.064 6-7.876V3a1 1 0 112 0v2.124C17.387 5.936 20 9.134 20 13c0 4.418-3.582 8-8 8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6></path><path d="M9 13h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-astro-cid-j7pv25f6></path></svg> </span> <span class="text-lg font-semibold text-neutral-800 dark:text-neutral-100" data-astro-cid-j7pv25f6>Medical & dental offices</span> </div> <div class="flex items-center gap-4 justify-center" data-astro-cid-j7pv25f6> <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 text-2xl shadow-md" data-astro-cid-j7pv25f6> <svg width="28" height="28" fill="none" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><path d="M12 20v-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6></path><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2" data-astro-cid-j7pv25f6></circle><path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6></path></svg> </span> <span class="text-lg font-semibold text-neutral-800 dark:text-neutral-100" data-astro-cid-j7pv25f6>Local agencies & coaches</span> </div> <div class="flex items-center gap-4 justify-center sm:col-span-2" data-astro-cid-j7pv25f6> <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-2xl shadow-md" data-astro-cid-j7pv25f6> <svg width="28" height="28" fill="none" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><path d="M8 17v-1a4 4 0 014-4h0a4 4 0 014 4v1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6></path><circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" data-astro-cid-j7pv25f6></circle></svg> </span> <span class="text-lg font-semibold text-neutral-800 dark:text-neutral-100" data-astro-cid-j7pv25f6>Any business that relies on leads, calls or client support</span> </div> </div> </div> </section> <!-- Before & After Section --> <section id="before-after" class="py-20 relative reveal-on-scroll" data-astro-cid-j7pv25f6> <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="text-center mb-14" data-astro-cid-j7pv25f6> <h2 class="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4" data-astro-cid-j7pv25f6>Before & After</h2> </div> <div class="relative bg-white/80 dark:bg-black/80 rounded-3xl shadow-2xl border border-neutral-100 dark:border-neutral-800 flex flex-col md:flex-row overflow-hidden backdrop-blur-lg" data-astro-cid-j7pv25f6> <!-- Before Column --> <div class="flex-1 p-8 md:p-12 flex flex-col gap-6 items-start justify-center slide-from-right" data-astro-cid-j7pv25f6> <h3 class="text-2xl font-bold text-neutral-500 mb-4 flex items-center gap-2 slide-from-right" data-astro-cid-j7pv25f6><svg width="28" height="28" fill="none" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><circle cx="12" cy="12" r="12" fill="#e5e7eb" data-astro-cid-j7pv25f6></circle><path d="M9.5 10.5a2.5 2.5 0 115 0" stroke="#64748b" stroke-width="2" stroke-linecap="round" data-astro-cid-j7pv25f6></path><path d="M8 16c.667-1.333 2-2 4-2s3.333.667 4 2" stroke="#64748b" stroke-width="2" stroke-linecap="round" data-astro-cid-j7pv25f6></path></svg>Before</h3> <ul class="space-y-4" data-astro-cid-j7pv25f6> <li class="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 slide-from-right" data-astro-cid-j7pv25f6><svg width="20" height="20" fill="none" viewBox="0 0 20 20" data-astro-cid-j7pv25f6><circle cx="10" cy="10" r="10" fill="#f87171" data-astro-cid-j7pv25f6></circle><path d="M7 8l6 6M13 8l-6 6" stroke="#fff" stroke-width="2" stroke-linecap="round" data-astro-cid-j7pv25f6></path></svg>Inconsistent lead generation</li> <li class="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 slide-from-right" data-astro-cid-j7pv25f6><svg width="20" height="20" fill="none" viewBox="0 0 20 20" data-astro-cid-j7pv25f6><circle cx="10" cy="10" r="10" fill="#fbbf24" data-astro-cid-j7pv25f6></circle><path d="M10 6v4l2 2" stroke="#fff" stroke-width="2" stroke-linecap="round" data-astro-cid-j7pv25f6></path></svg>Lost opportunities and wasted time</li> <li class="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 slide-from-right" data-astro-cid-j7pv25f6><svg width="20" height="20" fill="none" viewBox="0 0 20 20" data-astro-cid-j7pv25f6><circle cx="10" cy="10" r="10" fill="#a3a3a3" data-astro-cid-j7pv25f6></circle><path d="M7 10h6M10 7v6" stroke="#fff" stroke-width="2" stroke-linecap="round" data-astro-cid-j7pv25f6></path></svg>Hours spent on manual admin</li> <li class="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 slide-from-right" data-astro-cid-j7pv25f6><svg width="20" height="20" fill="none" viewBox="0 0 20 20" data-astro-cid-j7pv25f6><circle cx="10" cy="10" r="10" fill="#818cf8" data-astro-cid-j7pv25f6></circle><path d="M7 13l3-3 3 3" stroke="#fff" stroke-width="2" stroke-linecap="round" data-astro-cid-j7pv25f6></path></svg>Static, outdated website</li> <li class="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 slide-from-right" data-astro-cid-j7pv25f6><svg width="20" height="20" fill="none" viewBox="0 0 20 20" data-astro-cid-j7pv25f6><circle cx="10" cy="10" r="10" fill="#f472b6" data-astro-cid-j7pv25f6></circle><path d="M7 10h6" stroke="#fff" stroke-width="2" stroke-linecap="round" data-astro-cid-j7pv25f6></path></svg>Overwhelmed team with no time to grow</li> </ul> </div> <!-- Divider --> <div class="hidden md:flex flex-col items-center justify-center px-2 slide-from-right" data-astro-cid-j7pv25f6> <div class="h-72 w-1 bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent rounded-full" data-astro-cid-j7pv25f6></div> </div> <!-- After Column --> <div class="flex-1 p-8 md:p-12 flex flex-col gap-6 items-start justify-center bg-gradient-to-b from-blue-50/60 dark:from-blue-900/20 to-transparent slide-from-right" data-astro-cid-j7pv25f6> <h3 class="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-4 flex items-center gap-2 slide-from-right" data-astro-cid-j7pv25f6><svg width="28" height="28" fill="none" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><circle cx="12" cy="12" r="12" fill="#38bdf8" data-astro-cid-j7pv25f6></circle><path d="M8 12l3 3 5-5" stroke="#fff" stroke-width="2" stroke-linecap="round" data-astro-cid-j7pv25f6></path></svg>After</h3> <ul class="space-y-4" data-astro-cid-j7pv25f6> <li class="flex items-center gap-3 text-blue-700 dark:text-blue-200 slide-from-right" data-astro-cid-j7pv25f6><svg width="20" height="20" fill="none" viewBox="0 0 20 20" data-astro-cid-j7pv25f6><circle cx="10" cy="10" r="10" fill="#38bdf8" data-astro-cid-j7pv25f6></circle><path d="M7 10l3 3 3-3" stroke="#fff" stroke-width="2" stroke-linecap="round" data-astro-cid-j7pv25f6></path></svg>Consistent traffic and qualified leads</li> <li class="flex items-center gap-3 text-blue-700 dark:text-blue-200 slide-from-right" data-astro-cid-j7pv25f6><svg width="20" height="20" fill="none" viewBox="0 0 20 20" data-astro-cid-j7pv25f6><circle cx="10" cy="10" r="10" fill="#4ade80" data-astro-cid-j7pv25f6></circle><path d="M7 10l3 3 3-3" stroke="#fff" stroke-width="2" stroke-linecap="round" data-astro-cid-j7pv25f6></path></svg>Website that engages, responds, and books on autopilot</li> <li class="flex items-center gap-3 text-blue-700 dark:text-blue-200 slide-from-right" data-astro-cid-j7pv25f6><svg width="20" height="20" fill="none" viewBox="0 0 20 20" data-astro-cid-j7pv25f6><circle cx="10" cy="10" r="10" fill="#facc15" data-astro-cid-j7pv25f6></circle><path d="M7 10l3 3 3-3" stroke="#fff" stroke-width="2" stroke-linecap="round" data-astro-cid-j7pv25f6></path></svg>AI handles calls, texts, and follow-ups 24/7</li> <li class="flex items-center gap-3 text-blue-700 dark:text-blue-200 slide-from-right" data-astro-cid-j7pv25f6><svg width="20" height="20" fill="none" viewBox="0 0 20 20" data-astro-cid-j7pv25f6><circle cx="10" cy="10" r="10" fill="#a78bfa" data-astro-cid-j7pv25f6></circle><path d="M7 10l3 3 3-3" stroke="#fff" stroke-width="2" stroke-linecap="round" data-astro-cid-j7pv25f6></path></svg>Workflows that save hours each week</li> <li class="flex items-center gap-3 text-blue-700 dark:text-blue-200 slide-from-right" data-astro-cid-j7pv25f6><svg width="20" height="20" fill="none" viewBox="0 0 20 20" data-astro-cid-j7pv25f6><circle cx="10" cy="10" r="10" fill="#f472b6" data-astro-cid-j7pv25f6></circle><path d="M7 10l3 3 3-3" stroke="#fff" stroke-width="2" stroke-linecap="round" data-astro-cid-j7pv25f6></path></svg>AI cold calls and qualifies leads</li> <li class="flex items-center gap-3 text-blue-700 dark:text-blue-200 slide-from-right" data-astro-cid-j7pv25f6><svg width="20" height="20" fill="none" viewBox="0 0 20 20" data-astro-cid-j7pv25f6><circle cx="10" cy="10" r="10" fill="#38bdf8" data-astro-cid-j7pv25f6></circle><path d="M7 10l3 3 3-3" stroke="#fff" stroke-width="2" stroke-linecap="round" data-astro-cid-j7pv25f6></path></svg>Instant customer support with no wait time</li> </ul> </div> </div> </div> </section> ${renderComponent($$result2, "Pricing", $$Pricing, { "data-astro-cid-j7pv25f6": true })} <!-- Why Choose Astrix Digital Media Section --> <section id="why-choose-astrix" class="py-24 relative bg-white dark:bg-black reveal-on-scroll" data-astro-cid-j7pv25f6> <div class="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10" data-astro-cid-j7pv25f6> <div class="text-center mb-16" data-astro-cid-j7pv25f6> <h2 class="text-4xl md:text-5xl tracking-tight text-black dark:text-white" style="letter-spacing: -1.5px;" data-astro-cid-j7pv25f6>Why Choose Astrix Digital Media</h2> </div> <!-- Cards Stack Container --> <div class="cards" data-astro-cid-j7pv25f6> <!-- Card 1 --> <input type="radio" id="radio-1" name="radio-card" checked data-astro-cid-j7pv25f6> <article class="card" style="--angle:4deg" data-astro-cid-j7pv25f6> <div class="card-img" data-astro-cid-j7pv25f6> <img src="/icon1.png" alt="Fast Launch Icon" class="card-icon" style="width: 90%; height: 90%; object-fit: contain; display: block; margin: 0 auto;" data-astro-cid-j7pv25f6> </div> <div class="card-data" data-astro-cid-j7pv25f6> <span class="card-num" data-astro-cid-j7pv25f6>1/4</span> <h2 data-astro-cid-j7pv25f6>Fast Launch, Real Results</h2> <p data-astro-cid-j7pv25f6>Your AI infrastructure goes live in days, not months — with clear outcomes like more leads, better follow-ups and lower overhead.</p> <footer data-astro-cid-j7pv25f6> <label for="radio-4" aria-label="Previous" data-astro-cid-j7pv25f6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16" data-astro-cid-j7pv25f6><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" data-astro-cid-j7pv25f6></path></svg></label> <label for="radio-2" aria-label="Next" data-astro-cid-j7pv25f6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" data-astro-cid-j7pv25f6><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" data-astro-cid-j7pv25f6></path></svg></label> </footer> </div> </article> <!-- Card 2 --> <input type="radio" id="radio-2" name="radio-card" data-astro-cid-j7pv25f6> <article class="card" style="--angle:-8deg" data-astro-cid-j7pv25f6> <div class="card-img" data-astro-cid-j7pv25f6> <img src="/icon2.png" alt="Strategy Over Hype Icon" class="card-icon" style="width: 90%; height: 90%; object-fit: contain; display: block; margin: 0 auto;" data-astro-cid-j7pv25f6> </div> <div class="card-data" data-astro-cid-j7pv25f6> <span class="card-num" data-astro-cid-j7pv25f6>2/4</span> <h2 data-astro-cid-j7pv25f6>Strategy Over Hype</h2> <p data-astro-cid-j7pv25f6>We don't follow trends. We build custom systems that align with your goals and scale as you grow.</p> <footer data-astro-cid-j7pv25f6> <label for="radio-1" aria-label="Previous" data-astro-cid-j7pv25f6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16" data-astro-cid-j7pv25f6><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" data-astro-cid-j7pv25f6></path></svg></label> <label for="radio-3" aria-label="Next" data-astro-cid-j7pv25f6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" data-astro-cid-j7pv25f6><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" data-astro-cid-j7pv25f6></path></svg></label> </footer> </div> </article> <!-- Card 3 --> <input type="radio" id="radio-3" name="radio-card" data-astro-cid-j7pv25f6> <article class="card" style="--angle:-7deg" data-astro-cid-j7pv25f6> <div class="card-img" data-astro-cid-j7pv25f6> <img src="/icon3.png" alt="Platform-Agnostic Icon" class="card-icon" style="width: 90%; height: 90%; object-fit: contain; display: block; margin: 0 auto;" data-astro-cid-j7pv25f6> </div> <div class="card-data" data-astro-cid-j7pv25f6> <span class="card-num" data-astro-cid-j7pv25f6>3/4</span> <h2 data-astro-cid-j7pv25f6>Platform-Agnostic, Results-Focused</h2> <p data-astro-cid-j7pv25f6>We're not tied to any single platform. We use the right tools for your business — not what earns us commissions.</p> <footer data-astro-cid-j7pv25f6> <label for="radio-2" aria-label="Previous" data-astro-cid-j7pv25f6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16" data-astro-cid-j7pv25f6><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" data-astro-cid-j7pv25f6></path></svg></label> <label for="radio-4" aria-label="Next" data-astro-cid-j7pv25f6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" data-astro-cid-j7pv25f6><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" data-astro-cid-j7pv25f6></path></svg></label> </footer> </div> </article> <!-- Card 4 --> <input type="radio" id="radio-4" name="radio-card" data-astro-cid-j7pv25f6> <article class="card" style="--angle:11deg" data-astro-cid-j7pv25f6> <div class="card-img" data-astro-cid-j7pv25f6> <img src="/icon4.png" alt="Full-Service Partnership Icon" class="card-icon" style="width: 90%; height: 90%; object-fit: contain; display: block; margin: 0 auto;" data-astro-cid-j7pv25f6> </div> <div class="card-data" data-astro-cid-j7pv25f6> <span class="card-num" data-astro-cid-j7pv25f6>4/4</span> <h2 data-astro-cid-j7pv25f6>Full-Service Partnership</h2> <p data-astro-cid-j7pv25f6>From strategy and setup to support and optimization — we're with you every step of the way.</p> <footer data-astro-cid-j7pv25f6> <label for="radio-3" aria-label="Previous" data-astro-cid-j7pv25f6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16" data-astro-cid-j7pv25f6><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" data-astro-cid-j7pv25f6></path></svg></label> <label for="radio-1" aria-label="Next" data-astro-cid-j7pv25f6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" data-astro-cid-j7pv25f6><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" data-astro-cid-j7pv25f6></path></svg></label> </footer> </div> </article> </div> </div> </section> <!-- Final CTA Section --> <section id="final-cta" class="py-20 text-neutral-900 dark:text-white relative reveal-on-scroll" data-astro-cid-j7pv25f6> <div class="max-w-3xl mx-auto px-6 text-center relative z-10" data-astro-cid-j7pv25f6> <h2 class="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight" style="letter-spacing: -1.5px;" data-astro-cid-j7pv25f6>Ready to Stop Doing Everything Yourself?</h2> <p class="text-xl md:text-2xl mb-10 font-medium text-black dark:text-white" data-astro-cid-j7pv25f6>Let AI take over the busywork — so you can focus on scaling, serving, and succeeding.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-j7pv25f6> <a href="/contact" class="animated-cta-btn" data-astro-cid-j7pv25f6>Book My Free Strategy Call
<span data-astro-cid-j7pv25f6></span> <span data-astro-cid-j7pv25f6></span> <span data-astro-cid-j7pv25f6></span> <span data-astro-cid-j7pv25f6></span> </a> <a href="/ai-demo" class="animated-next-btn" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6> <span aria-hidden="true" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 15" data-astro-cid-j7pv25f6><path d="M 10 0 L 10 5 L 5 5 L 0 0 Z M 0 5 L 5 5 L 10 10 L 5 10 L 5 15 L 0 10 Z" fill="currentColor" data-astro-cid-j7pv25f6></path></svg> </span> <span data-astro-cid-j7pv25f6>See the AI System in Action</span> <span aria-hidden="true" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-astro-cid-j7pv25f6><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" data-astro-cid-j7pv25f6></path></svg> </span> </span> </a> </div> </div> </section> <!-- FAQ Section (Single Card Stack Animation) --> <section id="faq" class="py-24 bg-white dark:bg-black relative overflow-visible reveal-on-scroll" data-astro-cid-j7pv25f6> <div class="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 faq-stack" x-data="{ currentIndex: 0 }" data-astro-cid-j7pv25f6> <div class="text-center mb-14" data-astro-cid-j7pv25f6> <h2 class="text-3xl md:text-4xl font-bold text-black dark:text-white mb-8 text-center" data-astro-cid-j7pv25f6>Frequently Asked Questions</h2> </div> <div class="faq-cards-container relative h-96" data-astro-cid-j7pv25f6> <div class="faq-card-single" :class="{ 'active': currentIndex === 0, 'stacked': currentIndex !== 0 }" @click="currentIndex = (currentIndex + 1) % 9" :style="currentIndex === 0 ? 'z-index: 10;' : 'z-index: 9'" data-astro-cid-j7pv25f6> <div class="faq-question" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>How can AI automation help my business?</span> <svg class="w-6 h-6 text-blue-400 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </div> <div class="faq-answer" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>AI automation eliminates manual work, increases speed, and reduces costly errors. It helps you capture more leads, engage customers faster, and streamline operations — so you can grow with fewer bottlenecks.</span> </div> </div> <div class="faq-card-single" :class="{ 'active': currentIndex === 1, 'stacked': currentIndex !== 1 }" @click="currentIndex = (currentIndex + 1) % 9" :style="currentIndex === 1 ? 'z-index: 10;' : 'z-index: 8'" data-astro-cid-j7pv25f6> <div class="faq-question" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Is AI automation hard to implement?</span> <svg class="w-6 h-6 text-blue-400 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </div> <div class="faq-answer" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Not at all. Our systems are designed for smooth integration with your current tools. We guide you step-by-step through setup, so you get results fast — without the tech headaches.</span> </div> </div> <div class="faq-card-single" :class="{ 'active': currentIndex === 2, 'stacked': currentIndex !== 2 }" @click="currentIndex = (currentIndex + 1) % 9" :style="currentIndex === 2 ? 'z-index: 10;' : 'z-index: 7'" data-astro-cid-j7pv25f6> <div class="faq-question" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Do I need to be tech-savvy to use this?</span> <svg class="w-6 h-6 text-blue-400 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </div> <div class="faq-answer" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>No technical experience is needed. Everything is designed for ease of use. We provide onboarding, tutorials, and ongoing support to ensure you're confident and in control.</span> </div> </div> <div class="faq-card-single" :class="{ 'active': currentIndex === 3, 'stacked': currentIndex !== 3 }" @click="currentIndex = (currentIndex + 1) % 9" :style="currentIndex === 3 ? 'z-index: 10;' : 'z-index: 6'" data-astro-cid-j7pv25f6> <div class="faq-question" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Which industries can benefit from your AI systems?</span> <svg class="w-6 h-6 text-blue-400 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </div> <div class="faq-answer" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Our AI solutions work across industries — including service businesses, healthcare, real estate, legal, home improvement, and more. If you rely on leads, calls, or customer service, AI can elevate your results.</span> </div> </div> <div class="faq-card-single" :class="{ 'active': currentIndex === 4, 'stacked': currentIndex !== 4 }" @click="currentIndex = (currentIndex + 1) % 9" :style="currentIndex === 4 ? 'z-index: 10;' : 'z-index: 5'" data-astro-cid-j7pv25f6> <div class="faq-question" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>What makes your solution different from other tools?</span> <svg class="w-6 h-6 text-blue-400 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </div> <div class="faq-answer" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>We don't just offer tools — we build complete AI growth systems tailored to your business. From strategy to execution, we partner with you to ensure real, measurable results.</span> </div> </div> <div class="faq-card-single" :class="{ 'active': currentIndex === 5, 'stacked': currentIndex !== 5 }" @click="currentIndex = (currentIndex + 1) % 9" :style="currentIndex === 5 ? 'z-index: 10;' : 'z-index: 4'" data-astro-cid-j7pv25f6> <div class="faq-question" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>What kind of support do you provide?</span> <svg class="w-6 h-6 text-blue-400 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </div> <div class="faq-answer" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>You get full support — from onboarding and setup to ongoing optimization. Our team is always available to help with questions, troubleshooting, or custom requests as your business evolves.</span> </div> </div> <div class="faq-card-single" :class="{ 'active': currentIndex === 6, 'stacked': currentIndex !== 6 }" @click="currentIndex = (currentIndex + 1) % 9" :style="currentIndex === 6 ? 'z-index: 10;' : 'z-index: 3'" data-astro-cid-j7pv25f6> <div class="faq-question" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>How long does it take to get everything up and running?</span> <svg class="w-6 h-6 text-blue-400 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </div> <div class="faq-answer" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>You can go live in as little as 48 hours, depending on the plan you choose. Most clients see their full AI system operational within 7–14 days.</span> </div> </div> <div class="faq-card-single" :class="{ 'active': currentIndex === 7, 'stacked': currentIndex !== 7 }" @click="currentIndex = (currentIndex + 1) % 9" :style="currentIndex === 7 ? 'z-index: 10;' : 'z-index: 2'" data-astro-cid-j7pv25f6> <div class="faq-question" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Can I cancel anytime?</span> <svg class="w-6 h-6 text-blue-400 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </div> <div class="faq-answer" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Yes. You're free to cancel anytime. There are no contracts or commitments — just results that make our clients stay.</span> </div> </div> <div class="faq-card-single" :class="{ 'active': currentIndex === 8, 'stacked': currentIndex !== 8 }" @click="currentIndex = (currentIndex + 1) % 9" :style="currentIndex === 8 ? 'z-index: 10;' : 'z-index: 1'" data-astro-cid-j7pv25f6> <div class="faq-question" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>What kind of ROI can I expect?</span> <svg class="w-6 h-6 text-blue-400 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </div> <div class="faq-answer" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Most clients start seeing results within 30–60 days. By replacing manual tasks with automation, you reduce costs, convert more leads, and unlock long-term growth.</span> </div> </div> </div> <!-- Navigation dots --> <div class="flex justify-center mt-8 space-x-2" data-astro-cid-j7pv25f6> <button @click="currentIndex = 0" class="w-3 h-3 rounded-full transition-all duration-300" :class="currentIndex === 0 ? 'bg-blue-500 scale-125' : 'bg-gray-300 dark:bg-gray-600'" data-astro-cid-j7pv25f6></button> <button @click="currentIndex = 1" class="w-3 h-3 rounded-full transition-all duration-300" :class="currentIndex === 1 ? 'bg-blue-500 scale-125' : 'bg-gray-300 dark:bg-gray-600'" data-astro-cid-j7pv25f6></button> <button @click="currentIndex = 2" class="w-3 h-3 rounded-full transition-all duration-300" :class="currentIndex === 2 ? 'bg-blue-500 scale-125' : 'bg-gray-300 dark:bg-gray-600'" data-astro-cid-j7pv25f6></button> <button @click="currentIndex = 3" class="w-3 h-3 rounded-full transition-all duration-300" :class="currentIndex === 3 ? 'bg-blue-500 scale-125' : 'bg-gray-300 dark:bg-gray-600'" data-astro-cid-j7pv25f6></button> <button @click="currentIndex = 4" class="w-3 h-3 rounded-full transition-all duration-300" :class="currentIndex === 4 ? 'bg-blue-500 scale-125' : 'bg-gray-300 dark:bg-gray-600'" data-astro-cid-j7pv25f6></button> <button @click="currentIndex = 5" class="w-3 h-3 rounded-full transition-all duration-300" :class="currentIndex === 5 ? 'bg-blue-500 scale-125' : 'bg-gray-300 dark:bg-gray-600'" data-astro-cid-j7pv25f6></button> <button @click="currentIndex = 6" class="w-3 h-3 rounded-full transition-all duration-300" :class="currentIndex === 6 ? 'bg-blue-500 scale-125' : 'bg-gray-300 dark:bg-gray-600'" data-astro-cid-j7pv25f6></button> <button @click="currentIndex = 7" class="w-3 h-3 rounded-full transition-all duration-300" :class="currentIndex === 7 ? 'bg-blue-500 scale-125' : 'bg-gray-300 dark:bg-gray-600'" data-astro-cid-j7pv25f6></button> <button @click="currentIndex = 8" class="w-3 h-3 rounded-full transition-all duration-300" :class="currentIndex === 8 ? 'bg-blue-500 scale-125' : 'bg-gray-300 dark:bg-gray-600'" data-astro-cid-j7pv25f6></button> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/index.astro", void 0);

const $$file = "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
