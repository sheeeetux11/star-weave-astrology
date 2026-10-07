globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { E as createAstro, g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_BksQNO-A.mjs";
import { t as createComponent } from "./compiler_C5C3vzBY.mjs";
import { a as $$Header, c as Chevron_default, i as $$Footer, l as createSvgComponent, n as getCollection, r as $$BlogImage, s as $$Layout, t as normalizePost, u as renderScript } from "./normalizeBlog_Cr2gboFl.mjs";
//#region src/assets/icons/ArrowHero.png
var ArrowHero_default = new Proxy({
	"src": "/_astro/ArrowHero.DZj9XQiL.png",
	"width": 40,
	"height": 400,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "/workspaces/star-weave-astrology/src/assets/icons/ArrowHero.png";
	return target[name];
} });
//#endregion
//#region src/components/Hero.astro
createAstro("https://starweaveastrology.com");
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Hero;
	const base = "";
	const { heroImage = `${base}/images/hero-image.png`, subtitleLeft = "Untangling the invisible threads\nof your Destiny.", subtitleRight = "Unveil the intricate tapestry\nof your True Potential.", ctaText = "Learn the Intuitive Art of Astrology" } = Astro2.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="hero-section" data-astro-cid-ge2uvauf><!-- Hero Image Box --><div class="hero-image-container" data-astro-cid-ge2uvauf><div class="hero-image-wrapper" data-astro-cid-ge2uvauf><img${addAttribute(heroImage, "src")} alt="Hero Featured Visual" data-astro-cid-ge2uvauf></div></div><!-- Subtitles Row (Side-by-side on large screens, stacked on mobile) --><div class="hero-subtitles-row" data-astro-cid-ge2uvauf><p class="subtitle-left" data-astro-cid-ge2uvauf>${subtitleLeft}</p><p class="subtitle-right" data-astro-cid-ge2uvauf>${subtitleRight}</p></div><!-- CTA Section with Golden Glitter Arrow PNG --><div class="hero-cta-box" data-astro-cid-ge2uvauf><a href="#main-content" class="cta-link" data-astro-cid-ge2uvauf><span data-astro-cid-ge2uvauf>${ctaText}</span><span class="gold-glitter-arrow" data-astro-cid-ge2uvauf><img${addAttribute(ArrowHero_default.src, "src")} alt="Scroll Down Arrow"${addAttribute(10, "width")}${addAttribute(100, "height")}${addAttribute([1, 2], "densities")} quality="max" data-astro-cid-ge2uvauf></span></a></div></section>`;
}, "/workspaces/star-weave-astrology/src/components/Hero.astro", void 0);
//#endregion
//#region src/components/TopicsHub.astro
createAstro("https://starweaveastrology.com");
var $$TopicsHub = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$TopicsHub;
	const base = "";
	const { headerTitle = "Explore the depths of Tropical + Sidereal Astrology.", headerDescription = "Blend the Traditional & Ancient with the Modern & Evolutionary Astrology. From Reading Charts, Interpreting Placements, Aspects & Patterns to Asteroids, Solar Return Charts and other intriguing corners of Astrology. Learn and explore at your own pace from an extensive array of topics.", cards = [
		{
			type: "text",
			title: "Planets + Points + Asteroids ✨",
			items: [
				"10 Planets of Astrology",
				"Astrological Points",
				"(Ascendant, Midheaven, North Node, Part of Fortune, Lilith, IC)",
				"Aseroid Astrology",
				"Retrogrades",
				"Mythology + Lore"
			],
			link: "/master-lists/planets-points-asteroids"
		},
		{
			type: "text",
			title: "Aspects + Patterns ✨",
			items: [
				"Aspects Patterns",
				"Major + Minor Aspects",
				"Ascendant + Midheaven + North Node",
				"Planetary + Rare + Asteroid Aspects"
			],
			link: "/master-lists/aspects-patterns"
		},
		{
			type: "text",
			title: "Transits Astrology ✨",
			items: [
				"Transits Calendar",
				"(2026, 2025, 2024, 2023, …)",
				"Planetary Transits",
				"Retrogrades + Guides"
			],
			link: "/master-lists/transits-astrology"
		},
		{
			type: "image",
			imageSrc: "/images/Saturn.png",
			imageAlt: "Planets Astrology",
			link: "/master-lists/planets-astrology"
		},
		{
			type: "text",
			title: "Moon Astrology ✨",
			items: [
				"Moon Astrology",
				"Full + New Moon Calendar",
				"Moon Calendar"
			],
			link: "/master-lists/full-and-new-moon-calendar"
		},
		{
			type: "text",
			title: "Asteroid Astrology ✨",
			items: [
				"Asteroids",
				"(Chiron, Sirene, Juno, Pallas Athena, Ceres, Vesta, Aphrodite 1388, Eros 433, Psyche 16)",
				"Retrograde Asteroids",
				"Mythology + Lore"
			],
			link: "/master-lists/asteroid-astrology"
		},
		{
			type: "image",
			imageSrc: "/images/scorpio-zodiac.png",
			imageAlt: "Zodiac Astrology",
			link: "/master-lists/signs-houses-placements"
		},
		{
			type: "text",
			title: "Retrograde Astrology ✨",
			items: [
				"Planet Retrogrades",
				"Retrograde Survival Guides",
				"Asteroid Retrogrades"
			],
			link: "/master-lists/retrograde-astrology"
		},
		{
			type: "text",
			title: "Chart Interpretation ✨",
			items: [
				"Natal (Placidus + Whole Signs)",
				"Synastry + Composite",
				"Solar Return + Solar Arc",
				"Astrocartography",
				"Posts incoming soon ⚡️💛"
			],
			link: "/master-lists/chart-interpretation"
		},
		{
			type: "text",
			title: "Sidereal Astrology ✨",
			items: [
				"Vedic Astrology",
				"Nakshatras",
				"Posts incoming soon ⚡️💛"
			],
			link: "/master-lists/retrograde-astrology"
		}
	] } = Astro2.props;
	const processedCards = cards.map((card) => ({
		...card,
		link: `${base}${card.link.startsWith("/") ? "" : "/"}${card.link}`,
		imageSrc: card.imageSrc ? `${base}${card.imageSrc.startsWith("/") ? "" : "/"}${card.imageSrc}` : void 0
	}));
	return renderTemplate`${maybeRenderHead($$result)}<section class="topics-hub-section" id="topics-hub" data-astro-cid-tklrtedu><!-- Top Dual Text Boxes Header --><div class="topics-header-container" data-astro-cid-tklrtedu><div class="header-box title-box" data-astro-cid-tklrtedu><h2 data-astro-cid-tklrtedu>${headerTitle}</h2></div><div class="header-box description-box" data-astro-cid-tklrtedu><p data-astro-cid-tklrtedu>${headerDescription}</p></div></div><!-- Scroll Navigation Controls --><div class="topics-nav-controls" data-astro-cid-tklrtedu><button class="scroll-btn scroll-left" aria-label="Scroll Left" type="button" data-astro-cid-tklrtedu><span class="chevron-circle" data-astro-cid-tklrtedu><img${addAttribute(Chevron_default.src, "src")} alt="Scroll Left"${addAttribute(10, "width")}${addAttribute(16, "height")} class="chevron-img rotate-left" data-astro-cid-tklrtedu></span></button><button class="scroll-btn scroll-right" aria-label="Scroll Right" type="button" data-astro-cid-tklrtedu><span class="chevron-circle" data-astro-cid-tklrtedu><img${addAttribute(Chevron_default.src, "src")} alt="Scroll Right"${addAttribute(10, "width")}${addAttribute(16, "height")} class="chevron-img" data-astro-cid-tklrtedu></span></button></div><!-- Horizontally Scrollable 2-Row Cards Container with Peek Effect & Fixed Left Alignment --><div class="topics-scroll-viewport" id="topicsViewport" data-astro-cid-tklrtedu><div class="topics-grid-track" id="topicsTrack" data-astro-cid-tklrtedu>${processedCards.map((card) => renderTemplate`<a${addAttribute(card.link, "href")} class="topic-card" data-astro-cid-tklrtedu>${card.type === "text" ? renderTemplate`<div class="card-content-text" data-astro-cid-tklrtedu><h3 data-astro-cid-tklrtedu>${card.title}</h3>${card.items && card.items.length > 0 && renderTemplate`<ul class="master-list" data-astro-cid-tklrtedu>${card.items.map((item) => renderTemplate`<li data-astro-cid-tklrtedu>${item}</li>`)}</ul>`}</div>` : renderTemplate`<div class="card-content-image" data-astro-cid-tklrtedu><img${addAttribute(card.imageSrc, "src")}${addAttribute(card.imageAlt || "Topic Visual", "alt")} data-astro-cid-tklrtedu></div>`}</a>`)}</div></div></section>${renderScript($$result, "/workspaces/star-weave-astrology/src/components/TopicsHub.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/star-weave-astrology/src/components/TopicsHub.astro", void 0);
//#endregion
//#region src/assets/icons/RightArrow.svg
var RightArrow_default = createSvgComponent({
	"meta": {
		"src": "/_astro/RightArrow.C0hZ6Njg.svg",
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
	"children": "\n<path d=\"M24 10.9342C26.6667 12.4738 26.6667 16.3228 24 17.8624L6 28.2547C3.33334 29.7943 0 27.8698 0 24.7906V4.00601C0 0.926813 3.33333 -0.997693 6 0.541908L24 10.9342Z\" fill=\"#FFCF60\" />\n",
	"styles": []
});
//#endregion
//#region src/components/BlogFeed.astro
createAstro("https://starweaveastrology.com");
var $$BlogFeed = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$BlogFeed;
	const base = "";
	const { headerTitle = "Blog Feed", headerDescription = "Learn & Discover from an extensive Blog Feed on topics that intrigue you, and delve into the mystical realm of Astrology.", viewAllLink = "/blogs", posts = [] } = Astro2.props;
	const safeViewAllLink = `${base}${viewAllLink.startsWith("/") ? "" : "/"}${viewAllLink}`;
	const displayPosts = posts.slice(0, 6);
	return renderTemplate`${maybeRenderHead($$result)}<section class="blog-feed-section" id="blog-feed" data-astro-cid-bm6iqxxc><div class="blog-header-container" data-astro-cid-bm6iqxxc><div class="header-box title-box" data-astro-cid-bm6iqxxc><a${addAttribute(safeViewAllLink, "href")} class="blog-section-title-link" data-astro-cid-bm6iqxxc><h2 data-astro-cid-bm6iqxxc>${headerTitle}</h2></a></div><div class="header-box description-box" data-astro-cid-bm6iqxxc><p data-astro-cid-bm6iqxxc>${headerDescription}</p></div></div><div class="blog-masonry-grid" data-astro-cid-bm6iqxxc>${displayPosts.map((post, index) => {
		let url = post.url;
		if (!url) {
			const rawId = post.id || post.slug;
			const slug = typeof rawId === "object" && rawId !== null ? rawId.id || rawId.slug || String(rawId) : String(rawId || "");
			const cleanSlug = (slug.split("/").pop() || slug).replace(/\.[^/.]+$/, "");
			url = `${base}/blogs/${cleanSlug}/`;
		}
		const postData = post?.data || post;
		const title = postData?.title || post?.title || "Untitled Post";
		const description = postData?.description || postData?.excerpt || post?.description || "";
		const topic = postData?.topic || postData?.category || post?.category || "Astrology";
		const heroImg = postData?.heroImage || postData?.image || post?.image || post?.imageSrc || "";
		const hasImage = Boolean(heroImg);
		const variantType = !hasImage ? 3 : index % 2 + 1;
		return renderTemplate`<article${addAttribute(`blog-card variant-${variantType}`, "class")} data-astro-cid-bm6iqxxc><a${addAttribute(url, "href")} class="blog-card-link" data-astro-cid-bm6iqxxc>${variantType === 1 && hasImage && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<div class="card-image-wrapper top-image" data-astro-cid-bm6iqxxc>${renderComponent($$result2, "BlogImage", $$BlogImage, {
			"src": heroImg,
			"alt": title,
			"class": "card-thumb",
			"data-astro-cid-bm6iqxxc": true
		})}</div><div class="blog-card-content" data-astro-cid-bm6iqxxc><span class="card-topic-badge" data-astro-cid-bm6iqxxc>${topic}</span><h3 class="card-title" data-astro-cid-bm6iqxxc>${title}</h3><p class="card-excerpt" data-astro-cid-bm6iqxxc>${description}</p></div>` })}`}${variantType === 2 && hasImage && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<div class="blog-card-content" data-astro-cid-bm6iqxxc><span class="card-topic-badge" data-astro-cid-bm6iqxxc>${topic}</span><h3 class="card-title" data-astro-cid-bm6iqxxc>${topic}</h3></div><div class="card-image-wrapper bottom-image" data-astro-cid-bm6iqxxc>${renderComponent($$result2, "BlogImage", $$BlogImage, {
			"src": heroImg,
			"alt": title,
			"class": "card-thumb",
			"data-astro-cid-bm6iqxxc": true
		})}</div>` })}`}${variantType === 3 && renderTemplate`<div class="blog-card-content text-heavy-content" data-astro-cid-bm6iqxxc><span class="card-topic-badge" data-astro-cid-bm6iqxxc>${topic}</span><h3 class="card-title" data-astro-cid-bm6iqxxc>${title}</h3><p class="card-excerpt extended-excerpt" data-astro-cid-bm6iqxxc>${description}</p></div>`}</a></article>`;
	})}</div><div class="blog-footer-cta" data-astro-cid-bm6iqxxc><a${addAttribute(safeViewAllLink, "href")} class="explore-all-btn" data-astro-cid-bm6iqxxc><span data-astro-cid-bm6iqxxc>Explore All Blogs</span><img${addAttribute(RightArrow_default.src, "src")} alt="Arrow Right"${addAttribute(20, "width")}${addAttribute(12, "height")} class="right-arrow-icon" data-astro-cid-bm6iqxxc></a></div></section>`;
}, "/workspaces/star-weave-astrology/src/components/BlogFeed.astro", void 0);
//#endregion
//#region src/components/MicroMedia.astro
var $$MicroMedia = createComponent(($$result, $$props, $$slots) => {
	const base = "";
	return renderTemplate`${maybeRenderHead($$result)}<section class="micromedia-section" data-astro-cid-h432cepn><div class="container" data-astro-cid-h432cepn><!-- Header Row --><div class="micromedia-header" data-astro-cid-h432cepn><h2 class="micromedia-title" data-astro-cid-h432cepn>More on YouTube + Tumblr + Threads...</h2><p class="micromedia-description" data-astro-cid-h432cepn>Meet <a href="/about" class="creator-link" data-astro-cid-h432cepn>Sheetu (the Creator)</a> on screen, and delve deeper into Astrology topics that you love to explore the most. Join our Magnificent Astrology community by Subscribing to the channel. Follow us on Tumblr + Threads for in-depth Astrology Observations and Short x Sweet Astrology blogs. Unique, Informative & Fun.</p></div><!-- 3-Column Content Grid --><div class="micromedia-grid" data-astro-cid-h432cepn><!-- 1. Tumblr Stack Link --><a href="https://sheeeetux11.tumblr.com/" target="_blank" rel="noopener noreferrer" class="social-stack-card tumblr-card" aria-label="Visit our Tumblr profile" data-astro-cid-h432cepn><div class="card-stack-wrapper" data-astro-cid-h432cepn><div class="stack-item background-card" data-astro-cid-h432cepn></div><div class="stack-item middle-card" data-astro-cid-h432cepn></div><div class="stack-item foreground-card" data-astro-cid-h432cepn><img${addAttribute(`${base}/images/tumblr-preview.png`, "src")} alt="Tumblr post preview" data-astro-cid-h432cepn></div></div></a><!-- 2. YouTube Thumbnail Box with Bottom CTA Bar --><div class="youtube-spotlight-box" data-astro-cid-h432cepn><!-- Main Video Link Wrapper --><a href="https://youtube.com/@starweaveastrology/" target="_blank" rel="noopener noreferrer" class="youtube-thumbnail-link" aria-label="Watch latest YouTube video" data-astro-cid-h432cepn><div class="youtube-thumbnail-bg" data-astro-cid-h432cepn><img${addAttribute(`${base}/images/youtube-thumb-placeholder.png`, "src")} alt="YouTube Video Thumbnail" data-astro-cid-h432cepn></div></a><!-- Anchored Bottom CTA Action Bar --><div class="youtube-action-bar" data-astro-cid-h432cepn><a href="https://youtube.com/@starweaveastrology/" target="_blank" rel="noopener noreferrer" class="yt-icon-btn" aria-label="Open YouTube Video" data-astro-cid-h432cepn><svg viewBox="0 0 24 24" width="30" height="30" class="yt-svg-icon" data-astro-cid-h432cepn><path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" data-astro-cid-h432cepn></path></svg></a><a href="https://youtube.com/@starweaveastrology/" target="_blank" rel="noopener noreferrer" class="yt-subscribe-btn" data-astro-cid-h432cepn>Subscribe</a></div></div><!-- 3. Threads Stack Link --><a href="https://www.threads.com/@starweaveastrology/" target="_blank" rel="noopener noreferrer" class="social-stack-card threads-card" aria-label="Visit our Threads profile" data-astro-cid-h432cepn><div class="card-stack-wrapper" data-astro-cid-h432cepn><div class="stack-item background-card" data-astro-cid-h432cepn></div><div class="stack-item middle-card" data-astro-cid-h432cepn></div><div class="stack-item foreground-card" data-astro-cid-h432cepn><img${addAttribute(`${base}/images/threads-preview.png`, "src")} alt="Threads post preview" data-astro-cid-h432cepn></div></div></a></div></div></section>`;
}, "/workspaces/star-weave-astrology/src/components/MicroMedia.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const allBlogs = await getCollection("blogs");
	const recentBlogs = (allBlogs ? allBlogs.sort((a, b) => {
		const dateA = a && a.data && a.data.date ? new Date(a.data.date).getTime() : 0;
		return (b && b.data && b.data.date ? new Date(b.data.date).getTime() : 0) - dateA;
	}) : []).slice(0, 6).map(normalizePost);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Star Weave Astrology" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, {})}${maybeRenderHead($$result)}<main>${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "TopicsHub", $$TopicsHub, {})}${renderComponent($$result, "BlogFeed", $$BlogFeed, { "posts": recentBlogs })}${renderComponent($$result, "MicroMedia", $$MicroMedia, {})}</main>${renderComponent($$result, "Footer", $$Footer, {})}` })}`;
}, "/workspaces/star-weave-astrology/src/pages/index.astro", void 0);
var $$file = "/workspaces/star-weave-astrology/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
