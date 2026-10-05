globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { E as createAstro, g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, u as renderSlot } from "./server_Df2-Ede3.mjs";
import { r as createComponent } from "./_astro_assets_CZqGjbLc.mjs";
import { a as $$Layout, c as render, n as $$Footer, r as $$Header, s as getCollection, t as asset, u as renderScript } from "./asset_DIxLNtqd.mjs";
import { n as $$BlogImage, t as normalizePost } from "./normalizeBlog_v2BUqdSD.mjs";
import { n as $$BlogRelatedPosts, r as $$BlogPaginationNav, t as $$BlogMoreOnAstrology } from "./BlogMoreOnAstrology_CagdzFmU.mjs";
import { t as Logo_default } from "./Logo_1cbi05P7.mjs";
import { t as $$BlogKoFiCTA } from "./BlogKoFiCTA_DbmFMBUW.mjs";
//#region src/components/BlogHeaderMeta.astro
createAstro("https://starweaveastrology.com");
var $$BlogHeaderMeta = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogHeaderMeta;
	const { author = "Star Weave Astrology", date = "", readTime = "" } = Astro.props;
	return renderTemplate`${(date || author || readTime) && renderTemplate`${maybeRenderHead($$result)}<div class="blog-header-meta" data-astro-cid-gvbqeqql>${readTime && renderTemplate`<span class="meta-item" data-astro-cid-gvbqeqql>${readTime}</span>`}${readTime && (date || author) && renderTemplate`<span class="meta-separator" data-astro-cid-gvbqeqql>|</span>`}${date && renderTemplate`<span class="meta-item" data-astro-cid-gvbqeqql>${date}</span>`}${date && author && renderTemplate`<span class="meta-separator" data-astro-cid-gvbqeqql>|</span>`}${author && renderTemplate`<span class="meta-item" data-astro-cid-gvbqeqql>${author}</span>`}</div>`}`;
}, "/workspaces/star-weave-astrology/src/components/BlogHeaderMeta.astro", void 0);
//#endregion
//#region src/components/BlogContent.astro
var $$BlogContent = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="blog-text-content" data-astro-cid-hfiu2ebg>${renderSlot($$result, $$slots["default"])}</div>`;
}, "/workspaces/star-weave-astrology/src/components/BlogContent.astro", void 0);
//#endregion
//#region src/components/BlogYouTubePreview.astro
createAstro("https://starweaveastrology.com");
var $$BlogYouTubePreview = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogYouTubePreview;
	const { youtubeUrl, youtubeTitle } = Astro.props;
	function getYouTubeThumbnail(url) {
		if (!url) return "";
		const match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
		const videoId = match && match[2].length === 11 ? match[2] : null;
		return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
	}
	const thumbnailUrl = getYouTubeThumbnail(youtubeUrl);
	return renderTemplate`${youtubeUrl && renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(youtubeUrl, "href")} target="_blank" rel="noopener noreferrer" class="blog-youtube-preview-card" data-astro-cid-mlj3ok4x><div class="thumbnail-box" data-astro-cid-mlj3ok4x>${thumbnailUrl ? renderTemplate`<img${addAttribute(thumbnailUrl, "src")}${addAttribute(youtubeTitle || "YouTube Video Preview", "alt")} data-astro-cid-mlj3ok4x>` : renderTemplate`<div class="fallback-thumb" data-astro-cid-mlj3ok4x></div>`}</div><div class="preview-text-content" data-astro-cid-mlj3ok4x><h4 class="preview-title" data-astro-cid-mlj3ok4x>${youtubeTitle || "Watch on YouTube"}</h4><span class="preview-meta" data-astro-cid-mlj3ok4x>Youtube • Star Weave Astrology</span></div></a>`}`;
}, "/workspaces/star-weave-astrology/src/components/BlogYouTubePreview.astro", void 0);
//#endregion
//#region src/components/BlogShareAndLike.astro
createAstro("https://starweaveastrology.com");
var $$BlogShareAndLike = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogShareAndLike;
	const { postId, postTitle } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="social-actions-container"${addAttribute(postId, "data-post-id")} data-astro-cid-awjz3aab><div class="actions-inner-wrapper" data-astro-cid-awjz3aab><!-- Like Button (Heart) --><button class="action-btn like-btn" aria-label="Like this post" title="Like this post" data-astro-cid-awjz3aab><svg class="action-icon heart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-awjz3aab><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" data-astro-cid-awjz3aab></path></svg></button><!-- Tumblr --><a${addAttribute(`https://www.tumblr.com/widgets/share/tool?posttype=link&title=${encodeURIComponent(postTitle)}&url=${encodeURIComponent(Astro.url.href)}`, "href")} target="_blank" rel="noopener noreferrer" class="action-btn" aria-label="Share on Tumblr" data-astro-cid-awjz3aab><svg class="action-icon" viewBox="0 0 22 22" fill="currentColor" data-astro-cid-awjz3aab><path d="M14.56 18.74c-.58.12-1.22.18-1.78.18-1.5 0-2.61-.48-3.11-1.34-.38-.68-.48-1.61-.48-3.32V9.3H7.3v-2.2c1.33-.47 2.31-1.4 2.87-2.69.17-.4.29-.86.36-1.35h2.18v3.44h3.04v2.8h-3.04v5.42c0 .54.06.91.19 1.15.15.28.46.43.91.43.3 0 .63-.04.98-.12l.34 2.22z" data-astro-cid-awjz3aab></path></svg></a><!-- Threads --><a${addAttribute(`https://www.threads.net/intent/post?text=${encodeURIComponent(postTitle + " " + Astro.url.href)}`, "href")} target="_blank" rel="noopener noreferrer" class="action-btn" aria-label="Share on Threads" data-astro-cid-awjz3aab><svg class="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20" class="flat-social-svg" data-astro-cid-awjz3aab><path fill="currentColor" d="M35.3843 22.2471C35.1775 22.148 34.9675 22.0526 34.7547 21.9613C34.3842 15.1346 30.654 11.2262 24.3905 11.1862C24.3621 11.1861 24.3339 11.1861 24.3055 11.1861C20.5591 11.1861 17.4433 12.7852 15.5255 15.6952L18.9702 18.0582C20.4029 15.8846 22.6513 15.4212 24.3071 15.4212C24.3263 15.4212 24.3455 15.4212 24.3644 15.4214C26.4268 15.4345 27.983 16.0342 28.9902 17.2035C29.7232 18.0548 30.2135 19.2313 30.4562 20.716C28.6277 20.4052 26.6502 20.3096 24.5362 20.4308C18.5812 20.7738 14.7528 24.247 15.0099 29.073C15.1404 31.521 16.3599 33.627 18.4438 35.0028C20.2056 36.1657 22.4748 36.7345 24.8331 36.6058C27.9475 36.435 30.3907 35.2467 32.0952 33.074C33.3897 31.424 34.2085 29.2857 34.57 26.5915C36.0542 27.4872 37.1543 28.666 37.7617 30.083C38.7948 32.4917 38.855 36.45 35.6253 39.677C32.7955 42.504 29.394 43.727 24.2534 43.7648C18.551 43.7225 14.2384 41.8937 11.4345 38.3293C8.80887 34.9915 7.45192 30.1705 7.4013 24C7.45192 17.8295 8.80887 13.0084 11.4345 9.67068C14.2384 6.10623 18.551 4.2775 24.2533 4.23513C29.997 4.27782 34.3848 6.11535 37.296 9.697C38.7235 11.4534 39.7998 13.6622 40.5093 16.2376L44.546 15.1606C43.686 11.9906 42.3327 9.25893 40.4912 6.9935C36.759 2.40167 31.3005 0.048787 24.2674 0H24.2392C17.2204 0.0486175 11.823 2.41045 8.19707 7.01982C4.97047 11.1216 3.3061 16.8289 3.25017 23.9831L3.25 24L3.25017 24.0169C3.3061 31.171 4.97047 36.8785 8.19707 40.9803C11.823 45.5895 17.2204 47.9515 24.2392 48H24.2674C30.5075 47.9567 34.906 46.323 38.5295 42.7028C43.2702 37.9665 43.1275 32.0298 41.565 28.3853C40.444 25.7717 38.3068 23.649 35.3843 22.2471ZM24.6101 32.3768C22.0001 32.5238 19.2886 31.3523 19.1549 28.843C19.0558 26.9825 20.479 24.9065 24.7703 24.6592C25.2617 24.6308 25.744 24.617 26.2178 24.617C27.7765 24.617 29.2347 24.7684 30.5605 25.0583C30.066 31.2337 27.1655 32.2365 24.6101 32.3768Z" data-astro-cid-awjz3aab></path></svg></a><!-- Facebook --><a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(Astro.url.href)}`, "href")} target="_blank" rel="noopener noreferrer" class="action-btn" aria-label="Share on Facebook" data-astro-cid-awjz3aab><svg class="action-icon" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-awjz3aab><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-astro-cid-awjz3aab></path></svg></a><!-- X (Twitter) --><a${addAttribute(`https://twitter.com/intent/tweet?text=${encodeURIComponent(postTitle)}&url=${encodeURIComponent(Astro.url.href)}`, "href")} target="_blank" rel="noopener noreferrer" class="action-btn" aria-label="Share on X" data-astro-cid-awjz3aab><svg class="action-icon" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-awjz3aab><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-astro-cid-awjz3aab></path></svg></a><!-- Copy Link Button --><button class="action-btn copy-btn" aria-label="Copy link to clipboard" title="Copy link" data-astro-cid-awjz3aab><svg class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-awjz3aab><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" data-astro-cid-awjz3aab></path><polyline points="16 6 12 2 8 6" data-astro-cid-awjz3aab></polyline><line x1="12" y1="2" x2="12" y2="15" data-astro-cid-awjz3aab></line></svg><span class="copy-tooltip" data-astro-cid-awjz3aab>Copied!</span></button></div></div>${renderScript($$result, "/workspaces/star-weave-astrology/src/components/BlogShareAndLike.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/star-weave-astrology/src/components/BlogShareAndLike.astro", void 0);
