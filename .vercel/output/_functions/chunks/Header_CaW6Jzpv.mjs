import { c as createComponent, e as createAstro, r as renderTemplate, b as renderScript, g as renderSlot, d as renderHead, f as addAttribute, m as maybeRenderHead } from './astro/server_DzPnjQAP.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "AI Growth Infrastructure for Business Development" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><link rel="icon" type="image/png" href="/Astrix_favicon.png"><meta name="generator"', "><title>", '</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Figtree:ital,wght@0,300..900;1,300..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"><script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"><\/script>', `</head> <body class="font-sans antialiased bg-neutral-50 dark:bg-black text-neutral-900 dark:text-neutral-100 transition-colors duration-500 min-h-screen flex flex-col" style="background:#000 !important;background-image:none !important;" data-astro-cid-sckkx6r4> <!-- Loading Screen --> <div id="loading-screen" class="fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-500" data-astro-cid-sckkx6r4> <img src="/Astrix_favicon.png" alt="Astrix" class="w-16 h-16 animate-pulse" data-astro-cid-sckkx6r4> </div> <script>
      // Hide loading screen when page is loaded
      window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
          loadingScreen.style.opacity = '0';
          setTimeout(() => {
            loadingScreen.style.display = 'none';
          }, 500);
        }
      });
    <\/script> <main class="pt-16" data-astro-cid-sckkx6r4> `, ` </main> <script>
      const bg = document.getElementById('global-particles-bg');
      const lightBg = document.getElementById('global-light-bg');
      /*
      function createParticles(isDark) {
        bg.innerHTML = '';
        if (isDark) {
          // Black dark mode, no cosmic/particle backgrounds
          bg.innerHTML = '';
          lightBg.style.display = 'none';
        } else {
          // Light mode animated background: floating colored shapes
          bg.innerHTML = '';
          lightBg.innerHTML = '';
          lightBg.style.display = 'block';
          const colors = [
            'rgba(14,165,233,0.10)', // blue
            'rgba(139,92,246,0.10)', // purple
            'rgba(34,197,94,0.10)',  // green
            'rgba(251,191,36,0.10)', // yellow
            'rgba(239,68,68,0.10)'   // red
          ];
          for(let i=0;i<18;i++){
            const s = document.createElement('div');
            const size = Math.random()*120+60;
            s.style.position = 'absolute';
            s.style.width = s.style.height = \`\${size}px\`;
            s.style.borderRadius = \`\${Math.random()>0.5?50:30}%\`;
            s.style.background = colors[Math.floor(Math.random()*colors.length)];
            s.style.left = \`\${Math.random()*100}%\`;
            s.style.top = \`\${Math.random()*100}%\`;
            s.style.filter = 'blur(2px)';
            s.style.animation = \`floatShape \${6+Math.random()*8}s ease-in-out infinite alternate\`;
            lightBg.appendChild(s);
          }
        }
      }
      // Initial
      createParticles(document.documentElement.classList.contains('dark'));
      // Listen for theme changes
      const observer = new MutationObserver(() => {
        createParticles(document.documentElement.classList.contains('dark'));
      });
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
      */
    <\/script> <style>
      body {
        transition: background 0.5s;
      }
      body.dark {
    background: #000 !important;
  }

  /* Global h2 font weight override */
  h2 {
    font-weight: 500 !important;
      }
      @keyframes particleFloat {
        0% { transform: translateY(0) scale(1); }
        100% { transform: translateY(-40px) scale(1.15); }
      }
      @keyframes cosmicFloat {
        0% { transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
        50% { transform: translateY(-30px) translateX(10px) scale(1.1) rotate(180deg); }
        100% { transform: translateY(-60px) translateX(-10px) scale(1.2) rotate(360deg); }
      }
      @keyframes cosmicShape {
        0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.3; }
        50% { transform: translateY(-40px) scale(1.15) rotate(180deg); opacity: 0.6; }
        100% { transform: translateY(-80px) scale(1.3) rotate(360deg); opacity: 0.3; }
      }
      @keyframes floatShape {
        0% { transform: translateY(0) scale(1) rotate(0deg); }
        100% { transform: translateY(-60px) scale(1.08) rotate(8deg); }
      }
      #global-particles-bg div:hover, #global-light-bg div:hover {
        filter: brightness(1.5);
      }
      #global-light-bg {
        position: fixed;
        z-index: -2;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        transition: opacity 0.5s;
      }
    </style> <!--  --> <!-- Chatbot Widget Start -->  <button id="astrix-chatbot-btn" aria-label="Open chat" data-astro-cid-sckkx6r4> <svg width="28" height="28" fill="white" viewBox="0 0 24 24" data-astro-cid-sckkx6r4> <path d="M12 3C7.03 3 3 6.58 3 11c0 1.61.62 3.09 1.69 4.36L3 21l5.04-1.67C9.34 19.77 10.65 20 12 20c4.97 0 9-3.58 9-8s-4.03-8-9-8z" data-astro-cid-sckkx6r4></path> </svg> </button> <div id="astrix-chatbot-popup" data-astro-cid-sckkx6r4> <div id="astrix-chatbot-header" data-astro-cid-sckkx6r4> <img src="/AI_Chatbot.jpg" alt="Astrix Chatbot" style="width:32px;height:32px;border-radius:50%;margin-right:8px;" data-astro-cid-sckkx6r4> <span style="font-weight:bold;" data-astro-cid-sckkx6r4>Astrix Chatbot</span> <button onclick="document.getElementById('astrix-chatbot-popup').classList.remove('open')" style="background:none;border:none;color:#fff;font-size:20px;cursor:pointer;" data-astro-cid-sckkx6r4>\xD7</button> </div> <div id="astrix-chatbot-messages" data-astro-cid-sckkx6r4> <div style="margin-bottom:8px;background:#f5a623;color:#fff;padding:10px 16px;border-radius:16px 16px 16px 4px;display:inline-block;max-width:80%;font-weight:500;" data-astro-cid-sckkx6r4>Hi, I can help you get the answers</div> </div> <div id="astrix-chatbot-input-area" data-astro-cid-sckkx6r4> <input id="astrix-chatbot-input" type="text" placeholder="Type your message..." data-astro-cid-sckkx6r4> <button id="astrix-chatbot-send" data-astro-cid-sckkx6r4>Send</button> </div> </div> `, " <!-- Chatbot Widget End --> <!--  --> <script>\n      // Only apply black background and remove background-image in dark mode\n      function setDarkBg() {\n        if (document.documentElement.classList.contains('dark')) {\n          document.documentElement.style.background = '#000';\n          document.documentElement.style.backgroundImage = 'none';\n          document.body.style.background = '#000';\n          document.body.style.backgroundImage = 'none';\n        } else {\n          document.documentElement.style.background = '';\n          document.documentElement.style.backgroundImage = '';\n          document.body.style.background = '';\n          document.body.style.backgroundImage = '';\n        }\n      }\n      setDarkBg();\n      // Listen for theme changes\n      const darkObs = new MutationObserver(setDarkBg);\n      darkObs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });\n    <\/script> </body> </html>   <script>\n  // Reveal on scroll for all .reveal-on-scroll elements\n  document.addEventListener('DOMContentLoaded', function() {\n    const revealEls = Array.from(document.querySelectorAll('.reveal-on-scroll'));\n    const slideFromRightEls = Array.from(document.querySelectorAll('.slide-from-right'));\n    \n    if ('IntersectionObserver' in window) {\n      // Observer for reveal-on-scroll elements\n      const revealObserver = new IntersectionObserver((entries, obs) => {\n        entries.forEach(entry => {\n          if (entry.isIntersecting) {\n            entry.target.classList.add('visible');\n            obs.unobserve(entry.target);\n          }\n        });\n      }, { threshold: 0.15 });\n      revealEls.forEach(el => revealObserver.observe(el));\n      \n      // Observer for slide-from-right elements\n      const slideObserver = new IntersectionObserver((entries, obs) => {\n        entries.forEach(entry => {\n          if (entry.isIntersecting) {\n            entry.target.classList.add('visible');\n            obs.unobserve(entry.target);\n          }\n        });\n      }, { threshold: 0.2 });\n      slideFromRightEls.forEach(el => slideObserver.observe(el));\n    } else {\n      // Fallback: show all\n      revealEls.forEach(el => el.classList.add('visible'));\n      slideFromRightEls.forEach(el => el.classList.add('visible'));\n    }\n  });\n<\/script> <style>\n  /* Cycle animation for Why Choose Astrix cards */\n  .cycle-card {\n    animation: cycleGlow 4s ease-in-out infinite;\n    position: relative;\n    overflow: hidden;\n  }\n\n  .cycle-card::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n    animation: cycleSweep 3s ease-in-out infinite;\n  }\n\n  @keyframes cycleGlow {\n    0%, 100% {\n      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n      transform: translateY(0);\n    }\n    25% {\n      box-shadow: 0 15px 40px rgba(59, 130, 246, 0.2);\n      transform: translateY(-2px);\n    }\n    50% {\n      box-shadow: 0 20px 50px rgba(147, 51, 234, 0.3);\n      transform: translateY(-4px);\n    }\n    75% {\n      box-shadow: 0 15px 40px rgba(236, 72, 153, 0.2);\n      transform: translateY(-2px);\n    }\n  }\n\n  @keyframes cycleSweep {\n    0% {\n      left: -100%;\n    }\n    50% {\n      left: 100%;\n    }\n    100% {\n      left: 100%;\n    }\n  }\n\n  /* Stagger the cycle animations */\n  .cycle-card:nth-child(1) { animation-delay: 0s; }\n  .cycle-card:nth-child(2) { animation-delay: 1s; }\n  .cycle-card:nth-child(3) { animation-delay: 2s; }\n  .cycle-card:nth-child(4) { animation-delay: 3s; }\n\n  /* Dark theme adjustments for cycle cards */\n  .dark .cycle-card {\n    animation: cycleGlowDark 4s ease-in-out infinite;\n  }\n\n  @keyframes cycleGlowDark {\n    0%, 100% {\n      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n      transform: translateY(0);\n    }\n    25% {\n      box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);\n      transform: translateY(-2px);\n    }\n    50% {\n      box-shadow: 0 20px 50px rgba(147, 51, 234, 0.5);\n      transform: translateY(-4px);\n    }\n    75% {\n      box-shadow: 0 15px 40px rgba(236, 72, 153, 0.4);\n      transform: translateY(-2px);\n    }\n  }\n</style> <script>\n  // Carousel functionality for Why Choose Astrix section\n  document.addEventListener('DOMContentLoaded', function() {\n    const container = document.getElementById('cards-container');\n    const prevBtn = document.getElementById('prev-btn');\n    const nextBtn = document.getElementById('next-btn');\n    const dots = document.querySelectorAll('.dot-indicator');\n    const cards = document.querySelectorAll('.card-item');\n    \n    if (!container || !prevBtn || !nextBtn) return;\n    \n    let currentIndex = 0;\n    const cardWidth = 320; // w-80 = 320px\n    const gap = 32; // gap-8 = 32px\n    const totalWidth = cardWidth + gap;\n    \n    function updateCarousel() {\n      const translateX = -currentIndex * totalWidth;\n      container.style.transform = `translateX(${translateX}px)`;\n      container.style.transition = 'transform 0.5s ease-in-out';\n      \n      // Update dots\n      dots.forEach((dot, index) => {\n        dot.classList.toggle('active', index === currentIndex);\n        dot.classList.toggle('bg-blue-300', index === currentIndex);\n        dot.classList.toggle('dark:bg-blue-600', index === currentIndex);\n        dot.classList.toggle('bg-gray-300', index !== currentIndex);\n        dot.classList.toggle('dark:bg-gray-600', index !== currentIndex);\n      });\n      \n      // Update button states\n      prevBtn.disabled = currentIndex === 0;\n      nextBtn.disabled = currentIndex === cards.length - 1;\n      \n      prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';\n      nextBtn.style.opacity = currentIndex === cards.length - 1 ? '0.5' : '1';\n    }\n    \n    function nextSlide() {\n      if (currentIndex < cards.length - 1) {\n        currentIndex++;\n        updateCarousel();\n      }\n    }\n    \n    function prevSlide() {\n      if (currentIndex > 0) {\n        currentIndex--;\n        updateCarousel();\n      }\n    }\n    \n    // Event listeners\n    nextBtn.addEventListener('click', nextSlide);\n    prevBtn.addEventListener('click', prevSlide);\n    \n    // Dot navigation\n    dots.forEach((dot, index) => {\n      dot.addEventListener('click', () => {\n        currentIndex = index;\n        updateCarousel();\n      });\n    });\n    \n    // Keyboard navigation\n    document.addEventListener('keydown', (e) => {\n      if (e.key === 'ArrowLeft') {\n        prevSlide();\n      } else if (e.key === 'ArrowRight') {\n        nextSlide();\n      }\n    });\n    \n    // Auto-play (optional)\n    let autoPlayInterval;\n    function startAutoPlay() {\n      autoPlayInterval = setInterval(() => {\n        if (currentIndex < cards.length - 1) {\n          nextSlide();\n        } else {\n          currentIndex = 0;\n          updateCarousel();\n        }\n      }, 5000); // Change slide every 5 seconds\n    }\n    \n    function stopAutoPlay() {\n      clearInterval(autoPlayInterval);\n    }\n    \n    // Pause auto-play on hover\n    container.addEventListener('mouseenter', stopAutoPlay);\n    container.addEventListener('mouseleave', startAutoPlay);\n    \n    // Initialize\n    updateCarousel();\n    startAutoPlay();\n  });\n<\/script>"], ['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><link rel="icon" type="image/png" href="/Astrix_favicon.png"><meta name="generator"', "><title>", '</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Figtree:ital,wght@0,300..900;1,300..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"><script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"><\/script>', `</head> <body class="font-sans antialiased bg-neutral-50 dark:bg-black text-neutral-900 dark:text-neutral-100 transition-colors duration-500 min-h-screen flex flex-col" style="background:#000 !important;background-image:none !important;" data-astro-cid-sckkx6r4> <!-- Loading Screen --> <div id="loading-screen" class="fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-500" data-astro-cid-sckkx6r4> <img src="/Astrix_favicon.png" alt="Astrix" class="w-16 h-16 animate-pulse" data-astro-cid-sckkx6r4> </div> <script>
      // Hide loading screen when page is loaded
      window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
          loadingScreen.style.opacity = '0';
          setTimeout(() => {
            loadingScreen.style.display = 'none';
          }, 500);
        }
      });
    <\/script> <main class="pt-16" data-astro-cid-sckkx6r4> `, ` </main> <script>
      const bg = document.getElementById('global-particles-bg');
      const lightBg = document.getElementById('global-light-bg');
      /*
      function createParticles(isDark) {
        bg.innerHTML = '';
        if (isDark) {
          // Black dark mode, no cosmic/particle backgrounds
          bg.innerHTML = '';
          lightBg.style.display = 'none';
        } else {
          // Light mode animated background: floating colored shapes
          bg.innerHTML = '';
          lightBg.innerHTML = '';
          lightBg.style.display = 'block';
          const colors = [
            'rgba(14,165,233,0.10)', // blue
            'rgba(139,92,246,0.10)', // purple
            'rgba(34,197,94,0.10)',  // green
            'rgba(251,191,36,0.10)', // yellow
            'rgba(239,68,68,0.10)'   // red
          ];
          for(let i=0;i<18;i++){
            const s = document.createElement('div');
            const size = Math.random()*120+60;
            s.style.position = 'absolute';
            s.style.width = s.style.height = \\\`\\\${size}px\\\`;
            s.style.borderRadius = \\\`\\\${Math.random()>0.5?50:30}%\\\`;
            s.style.background = colors[Math.floor(Math.random()*colors.length)];
            s.style.left = \\\`\\\${Math.random()*100}%\\\`;
            s.style.top = \\\`\\\${Math.random()*100}%\\\`;
            s.style.filter = 'blur(2px)';
            s.style.animation = \\\`floatShape \\\${6+Math.random()*8}s ease-in-out infinite alternate\\\`;
            lightBg.appendChild(s);
          }
        }
      }
      // Initial
      createParticles(document.documentElement.classList.contains('dark'));
      // Listen for theme changes
      const observer = new MutationObserver(() => {
        createParticles(document.documentElement.classList.contains('dark'));
      });
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
      */
    <\/script> <style>
      body {
        transition: background 0.5s;
      }
      body.dark {
    background: #000 !important;
  }

  /* Global h2 font weight override */
  h2 {
    font-weight: 500 !important;
      }
      @keyframes particleFloat {
        0% { transform: translateY(0) scale(1); }
        100% { transform: translateY(-40px) scale(1.15); }
      }
      @keyframes cosmicFloat {
        0% { transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
        50% { transform: translateY(-30px) translateX(10px) scale(1.1) rotate(180deg); }
        100% { transform: translateY(-60px) translateX(-10px) scale(1.2) rotate(360deg); }
      }
      @keyframes cosmicShape {
        0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.3; }
        50% { transform: translateY(-40px) scale(1.15) rotate(180deg); opacity: 0.6; }
        100% { transform: translateY(-80px) scale(1.3) rotate(360deg); opacity: 0.3; }
      }
      @keyframes floatShape {
        0% { transform: translateY(0) scale(1) rotate(0deg); }
        100% { transform: translateY(-60px) scale(1.08) rotate(8deg); }
      }
      #global-particles-bg div:hover, #global-light-bg div:hover {
        filter: brightness(1.5);
      }
      #global-light-bg {
        position: fixed;
        z-index: -2;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        transition: opacity 0.5s;
      }
    </style> <!--  --> <!-- Chatbot Widget Start -->  <button id="astrix-chatbot-btn" aria-label="Open chat" data-astro-cid-sckkx6r4> <svg width="28" height="28" fill="white" viewBox="0 0 24 24" data-astro-cid-sckkx6r4> <path d="M12 3C7.03 3 3 6.58 3 11c0 1.61.62 3.09 1.69 4.36L3 21l5.04-1.67C9.34 19.77 10.65 20 12 20c4.97 0 9-3.58 9-8s-4.03-8-9-8z" data-astro-cid-sckkx6r4></path> </svg> </button> <div id="astrix-chatbot-popup" data-astro-cid-sckkx6r4> <div id="astrix-chatbot-header" data-astro-cid-sckkx6r4> <img src="/AI_Chatbot.jpg" alt="Astrix Chatbot" style="width:32px;height:32px;border-radius:50%;margin-right:8px;" data-astro-cid-sckkx6r4> <span style="font-weight:bold;" data-astro-cid-sckkx6r4>Astrix Chatbot</span> <button onclick="document.getElementById('astrix-chatbot-popup').classList.remove('open')" style="background:none;border:none;color:#fff;font-size:20px;cursor:pointer;" data-astro-cid-sckkx6r4>\xD7</button> </div> <div id="astrix-chatbot-messages" data-astro-cid-sckkx6r4> <div style="margin-bottom:8px;background:#f5a623;color:#fff;padding:10px 16px;border-radius:16px 16px 16px 4px;display:inline-block;max-width:80%;font-weight:500;" data-astro-cid-sckkx6r4>Hi, I can help you get the answers</div> </div> <div id="astrix-chatbot-input-area" data-astro-cid-sckkx6r4> <input id="astrix-chatbot-input" type="text" placeholder="Type your message..." data-astro-cid-sckkx6r4> <button id="astrix-chatbot-send" data-astro-cid-sckkx6r4>Send</button> </div> </div> `, " <!-- Chatbot Widget End --> <!--  --> <script>\n      // Only apply black background and remove background-image in dark mode\n      function setDarkBg() {\n        if (document.documentElement.classList.contains('dark')) {\n          document.documentElement.style.background = '#000';\n          document.documentElement.style.backgroundImage = 'none';\n          document.body.style.background = '#000';\n          document.body.style.backgroundImage = 'none';\n        } else {\n          document.documentElement.style.background = '';\n          document.documentElement.style.backgroundImage = '';\n          document.body.style.background = '';\n          document.body.style.backgroundImage = '';\n        }\n      }\n      setDarkBg();\n      // Listen for theme changes\n      const darkObs = new MutationObserver(setDarkBg);\n      darkObs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });\n    <\/script> </body> </html>   <script>\n  // Reveal on scroll for all .reveal-on-scroll elements\n  document.addEventListener('DOMContentLoaded', function() {\n    const revealEls = Array.from(document.querySelectorAll('.reveal-on-scroll'));\n    const slideFromRightEls = Array.from(document.querySelectorAll('.slide-from-right'));\n    \n    if ('IntersectionObserver' in window) {\n      // Observer for reveal-on-scroll elements\n      const revealObserver = new IntersectionObserver((entries, obs) => {\n        entries.forEach(entry => {\n          if (entry.isIntersecting) {\n            entry.target.classList.add('visible');\n            obs.unobserve(entry.target);\n          }\n        });\n      }, { threshold: 0.15 });\n      revealEls.forEach(el => revealObserver.observe(el));\n      \n      // Observer for slide-from-right elements\n      const slideObserver = new IntersectionObserver((entries, obs) => {\n        entries.forEach(entry => {\n          if (entry.isIntersecting) {\n            entry.target.classList.add('visible');\n            obs.unobserve(entry.target);\n          }\n        });\n      }, { threshold: 0.2 });\n      slideFromRightEls.forEach(el => slideObserver.observe(el));\n    } else {\n      // Fallback: show all\n      revealEls.forEach(el => el.classList.add('visible'));\n      slideFromRightEls.forEach(el => el.classList.add('visible'));\n    }\n  });\n<\/script> <style>\n  /* Cycle animation for Why Choose Astrix cards */\n  .cycle-card {\n    animation: cycleGlow 4s ease-in-out infinite;\n    position: relative;\n    overflow: hidden;\n  }\n\n  .cycle-card::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n    animation: cycleSweep 3s ease-in-out infinite;\n  }\n\n  @keyframes cycleGlow {\n    0%, 100% {\n      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n      transform: translateY(0);\n    }\n    25% {\n      box-shadow: 0 15px 40px rgba(59, 130, 246, 0.2);\n      transform: translateY(-2px);\n    }\n    50% {\n      box-shadow: 0 20px 50px rgba(147, 51, 234, 0.3);\n      transform: translateY(-4px);\n    }\n    75% {\n      box-shadow: 0 15px 40px rgba(236, 72, 153, 0.2);\n      transform: translateY(-2px);\n    }\n  }\n\n  @keyframes cycleSweep {\n    0% {\n      left: -100%;\n    }\n    50% {\n      left: 100%;\n    }\n    100% {\n      left: 100%;\n    }\n  }\n\n  /* Stagger the cycle animations */\n  .cycle-card:nth-child(1) { animation-delay: 0s; }\n  .cycle-card:nth-child(2) { animation-delay: 1s; }\n  .cycle-card:nth-child(3) { animation-delay: 2s; }\n  .cycle-card:nth-child(4) { animation-delay: 3s; }\n\n  /* Dark theme adjustments for cycle cards */\n  .dark .cycle-card {\n    animation: cycleGlowDark 4s ease-in-out infinite;\n  }\n\n  @keyframes cycleGlowDark {\n    0%, 100% {\n      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n      transform: translateY(0);\n    }\n    25% {\n      box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);\n      transform: translateY(-2px);\n    }\n    50% {\n      box-shadow: 0 20px 50px rgba(147, 51, 234, 0.5);\n      transform: translateY(-4px);\n    }\n    75% {\n      box-shadow: 0 15px 40px rgba(236, 72, 153, 0.4);\n      transform: translateY(-2px);\n    }\n  }\n</style> <script>\n  // Carousel functionality for Why Choose Astrix section\n  document.addEventListener('DOMContentLoaded', function() {\n    const container = document.getElementById('cards-container');\n    const prevBtn = document.getElementById('prev-btn');\n    const nextBtn = document.getElementById('next-btn');\n    const dots = document.querySelectorAll('.dot-indicator');\n    const cards = document.querySelectorAll('.card-item');\n    \n    if (!container || !prevBtn || !nextBtn) return;\n    \n    let currentIndex = 0;\n    const cardWidth = 320; // w-80 = 320px\n    const gap = 32; // gap-8 = 32px\n    const totalWidth = cardWidth + gap;\n    \n    function updateCarousel() {\n      const translateX = -currentIndex * totalWidth;\n      container.style.transform = \\`translateX(\\${translateX}px)\\`;\n      container.style.transition = 'transform 0.5s ease-in-out';\n      \n      // Update dots\n      dots.forEach((dot, index) => {\n        dot.classList.toggle('active', index === currentIndex);\n        dot.classList.toggle('bg-blue-300', index === currentIndex);\n        dot.classList.toggle('dark:bg-blue-600', index === currentIndex);\n        dot.classList.toggle('bg-gray-300', index !== currentIndex);\n        dot.classList.toggle('dark:bg-gray-600', index !== currentIndex);\n      });\n      \n      // Update button states\n      prevBtn.disabled = currentIndex === 0;\n      nextBtn.disabled = currentIndex === cards.length - 1;\n      \n      prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';\n      nextBtn.style.opacity = currentIndex === cards.length - 1 ? '0.5' : '1';\n    }\n    \n    function nextSlide() {\n      if (currentIndex < cards.length - 1) {\n        currentIndex++;\n        updateCarousel();\n      }\n    }\n    \n    function prevSlide() {\n      if (currentIndex > 0) {\n        currentIndex--;\n        updateCarousel();\n      }\n    }\n    \n    // Event listeners\n    nextBtn.addEventListener('click', nextSlide);\n    prevBtn.addEventListener('click', prevSlide);\n    \n    // Dot navigation\n    dots.forEach((dot, index) => {\n      dot.addEventListener('click', () => {\n        currentIndex = index;\n        updateCarousel();\n      });\n    });\n    \n    // Keyboard navigation\n    document.addEventListener('keydown', (e) => {\n      if (e.key === 'ArrowLeft') {\n        prevSlide();\n      } else if (e.key === 'ArrowRight') {\n        nextSlide();\n      }\n    });\n    \n    // Auto-play (optional)\n    let autoPlayInterval;\n    function startAutoPlay() {\n      autoPlayInterval = setInterval(() => {\n        if (currentIndex < cards.length - 1) {\n          nextSlide();\n        } else {\n          currentIndex = 0;\n          updateCarousel();\n        }\n      }, 5000); // Change slide every 5 seconds\n    }\n    \n    function stopAutoPlay() {\n      clearInterval(autoPlayInterval);\n    }\n    \n    // Pause auto-play on hover\n    container.addEventListener('mouseenter', stopAutoPlay);\n    container.addEventListener('mouseleave', startAutoPlay);\n    \n    // Initialize\n    updateCarousel();\n    startAutoPlay();\n  });\n<\/script>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]), renderScript($$result, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 w-full z-50 backdrop-blur-xl shadow-glass border-b border-white/10 dark:border-neutral-800 transition-all duration-300" data-astro-cid-3ef6ksr2> <!-- Sticky nav bar: do not wrap header in any container with overflow:hidden/auto/scroll --> <nav class="max-w-7xl mx-auto px-6 flex justify-between items-center h-16" data-astro-cid-3ef6ksr2> <!-- Logo --> <a href="/" class="flex items-center" data-astro-cid-3ef6ksr2> <img src="/Astrix_logo.png" alt="Logo" class="h-12 w-auto object-contain transition-all duration-300" data-astro-logo data-astro-cid-3ef6ksr2> </a> <!-- Navigation --> <div class="hidden md:flex items-center gap-2 lg:gap-6" data-astro-cid-3ef6ksr2> <a href="/#how-it-works" class="nav-link" data-astro-cid-3ef6ksr2>How It Works</a> <a href="/#why-choose-astrix" class="nav-link" data-astro-cid-3ef6ksr2>Features</a> <a href="/#pricing" class="nav-link" data-astro-cid-3ef6ksr2>Pricing</a> <a href="/contact" class="nav-link" data-astro-cid-3ef6ksr2>Contact</a> <button id="theme-toggle" aria-label="Toggle theme" class="ml-4 w-9 h-9 bg-white/60 dark:bg-neutral-800 border border-white/20 dark:border-neutral-700 rounded-full shadow-sm flex items-center justify-center transition-all duration-200 focus:outline-none" data-astro-cid-3ef6ksr2> <svg id="sun-icon" class="w-4 h-4 text-neutral-700 dark:text-neutral-300 transition-all duration-200 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" data-astro-cid-3ef6ksr2></path></svg> <svg id="moon-icon" class="w-4 h-4 text-neutral-700 dark:text-neutral-300 transition-all duration-200 absolute opacity-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" data-astro-cid-3ef6ksr2></path></svg> </button> </div> <!-- Mobile menu button --> <div class="md:hidden flex items-center gap-2" data-astro-cid-3ef6ksr2> <button type="button" class="mobile-menu-button text-neutral-700 dark:text-neutral-200 hover:text-primary-500 focus:outline-none" data-astro-cid-3ef6ksr2> <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path></svg> </button> <button id="mobile-theme-toggle" aria-label="Toggle theme" class="w-9 h-9 bg-white/60 dark:bg-neutral-800 border border-white/20 dark:border-neutral-700 rounded-full shadow-sm flex items-center justify-center transition-all duration-200 focus:outline-none" data-astro-cid-3ef6ksr2> <svg id="mobile-sun-icon" class="w-4 h-4 text-neutral-700 dark:text-neutral-300 transition-all duration-200 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" data-astro-cid-3ef6ksr2></path></svg> <svg id="mobile-moon-icon" class="w-4 h-4 text-neutral-700 dark:text-neutral-300 transition-all duration-200 absolute opacity-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" data-astro-cid-3ef6ksr2></path></svg> </button> </div> </nav> <!-- Mobile Navigation --> <div class="mobile-menu hidden md:hidden bg-white/95 dark:bg-neutral-900/95 border-t border-white/10 dark:border-neutral-800 shadow-glass px-6 py-4" data-astro-cid-3ef6ksr2> <a href="/#how-it-works" class="block nav-link py-2" data-astro-cid-3ef6ksr2>How It Works</a> <a href="/#why-choose-astrix" class="block nav-link py-2" data-astro-cid-3ef6ksr2>Features</a> <a href="/#pricing" class="block nav-link py-2" data-astro-cid-3ef6ksr2>Pricing</a> <a href="/contact" class="block nav-link py-2" data-astro-cid-3ef6ksr2>Contact</a> </div> </header> ${renderScript($$result, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/components/Header.astro?astro&type=script&index=0&lang.ts")} <style>
.nav-link {
  position: relative;
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-family: 'Figtree', 'Figtree Placeholder', sans-serif;
  font-weight: 600;
  font-size: 1.08rem;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}
.nav-link::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: 0.1em;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #a259ec 0%, #06b6d4 100%);
  border-radius: 2px;
  opacity: 0;
  transform: scaleX(0);
  transition: opacity 0.2s, transform 0.3s cubic-bezier(0.4,0,0.2,1);
}
.nav-link:hover::after, .nav-link:focus::after {
  opacity: 1;
  transform: scaleX(1);
}

header {
  box-shadow: 0 4px 32px 0 rgba(49, 46, 129, 0.10), 0 1.5px 0 0 rgba(255,255,255,0.08);
}

/* Dark mode navigation styles */
.dark nav a {
  color: white !important;
}

.dark nav button {
  color: white !important;
}

.dark .mobile-menu-button {
  color: white !important;
}

#theme-toggle {
  transition: all 0.2s ease-in-out;
  backdrop-filter: blur(8px);
}

#theme-toggle:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background-color: rgba(255, 255, 255, 0.9);
}

