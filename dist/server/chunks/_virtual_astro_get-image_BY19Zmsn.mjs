globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as getImage$1 } from "./assets_BOp_eiMf.mjs";
import { t as createConsoleLogger } from "./console_CiY8tckW.mjs";
import { t as level } from "./_virtual_astro_logger_DARKlz-P.mjs";
//#region \0virtual:astro:get-image
var imageConfig = {
	"endpoint": {
		"route": "/_image",
		"entrypoint": "@astrojs/cloudflare/image-transform-endpoint"
	},
	"service": {
		"entrypoint": "@astrojs/cloudflare/image-service-workerd",
		"config": {}
	},
	"dangerouslyProcessSVG": false,
	"domains": [],
	"remotePatterns": [],
	"responsiveStyles": false
};
Object.defineProperty(imageConfig, "assetQueryParams", {
	value: void 0,
	enumerable: false,
	configurable: true
});
var _astroLogger = createConsoleLogger({ level });
var _runtimeLogger = {
	info: (message) => _astroLogger.info(null, message),
	warn: (message) => _astroLogger.warn(null, message),
	error: (message) => _astroLogger.error(null, message)
};
var getImage = async (options) => await getImage$1(options, imageConfig, _runtimeLogger);
//#endregion
export { getImage };
