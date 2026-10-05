globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as getInstalledRenderScope } from "./scope_DbCZzbpu.mjs";
//#region node_modules/astro/dist/core/render-scope/record.js
function recordContentEntryRender(filePath) {
	if (!filePath) return;
	getInstalledRenderScope()?.getStore()?.contentEntries?.add(filePath);
}
function recordStaticImage(image) {
	getInstalledRenderScope()?.getStore()?.staticImages?.push(image);
}
//#endregion
export { recordStaticImage as n, recordContentEntryRender as t };
