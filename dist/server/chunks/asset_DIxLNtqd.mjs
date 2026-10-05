globalThis.process ??= {};
globalThis.process.env ??= {};
import { S as isRemotePath, T as removeBase, d as VALID_INPUT_FORMATS, dt as RenderUndefinedEntryError, j as AstroError, w as prependForwardSlash, yt as UnknownContentCollectionError } from "./assets_BOp_eiMf.mjs";
import { B as generateCspDigest, E as createAstro, G as string, H as date, V as array, W as object, _ as createRenderInstruction, g as addAttribute, h as renderHead, m as maybeRenderHead, n as renderScriptElement, o as renderComponent, p as renderTemplate, q as safeParseAsync, r as renderUniqueStylesheet, t as spreadAttributes, u as renderSlot, w as unescapeHTML, x as createHeadAndContent } from "./server_Df2-Ede3.mjs";
import { i as unflatten, n as escape, r as parse } from "./scope_DbCZzbpu.mjs";
import { t as createConsoleLogger } from "./console_CiY8tckW.mjs";
import { n as $$Image, r as createComponent } from "./_astro_assets_CZqGjbLc.mjs";
import { t as recordContentEntryRender } from "./record_WCPy2R-y.mjs";
import { t as level } from "./_virtual_astro_logger_DARKlz-P.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region node_modules/astro/dist/assets/runtime.js
function createSvgComponent({ meta, attributes, children, styles }) {
	const hasStyles = styles.length > 0;
	const Component = createComponent({
		async factory(result, props) {
			const normalizedProps = normalizeProps(attributes, props);
			if (hasStyles && result.cspDestination) for (const style of styles) {
				const hash = await generateCspDigest(style, result.cspAlgorithm);
				result._metadata.extraStyleHashes.push(hash);
			}
			return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
		},
		propagation: hasStyles ? "self" : "none"
	});
	Object.defineProperty(Component, "toJSON", {
		value: () => meta,
		enumerable: false
	});
	return Object.assign(Component, meta);
}
var ATTRS_TO_DROP = [
	"xmlns",
	"xmlns:xlink",
	"version"
];
var DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
	for (const attr of ATTRS_TO_DROP) delete attributes[attr];
	return attributes;
}
function normalizeProps(attributes, props) {
	return dropAttributes({
		...DEFAULT_ATTRS,
		...attributes,
		...props
	});
}
var CONTENT_IMAGE_FLAG = "astroContentImageFlag";
var DATA_STORE_VIRTUAL_ID = "astro:data-layer-content";
var IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";
`${DATA_STORE_VIRTUAL_ID}`;
//#endregion
//#region node_modules/astro/dist/assets/utils/resolveImports.js
function imageSrcToImportId(imageSrc, filePath) {
	imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
	if (isRemotePath(imageSrc)) return;
	const ext = imageSrc.split(".").at(-1)?.toLowerCase();
	if (!ext || !VALID_INPUT_FORMATS.includes(ext)) return;
	const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
	if (filePath) params.set("importer", filePath);
	return `${imageSrc}?${params.toString()}`;
}
//#endregion
//#region node_modules/astro/dist/content/data-store-source.js
var InMemorySource = class {
	#store;
	constructor(store) {
		this.#store = store;
	}
	hasCollection(collection) {
		return this.#store.hasCollection(collection);
	}
	get(collection, key) {
		return this.#store.get(collection, key);
	}
	entries(collection) {
		return this.#store.entries(collection);
	}
	values(collection) {
		return this.#store.values(collection);
	}
	keys(collection) {
		return this.#store.keys(collection);
	}
	has(collection, key) {
		return this.#store.has(collection, key);
	}
	collections() {
		return this.#store.collections();
	}
};
//#endregion
//#region node_modules/astro/dist/content/data-store.js
var ChunkedCollectionParser = class {
	#entries = /* @__PURE__ */ new Map();
	#remainder = "";
	add(part) {
		const records = (this.#remainder + part).split("\n");
		this.#remainder = records.pop();
		for (const record of records) {
			const parsed = parse(record);
			if (!Array.isArray(parsed) || parsed.length !== 2 || typeof parsed[0] !== "string") throw new Error("Invalid chunked data store entry");
			this.#entries.set(parsed[0], parsed[1]);
		}
	}
	finish() {
		if (this.#remainder) throw new Error("Invalid chunked data store entry");
		return this.#entries;
	}
};
var ImmutableDataStore = class ImmutableDataStore {
	_collections = /* @__PURE__ */ new Map();
	constructor() {
		this._collections = /* @__PURE__ */ new Map();
	}
	get(collectionName, key) {
		return this._collections.get(collectionName)?.get(String(key));
	}
	entries(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).entries()];
	}
	values(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).values()];
	}
	keys(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).keys()];
	}
	has(collectionName, key) {
		const collection = this._collections.get(collectionName);
		if (collection) return collection.has(String(key));
		return false;
	}
	hasCollection(collectionName) {
		return this._collections.has(collectionName);
	}
	collections() {
		return this._collections;
	}
	/**
	* Rebuilds a collections map from a chunked-store manifest whose part file
	* names have already been swapped for their contents.
	*
	* Each collection maps to a list of parts. A part is either a raw string
	* (when the store is loaded from disk) or an ESM namespace from a virtual
	* chunk import (`{ default: string }`, when emitted at runtime). Each part
	* contains independently serialized entry records. This is the inverse of
	* {@link import('./data-store-writer.js').ChunkedWriter} and stays free of
	* Node built-ins so it can run at runtime.
	*/
	static manifestToMap(manifest) {
		const collections = /* @__PURE__ */ new Map();
		for (const [collectionName, parts] of Object.entries(manifest)) {
			const parser = new ChunkedCollectionParser();
			for (const part of parts) parser.add(typeof part === "string" ? part : part.default);
			collections.set(collectionName, parser.finish());
		}
		return collections;
	}
	/**
	* Attempts to load a DataStore from the virtual module.
	* This only works in Vite.
	*/
	static async fromModule() {
		try {
			const data = await import("./_astro_data-layer-content_BTWXhCdu.mjs");
			if (data.default instanceof Map) return ImmutableDataStore.fromMap(data.default);
			if (Array.isArray(data.default)) {
				const map2 = unflatten(data.default);
				return ImmutableDataStore.fromMap(map2);
			}
			const map = ImmutableDataStore.manifestToMap(data.default);
			return ImmutableDataStore.fromMap(map);
		} catch {}
		return new ImmutableDataStore();
	}
	static async fromMap(data) {
		const store = new ImmutableDataStore();
		store._collections = data;
		return store;
	}
};
function dataStoreSingleton() {
	let instance = void 0;
	return {
		get: async () => {
			if (!instance) instance = ImmutableDataStore.fromModule().then((store) => new InMemorySource(store));
			return instance;
		},
		set: (store) => {
			instance = new InMemorySource(store);
		}
	};
}
var globalDataStore = dataStoreSingleton();
//#endregion
//#region node_modules/astro/dist/content/loaders/errors.js
function formatZodError(error) {
	return error.issues.map((issue) => `  **${issue.path.join(".")}**: ${issue.message}`);
}
var LiveCollectionError = class LiveCollectionError extends Error {
	collection;
	message;
	cause;
	constructor(collection, message, cause) {
		super(message);
		this.collection = collection;
		this.message = message;
		this.cause = cause;
		this.name = "LiveCollectionError";
		if (cause?.stack) this.stack = cause.stack;
	}
	static is(error) {
		return error instanceof LiveCollectionError;
	}
};
var LiveEntryNotFoundError = class extends LiveCollectionError {
	constructor(collection, entryFilter) {
		super(collection, `Entry ${collection} \u2192 ${typeof entryFilter === "string" ? entryFilter : JSON.stringify(entryFilter)} was not found.`);
		this.name = "LiveEntryNotFoundError";
	}
	static is(error) {
		return error?.name === "LiveEntryNotFoundError";
	}
};
var LiveCollectionValidationError = class extends LiveCollectionError {
	constructor(collection, entryId, error) {
		super(collection, [
			`**${collection} \u2192 ${entryId}** data does not match the collection schema.
`,
			...formatZodError(error),
			""
		].join("\n"));
		this.name = "LiveCollectionValidationError";
	}
	static is(error) {
		return error?.name === "LiveCollectionValidationError";
	}
};
var LiveCollectionCacheHintError = class extends LiveCollectionError {
	constructor(collection, entryId, error) {
		super(collection, [
			`**${String(collection)}${entryId ? ` \u2192 ${String(entryId)}` : ""}** returned an invalid cache hint.
`,
			...formatZodError(error),
			""
		].join("\n"));
		this.name = "LiveCollectionCacheHintError";
	}
	static is(error) {
		return error?.name === "LiveCollectionCacheHintError";
	}
};
//#endregion
//#region node_modules/astro/dist/content/runtime.js
var cacheHintSchema = object({
	tags: array(string()).optional(),
	lastModified: date().optional()
});
async function parseLiveEntry(entry, schema, collection) {
	try {
		const parsed = await safeParseAsync(schema, entry.data);
		if (!parsed.success) return { error: new LiveCollectionValidationError(collection, entry.id, parsed.error) };
		if (entry.cacheHint) {
			const cacheHint = cacheHintSchema.safeParse(entry.cacheHint);
			if (!cacheHint.success) return { error: new LiveCollectionCacheHintError(collection, entry.id, cacheHint.error) };
			entry.cacheHint = cacheHint.data;
		}
		return { entry: {
			...entry,
			data: parsed.data
		} };
	} catch (error) {
		return { error: new LiveCollectionError(collection, `Unexpected error parsing entry ${entry.id} in collection ${collection}`, error) };
	}
}
function createGetCollection({ liveCollections, logger }) {
	return async function getCollection(collection, filter) {
		if (collection in liveCollections) throw new AstroError({
			...UnknownContentCollectionError,
			message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
		});
		const hasFilter = typeof filter === "function";
		const store = await globalDataStore.get();
		if (await store.hasCollection(collection)) {
			const { default: imageAssetMap } = await import("./content-assets_C2Ul2W5w.mjs");
			const result = [];
			for (const rawEntry of await store.values(collection)) {
				const data = resolveEntryData(rawEntry, imageAssetMap);
				let entry = {
					...rawEntry,
					data,
					collection
				};
				if (hasFilter && !filter(entry)) continue;
				result.push(entry);
			}
			return result;
		} else {
			logger.warn("content", `The collection ${JSON.stringify(collection)} does not exist or is empty. Please check your content config file for errors.`);
			return [];
		}
	};
}
function createGetEntry({ liveCollections, logger }) {
	return async function getEntry(collectionOrLookupObject, lookup) {
		let collection, lookupId;
		if (typeof collectionOrLookupObject === "string") {
			collection = collectionOrLookupObject;
			if (!lookup) throw new AstroError({
				...UnknownContentCollectionError,
				message: "`getEntry()` requires an entry identifier as the second argument."
			});
			lookupId = lookup;
		} else {
			collection = collectionOrLookupObject.collection;
			lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
		}
		if (collection in liveCollections) throw new AstroError({
			...UnknownContentCollectionError,
			message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
		});
		if (typeof lookupId === "object") throw new AstroError({
			...UnknownContentCollectionError,
			message: `The entry identifier must be a string. Received object.`
		});
		const store = await globalDataStore.get();
		if (await store.hasCollection(collection)) {
			const entry = await store.get(collection, lookupId);
			if (!entry) {
				logger.warn("content", `Entry ${collection} → ${lookupId} was not found.`);
				return;
			}
			const { default: imageAssetMap } = await import("./content-assets_C2Ul2W5w.mjs");
			const data = resolveEntryData(entry, imageAssetMap);
			const result = {
				...entry,
				data,
				collection
			};
			warnForPropertyAccess(logger, result.data, "slug", `[content] Attempted to access deprecated property on "${collection}" entry.
The "slug" property is no longer automatically added to entries. Please use the "id" property instead.`);
			warnForPropertyAccess(logger, result, "render", `[content] Invalid attempt to access "render()" method on "${collection}" entry.
To render an entry, use "render(entry)" from "astro:content".`);
			return result;
		}
	};
}
function warnForPropertyAccess(logger, entry, prop, message) {
	if (!(prop in entry)) {
		let _value = void 0;
		Object.defineProperty(entry, prop, {
			get() {
				if (_value === void 0) logger.error("content", message);
				return _value;
			},
			set(v) {
				_value = v;
			},
			enumerable: false
		});
	}
}
function createGetLiveCollection({ liveCollections }) {
	return async function getLiveCollection(collection, filter) {
		if (!(collection in liveCollections)) return { error: new LiveCollectionError(collection, `Collection "${collection}" is not a live collection. Use getCollection() instead of getLiveCollection() to load regular content collections.`) };
		try {
			const context = {
				filter,
				collection
			};
			const response = await liveCollections[collection].loader?.loadCollection?.(context);
			if (response && "error" in response) return { error: response.error };
			const { schema } = liveCollections[collection];
			let processedEntries = response.entries;
			if (schema) {
				const entryResults = await Promise.all(response.entries.map((entry) => parseLiveEntry(entry, schema, collection)));
				for (const result of entryResults) if (result.error) return { error: result.error };
				processedEntries = entryResults.map((result) => result.entry);
			}
			let cacheHint = response.cacheHint;
			if (cacheHint) {
				const cacheHintResult = cacheHintSchema.safeParse(cacheHint);
				if (!cacheHintResult.success) return { error: new LiveCollectionCacheHintError(collection, void 0, cacheHintResult.error) };
				cacheHint = cacheHintResult.data;
			}
			if (processedEntries.length > 0) {
				const entryTags = /* @__PURE__ */ new Set();
				let latestModified;
				for (const entry of processedEntries) if (entry.cacheHint) {
					if (entry.cacheHint.tags) entry.cacheHint.tags.forEach((tag) => entryTags.add(tag));
					if (entry.cacheHint.lastModified instanceof Date) {
						if (latestModified === void 0 || entry.cacheHint.lastModified > latestModified) latestModified = entry.cacheHint.lastModified;
					}
				}
				if (entryTags.size > 0 || latestModified || cacheHint) {
					const mergedCacheHint = {};
					if (cacheHint?.tags || entryTags.size > 0) mergedCacheHint.tags = [.../* @__PURE__ */ new Set([...cacheHint?.tags || [], ...entryTags])];
					if (cacheHint?.lastModified && latestModified) mergedCacheHint.lastModified = cacheHint.lastModified > latestModified ? cacheHint.lastModified : latestModified;
					else if (cacheHint?.lastModified || latestModified) mergedCacheHint.lastModified = cacheHint?.lastModified ?? latestModified;
					cacheHint = mergedCacheHint;
				}
			}
			return {
				entries: processedEntries,
				cacheHint
			};
		} catch (error) {
			return { error: new LiveCollectionError(collection, `Unexpected error loading collection ${collection}${error instanceof Error ? `: ${error.message}` : ""}`, error) };
		}
	};
}
function createGetLiveEntry({ liveCollections }) {
	return async function getLiveEntry(collection, lookup) {
		if (!(collection in liveCollections)) return { error: new LiveCollectionError(collection, `Collection "${collection}" is not a live collection. Use getCollection() instead of getLiveEntry() to load regular content collections.`) };
		try {
			const lookupObject = {
				filter: typeof lookup === "string" ? { id: lookup } : lookup,
				collection
			};
			let entry = await liveCollections[collection].loader?.loadEntry?.(lookupObject);
			if (entry && "error" in entry) return { error: entry.error };
			if (!entry) return { error: new LiveEntryNotFoundError(collection, lookup) };
			const { schema } = liveCollections[collection];
			if (schema) {
				const result = await parseLiveEntry(entry, schema, collection);
				if (result.error) return { error: result.error };
				entry = result.entry;
			}
			return {
				entry,
				cacheHint: entry.cacheHint
			};
		} catch (error) {
			return { error: new LiveCollectionError(collection, `Unexpected error loading entry ${collection} → ${typeof lookup === "string" ? lookup : JSON.stringify(lookup)}`, error) };
		}
	};
}
var CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
	const { default: imageAssetMap } = await import("./content-assets_C2Ul2W5w.mjs");
	const imageObjects = /* @__PURE__ */ new Map();
	const { getImage } = await import("./_virtual_astro_get-image_BY19Zmsn.mjs");
	for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) try {
		const decodedImagePath = JSON.parse(imagePath.replace(/&(?:#x22|quot);/g, "\"").replace(/&(?:#x27|apos);/g, "'").replace(/&(?:amp|#x26|#38);/g, "&"));
		let image;
		if (URL.canParse(decodedImagePath.src)) image = await getImage(decodedImagePath);
		else {
			const id = imageSrcToImportId(decodedImagePath.src, fileName);
			const imported = imageAssetMap.get(id);
			if (!id || imageObjects.has(id) || !imported) continue;
			image = await getImage({
				...decodedImagePath,
				src: imported
			});
		}
		imageObjects.set(imagePath, image);
	} catch {
		throw new Error(`Failed to parse image reference: ${imagePath}`);
	}
	return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
		const image = imageObjects.get(imagePath);
		if (!image) return full;
		const { index, ...attributes } = image.attributes;
		return Object.entries({
			...attributes,
			src: image.src,
			...image.srcSet.values.length > 0 ? { srcset: image.srcSet.attribute } : {}
		}).filter(([, value]) => value != null).map(([key, value]) => value === "" ? `${key}=""` : `${key}="${escape(String(value))}"`).join(" ");
	});
}
function resolveImageAtPath(src, fileName, imageAssetMap) {
	const id = imageSrcToImportId(src, fileName);
	if (!id) return;
	const imported = imageAssetMap?.get(id);
	if (!imported) return;
	if (imported.__svgData) {
		const { __svgData: svgData, ...meta } = imported;
		return createSvgComponent({
			meta,
			...svgData
		});
	}
	return imported;
}
function setAtPathCopying(target, path, value) {
	if (path.length === 0) return target;
	const [key, ...rest] = path;
	const copy = Array.isArray(target) ? target.slice() : { ...target };
	copy[key] = rest.length === 0 ? value : setAtPathCopying(copy[key], rest, value);
	return copy;
}
function updateImageReferencesInData(data, fileName, imageAssetMap, imageImports) {
	if (!imageImports?.length) return data;
	let result = data;
	for (const path of imageImports) {
		let src = result;
		for (const key of path) src = src?.[key];
		if (typeof src !== "string") continue;
		const resolved = resolveImageAtPath(src, fileName, imageAssetMap);
		if (resolved !== void 0) result = setAtPathCopying(result, path, resolved);
	}
	return result;
}
function resolveEntryData(entry, imageAssetMap) {
	return updateImageReferencesInData(entry.data, entry.filePath, imageAssetMap, entry.imageImports);
}
function createRenderEntry({ logger }) {
	return async function renderEntry(entry) {
		if (!entry) throw new AstroError(RenderUndefinedEntryError);
		recordContentEntryRender(entry.filePath);
		if (entry.deferredRender) try {
			const { default: contentModules } = await import("./content-modules_oGlFYU7s.mjs");
			const renderEntryImport = contentModules.get(entry.filePath);
			return render$1({
				collection: "",
				id: entry.id,
				renderEntryImport
			});
		} catch (e) {
			logger.error("content", `${e}`);
		}
		const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
		return {
			Content: createComponent(() => renderTemplate`${unescapeHTML(html)}`),
			headings: entry?.rendered?.metadata?.headings ?? [],
			remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
		};
	};
}
async function render$1({ collection, id, renderEntryImport }) {
	const UnexpectedRenderError = new AstroError({
		...UnknownContentCollectionError,
		message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
	});
	if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
	const baseMod = await renderEntryImport();
	if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
	const { default: defaultMod } = baseMod;
	if (isPropagatedAssetsModule(defaultMod)) {
		const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
		if (typeof getMod !== "function") throw UnexpectedRenderError;
		const propagationMod = await getMod();
		if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
		return {
			Content: createComponent({
				factory(result, baseProps, slots) {
					let styles = "", links = "", scripts = "";
					if (Array.isArray(collectedStyles)) styles = collectedStyles.map((style) => {
						const content = typeof style === "string" ? style : style.content;
						const viteDevId = typeof style === "object" && style.id ? style.id : void 0;
						return renderUniqueStylesheet(result, {
							type: "inline",
							content,
							viteDevId
						});
					}).join("");
					if (Array.isArray(collectedLinks)) links = collectedLinks.map((link) => {
						return renderUniqueStylesheet(result, {
							type: "external",
							src: isRemotePath(link) ? link : prependForwardSlash(link)
						});
					}).join("");
					if (Array.isArray(collectedScripts)) scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
					let props = baseProps;
					if (id.endsWith("mdx")) props = {
						components: propagationMod.components ?? {},
						...baseProps
					};
					return createHeadAndContent(unescapeHTML(styles + links + scripts), renderTemplate`${renderComponent(result, "Content", propagationMod.Content, props, slots)}`);
				},
				propagation: "self"
			}),
			headings: propagationMod.getHeadings?.() ?? [],
			remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
		};
	} else if (baseMod.Content && typeof baseMod.Content === "function") return {
		Content: baseMod.Content,
		headings: baseMod.getHeadings?.() ?? [],
		remarkPluginFrontmatter: baseMod.frontmatter ?? {}
	};
	else throw UnexpectedRenderError;
}
function isPropagatedAssetsModule(module) {
	return typeof module === "object" && module != null && "__astroPropagation" in module;
}
//#endregion
//#region \0astro:content
var liveCollections = {};
var logger = createConsoleLogger({ level });
var getCollection = createGetCollection({
	liveCollections,
	logger
});
createGetEntry({
	liveCollections,
	logger
});
var render = createRenderEntry({ logger });
createGetLiveCollection({ liveCollections });
createGetLiveEntry({ liveCollections });
//#endregion
//#region src/assets/icons/Chevron.svg
var Chevron_default = createSvgComponent({
	"meta": {
		"src": "/_astro/Chevron.BqgDfO2U.svg",
		"width": 17,
		"height": 29,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 17 29",
		"fill": "none"
	},
	"children": "\n<path d=\"M10.5438 10.6278C11.3111 9.83325 12.5774 9.81077 13.3719 10.578L15.3856 12.5233C15.4967 12.6306 15.5909 12.7488 15.6717 12.8729C16.2043 13.6516 16.1258 14.7226 15.4344 15.4139L3.41391 27.4344C2.6329 28.2154 1.36684 28.2153 0.585786 27.4344C-0.195258 26.6534 -0.195249 25.3873 0.585786 24.6063L11.1747 14.0165L10.5936 13.4559C9.79907 12.6886 9.7766 11.4223 10.5438 10.6278Z\" fill=\"#EBAF24\" />\n<path d=\"M0.585786 0.585786C1.36684 -0.195262 2.63286 -0.195262 3.41391 0.585786L9.07114 6.24204C9.85206 7.0231 9.85214 8.29013 9.07114 9.07114C8.29013 9.85214 7.0231 9.85206 6.24204 9.07114L0.585786 3.41391C-0.195262 2.63286 -0.195262 1.36684 0.585786 0.585786Z\" fill=\"#EBAF24\" />\n",
	"styles": []
});
//#endregion
//#region src/components/BackToTop.astro
var $$BackToTop = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<button id="back-to-top-btn" class="back-to-top-btn" aria-label="Back to top" type="button" data-astro-cid-vy5be4ad><span class="chevron-wrapper" data-astro-cid-vy5be4ad>${renderComponent($$result, "Image", $$Image, {
		"src": Chevron_default,
		"alt": "Scroll to top",
		"width": 10,
		"height": 16,
		"class": "back-to-top-icon",
		"data-astro-cid-vy5be4ad": true
	})}</span></button>${renderScript($$result, "/workspaces/star-weave-astrology/src/components/BackToTop.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/star-weave-astrology/src/components/BackToTop.astro", void 0);
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://starweaveastrology.com");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Layout;
	const { title = "Star Weave Astrology | Weave the Cosmic Threads of your Life", description = "Unravel the invisible threads of your destiny and explore the intuitive art of astrology.", image = "/images/hero-image.png" } = Astro2.props;
	const base = "";
	const canonicalURL = new URL(Astro2.url.pathname, Astro2.site || Astro2.url);
	const resolvedImage = image.startsWith("http") ? image : `${base}${image.startsWith("/") ? "" : "/"}${image}`;
	return renderTemplate`<html lang="en" class="dark"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png"${addAttribute(`${base}/favicon.png?v=2`, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph / Social Sharing (Facebook, LinkedIn, etc.) --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(resolvedImage, "content")}><!-- Twitter Card --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(resolvedImage, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Joan&display=swap" rel="stylesheet"><script>
			// Check local storage for saved theme preference on page load
			const savedTheme = localStorage.getItem('theme');
			if (savedTheme === 'light') {
				document.documentElement.classList.remove('dark');
			} else {
				document.documentElement.classList.add('dark');
			}
		<\/script>${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}<!-- Global Back to Top Button -->${renderComponent($$result, "BackToTop", $$BackToTop, {})}</body></html>`;
}, "/workspaces/star-weave-astrology/src/layouts/Layout.astro", void 0);
var menu_default = {
	masterlists: [
		{
			"title": "PLANETS + POINTS ✨",
			"sublinks": [
				{
					"text": "PLANETS OF ASTROLOGY",
					"url": "/master-lists/planets-astrology"
				},
				{
					"text": "ASCENDANT + MIDHEAVEN MC + NORTH NODE",
					"url": "/master-lists/planets-points-asteroids"
				},
				{
					"text": "PART OF FORTUNE + LILITH + IC",
					"url": "/master-lists/planets-points-asteroids"
				},
				{
					"text": "RETROGRADE + GUIDES",
					"url": "/master-lists/retrograde-astrology"
				},
				{
					"text": "MYTHOLOGY + LORE",
					"url": "/master-lists/planets-points-asteroids"
				}
			]
		},
		{
			"title": "ASPECTS + PATTERNS ✨",
			"sublinks": [
				{
					"text": "MAJOR + MINOR ASPECTS",
					"url": "/master-lists/aspects-patterns"
				},
				{
					"text": "ASCENDNAT ASPECTS",
					"url": "/master-lists/aspects-patterns"
				},
				{
					"text": "MIDHEAVEN ASPECTS",
					"url": "/master-lists/aspects-patterns"
				},
				{
					"text": "NORTH NODE ASPECTS",
					"url": "/master-lists/aspects-patterns"
				},
				{
					"text": "ASPECTS PATTERNS",
					"url": "/master-lists/aspects-patterns"
				},
				{
					"text": "PLANETARY ASPECTS",
					"url": "/master-lists/aspects-patterns"
				},
				{
					"text": "RARE ASPECTS",
					"url": "/master-lists/aspects-patterns"
				}
			]
		},
		{
			"title": "TRANSITS ASTROLOGY ✨",
			"sublinks": [
				{
					"text": "2026 TRANSITS ASTROLOGY",
					"url": "/master-lists/transits-astrology"
				},
				{
					"text": "2025 TRANSITS ASTROLOGY",
					"url": "/master-lists/transits-astrology"
				},
				{
					"text": "2024",
					"url": "/master-lists/transits-astrology"
				},
				{
					"text": "2023 TRANSITS ASTROLOGY",
					"url": "/master-lists/transits-astrology"
				}
			]
		},
		{
			"title": "MOON ASTROLOGY ✨",
			"sublinks": [
				{
					"text": "MOON ASTROLOGY",
					"url": "/master-lists/full-and-new-moon-calendar"
				},
				{
					"text": "FULL + NEW MOON CALENDAR",
					"url": "/master-lists/full-and-new-moon-calendar"
				},
				{
					"text": "MOON CALENDAR",
					"url": "/master-lists/full-and-new-moon-calendar"
				}
			]
		},
		{
			"title": "ASTEROID ASTROLOGY ✨",
			"sublinks": [
				{
					"text": "ASTEROIDS",
					"url": "/master-lists/asteroid-astrology"
				},
				{
					"text": "RETROGRADE ASTEROIDS",
					"url": "/master-lists/asteroid-astrology"
				},
				{
					"text": "MYTHOLOGY + LORE",
					"url": "/master-lists/asteroid-astrology"
				}
			]
		}
	],
	footer_links: [
		{
			"text": "Read Blog",
			"url": "/blogs"
		},
		{
			"text": "Watch on YouTube",
			"url": "https://youtube.com/@starweaveastrology/"
		},
		{
			"text": "Tumblr",
			"url": "https://sheeeetux11.tumblr.com/"
		},
		{
			"text": "Star Weave Astrology (About)",
			"url": "/about"
		},
		{
			"text": "SHEETU (the Creator)",
			"url": "/creator"
		}
	]
};
//#endregion
//#region src/assets/icons/Sun.svg
var Sun_default = createSvgComponent({
	"meta": {
		"src": "/_astro/Sun.COdICZaY.svg",
		"width": 58,
		"height": 58,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 58 58",
		"fill": "none"
	},
	"children": "\n<path d=\"M29 48C30.6569 48 32 49.3431 32 51V55C32 56.6569 30.6569 58 29 58C27.3431 58 26 56.6569 26 55V51C26 49.3431 27.3431 48 29 48ZM43.29 41.1992C43.8328 39.549 46.1672 39.549 46.71 41.1992L47.1904 42.6611C47.369 43.2041 47.793 43.6299 48.3359 43.8086C48.7276 43.9374 49.2313 44.1031 49.7998 44.29C51.45 44.8328 51.451 47.1672 49.8008 47.71L48.3389 48.1904C47.7958 48.369 47.369 48.7958 47.1904 49.3389L46.71 50.8008C46.1672 52.451 43.8328 52.451 43.29 50.8008L42.8096 49.3389C42.631 48.7958 42.2042 48.369 41.6611 48.1904L40.1992 47.71C38.549 47.1672 38.549 44.8328 40.1992 44.29L41.6611 43.8096C42.2042 43.631 42.631 43.2042 42.8096 42.6611L43.29 41.1992ZM10.707 41.8789C11.8786 40.7073 13.7786 40.7073 14.9502 41.8789C16.1213 43.0504 16.1213 44.9496 14.9502 46.1211L12.1211 48.9502C10.9496 50.1213 9.05039 50.1213 7.87891 48.9502C6.70733 47.7786 6.70733 45.8786 7.87891 44.707L10.707 41.8789ZM29 15C36.732 15 43 21.268 43 29C43 36.732 36.732 43 29 43C21.268 43 15 36.732 15 29C15 21.268 21.268 15 29 15ZM7 26C8.65685 26 10 27.3431 10 29C10 30.6569 8.65685 32 7 32H3C1.34315 32 0 30.6569 0 29C0 27.3431 1.34315 26 3 26H7ZM55 26C56.6569 26 58 27.3431 58 29C58 30.6569 56.6569 32 55 32H51C49.3431 32 48 30.6569 48 29C48 27.3431 49.3431 26 51 26H55ZM10.1006 5.77637C10.7039 3.94355 13.2961 3.94355 13.8994 5.77637L14.6543 8.07031C14.8527 8.67365 15.3244 9.14627 15.9277 9.34473C16.5083 9.53568 17.3121 9.80013 18.2227 10.0996C20.0559 10.7026 20.0566 13.2961 18.2236 13.8994L15.9297 14.6543C15.3263 14.8527 14.8527 15.3263 14.6543 15.9297L13.8994 18.2236C13.2961 20.0564 10.7039 20.0564 10.1006 18.2236L9.3457 15.9297C9.14727 15.3263 8.67368 14.8527 8.07031 14.6543L5.77637 13.8994C3.94355 13.2961 3.94355 10.7039 5.77637 10.1006L8.07031 9.3457C8.67368 9.14727 9.14727 8.67368 9.3457 8.07031L10.1006 5.77637ZM45.707 9.41406C46.8786 8.24251 48.7786 8.2425 49.9502 9.41406C51.1216 10.5856 51.1217 12.4857 49.9502 13.6572L47.1211 16.4854C45.9496 17.6567 44.0504 17.6567 42.8789 16.4854C41.7073 15.3138 41.7073 13.4138 42.8789 12.2422L45.707 9.41406ZM29 0C30.6569 0 32 1.34315 32 3V7C32 8.65685 30.6569 10 29 10C27.3431 10 26 8.65685 26 7V3C26 1.34315 27.3431 0 29 0Z\" fill=\"currentColor\" />\n",
	"styles": []
});
//#endregion
//#region src/assets/icons/Moon.svg
var Moon_default = createSvgComponent({
	"meta": {
		"src": "/_astro/Moon.C5rAE9EZ.svg",
		"width": 60,
		"height": 57,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 60 57",
		"fill": "none"
	},
	"children": "\n<path d=\"M39.5174 6.91604C38.9514 4.61873 40.8963 2.23837 43.0758 3.18748C53.0394 7.52634 60 17.4153 60 28.92C60 44.4282 47.3523 57 31.7505 57C20.1763 57 10.2286 50.0809 5.86387 40.1771C4.90911 38.0107 7.30369 36.0776 9.61478 36.6403C11.503 37.1 13.4763 37.344 15.5071 37.344C29.1586 37.344 40.2254 26.3437 40.2254 12.7741C40.2254 10.7551 39.9799 8.79324 39.5174 6.91604Z\" fill=\"currentColor\" />\n<path d=\"M21.2984 1.93072C22.1501 -0.643577 25.8137 -0.643573 26.6655 1.93073L27.9058 5.67954C28.1861 6.52667 28.8541 7.19097 29.7064 7.46957C30.6349 7.77313 31.9687 8.20913 33.4773 8.70232C36.0672 9.54896 36.0681 13.1909 33.4782 14.0375L29.7068 15.2704C28.8545 15.549 28.1861 16.2134 27.9058 17.0606L26.6655 20.8094C25.8137 23.3837 22.1501 23.3837 21.2984 20.8094L20.058 17.0606C19.7777 16.2134 19.1093 15.549 18.257 15.2704L14.4856 14.0375C11.8958 13.1909 11.8958 9.54926 14.4856 8.70262L18.2571 7.46971C19.1093 7.1911 19.7777 6.52667 20.058 5.67954L21.2984 1.93072Z\" fill=\"currentColor\" />\n<path d=\"M7.00412 15.7526C7.68552 13.6931 10.6164 13.6931 11.2978 15.7526L12.2901 18.7516C12.5143 19.4293 13.0487 19.9608 13.7305 20.1837C14.4734 20.4265 15.5403 20.7753 16.7473 21.1699C18.8191 21.8472 18.8199 24.7607 16.748 25.438L13.7309 26.4243C13.0491 26.6472 12.5143 27.1788 12.2901 27.8565L11.2978 30.8555C10.6164 32.9149 7.68552 32.9149 7.00412 30.8555L6.01183 27.8565C5.7876 27.1788 5.25285 26.6472 4.57105 26.4243L1.55391 25.438C-0.517967 24.7607 -0.517969 21.8474 1.5539 21.1701L4.57105 20.1838C5.25285 19.9609 5.7876 19.4293 6.01183 18.7516L7.00412 15.7526Z\" fill=\"currentColor\" />\n",
	"styles": []
});
//#endregion
//#region src/assets/icons/Search.svg
var Search_default = createSvgComponent({
	"meta": {
		"src": "/_astro/Search.0qythvho.svg",
		"width": 52,
		"height": 56,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 52 56",
		"fill": "none"
	},
	"children": "\n<path d=\"M19.6789 0.240748C24.1188 -0.40671 28.6532 0.258522 32.7199 2.15481C34.1739 2.83359 34.8291 4.53064 34.2326 6.00051L34.1711 6.14212C33.4701 7.64446 31.6834 8.29083 30.1838 7.59231C27.1782 6.19093 23.8272 5.69896 20.5461 6.17727C17.2645 6.656 14.1934 8.08578 11.7131 10.2876C9.23294 12.4896 7.45015 15.3698 6.5861 18.5718C5.72235 21.7735 5.81408 25.1586 6.84977 28.3091C7.88578 31.4597 9.82162 34.2406 12.4172 36.3052C15.0125 38.3692 18.1559 39.6295 21.4582 39.9302C24.7606 40.2305 28.0813 39.5578 31.007 37.9956C33.9322 36.4334 36.3385 34.0485 37.9259 31.1372C38.7194 29.6838 40.5412 29.1474 41.9953 29.94L41.9963 29.9409C43.4025 30.7091 43.9519 32.4416 43.2648 33.8716L43.1945 34.0093C42.1229 35.9747 40.7734 37.7615 39.2013 39.3218L50.3732 50.4937C51.5074 51.6287 51.5423 53.4464 50.4797 54.6236L50.3732 54.7359C49.2019 55.9072 47.3027 55.9067 46.131 54.7359L34.3791 42.9849C34.199 43.088 34.0165 43.1911 33.8322 43.2896C29.8745 45.4026 25.384 46.3119 20.9162 45.9058C16.448 45.4991 12.1936 43.7935 8.6818 41.0005C5.17024 38.2072 2.55214 34.4464 1.15055 30.1841C-0.251015 25.9212 -0.374779 21.3407 0.794105 17.0083C1.96318 12.676 4.37414 8.77948 7.72965 5.80032C11.0849 2.82168 15.239 0.888587 19.6789 0.240748ZM39.756 5.80032C42.3462 3.48544 46.3888 5.81959 45.6789 9.22024L44.5646 14.5601C44.331 15.6792 44.6415 16.8425 45.4035 17.6948C46.286 18.682 47.5793 20.1291 49.0392 21.7622C51.3536 24.3523 49.0205 28.3954 45.6203 27.6861L40.2804 26.5708C39.1615 26.3372 37.997 26.649 37.1447 27.4107L33.0773 31.0474C30.4872 33.3622 26.4448 31.028 27.1545 27.6275L28.2697 22.2866C28.5032 21.168 28.1912 20.0041 27.4298 19.1519L23.7931 15.0845C21.4779 12.4944 23.8123 8.45081 27.2131 9.16067L32.5539 10.2759C33.6727 10.5092 34.8365 10.1978 35.6886 9.43606L39.756 5.80032Z\" fill=\"currentColor\" />\n",
	"styles": []
});
//#endregion
//#region src/assets/icons/Menu.svg
var Menu_default = createSvgComponent({
	"meta": {
		"src": "/_astro/Menu.Rs5Lj2dB.svg",
		"width": 30,
		"height": 19,
		"format": "svg"
	},
	"attributes": {
		"viewBox": "0 0 30 19",
		"fill": "none"
	},
	"children": "\n<path d=\"M28.5 16C29.3284 16 30 16.6716 30 17.5C30 18.3284 29.3284 19 28.5 19H1.5C0.671722 18.9998 0 18.3283 0 17.5C0 16.6717 0.671722 16.0002 1.5 16H28.5ZM28.167 8C28.9953 8.00018 29.667 8.67168 29.667 9.5C29.667 10.3283 28.9953 10.9998 28.167 11H14.5C13.6717 10.9998 13 10.3283 13 9.5C13 8.67168 13.6717 8.00018 14.5 8H28.167ZM28.5 0C29.3282 0.000263825 30 0.671736 30 1.5C30 2.32826 29.3282 2.99974 28.5 3H6.5C5.67192 2.99959 5 2.32818 5 1.5C5 0.671824 5.67192 0.000406512 6.5 0H28.5Z\" fill=\"currentColor\" />\n",
	"styles": []
});
//#endregion
//#region src/assets/icons/LogoStar.png
var LogoStar_default = new Proxy({
	"src": "/_astro/LogoStar.oQvspfj6.png",
	"width": 1120,
	"height": 1080,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "/workspaces/star-weave-astrology/src/assets/icons/LogoStar.png";
	return target[name];
} });
//#endregion
//#region src/components/Header.astro
createAstro("https://starweaveastrology.com");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Header;
	const { headerLogo = LogoStar_default } = Astro2.props;
	const logoSrc = typeof headerLogo === "string" ? headerLogo : headerLogo.src;
	const base = "";
	return renderTemplate`${maybeRenderHead($$result)}<header id="site-header" class="site-header" data-astro-cid-nen7h5rs><div class="header-container" data-astro-cid-nen7h5rs><!-- Far Left: Logo Container with PNG Image Box --><a${addAttribute("/", "href")} class="logo-box" aria-label="Star Weave Astrology Home" data-astro-cid-nen7h5rs><div class="star-logo" data-astro-cid-nen7h5rs><img${addAttribute(logoSrc, "src")} alt="Star Weave Astrology Logo" data-astro-cid-nen7h5rs></div></a><!-- Far Right: Action Buttons Group --><div class="header-actions" data-astro-cid-nen7h5rs><!-- Light/Dark Toggle Button --><button id="theme-toggle" class="icon-btn" aria-label="Toggle Theme" data-astro-cid-nen7h5rs><span class="sun-icon-wrap" data-astro-cid-nen7h5rs>${renderComponent($$result, "SunIcon", Sun_default, {
		"width": "20",
		"height": "20",
		"data-astro-cid-nen7h5rs": true
	})}</span><span class="moon-icon-wrap" data-astro-cid-nen7h5rs>${renderComponent($$result, "MoonIcon", Moon_default, {
		"width": "20",
		"height": "20",
		"data-astro-cid-nen7h5rs": true
	})}</span></button><!-- Search Button --><button id="search-trigger-btn" class="icon-btn desktop-search-btn" aria-label="Open Search" data-astro-cid-nen7h5rs>${renderComponent($$result, "SearchIcon", Search_default, {
		"width": "20",
		"height": "20",
		"data-astro-cid-nen7h5rs": true
	})}</button><!-- Menu Burger Button --><button id="menu-toggle-btn" class="icon-btn burger-btn" aria-label="Open Navigation Menu" data-astro-cid-nen7h5rs>${renderComponent($$result, "MenuIcon", Menu_default, {
		"width": "20",
		"height": "20",
		"data-astro-cid-nen7h5rs": true
	})}</button></div></div></header><!-- Expanded Overlay Modal Drawer --><div id="nav-overlay" class="nav-overlay"${addAttribute(base, "data-base")} data-astro-cid-nen7h5rs><div class="overlay-content container" data-astro-cid-nen7h5rs><!-- Top Row: Search Input + Action Button + Close Button --><div class="overlay-top-row" data-astro-cid-nen7h5rs><div class="overlay-search-bar" data-astro-cid-nen7h5rs><input type="text" placeholder="Search articles, planets, aspects..." id="overlay-search-input" data-astro-cid-nen7h5rs><button id="search-submit-btn" class="search-submit-action" aria-label="Submit Search" data-astro-cid-nen7h5rs><span class="search-vector-inline" data-astro-cid-nen7h5rs>${renderComponent($$result, "SearchIcon", Search_default, {
		"width": "20",
		"height": "20",
		"data-astro-cid-nen7h5rs": true
	})}</span></button></div><button id="overlay-close-btn" class="icon-btn close-btn" aria-label="Close Menu" data-astro-cid-nen7h5rs><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nen7h5rs><line x1="18" y1="6" x2="6" y2="18" data-astro-cid-nen7h5rs></line><line x1="6" y1="6" x2="18" y2="18" data-astro-cid-nen7h5rs></line></svg></button></div><!-- Masterlists Grid Cards --><div class="masterlists-grid" data-astro-cid-nen7h5rs>${menu_default.masterlists.map((category) => renderTemplate`<div class="masterlist-card" data-astro-cid-nen7h5rs><div class="card-header" role="button" tabindex="0" data-astro-cid-nen7h5rs><span class="category-title" data-astro-cid-nen7h5rs>${category.title}</span><svg class="chevron-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nen7h5rs><polyline points="6 9 12 15 18 9" data-astro-cid-nen7h5rs></polyline></svg></div><ul class="sublist-links" data-astro-cid-nen7h5rs>${category.sublinks.map((sub) => renderTemplate`<li data-astro-cid-nen7h5rs><a${addAttribute(`${base}/${sub.url.replace(/^\//, "")}`, "href")} data-astro-cid-nen7h5rs>${sub.text}</a></li>`)}</ul></div>`)}</div><!-- Footer Quick Links --><div class="overlay-footer-links" data-astro-cid-nen7h5rs>${menu_default.footer_links.map((link) => renderTemplate`<a${addAttribute(`${base}/${link.url.replace(/^\//, "")}`, "href")} data-astro-cid-nen7h5rs>${link.text}</a>`)}</div></div></div><!-- style and script tags remain the same -->${renderScript($$result, "/workspaces/star-weave-astrology/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/star-weave-astrology/src/components/Header.astro", void 0);
