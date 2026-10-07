globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { E as createAstro, g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment, u as renderSlot } from "./server_BksQNO-A.mjs";
import { t as createComponent } from "./compiler_C5C3vzBY.mjs";
import { a as $$Header, c as Chevron_default, i as $$Footer, n as getCollection, o as Search_default, r as $$BlogImage, s as $$Layout, t as normalizePost, u as renderScript } from "./normalizeBlog_Cr2gboFl.mjs";
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
//#region src/layouts/BlogPageLayout.astro
createAstro("https://starweaveastrology.com");
var $$BlogPageLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogPageLayout;
	const { title = "Star Weave Astrology", pageTitle = "Blog Feed" } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": title,
		"data-astro-cid-n42lt4um": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-n42lt4um": true })}${maybeRenderHead($$result)}<main class="blog-page-wrapper" data-astro-cid-n42lt4um><div class="blog-page-container" data-astro-cid-n42lt4um><!-- Dynamic Page Title with Horizontal Line --><div class="page-header-row" data-astro-cid-n42lt4um><h1 class="page-title" data-astro-cid-n42lt4um>${pageTitle}</h1><div class="page-title-line" data-astro-cid-n42lt4um></div></div><!-- Main Page Content Slot (Feed, Search, or Topics List) -->${renderSlot($$result, $$slots["default"])}<!-- Ko-Fi Support CTA Section --><div class="blog-kofi-section" data-astro-cid-n42lt4um>${renderComponent($$result, "BlogKoFiCTA", $$BlogKoFiCTA, { "data-astro-cid-n42lt4um": true })}</div></div></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-n42lt4um": true })}` })}`;
}, "/workspaces/star-weave-astrology/src/layouts/BlogPageLayout.astro", void 0);
//#endregion
//#region src/components/BlogSearchAndMode.astro
var $$BlogSearchAndMode = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="blog-search-mode-wrapper" data-astro-cid-kp7ijxfm><!-- Expanded Search Bar Input --><div class="search-bar-container" data-astro-cid-kp7ijxfm><input type="text" id="blog-search-input" placeholder="Search Blogs, Topics and more...." class="blog-search-input" data-astro-cid-kp7ijxfm><button type="button" id="blog-search-btn" class="blog-search-btn" aria-label="Search" data-astro-cid-kp7ijxfm>${renderComponent($$result, "SearchIcon", Search_default, {
		"width": "20",
		"height": "20",
		"data-astro-cid-kp7ijxfm": true
	})}</button></div><!-- Mode Toggle Selector --><div class="mode-toggle-container" data-astro-cid-kp7ijxfm><div class="mode-select-wrapper" data-astro-cid-kp7ijxfm><select id="blog-mode-select" class="blog-mode-select" aria-label="Feed Mode Toggle" data-astro-cid-kp7ijxfm><option value="recent" data-astro-cid-kp7ijxfm>RECENT POSTS</option><option value="topics-az" data-astro-cid-kp7ijxfm>TOPICS A - Z</option><option value="search-results" data-astro-cid-kp7ijxfm>SEARCH RESULTS</option></select><div class="mode-select-icon" data-astro-cid-kp7ijxfm><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-kp7ijxfm><polyline points="6 9 12 15 18 9" data-astro-cid-kp7ijxfm></polyline></svg></div></div></div></div>${renderScript($$result, "/workspaces/star-weave-astrology/src/components/BlogSearchAndMode.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/star-weave-astrology/src/components/BlogSearchAndMode.astro", void 0);
//#endregion
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
//#region src/components/TopicScrollAnchor.astro
createAstro("https://starweaveastrology.com");
var $$TopicScrollAnchor = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$TopicScrollAnchor;
	const base = "";
	const { topics = [
		"Moon Astrology",
		"Natal Aspects",
		"Natal Placements",
		"Transits",
		"Planets + Points",
		"Aspects + Patterns",
		"Asteroid Astrology",
		"Solar Return Astrology",
		"Retrograde Astrology",
		"Juno Astrology",
		"Eclipses",
		"Synastry",
		"Houses",
		"Composite Charts",
		"Chiron Astrology"
	], activeTopic = "" } = Astro2.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="topic-scroll-section" data-astro-cid-fbdyp3lp><!-- Left Scroll Button --><button type="button" class="scroll-arrow scroll-left" aria-label="Scroll Left" data-astro-cid-fbdyp3lp><img${addAttribute(Chevron_default.src, "src")} alt="Scroll Left"${addAttribute(16, "width")}${addAttribute(16, "height")} class="rotate-left" data-astro-cid-fbdyp3lp></button><!-- Horizontal Scroll Container with breathing room for arrows --><div class="topic-scroll-container" id="topicScrollContainer" data-astro-cid-fbdyp3lp><!-- Exclusive Logo Tag on the Far Left --><a${addAttribute(`${base}/blogs`, "href")} class="topic-pill logo-topic-pill" aria-label="View all blogs and topics" title="View all blogs" data-astro-cid-fbdyp3lp><img${addAttribute(Logo_default.src, "src")} alt="Star Weave Astrology" class="tag-logo-icon" data-astro-cid-fbdyp3lp></a><!-- Top Topic Tags -->${topics.map((topic) => {
		const isActive = activeTopic === topic;
		return renderTemplate`<a${addAttribute(`${base}/blogs?topic=${encodeURIComponent(topic)}`, "href")}${addAttribute(`topic-pill ${isActive ? "active" : ""}`, "class")} data-astro-cid-fbdyp3lp>${topic}</a>`;
	})}</div><!-- Right Scroll Button --><button type="button" class="scroll-arrow scroll-right" aria-label="Scroll Right" data-astro-cid-fbdyp3lp><img${addAttribute(Chevron_default.src, "src")} alt="Scroll Right"${addAttribute(16, "width")}${addAttribute(16, "height")} data-astro-cid-fbdyp3lp></button></div>${renderScript($$result, "/workspaces/star-weave-astrology/src/components/TopicScrollAnchor.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/star-weave-astrology/src/components/TopicScrollAnchor.astro", void 0);
//#endregion
//#region src/components/BlogFeedMasonry.astro
createAstro("https://starweaveastrology.com");
var $$BlogFeedMasonry = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$BlogFeedMasonry;
	const { posts = [] } = Astro2.props;
	const limitedPosts = posts.slice(0, 20);
	const base = "/".replace(/\/$/, "");
	return renderTemplate`${maybeRenderHead($$result)}<div class="blog-masonry-grid" data-astro-cid-fz2u42vw>${limitedPosts.map((post, index) => {
		const postData = post?.data || post;
		const heroImg = postData?.heroImage || postData?.image;
		const hasImage = Boolean(heroImg);
		const variantType = !hasImage ? 3 : index % 2 + 1;
		const title = postData?.title || "Untitled Post";
		const description = postData?.description || postData?.excerpt || "";
		const topic = postData?.topic || "Astrology";
		const rawId = post?.id || post?.slug || postData?.slug || "";
		let slug = "";
		if (typeof rawId === "object" && rawId !== null) slug = rawId.id || rawId.slug || String(rawId);
		else slug = String(rawId || "");
		const cleanSlug = (slug.split("/").pop() || slug).replace(/\.[^/.]+$/, "");
		let url = post?.url;
		if (!url) url = `${base}/blogs/${cleanSlug}/`;
		return renderTemplate`<article${addAttribute(`blog-card variant-${variantType}`, "class")} data-astro-cid-fz2u42vw><a${addAttribute(url, "href")} class="blog-card-link" data-astro-cid-fz2u42vw>${variantType === 1 && hasImage && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<div class="card-image-wrapper top-image" data-astro-cid-fz2u42vw>${renderComponent($$result2, "BlogImage", $$BlogImage, {
			"src": heroImg,
			"alt": title,
			"class": "card-thumb",
			"data-astro-cid-fz2u42vw": true
		})}</div><div class="blog-card-content" data-astro-cid-fz2u42vw><span class="card-topic-badge" data-astro-cid-fz2u42vw>${topic}</span><h3 class="card-title" data-astro-cid-fz2u42vw>${title}</h3><p class="card-excerpt" data-astro-cid-fz2u42vw>${description}</p></div>` })}`}${variantType === 2 && hasImage && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<div class="blog-card-content" data-astro-cid-fz2u42vw><span class="card-topic-badge" data-astro-cid-fz2u42vw>${topic}</span><h3 class="card-title" data-astro-cid-fz2u42vw>${title}</h3></div><div class="card-image-wrapper bottom-image" data-astro-cid-fz2u42vw>${renderComponent($$result2, "BlogImage", $$BlogImage, {
			"src": heroImg,
			"alt": title,
			"class": "card-thumb",
			"data-astro-cid-fz2u42vw": true
		})}</div>` })}`}${variantType === 3 && renderTemplate`<div class="blog-card-content text-heavy-content" data-astro-cid-fz2u42vw><span class="card-topic-badge" data-astro-cid-fz2u42vw>${topic}</span><h3 class="card-title" data-astro-cid-fz2u42vw>${title}</h3><p class="card-excerpt extended-excerpt" data-astro-cid-fz2u42vw>${description}</p></div>`}</a></article>`;
	})}</div>`;
}, "/workspaces/star-weave-astrology/src/components/BlogFeedMasonry.astro", void 0);
//#endregion
//#region src/components/BlogPaginationBar.astro
createAstro("https://starweaveastrology.com");
var $$BlogPaginationBar = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$BlogPaginationBar;
	const { currentPage: propCurrent, totalPages: propTotal, baseUrl = "/blogs", page } = Astro2.props;
	const absoluteBaseUrl = `${"/".replace(/\/$/, "")}${baseUrl.startsWith("/") ? baseUrl : `/${baseUrl}`}`;
	const currentPage = page?.currentPage || propCurrent || 1;
	const totalPages = page?.lastPage || propTotal || 1;
	function getPageNumbers(current, total) {
		if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
		const delta = 2;
		const range = [];
		const rangeWithDots = [];
		let l;
		for (let i = 1; i <= total; i++) if (i === 1 || i === total || i >= current - delta && i <= current + delta) range.push(i);
		range.forEach((i) => {
			if (l !== void 0) {
				if (i - l === 2) rangeWithDots.push(l + 1);
				else if (i - l !== 1) rangeWithDots.push("...");
			}
			rangeWithDots.push(i);
			l = i;
		});
		return rangeWithDots;
	}
	const pages = getPageNumbers(currentPage, totalPages);
	const getPageUrl = (pageNum) => {
		const urlParams = new URLSearchParams(Astro2.url.search);
		if (pageNum === 1) urlParams.delete("page");
		else urlParams.set("page", pageNum.toString());
		const queryString = urlParams.toString();
		return `${absoluteBaseUrl}${queryString ? `?${queryString}` : ""}`;
	};
	const prevUrl = currentPage > 1 ? getPageUrl(currentPage - 1) : null;
	const nextUrl = currentPage < totalPages ? getPageUrl(currentPage + 1) : null;
	return renderTemplate`${maybeRenderHead($$result)}<nav class="pagination-nav" aria-label="Blog Pagination" data-astro-cid-u4mefg2e>${prevUrl ? renderTemplate`<a${addAttribute(prevUrl, "href")} class="pagination-btn prev-btn" aria-label="Previous Page" data-astro-cid-u4mefg2e><img${addAttribute(Chevron_default.src, "src")} alt="Previous" class="chevron-icon left-chevron" data-astro-cid-u4mefg2e></a>` : renderTemplate`<span class="pagination-btn prev-btn disabled" aria-hidden="true" data-astro-cid-u4mefg2e><img${addAttribute(Chevron_default.src, "src")} alt="Previous" class="chevron-icon left-chevron" data-astro-cid-u4mefg2e></span>`}<div class="pagination-numbers" data-astro-cid-u4mefg2e>${pages.map((p) => {
		const isCurrent = p === currentPage;
		const pageNum = Number(p);
		return p === "..." ? renderTemplate`<span class="pagination-ellipsis" data-astro-cid-u4mefg2e>...</span>` : renderTemplate`<a${addAttribute(getPageUrl(pageNum), "href")}${addAttribute(`pagination-number ${isCurrent ? "active" : ""}`, "class")}${addAttribute(isCurrent ? "page" : void 0, "aria-current")} data-astro-cid-u4mefg2e>${p}</a>`;
	})}</div>${nextUrl ? renderTemplate`<a${addAttribute(nextUrl, "href")} class="pagination-btn next-btn" aria-label="Next Page" data-astro-cid-u4mefg2e><img${addAttribute(Chevron_default.src, "src")} alt="Next" class="chevron-icon right-chevron" data-astro-cid-u4mefg2e></a>` : renderTemplate`<span class="pagination-btn next-btn disabled" aria-hidden="true" data-astro-cid-u4mefg2e><img${addAttribute(Chevron_default.src, "src")} alt="Next" class="chevron-icon right-chevron" data-astro-cid-u4mefg2e></span>`}</nav>`;
}, "/workspaces/star-weave-astrology/src/components/BlogPaginationBar.astro", void 0);
//#endregion
//#region src/pages/blogs/index.astro
var blogs_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://starweaveastrology.com");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const allBlogs = await getCollection("blogs");
	const formattedPosts = allBlogs.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()).map(normalizePost).filter(Boolean);
	const dynamicTopics = [...new Set(allBlogs.flatMap((post) => post.data.tags || []))];
	const url = Astro.url;
	const searchMode = url.searchParams.get("mode") || "recent";
	const searchQuery = (url.searchParams.get("q") || "").toLowerCase().trim();
	const selectedTopic = url.searchParams.get("topic") || url.searchParams.get("tag") || "";
	const currentPage = parseInt(url.searchParams.get("page") || "1", 10);
	let filteredPosts = formattedPosts;
	if (searchQuery) filteredPosts = formattedPosts.filter((post) => post.title.toLowerCase().includes(searchQuery) || post.description && post.description.toLowerCase().includes(searchQuery) || post.tags && post.tags.some((tag) => tag.toLowerCase().includes(searchQuery)));
	else if (selectedTopic) filteredPosts = formattedPosts.filter((post) => post.tags && post.tags.some((tag) => tag.toLowerCase() === selectedTopic.toLowerCase()));
	const sortedTopics = [...dynamicTopics].sort((a, b) => a.localeCompare(b));
	const groupedTopics = {};
	sortedTopics.forEach((topic) => {
		const firstLetter = topic.charAt(0).toUpperCase();
		if (!groupedTopics[firstLetter]) groupedTopics[firstLetter] = [];
		groupedTopics[firstLetter].push(topic);
	});
	const pageSize = 12;
	const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
	const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
	const paginatedPosts = filteredPosts.slice((validCurrentPage - 1) * pageSize, validCurrentPage * pageSize);
	return renderTemplate`${renderComponent($$result, "BlogPageLayout", $$BlogPageLayout, {
		"title": "Blog Feed | Star Weave Astrology",
		"pageTitle": "Blog Feed",
		"data-astro-cid-xjud7qje": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="blog-feed-page-content" data-astro-cid-xjud7qje><!-- Search Bar & Mode Toggle Component -->${renderComponent($$result, "BlogSearchAndMode", $$BlogSearchAndMode, { "data-astro-cid-xjud7qje": true })}<!-- Topic Scroll Anchor Component -->${renderComponent($$result, "TopicScrollAnchor", $$TopicScrollAnchor, {
		"topics": dynamicTopics,
		"activeTopic": selectedTopic,
		"data-astro-cid-xjud7qje": true
	})}${searchMode === "topics-az" ? renderTemplate`<div class="topics-az-container" data-astro-cid-xjud7qje>${Object.keys(groupedTopics).sort().map((letter) => renderTemplate`<div class="az-letter-group" data-astro-cid-xjud7qje><h3 class="az-letter-heading" data-astro-cid-xjud7qje>${letter}</h3><div class="az-pills-grid" data-astro-cid-xjud7qje>${groupedTopics[letter].map((topic) => renderTemplate`<a${addAttribute(`/blogs?topic=${encodeURIComponent(topic)}`, "href")} class="topic-pill" data-astro-cid-xjud7qje>${topic}</a>`)}</div></div>`)}</div>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "BlogFeedMasonry", $$BlogFeedMasonry, {
		"posts": paginatedPosts,
		"data-astro-cid-xjud7qje": true
	})}${renderComponent($$result, "BlogPaginationBar", $$BlogPaginationBar, {
		"currentPage": validCurrentPage,
		"totalPages": totalPages,
		"baseUrl": "/blogs",
		"data-astro-cid-xjud7qje": true
	})}` })}`}</div>` })}`;
}, "/workspaces/star-weave-astrology/src/pages/blogs/index.astro", void 0);
var $$file = "/workspaces/star-weave-astrology/src/pages/blogs/index.astro";
var $$url = "/blogs";
//#endregion
//#region \0virtual:astro:page:src/pages/blogs/index@_@astro
var page = () => blogs_exports;
//#endregion
export { page };
