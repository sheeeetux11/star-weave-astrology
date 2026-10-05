globalThis.process ??= {};
globalThis.process.env ??= {};
import { E as createAstro, g as addAttribute, m as maybeRenderHead, p as renderTemplate } from "./server_Df2-Ede3.mjs";
import { r as createComponent } from "./_astro_assets_CZqGjbLc.mjs";
//#region src/assets/icons/Socials/Kofi.png
var Kofi_default = new Proxy({
	"src": "/_astro/Kofi.B8fst4Qo.png",
	"width": 512,
	"height": 421,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "/workspaces/star-weave-astrology/src/assets/icons/Socials/Kofi.png";
	return target[name];
} });
//#endregion
//#region src/components/BlogKoFiCTA.astro
createAstro("https://starweaveastrology.com");
var $$BlogKoFiCTA = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogKoFiCTA;
	const { koFiUrl = "https://ko-fi.com/starweaveastrology" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="kofi-cta-section" data-astro-cid-palnqjb3><div class="kofi-banner" data-astro-cid-palnqjb3><p class="kofi-text" data-astro-cid-palnqjb3>Enjoy the Blog?! Consider supporting <span class="highlight-name" data-astro-cid-palnqjb3>Sheetu</span> on <span class="highlight-brand" data-astro-cid-palnqjb3>Ko-Fi</span></p><a${addAttribute(koFiUrl, "href")} target="_blank" rel="noopener noreferrer" class="kofi-button" data-astro-cid-palnqjb3><img${addAttribute(Kofi_default.src, "src")} alt="" class="kofi-icon" data-astro-cid-palnqjb3><span data-astro-cid-palnqjb3>Support</span></a></div></section>`;
}, "/workspaces/star-weave-astrology/src/components/BlogKoFiCTA.astro", void 0);
//#endregion
export { $$BlogKoFiCTA as t };
