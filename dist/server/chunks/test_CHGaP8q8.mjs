globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
//#region src/pages/test.ts
var test_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
async function GET() {
	return new Response("Hello from Astro server!");
}
//#endregion
//#region \0virtual:astro:page:src/pages/test@_@ts
var page = () => test_exports;
//#endregion
export { page };