.dark #theme-toggle:hover {
  background-color: rgba(31, 41, 55, 0.9);
}

#theme-toggle:active {
  transform: translateY(0);
}

#sun-icon, #moon-icon {
  transition: all 0.3s ease-in-out;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

#theme-toggle:focus-visible {
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
}

#theme-toggle:focus {
  outline: none;
}

#theme-toggle:focus-visible:not(:focus) {
  outline: none;
}

/* Remove any persistent focus styles */
#theme-toggle:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}
}
#theme-toggle .ring-accent-500 {
  box-shadow: 0 0 0 3px #8b5cf6;
}
#theme-toggle:hover {
  filter: brightness(1.08) drop-shadow(0 0 8px #8b5cf6aa);
}
.dark\\:to-\\[rgba\\(94\\,0\\,255\\,0\\.80\\)\\]:is(.dark *) {
  --tw-gradient-to: rgb(112 83 161 / 80%) var(--tw-gradient-to-position);
}
.dark header, .dark header * {
  color: #cd98ee !important;
  fill: #cd98ee !important;
}
.dark .logo-img {
  filter: invert(1) contrast(5.5) !important;
}
.logo-img {
  filter: contrast(5.5);
}

/* Logo filter: contrast(5.5) in light, invert+contrast in dark */
[data-astro-logo] {
  filter: contrast(5.5);
}
html.dark [data-astro-logo] {
  filter: invert(1) contrast(5.5) !important;
}

.dark header {
  background: #000 !important;
}

.header-gradient {
  background: linear-gradient(90deg, #a259ec 0%, #06b6d4 100%);
}
.dark .header-gradient {
  background: #000 !important;
}
</style>  `;
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/components/Header.astro", void 0);

export { $$Layout as $, $$Header as a };
