globalThis.process ??= {};
globalThis.process.env ??= {};
import { S as isRemotePath, f as isRemoteAllowed, s as fetchWithRedirects } from "./assets_BOp_eiMf.mjs";
import { t as imageConfig } from "./_astro_assets_CZqGjbLc.mjs";
//#region node_modules/@astrojs/cloudflare/dist/utils/image-binding-transform-stream.js
var qualityTable = {
	low: 25,
	mid: 50,
	high: 85,
	max: 100
};
var defaultQuality = 85;
async function transformStream(body, params, images) {
	const outputFormat = {
		jpeg: "image/jpeg",
		jpg: "image/jpeg",
		png: "image/png",
		gif: "image/gif",
		webp: "image/webp",
		avif: "image/avif"
	}[params.get("f") ?? ""];
	if (!outputFormat) return new Response(`Unsupported format: ${params.get("f")}`, { status: 400 });
	const qualityParam = params.get("q");
	const quality = qualityParam ? qualityTable[qualityParam] ?? Number.parseInt(qualityParam) : params.has("q") ? void 0 : defaultQuality;
	return (await images.input(body).transform({
		width: params.has("w") ? Number.parseInt(params.get("w")) : void 0,
		height: params.has("h") ? Number.parseInt(params.get("h")) : void 0,
		fit: params.get("fit")
	}).output({
		quality,
		format: outputFormat
	})).response();
}
//#endregion
//#region node_modules/@astrojs/cloudflare/dist/utils/image-binding-transform.js
async function transform(rawUrl, images, assets) {
	const url = new URL(rawUrl);
	const href = url.searchParams.get("href");
	if (!href || isRemotePath(href) && !isRemoteAllowed(href, imageConfig)) return new Response("Forbidden", { status: 403 });
	const imageSrc = new URL(href, url.origin);
	let content;
	if (isRemotePath(href)) try {
		content = await fetchWithRedirects({
			url: imageSrc,
			imageConfig
		});
		if (!isRemoteAllowed(content.url, imageConfig)) return new Response("Forbidden", { status: 403 });
	} catch {
		return new Response("Not Found", { status: 404 });
	}
	else content = await assets.fetch(imageSrc);
	if (!content.body) return new Response(null, { status: 404 });
	return transformStream(content.body, url.searchParams, images);
}
//#endregion
export { transformStream as n, transform as t };
