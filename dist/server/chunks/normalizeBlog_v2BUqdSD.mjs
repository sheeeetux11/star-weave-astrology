globalThis.process ??= {};
globalThis.process.env ??= {};
import { E as createAstro, g as addAttribute, m as maybeRenderHead, p as renderTemplate } from "./server_Df2-Ede3.mjs";
import { r as createComponent } from "./_astro_assets_CZqGjbLc.mjs";
import { t as asset } from "./asset_DIxLNtqd.mjs";
//#region src/components/BlogImage.astro
createAstro("https://starweaveastrology.com");
var $$BlogImage = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogImage;
	const { src, alt } = Astro.props;
	const resolvedSrc = asset(src);
	return renderTemplate`${maybeRenderHead($$result)}<div class="blog-hero-image-wrapper" data-astro-cid-awb35lij><img${addAttribute(resolvedSrc, "src")}${addAttribute(alt || "Blog Cover Image", "alt")} loading="lazy" data-astro-cid-awb35lij></div>`;
}, "/workspaces/star-weave-astrology/src/components/BlogImage.astro", void 0);
//#endregion
//#region src/utils/normalizeBlog.ts
var base = "";
function normalizePost(post) {
	if (!post) return null;
	const rawId = post.id || post.slug || "";
	const slug = (rawId.split("/").pop() || rawId).replace(/\.[^/.]+$/, "");
	const relatedPosts = (post.data?.relatedPosts || []).map((p) => {
		let pUrl = p.url || "";
		if (pUrl.startsWith("/") && base);
		else if (!pUrl.startsWith("http") && !pUrl.startsWith(base) && pUrl) pUrl = `${base}/${pUrl.replace(/^\//, "")}`;
		if (pUrl && !pUrl.endsWith("/") && !pUrl.includes("#")) pUrl = `${pUrl}/`;
		let thumb = p.thumbnail || "";
		if (thumb.startsWith("public/")) thumb = thumb.replace("public/", "/");
		if (thumb && !thumb.startsWith("http") && !thumb.startsWith("data:")) thumb = `${base}${thumb.startsWith("/") ? thumb : `/${thumb}`}`;
		return {
			title: p.title,
			url: pUrl,
			description: p.description || "",
			thumbnail: thumb
		};
	});
	const moreOnAstrology = (post.data?.moreOnAstrology || []).map((m) => {
		let mUrl = m.url || "";
		if (mUrl.startsWith("/") && base);
		else if (!mUrl.startsWith("http") && !mUrl.startsWith(base) && mUrl) mUrl = `${base}/${mUrl.replace(/^\//, "")}`;
		if (mUrl && !mUrl.endsWith("/") && !mUrl.includes("#")) mUrl = `${mUrl}/`;
		let thumb = m.thumbnail || "";
		if (thumb.startsWith("public/")) thumb = thumb.replace("public/", "/");
		if (thumb && !thumb.startsWith("http") && !thumb.startsWith("data:")) thumb = `${base}${thumb.startsWith("/") ? thumb : `/${thumb}`}`;
		return {
			...m,
			url: mUrl,
			thumbnail: thumb
		};
	});
	let rawImage = post.data?.image || post.data?.coverImage || "";
	if (rawImage.startsWith("public/")) rawImage = rawImage.replace("public/", "/");
	if (rawImage && !rawImage.startsWith("http") && !rawImage.startsWith("data:")) rawImage = `${base}${rawImage.startsWith("/") ? rawImage : `/${rawImage}`}`;
	return {
		id: post.id,
		slug,
		url: `${base}/blogs/${slug}/`,
		title: post.data?.title || "Untitled",
		date: post.data?.date || "",
		readTime: post.data?.readTime || "",
		author: post.data?.author || "SHEETU",
		image: rawImage,
		tags: post.data?.tags || [],
		relatedPosts,
		youtubeUrl: post.data?.youtubeUrl,
		youtubeTitle: post.data?.youtubeTitle,
		description: post.body ? post.body.slice(0, 150) + "..." : post.data?.excerpt || "",
		moreOnAstrology
	};
}
//#endregion
export { $$BlogImage as n, normalizePost as t };
