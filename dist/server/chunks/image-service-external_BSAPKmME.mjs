globalThis.process ??= {};
globalThis.process.env ??= {};
import { m as joinPaths, p as isRemotePath } from "./consts_DTQsYSzU.mjs";
import { a as baseService, c as isESMImportedImage, f as matchHostname, p as matchPattern } from "./assets_CuhKiy9G.mjs";
import "./utils__DO5zO0N.mjs";
//#region node_modules/@astrojs/cloudflare/dist/utils/assets.js
function isRemoteAllowed(src, { domains = [], remotePatterns = [] }) {
	if (!isRemotePath(src)) return false;
	const url = new URL(src);
	return domains.some((domain) => matchHostname(url, domain)) || remotePatterns.some((remotePattern) => matchPattern(url, remotePattern));
}
//#endregion
//#region node_modules/@astrojs/cloudflare/dist/entrypoints/image-service-external.js
var image_service_external_default = {
	...baseService,
	getURL: (options, imageConfig) => {
		const resizingParams = ["onerror=redirect"];
		if (options.width) resizingParams.push(`width=${options.width}`);
		if (options.height) resizingParams.push(`height=${options.height}`);
		if (options.quality) resizingParams.push(`quality=${options.quality}`);
		if (options.fit) resizingParams.push(`fit=${options.fit}`);
		if (options.format) resizingParams.push(`format=${options.format}`);
		let imageSource = "";
		if (isESMImportedImage(options.src)) imageSource = options.src.src;
		else if (isRemoteAllowed(options.src, imageConfig)) imageSource = options.src;
		else return options.src;
		return joinPaths("/", "/cdn-cgi/image", resizingParams.join(","), imageSource);
	}
};
//#endregion
export { image_service_external_default as default };
