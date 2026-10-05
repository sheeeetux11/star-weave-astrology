globalThis.process ??= {};
globalThis.process.env ??= {};
import { E as createAstro, g as addAttribute, m as maybeRenderHead, p as renderTemplate } from "./server_Df2-Ede3.mjs";
import { r as createComponent } from "./_astro_assets_CZqGjbLc.mjs";
import { l as createSvgComponent, u as renderScript } from "./asset_DIxLNtqd.mjs";
import { t as RightArrow_default } from "./RightArrow_DpVKIttA.mjs";
//#region src/assets/icons/LeftArrow.svg
var LeftArrow_default = createSvgComponent({
	"meta": {
		"src": "/_astro/LeftArrow.CKodtM2G.svg",
		"width": 26,
		"height": 29,
		"format": "svg"
	},
	"attributes": {
		"width": "26",
		"height": "29",
		"viewBox": "0 0 26 29",
		"fill": "none"
	},
	"children": "\n<path d=\"M2 10.9342C-0.666663 12.4738 -0.666668 16.3228 2 17.8624L20 28.2547C22.6667 29.7943 26 27.8698 26 24.7906V4.00601C26 0.926813 22.6667 -0.997693 20 0.541908L2 10.9342Z\" fill=\"#FFCF60\" />\n",
	"styles": []
});
//#endregion
//#region src/components/BlogPaginationNav.astro
createAstro("https://starweaveastrology.com");
var $$BlogPaginationNav = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogPaginationNav;
	const { prevPost, nextPost } = Astro.props;
	if (!(prevPost && prevPost.url || nextPost && nextPost.url)) return null;
	return renderTemplate`${maybeRenderHead($$result)}<nav class="blog-pagination-container" data-astro-cid-jyv2drdz><div class="pagination-inner-border" data-astro-cid-jyv2drdz>${prevPost && prevPost.url ? renderTemplate`<a${addAttribute(prevPost.url, "href")} class="nav-link prev-link" data-astro-cid-jyv2drdz><img${addAttribute(LeftArrow_default.src, "src")} alt="" class="nav-arrow left-arrow" data-astro-cid-jyv2drdz><span class="nav-text" data-astro-cid-jyv2drdz>${prevPost.title}</span></a>` : renderTemplate`<div class="nav-placeholder" data-astro-cid-jyv2drdz></div>`}${nextPost && nextPost.url ? renderTemplate`<a${addAttribute(nextPost.url, "href")} class="nav-link next-link" data-astro-cid-jyv2drdz><span class="nav-text" data-astro-cid-jyv2drdz>${nextPost.title}</span><img${addAttribute(RightArrow_default.src, "src")} alt="" class="nav-arrow right-arrow" data-astro-cid-jyv2drdz></a>` : renderTemplate`<div class="nav-placeholder" data-astro-cid-jyv2drdz></div>`}</div></nav>`;
}, "/workspaces/star-weave-astrology/src/components/BlogPaginationNav.astro", void 0);
//#endregion
//#region src/components/BlogRelatedPosts.astro
createAstro("https://starweaveastrology.com");
var $$BlogRelatedPosts = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$BlogRelatedPosts;
	const { posts = [] } = Astro2.props;
	const base = "";
	return renderTemplate`${posts.length > 0 && renderTemplate`${maybeRenderHead($$result)}<section class="related-posts-section" data-astro-cid-rpbvjrsl><div class="section-header-line" data-astro-cid-rpbvjrsl><span class="section-title" data-astro-cid-rpbvjrsl>RELATED POSTS</span></div><div class="related-posts-grid" data-astro-cid-rpbvjrsl>${posts.map((post) => {
		let postUrl = post.url || "";
		if (postUrl.startsWith("/") && base);
		else if (!postUrl.startsWith("http") && !postUrl.startsWith(base) && postUrl) postUrl = `${base}/${postUrl.replace(/^\//, "")}`;
		if (postUrl && !postUrl.endsWith("/") && !postUrl.includes("#")) postUrl = `${postUrl}/`;
		let thumbnail = post.thumbnail || "";
		if (thumbnail.startsWith("public/")) thumbnail = thumbnail.replace("public/", "/");
		if (thumbnail && !thumbnail.startsWith("http") && !thumbnail.startsWith("data:")) {
			const cleanThumb = thumbnail.startsWith("/") ? thumbnail : `/${thumbnail}`;
			thumbnail = `${base}${cleanThumb}`;
		}
		return renderTemplate`<a${addAttribute(postUrl, "href")} class="related-card" data-astro-cid-rpbvjrsl>${thumbnail && renderTemplate`<div class="related-thumbnail-wrapper" data-astro-cid-rpbvjrsl><img${addAttribute(thumbnail, "src")}${addAttribute(post.title, "alt")} class="related-thumbnail" data-astro-cid-rpbvjrsl></div>`}<div class="related-content" data-astro-cid-rpbvjrsl><h3 class="related-card-title" data-astro-cid-rpbvjrsl>${post.title}</h3>${post.description && renderTemplate`<p class="related-card-desc" data-astro-cid-rpbvjrsl>${post.description}</p>`}</div></a>`;
	})}</div></section>`}`;
}, "/workspaces/star-weave-astrology/src/components/BlogRelatedPosts.astro", void 0);
//#endregion
//#region src/components/BlogMoreOnAstrology.astro
createAstro("https://starweaveastrology.com");
var $$BlogMoreOnAstrology = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$BlogMoreOnAstrology;
	const { topics = [] } = Astro2.props;
	const safeTopics = Array.isArray(topics) ? topics : [];
	const base = "/".replace(/\/$/, "");
	return renderTemplate`${safeTopics.length > 0 && renderTemplate`${maybeRenderHead($$result)}<section class="more-on-astrology-section" data-astro-cid-jady2oyq><!-- Header with Section Title and Chevrons --><div class="more-header-wrapper" data-astro-cid-jady2oyq><button class="scroll-btn left-btn" aria-label="Scroll left" id="scroll-left" data-astro-cid-jady2oyq><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-jady2oyq><path d="M7 13L1 7L7 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-jady2oyq></path></svg></button><div class="header-content" data-astro-cid-jady2oyq><div class="header-line" data-astro-cid-jady2oyq></div><h2 class="more-heading" data-astro-cid-jady2oyq>MORE ON ASTROLOGY</h2><div class="header-line" data-astro-cid-jady2oyq></div></div><button class="scroll-btn right-btn" aria-label="Scroll right" id="scroll-right" data-astro-cid-jady2oyq><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-jady2oyq><path d="M1 13L7 7L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-jady2oyq></path></svg></button></div><!-- Scrollable Mini Cards Container with Pick-Through Fade --><div class="scroller-wrapper" data-astro-cid-jady2oyq><div class="mini-cards-track" id="topics-track" data-astro-cid-jady2oyq>${safeTopics.map((topic) => {
		let targetUrl = topic.url;
		if (targetUrl.startsWith("/topics/")) targetUrl = targetUrl.replace("/topics/", "/master-lists/");
		const resolvedUrl = targetUrl.startsWith("/") ? `${base}${targetUrl}` : targetUrl;
		return renderTemplate`<a${addAttribute(resolvedUrl, "href")} class="mini-topic-card" data-astro-cid-jady2oyq><div class="mini-card-image-wrapper" data-astro-cid-jady2oyq><img${addAttribute(topic.image, "src")}${addAttribute(topic.title, "alt")} loading="lazy" data-astro-cid-jady2oyq></div><span class="mini-card-title" data-astro-cid-jady2oyq>${topic.title}</span></a>`;
	})}</div></div></section>${renderScript($$result, "/workspaces/star-weave-astrology/src/components/BlogMoreOnAstrology.astro?astro&type=script&index=0&lang.ts")}`}`;
}, "/workspaces/star-weave-astrology/src/components/BlogMoreOnAstrology.astro", void 0);
//#endregion
export { $$BlogRelatedPosts as n, $$BlogPaginationNav as r, $$BlogMoreOnAstrology as t };
