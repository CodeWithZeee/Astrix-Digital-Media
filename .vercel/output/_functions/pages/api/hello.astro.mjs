export { renderers } from '../../renderers.mjs';

async function GET() {
    return new Response('Hello from API!', { status: 200 });
  }

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