//#endregion
//#region src/assets/icons/LogoTypography.png
var LogoTypography_default = new Proxy({
	"src": "/_astro/LogoTypography.meCdd8rU.png",
	"width": 2240,
	"height": 746,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "/workspaces/star-weave-astrology/src/assets/icons/LogoTypography.png";
	return target[name];
} });
//#endregion
//#region src/components/Footer.astro
createAstro("https://starweaveastrology.com");
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Footer;
	const base = "/".replace(/\/$/, "");
	const { socials = [
		{
			name: "Tumblr",
			url: "https://sheeeetux11.tumblr.com/",
			icon: "tumblr"
		},
		{
			name: "YouTube",
			url: "https://youtube.com/@starweaveastrology/",
			icon: "youtube"
		},
		{
			name: "Threads",
			url: "https://www.threads.com/@starweaveastrology/",
			icon: "threads"
		},
		{
			name: "Instagram",
			url: "https://www.instagram.com/starweaveastrology/",
			icon: "instagram"
		},
		{
			name: "Pinterest",
			url: "https://pin.it/4Y7ftVnZv",
			icon: "pinterest"
		},
		{
			name: "Ko-Fi",
			url: "https://ko-fi.com/starweaveastrology",
			icon: "kofi"
		}
	], copyrightText = "© COPYRIGHT 2026, Star Weave Astrology. ALL RIGHTS RESERVED." } = Astro2.props;
	return renderTemplate`${maybeRenderHead($$result)}<footer class="site-footer" data-astro-cid-jo6i4kqk><div class="footer-container" data-astro-cid-jo6i4kqk><!-- Section 1: Dual Logos --><div class="footer-brand-container" data-astro-cid-jo6i4kqk><div class="footer-logo-wrap" data-astro-cid-jo6i4kqk>${renderComponent($$result, "Image", $$Image, {
		"src": LogoStar_default,
		"alt": "Star Pattern Logo",
		"class": "footer-logo star-logo",
		"data-astro-cid-jo6i4kqk": true
	})}${renderComponent($$result, "Image", $$Image, {
		"src": LogoTypography_default,
		"alt": "Star Weave Astrology",
		"class": "footer-logo text-logo",
		"data-astro-cid-jo6i4kqk": true
	})}</div></div><!-- Section 2: Follow Along on our Socials --><div class="footer-socials-container" data-astro-cid-jo6i4kqk><p class="socials-heading" data-astro-cid-jo6i4kqk>Follow us along on our Socials</p><div class="social-icons-list" data-astro-cid-jo6i4kqk>${socials.map((social) => renderTemplate`<a${addAttribute(social.url, "href")} target="_blank" rel="noopener noreferrer" class="social-icon-item"${addAttribute(social.name, "aria-label")} data-astro-cid-jo6i4kqk>${social.icon === "tumblr" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="18" height="18" class="flat-social-svg" data-astro-cid-jo6i4kqk><path d="M8.998 6.995v3.664c0 .924-.01 1.464.086 1.728.096.259.338.531.613.691a2.3 2.3 0 0 0 1.204.314c.811 0 1.296-.104 2.1-.629v2.405a8.956 8.956 0 0 1-1.838.636A7.542 7.542 0 0 1 9.369 16c-.733 0-1.169-.09-1.723-.273a4.131 4.131 0 0 1-1.443-.794c-.405-.34-.67-.703-.825-1.089-.158-.383-.232-.944-.232-1.679V6.558H2.999V4.291c.632-.207 1.332-.498 1.784-.879a4.43 4.43 0 0 0 1.07-1.378c.275-.528.462-1.211.566-2.034h2.579v4.001h4.003v2.994H8.998z" fill="currentColor" data-astro-cid-jo6i4kqk></path></svg>`}${social.icon === "youtube" && renderTemplate`<svg viewBox="0 0 24 24" width="26" height="26" class="flat-social-svg" data-astro-cid-jo6i4kqk><path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" data-astro-cid-jo6i4kqk></path></svg>`}${social.icon === "threads" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20" class="flat-social-svg" data-astro-cid-jo6i4kqk><path fill="currentColor" d="M35.3843 22.2471C35.1775 22.148 34.9675 22.0526 34.7547 21.9613C34.3842 15.1346 30.654 11.2262 24.3905 11.1862C24.3621 11.1861 24.3339 11.1861 24.3055 11.1861C20.5591 11.1861 17.4433 12.7852 15.5255 15.6952L18.9702 18.0582C20.4029 15.8846 22.6513 15.4212 24.3071 15.4212C24.3263 15.4212 24.3455 15.4212 24.3644 15.4214C26.4268 15.4345 27.983 16.0342 28.9902 17.2035C29.7232 18.0548 30.2135 19.2313 30.4562 20.716C28.6277 20.4052 26.6502 20.3096 24.5362 20.4308C18.5812 20.7738 14.7528 24.247 15.0099 29.073C15.1404 31.521 16.3599 33.627 18.4438 35.0028C20.2056 36.1657 22.4748 36.7345 24.8331 36.6058C27.9475 36.435 30.3907 35.2467 32.0952 33.074C33.3897 31.424 34.2085 29.2857 34.57 26.5915C36.0542 27.4872 37.1543 28.666 37.7617 30.083C38.7948 32.4917 38.855 36.45 35.6253 39.677C32.7955 42.504 29.394 43.727 24.2534 43.7648C18.551 43.7225 14.2384 41.8937 11.4345 38.3293C8.80887 34.9915 7.45192 30.1705 7.4013 24C7.45192 17.8295 8.80887 13.0084 11.4345 9.67068C14.2384 6.10623 18.551 4.2775 24.2533 4.23513C29.997 4.27782 34.3848 6.11535 37.296 9.697C38.7235 11.4534 39.7998 13.6622 40.5093 16.2376L44.546 15.1606C43.686 11.9906 42.3327 9.25893 40.4912 6.9935C36.759 2.40167 31.3005 0.048787 24.2674 0H24.2392C17.2204 0.0486175 11.823 2.41045 8.19707 7.01982C4.97047 11.1216 3.3061 16.8289 3.25017 23.9831L3.25 24L3.25017 24.0169C3.3061 31.171 4.97047 36.8785 8.19707 40.9803C11.823 45.5895 17.2204 47.9515 24.2392 48H24.2674C30.5075 47.9567 34.906 46.323 38.5295 42.7028C43.2702 37.9665 43.1275 32.0298 41.565 28.3853C40.444 25.7717 38.3068 23.649 35.3843 22.2471ZM24.6101 32.3768C22.0001 32.5238 19.2886 31.3523 19.1549 28.843C19.0558 26.9825 20.479 24.9065 24.7703 24.6592C25.2617 24.6308 25.744 24.617 26.2178 24.617C27.7765 24.617 29.2347 24.7684 30.5605 25.0583C30.066 31.2337 27.1655 32.2365 24.6101 32.3768Z" data-astro-cid-jo6i4kqk></path></svg>`}${social.icon === "instagram" && renderTemplate`<svg viewBox="0 0 24 24" width="20" height="20" class="flat-social-svg" data-astro-cid-jo6i4kqk><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-astro-cid-jo6i4kqk></path></svg>`}${social.icon === "pinterest" && renderTemplate`<svg viewBox="0 0 24 24" width="21" height="21" class="flat-social-svg" data-astro-cid-jo6i4kqk><path fill="currentColor" d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.491-.693-2.424-2.875-2.424-4.629 0-3.767 2.738-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.905 0 4.122-2.599 7.442-6.204 7.442-1.211 0-2.35-.63-2.738-1.375l-.746 2.846c-.27 1.045-1.002 2.352-1.494 3.153 1.12.345 2.305.533 3.525.533 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" data-astro-cid-jo6i4kqk></path></svg>`}${social.icon === "kofi" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" class="flat-social-svg" data-astro-cid-jo6i4kqk><path d="M11.351 2.715c-2.7 0-4.986.025-6.83.26C2.078 3.285 0 5.154 0 8.61c0 3.506.182 6.13 1.585 8.493 1.584 2.701 4.233 4.182 7.662 4.182h.83c4.209 0 6.494-2.234 7.637-4a9.5 9.5 0 0 0 1.091-2.338C21.792 14.688 24 12.22 24 9.208v-.415c0-3.247-2.13-5.507-5.792-5.87-1.558-.156-2.65-.208-6.857-.208m0 1.947c4.208 0 5.09.052 6.571.182 2.624.311 4.13 1.584 4.13 4v.39c0 2.156-1.792 3.844-3.87 3.844h-.935l-.156.649c-.208 1.013-.597 1.818-1.039 2.546-.909 1.428-2.545 3.064-5.922 3.064h-.805c-2.571 0-4.831-.883-6.078-3.195-1.09-2-1.298-4.155-1.298-7.506 0-2.181.857-3.402 3.012-3.714 1.533-.233 3.559-.26 6.39-.26m6.547 2.287c-.416 0-.65.234-.65.546v2.935c0 .311.234.545.65.545 1.324 0 2.051-.754 2.051-2s-.727-2.026-2.052-2.026m-10.39.182c-1.818 0-3.013 1.48-3.013 3.142 0 1.533.858 2.857 1.949 3.897.727.701 1.87 1.429 2.649 1.896a1.47 1.47 0 0 0 1.507 0c.78-.467 1.922-1.195 2.623-1.896 1.117-1.039 1.974-2.364 1.974-3.897 0-1.662-1.247-3.142-3.039-3.142-1.065 0-1.792.545-2.338 1.298-.493-.753-1.246-1.298-2.312-1.298" fill="currentColor" data-astro-cid-jo6i4kqk></path></svg>`}</a>`)}</div></div><!-- Section 3: Copyright & Policy Links --><div class="footer-bottom-container" data-astro-cid-jo6i4kqk><p class="copyright-text" data-astro-cid-jo6i4kqk>${copyrightText}</p><div class="footer-legal-links" data-astro-cid-jo6i4kqk><a${addAttribute(`${base}/privacy-policy`, "href")} data-astro-cid-jo6i4kqk>Privacy Policy</a><a${addAttribute(`${base}/terms`, "href")} data-astro-cid-jo6i4kqk>Terms</a><a${addAttribute(`${base}/cookie-policy`, "href")} data-astro-cid-jo6i4kqk>Cookie Policy</a></div></div></div></footer>`;
}, "/workspaces/star-weave-astrology/src/components/Footer.astro", void 0);
//#endregion
//#region src/utils/asset.ts
function asset(path) {
	if (!path) return "";
	if (path.startsWith("http") || path.startsWith("data:") || false) return path;
	return `${"/".replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}
//#endregion
export { $$Layout as a, render as c, Search_default as i, createSvgComponent as l, $$Footer as n, Chevron_default as o, $$Header as r, getCollection as s, asset as t, renderScript as u };
