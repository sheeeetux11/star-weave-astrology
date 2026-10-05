globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { E as createAstro, g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment, u as renderSlot } from "./server_Df2-Ede3.mjs";
import { r as createComponent } from "./_astro_assets_CZqGjbLc.mjs";
import { a as $$Layout, n as $$Footer, r as $$Header, s as getCollection, t as asset, u as renderScript } from "./asset_DIxLNtqd.mjs";
import { n as $$BlogRelatedPosts, r as $$BlogPaginationNav, t as $$BlogMoreOnAstrology } from "./BlogMoreOnAstrology_CagdzFmU.mjs";
import { t as $$BlogKoFiCTA } from "./BlogKoFiCTA_DbmFMBUW.mjs";
//#region src/components/MasterListHeader.astro
createAstro("https://starweaveastrology.com");
var $$MasterListHeader = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$MasterListHeader;
	const { title, pills = [] } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="master-list-header" data-astro-cid-zqguzobb><h1 class="master-title" data-astro-cid-zqguzobb>${title}</h1>${pills && pills.length > 0 && renderTemplate`<nav class="pills-nav" aria-label="Master List Sections" data-astro-cid-zqguzobb>${pills.map((pill) => renderTemplate`<a${addAttribute(pill.target, "href")} class="pill-link" data-astro-cid-zqguzobb>${pill.text}</a>`)}</nav>`}</div>`;
}, "/workspaces/star-weave-astrology/src/components/MasterListHeader.astro", void 0);
//#endregion
//#region src/components/MasterListSection.astro
createAstro("https://starweaveastrology.com");
var $$MasterListSection = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$MasterListSection;
	const { heading, description, headerIcon, isExpanded = false, cards = [] } = Astro.props;
	const activeHeaderIcon = headerIcon || cards[0]?.icon;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`master-section ${isExpanded ? "is-expanded" : ""}`, "class")} data-astro-cid-bvg6mxts><!-- Accordion Header --><button type="button" class="accordion-toggle"${addAttribute(isExpanded, "aria-expanded")} data-astro-cid-bvg6mxts><div class="header-left" data-astro-cid-bvg6mxts>${activeHeaderIcon && renderTemplate`<div${addAttribute(`header-icon-wrapper ${isExpanded ? "expanded" : ""}`, "class")} data-astro-cid-bvg6mxts><img${addAttribute(activeHeaderIcon, "src")} alt="" class="header-thumb" data-astro-cid-bvg6mxts></div>`}<div class="header-text-group" data-astro-cid-bvg6mxts><h2 class="section-heading" data-astro-cid-bvg6mxts>${heading}</h2>${description && renderTemplate`<p${addAttribute(`section-desc ${isExpanded ? "hidden" : ""}`, "class")} data-astro-cid-bvg6mxts>${description}</p>`}</div></div><div class="chevron-wrapper" data-astro-cid-bvg6mxts><svg${addAttribute(`chevron-icon ${isExpanded ? "expanded" : ""}`, "class")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-bvg6mxts><path d="M6 9l6 6 6-6" data-astro-cid-bvg6mxts></path></svg></div></button><!-- Accordion Content Body --><div${addAttribute(`accordion-content-wrapper ${isExpanded ? "is-open" : ""}`, "class")} data-astro-cid-bvg6mxts><div class="cards-grid" data-astro-cid-bvg6mxts>${cards.map((card) => renderTemplate`<div class="mini-card" data-astro-cid-bvg6mxts>${card.icon && renderTemplate`<div class="card-icon-container" data-astro-cid-bvg6mxts><img${addAttribute(card.icon, "src")}${addAttribute(card.title, "alt")} class="card-icon" data-astro-cid-bvg6mxts></div>`}<div class="card-title-wrap" data-astro-cid-bvg6mxts>${card.url ? renderTemplate`<a${addAttribute(card.url, "href")} class="card-title link" data-astro-cid-bvg6mxts>${card.title}</a>` : renderTemplate`<span class="card-title" data-astro-cid-bvg6mxts>${card.title}</span>`}</div>${card.sub_links && card.sub_links.length > 0 && renderTemplate`<div class="sub-links-container" data-astro-cid-bvg6mxts>${card.sub_links.map((sub, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="sub-link-item" data-astro-cid-bvg6mxts>${sub.date && renderTemplate`<span class="sub-link-date" data-astro-cid-bvg6mxts>${sub.date}</span>`}<a${addAttribute(sub.url, "href")} class="sub-link" data-astro-cid-bvg6mxts>${sub.text}</a></div>${index < card.sub_links.length - 1 && renderTemplate`<hr class="sub-divider" data-astro-cid-bvg6mxts>`}` })}`)}</div>`}</div>`)}</div></div></div>${renderScript($$result, "/workspaces/star-weave-astrology/src/components/MasterListSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/star-weave-astrology/src/components/MasterListSection.astro", void 0);
//#endregion
//#region src/components/NewFullMoonCal.astro
createAstro("https://starweaveastrology.com");
var $$NewFullMoonCal = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$NewFullMoonCal;
	const { heading, description, headerIcon, newMoonIcon, fullMoonIcon, isExpanded = false, pairs = [] } = Astro.props;
	const activeHeaderIcon = headerIcon || newMoonIcon;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`master-section moon-calendar-section ${isExpanded ? "is-expanded" : ""}`, "class")} data-astro-cid-du2owrki><!-- Accordion Header --><button type="button" class="moon-accordion-toggle"${addAttribute(isExpanded, "aria-expanded")} data-astro-cid-du2owrki><div class="header-left" data-astro-cid-du2owrki>${activeHeaderIcon && renderTemplate`<div${addAttribute(`header-icon-wrapper ${isExpanded ? "expanded" : ""}`, "class")} data-astro-cid-du2owrki><img${addAttribute(activeHeaderIcon, "src")} alt="" class="header-thumb" data-astro-cid-du2owrki></div>`}<div class="header-text-group" data-astro-cid-du2owrki><h2 class="section-heading" data-astro-cid-du2owrki>${heading}</h2>${description && renderTemplate`<p${addAttribute(`section-desc ${isExpanded ? "hidden" : ""}`, "class")} data-astro-cid-du2owrki>${description}</p>`}</div></div><div class="chevron-wrapper" data-astro-cid-du2owrki><svg${addAttribute(`chevron-icon ${isExpanded ? "expanded" : ""}`, "class")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-du2owrki><path d="M6 9l6 6 6-6" data-astro-cid-du2owrki></path></svg></div></button><!-- Accordion Content Body --><div${addAttribute(`moon-content-wrapper ${isExpanded ? "is-open" : ""}`, "class")} data-astro-cid-du2owrki><div data-astro-cid-du2owrki><div class="pairs-grid" data-astro-cid-du2owrki>${pairs.map((pair, index) => renderTemplate`<div class="moon-pair-row" data-astro-cid-du2owrki>${pair.fullMoon ? renderTemplate`<div class="mini-card" data-astro-cid-du2owrki>${index === 0 && fullMoonIcon && renderTemplate`<div class="card-icon-container" data-astro-cid-du2owrki><img${addAttribute(fullMoonIcon, "src")} alt="Full Moon" class="card-icon" data-astro-cid-du2owrki></div>`}${pair.fullMoon.date && renderTemplate`<span class="card-date" data-astro-cid-du2owrki>${pair.fullMoon.date}</span>`}<div class="card-title-wrap" data-astro-cid-du2owrki>${pair.fullMoon.url ? renderTemplate`<a${addAttribute(pair.fullMoon.url, "href")} class="card-title link" data-astro-cid-du2owrki>${pair.fullMoon.title}</a>` : renderTemplate`<span class="card-title" data-astro-cid-du2owrki>${pair.fullMoon.title}</span>`}</div></div>` : renderTemplate`<div class="mini-card empty-card" data-astro-cid-du2owrki></div>`}${pair.newMoon ? renderTemplate`<div class="mini-card" data-astro-cid-du2owrki>${index === 0 && newMoonIcon && renderTemplate`<div class="card-icon-container" data-astro-cid-du2owrki><img${addAttribute(newMoonIcon, "src")} alt="New Moon" class="card-icon" data-astro-cid-du2owrki></div>`}${pair.newMoon.date && renderTemplate`<span class="card-date" data-astro-cid-du2owrki>${pair.newMoon.date}</span>`}<div class="card-title-wrap" data-astro-cid-du2owrki>${pair.newMoon.url ? renderTemplate`<a${addAttribute(pair.newMoon.url, "href")} class="card-title link" data-astro-cid-du2owrki>${pair.newMoon.title}</a>` : renderTemplate`<span class="card-title" data-astro-cid-du2owrki>${pair.newMoon.title}</span>`}</div></div>` : renderTemplate`<div class="mini-card empty-card" data-astro-cid-du2owrki></div>`}</div>`)}</div></div></div></div>${renderScript($$result, "/workspaces/star-weave-astrology/src/components/NewFullMoonCal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/star-weave-astrology/src/components/NewFullMoonCal.astro", void 0);
//#endregion
//#region src/components/BlogLinkCard.astro
createAstro("https://starweaveastrology.com");
var $$BlogLinkCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogLinkCard;
	const { heading, links = [] } = Astro.props;
	return renderTemplate`${links.length > 0 && renderTemplate`${maybeRenderHead($$result)}<section class="blog-links-section" data-astro-cid-nm3itt6e>${heading && renderTemplate`<div class="section-header-line" data-astro-cid-nm3itt6e><span class="section-title" data-astro-cid-nm3itt6e>${heading}</span></div>`}<div class="blog-links-grid" data-astro-cid-nm3itt6e>${links.map((item) => {
		const thumbnailSrc = item.thumbnail ? asset(item.thumbnail) : "";
		return renderTemplate`<a${addAttribute(item.url, "href")} class="blog-link-card" data-astro-cid-nm3itt6e>${thumbnailSrc && renderTemplate`<div class="blog-link-thumbnail-wrapper" data-astro-cid-nm3itt6e><img${addAttribute(thumbnailSrc, "src")}${addAttribute(item.title, "alt")} class="blog-link-thumbnail" data-astro-cid-nm3itt6e></div>`}<div class="blog-link-content" data-astro-cid-nm3itt6e><h3 class="blog-link-card-title" data-astro-cid-nm3itt6e>${item.title}</h3>${item.description && renderTemplate`<p class="blog-link-card-desc" data-astro-cid-nm3itt6e>${item.description}</p>`}</div></a>`;
	})}</div></section>`}`;
}, "/workspaces/star-weave-astrology/src/components/BlogLinkCard.astro", void 0);
//#endregion
//#region src/layouts/MasterListLayout.astro
createAstro("https://starweaveastrology.com");
var $$MasterListLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$MasterListLayout;
	const { title, description = "A massive repository of astrological links, placements, and resources.", headerPills = [], introDescription = "", sections = [], blogLinkCards, prevPost, nextPost, relatedPosts = [], moreOnAstrology = [] } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `${title} | Star Weave Astrology`,
		"data-astro-cid-7e4q2ecv": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-7e4q2ecv": true })}${maybeRenderHead($$result)}<main class="master-list-main" data-astro-cid-7e4q2ecv>${renderComponent($$result, "MasterListHeader", $$MasterListHeader, {
		"title": title,
		"pills": headerPills,
		"data-astro-cid-7e4q2ecv": true
	})}${introDescription && renderTemplate`<div class="master-list-intro-box" data-astro-cid-7e4q2ecv><p data-astro-cid-7e4q2ecv>${introDescription}</p></div>`}${sections.length > 0 && renderTemplate`<div class="master-list-sections-container" data-astro-cid-7e4q2ecv>${sections.map((section, index) => renderTemplate`<div${addAttribute(`section-${index}`, "id")} data-astro-cid-7e4q2ecv>${section.pairs && section.pairs.length > 0 ? renderTemplate`${renderComponent($$result, "NewFullMoonCal", $$NewFullMoonCal, {
		"heading": section.heading,
		"description": section.description,
		"headerIcon": section.headerIcon,
		"isExpanded": section.isExpanded,
		"newMoonIcon": section.newMoonIcon || "",
		"fullMoonIcon": section.fullMoonIcon || "",
		"pairs": section.pairs,
		"data-astro-cid-7e4q2ecv": true
	})}` : renderTemplate`${renderComponent($$result, "MasterListSection", $$MasterListSection, {
		"heading": section.heading,
		"description": section.description,
		"headerIcon": section.headerIcon,
		"isExpanded": section.isExpanded || section.is_expanded,
		"cards": section.cards || [],
		"data-astro-cid-7e4q2ecv": true
	})}`}</div>`)}${renderSlot($$result, $$slots["default"])}</div>`}${blogLinkCards && blogLinkCards.links && blogLinkCards.links.length > 0 && renderTemplate`<div class="master-list-extra-container" data-astro-cid-7e4q2ecv>${renderComponent($$result, "BlogLinkCard", $$BlogLinkCard, {
		"heading": blogLinkCards.heading,
		"links": blogLinkCards.links,
		"data-astro-cid-7e4q2ecv": true
	})}</div>`}${renderSlot($$result, $$slots["extra-section"])}<div class="master-list-footer-modules" data-astro-cid-7e4q2ecv>${renderComponent($$result, "BlogPaginationNav", $$BlogPaginationNav, {
		"prevPost": prevPost,
		"nextPost": nextPost,
		"data-astro-cid-7e4q2ecv": true
	})}${relatedPosts.length > 0 && renderTemplate`${renderComponent($$result, "BlogRelatedPosts", $$BlogRelatedPosts, {
		"posts": relatedPosts,
		"data-astro-cid-7e4q2ecv": true
	})}`}${moreOnAstrology.length > 0 && renderTemplate`${renderComponent($$result, "BlogMoreOnAstrology", $$BlogMoreOnAstrology, {
		"posts": moreOnAstrology,
		"data-astro-cid-7e4q2ecv": true
	})}`}${renderComponent($$result, "BlogKoFiCTA", $$BlogKoFiCTA, { "data-astro-cid-7e4q2ecv": true })}</div></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-7e4q2ecv": true })}` })}`;
}, "/workspaces/star-weave-astrology/src/layouts/MasterListLayout.astro", void 0);
//#endregion
//#region src/pages/master-lists/[slug].astro
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
	const entry = (await getCollection("master_lists")).find((item) => {
		return (item.id.split("/").pop() || item.id).replace(/\.[^/.]+$/, "") === slug || item.id === slug;
	});
	if (!entry) return new Response("Master list not found", { status: 404 });
	const { title, description, headerPills, introDescription, sections, blogLinkCards } = entry.data;
	const relatedPosts = (await getCollection("blogs")).slice(0, 2).map((b) => ({
		title: b.data.title,
		slug: b.id,
		url: `/blogs/${b.id}/`,
		image: b.data.image,
		description: b.body?.slice(0, 100)
	}));
	return renderTemplate`${renderComponent($$result, "MasterListLayout", $$MasterListLayout, {
		"title": title,
		"description": description,
		"headerPills": headerPills,
		"introDescription": introDescription,
		"sections": sections,
		"blogLinkCards": blogLinkCards,
		"relatedPosts": relatedPosts
	}, {})}`;
}, "/workspaces/star-weave-astrology/src/pages/master-lists/[slug].astro", void 0);
var $$file = "/workspaces/star-weave-astrology/src/pages/master-lists/[slug].astro";
var $$url = "/master-lists/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/master-lists/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
