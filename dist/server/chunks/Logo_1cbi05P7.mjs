globalThis.process ??= {};
globalThis.process.env ??= {};
//#region src/assets/icons/Logo.png
var Logo_default = new Proxy({
	"src": "/_astro/Logo.DoKD-XiS.png",
	"width": 444,
	"height": 428,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "/workspaces/star-weave-astrology/src/assets/icons/Logo.png";
	return target[name];
} });
//#endregion
export { Logo_default as t };