//#endregion
//#region src/components/BlogTags.astro
createAstro("https://starweaveastrology.com");
var $$BlogTags = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$BlogTags;
	const { tags = [] } = Astro2.props;
	const safeTags = Array.isArray(tags) ? tags : [];
	const base = "";
	return renderTemplate`${safeTags.length > 0 && renderTemplate`${maybeRenderHead($$result)}<section class="blog-tags-section" data-astro-cid-w762fczj><!-- Heading with responsive side lines --><div class="tags-header-wrapper" data-astro-cid-w762fczj><div class="header-line" data-astro-cid-w762fczj></div><h2 class="tags-heading" data-astro-cid-w762fczj>TAGS</h2><div class="header-line" data-astro-cid-w762fczj></div></div><!-- Tag Pills Container --><div class="tags-container" data-astro-cid-w762fczj><!-- Logo Tag linked to Blog Feed Topics A-Z view --><a${addAttribute(`${base}/blogs/?mode=topics`, "href")} class="tag-pill logo-tag-pill" aria-label="View all topics A-Z" title="View all topics" data-astro-cid-w762fczj><img${addAttribute(Logo_default.src, "src")} alt="Star Weave Astrology" class="tag-logo-icon" data-astro-cid-w762fczj></a><!-- Dynamic Post Tags linked to Blog Feed filtered by tag query -->${safeTags.map((tag) => renderTemplate`<a${addAttribute(`${base}/blogs/?tag=${encodeURIComponent(tag)}`, "href")} class="tag-pill" data-astro-cid-w762fczj>${tag}</a>`)}</div></section>`}`;
}, "/workspaces/star-weave-astrology/src/components/BlogTags.astro", void 0);
//#endregion
//#region src/data/globalTopics.ts
var globalMoreOnAstrology = [
	{
		title: "Moon Astrology",
		image: "/images/Moon.png",
		url: "/topics/moon-astrology"
	},
	{
		title: "Transits",
		image: "/images/Transits.png",
		url: "/topics/transits"
	},
	{
		title: "Signs + Houses",
		image: "/images/SignsHouses.png",
		url: "/topics/signs-houses"
	},
	{
		title: "Planets + Points",
		image: "/images/Planets.png",
		url: "/topics/planets-points"
	}
];
//#endregion
//#region src/components/BlogRecommendations.astro
createAstro("https://starweaveastrology.com");
var $$BlogRecommendations = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$BlogRecommendations;
	const { currentSlug, currentTags = [], currentTitle = "" } = Astro2.props;
	const scoredPosts = (await getCollection("blogs")).map(normalizePost).filter((post) => post.id !== currentSlug && post.slug !== currentSlug).map((post) => {
		let score = 0;
		const sharedTags = (post.tags || []).filter((tag) => currentTags.includes(tag));
		score += sharedTags.length * 2;
		const titleWords = currentTitle.toLowerCase().split(/\s+/);
		const sharedWords = post.title.toLowerCase().split(/\s+/).filter((word) => word.length > 3 && titleWords.includes(word));
		score += sharedWords.length;
		return {
			post,
			score
		};
	});
	scoredPosts.sort((a, b) => b.score - a.score);
	const recommendedPosts = scoredPosts.slice(0, 4).map((item) => item.post);
	return renderTemplate`${recommendedPosts.length > 0 && renderTemplate`${maybeRenderHead($$result)}<section class="recommendations-section" data-astro-cid-q5emyner><div class="section-header-line" data-astro-cid-q5emyner><span class="section-title" data-astro-cid-q5emyner>YOU MAY ALSO LIKE</span></div><div class="recommendations-grid" data-astro-cid-q5emyner>${recommendedPosts.map((post) => {
		const postUrl = post.url;
		const description = post.description || "";
		const thumbnail = post.image ? asset(post.image) : "";
		return renderTemplate`<a${addAttribute(postUrl, "href")} class="rec-card" data-astro-cid-q5emyner>${thumbnail && renderTemplate`<div class="rec-thumbnail-wrapper" data-astro-cid-q5emyner><img${addAttribute(thumbnail, "src")}${addAttribute(post.title, "alt")} class="rec-thumbnail" data-astro-cid-q5emyner></div>`}<div class="rec-content" data-astro-cid-q5emyner><h3 class="rec-card-title" data-astro-cid-q5emyner>${post.title}</h3>${description && renderTemplate`<p class="rec-card-desc" data-astro-cid-q5emyner>${description}</p>`}</div></a>`;
	})}</div></section>`}`;
}, "/workspaces/star-weave-astrology/src/components/BlogRecommendations.astro", void 0);
//#endregion
//#region src/components/BlogComments.astro
createAstro("https://starweaveastrology.com");
var $$BlogComments = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogComments;
	const { postId } = Astro.props;
	const initialComments = [];
	return renderTemplate`${maybeRenderHead($$result)}<section class="comments-section"${addAttribute(postId, "data-post-id")} data-astro-cid-3fgzq34d><!-- Magazine section header with decorative lines --><div class="section-header-line" data-astro-cid-3fgzq34d><span class="section-title" data-astro-cid-3fgzq34d>COMMENTS</span></div><!-- Comment Input Box configured for Netlify Forms --><form class="comment-form" id="commentForm" name="blog-comments" method="POST" data-netlify="true" data-astro-cid-3fgzq34d><!-- Hidden fields required for Netlify Forms routing & association --><input type="hidden" name="form-name" value="blog-comments" data-astro-cid-3fgzq34d><input type="hidden" name="postId"${addAttribute(postId, "value")} data-astro-cid-3fgzq34d><div class="commenter-avatar placeholder-avatar" data-astro-cid-3fgzq34d></div><input type="text" name="commentText" placeholder="Leave a comment. Share your thoughts :)" class="comment-input" required data-astro-cid-3fgzq34d><button type="submit" class="submit-comment-btn" data-astro-cid-3fgzq34d>Post</button></form><!-- Comments List --><div class="comments-list" id="commentsList" data-astro-cid-3fgzq34d>${initialComments.map((comment, index) => renderTemplate`<div${addAttribute(`comment-card ${index >= 4 ? "hidden-comment" : ""}`, "class")}${addAttribute(comment.id, "data-id")} data-astro-cid-3fgzq34d><div class="comment-card-top" data-astro-cid-3fgzq34d><div class="author-info-group" data-astro-cid-3fgzq34d><div class="commenter-avatar"${addAttribute(`background-color: ${comment.avatarColor || "#FBDE9B"};`, "style")} data-astro-cid-3fgzq34d></div><div class="author-meta" data-astro-cid-3fgzq34d><h4 class="comment-author" data-astro-cid-3fgzq34d>${comment.author}</h4><span class="comment-date" data-astro-cid-3fgzq34d>${comment.date}</span></div></div><!-- Dropdown menu for Edit/Delete --><div class="comment-actions-wrapper" data-astro-cid-3fgzq34d><button class="options-btn" aria-label="Comment options" data-astro-cid-3fgzq34d>&hellip;</button><div class="options-dropdown" data-astro-cid-3fgzq34d><button class="dropdown-item edit-btn" data-astro-cid-3fgzq34d>Edit</button><button class="dropdown-item delete-btn" data-astro-cid-3fgzq34d>Delete</button></div></div></div><p class="comment-body" data-astro-cid-3fgzq34d>${comment.content}</p><button class="add-reply-btn" data-astro-cid-3fgzq34d>Add Reply...</button></div>`)}</div><!-- See More Toggle Button -->${initialComments.length > 4 && renderTemplate`<div class="see-more-wrapper" data-astro-cid-3fgzq34d><button id="seeMoreBtn" class="see-more-btn" data-astro-cid-3fgzq34d>See More <span class="arrow" data-astro-cid-3fgzq34d>&darr;</span></button></div>`}</section>${renderScript($$result, "/workspaces/star-weave-astrology/src/components/BlogComments.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/star-weave-astrology/src/components/BlogComments.astro", void 0);
//#endregion
//#region src/utils/readTime.ts
function calculateReadTime(content) {
	if (!content) return "1 min read";
	const words = content.replace(/<[^>]*>?/gm, "").trim().split(/\s+/).length;
	return `${Math.ceil(words / 200)} min read`;
}
//#endregion
//#region src/layouts/InnerBlogLayout.astro
createAstro("https://starweaveastrology.com");
var $$InnerBlogLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$InnerBlogLayout;
	const { post, prevPost, nextPost } = Astro.props;
	const normalized = normalizePost(post);
	const title = normalized.title || "Untitled Post";
	const date = normalized.date;
	const author = normalized.author || "Star Weave Astrology";
	const postBodyContent = post?.body || post?.rawContent?.() || normalized.content || "";
	const readTime = postBodyContent ? calculateReadTime(postBodyContent) : normalized.readTime || "5 min read";
	const image = normalized.image;
	const youtubeUrl = post?.data?.youtubeUrl || post?.youtubeUrl;
	const youtubeTitle = post?.data?.youtubeTitle || post?.youtubeTitle;
	const tags = post?.data?.tags || normalized.tags || [];
	const relatedPosts = (post?.data?.relatedPosts || post?.relatedPosts || normalized.relatedPosts || []).map((p) => ({
		title: p.title,
		url: p.url,
		description: p.description || p.data?.description,
		thumbnail: p.thumbnail || p.data?.thumbnail
	}));
	const customTopics = post?.data?.moreOnAstrology || normalized.moreOnAstrology || [];
	const moreOnAstrology = [...globalMoreOnAstrology, ...customTopics];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `${title} | Star Weave Astrology`,
		"data-astro-cid-knn2hakd": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-knn2hakd": true })}${maybeRenderHead($$result)}<main class="inner-blog-wrapper" data-astro-cid-knn2hakd><article${addAttribute(`magazine-article ${!image ? "no-hero-image" : ""}`, "class")} data-astro-cid-knn2hakd><header class="article-header" data-astro-cid-knn2hakd><h1 class="article-title" data-astro-cid-knn2hakd>${title}</h1><!-- 3. Pass readTime directly into BlogHeaderMeta -->${renderComponent($$result, "BlogHeaderMeta", $$BlogHeaderMeta, {
		"author": author,
		"date": date,
		"readTime": readTime,
		"data-astro-cid-knn2hakd": true
	})}</header>${image && renderTemplate`${renderComponent($$result, "BlogImage", $$BlogImage, {
		"src": image,
		"alt": title,
		"data-astro-cid-knn2hakd": true
	})}`}${renderComponent($$result, "BlogContent", $$BlogContent, { "data-astro-cid-knn2hakd": true }, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}${renderComponent($$result, "BlogYouTubePreview", $$BlogYouTubePreview, {
		"youtubeUrl": youtubeUrl,
		"youtubeTitle": youtubeTitle,
		"data-astro-cid-knn2hakd": true
	})}${renderComponent($$result, "BlogPaginationNav", $$BlogPaginationNav, {
		"prevPost": prevPost,
		"nextPost": nextPost,
		"data-astro-cid-knn2hakd": true
	})}${renderComponent($$result, "BlogShareAndLike", $$BlogShareAndLike, {
		"postId": normalized.slug,
		"postTitle": title,
		"data-astro-cid-knn2hakd": true
	})}${renderComponent($$result, "BlogTags", $$BlogTags, {
		"tags": tags,
		"data-astro-cid-knn2hakd": true
	})}${renderComponent($$result, "BlogRelatedPosts", $$BlogRelatedPosts, {
		"posts": relatedPosts,
		"data-astro-cid-knn2hakd": true
	})}${renderComponent($$result, "BlogMoreOnAstrology", $$BlogMoreOnAstrology, {
		"topics": moreOnAstrology,
		"data-astro-cid-knn2hakd": true
	})}${renderComponent($$result, "BlogRecommendations", $$BlogRecommendations, {
		"currentSlug": normalized.slug,
		"currentTags": tags,
		"currentTitle": title,
		"data-astro-cid-knn2hakd": true
	})}${renderComponent($$result, "BlogKoFiCTA", $$BlogKoFiCTA, {
		"koFiUrl": "https://ko-fi.com/yourprofile",
		"data-astro-cid-knn2hakd": true
	})}${renderComponent($$result, "BlogComments", $$BlogComments, {
		"postId": normalized.slug,
		"data-astro-cid-knn2hakd": true
	})}</article></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-knn2hakd": true })}` })}`;
}, "/workspaces/star-weave-astrology/src/layouts/InnerBlogLayout.astro", void 0);
//#endregion
//#region src/pages/blogs/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://starweaveastrology.com");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { slug } = Astro.params;
	const allBlogs = await getCollection("blogs");
	const sortedRawBlogs = allBlogs.sort((a, b) => {
		const dateA = a.data?.date ? new Date(a.data.date).getTime() : 0;
		return (b.data?.date ? new Date(b.data.date).getTime() : 0) - dateA;
	});
	const blogMap = /* @__PURE__ */ new Map();
	allBlogs.forEach((b) => {
		blogMap.set(b.id, b);
		blogMap.set(b.id.split("/").pop()?.replace(/\.[^/.]+$/, ""), b);
	});
	const postIndex = sortedRawBlogs.findIndex((p) => {
		return (p.id.split("/").pop() || p.id).replace(/\.[^/.]+$/, "") === slug;
	});
	const post = postIndex !== -1 ? sortedRawBlogs[postIndex] : null;
	if (!post) return new Response("Blog post not found", { status: 404 });
	const autoPrevRaw = postIndex < sortedRawBlogs.length - 1 ? sortedRawBlogs[postIndex + 1] : null;
	const autoNextRaw = postIndex > 0 ? sortedRawBlogs[postIndex - 1] : null;
	const manualPrevRaw = post.data.manualPrev ? blogMap.get(post.data.manualPrev) : null;
	const manualNextRaw = post.data.manualNext ? blogMap.get(post.data.manualNext) : null;
	const finalPrevRaw = manualPrevRaw || autoPrevRaw;
	const finalNextRaw = manualNextRaw || autoNextRaw;
	const prevPost = finalPrevRaw ? normalizePost(finalPrevRaw) : null;
	const nextPost = finalNextRaw ? normalizePost(finalNextRaw) : null;
	const normalizedCurrent = normalizePost(post);
	const { Content } = await render(post);
	return renderTemplate`${renderComponent($$result, "InnerBlogLayout", $$InnerBlogLayout, {
		"post": post,
		"prevPost": prevPost,
		"nextPost": nextPost,
		"tags": normalizedCurrent?.tags || []
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Content", Content, {})}` })}`;
}, "/workspaces/star-weave-astrology/src/pages/blogs/[slug].astro", void 0);
var $$file = "/workspaces/star-weave-astrology/src/pages/blogs/[slug].astro";
var $$url = "/blogs/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blogs/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
