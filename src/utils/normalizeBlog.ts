// src/utils/normalizeBlog.ts
const rawBase = import.meta.env.BASE_URL;
const base = rawBase === '/' ? '' : rawBase.replace(/\/$/, '');

export function normalizePost(post: any) {
  const rawId = post.id || post.slug || '';
  const slug = (rawId.split('/').pop() || rawId).replace(/\.[^/.]+$/, '');

  const rawRelated = post.data?.relatedPosts || [];
  const relatedPosts = rawRelated.map((p: any) => ({
    title: p.title,
    url: p.url && p.url.startsWith('/') ? `${base}${p.url}` : p.url,
    description: p.description || '',
    thumbnail: p.thumbnail || ''
  }));

  const rawMore = post.data?.moreOnAstrology || [];
  const moreOnAstrology = rawMore.map((m: any) => ({
    ...m,
    url: m.url && m.url.startsWith('/') ? `${base}${m.url}` : m.url
  }));

  // Clean and normalize image path from Decap CMS
  let rawImage = post.data?.image || post.data?.coverImage || '';
  if (rawImage.startsWith('public/')) {
    rawImage = rawImage.replace('public/', '/');
  }
  if (rawImage && !rawImage.startsWith('http') && !rawImage.startsWith('data:')) {
    const cleanPath = rawImage.startsWith('/') ? rawImage : `/${rawImage}`;
    // Prevent double-prefixing if base is already included
    if (base && cleanPath.startsWith(base)) {
      rawImage = cleanPath;
    } else {
      rawImage = `${base}${cleanPath}`;
    }
  }

  return {
    id: post.id,
    slug: slug,
    url: `${base}/blogs/${slug}`,
    title: post.data?.title || 'Untitled',
    date: post.data?.date || '',
    readTime: post.data?.readTime || '',
    author: post.data?.author || 'SHEETU',
    image: rawImage,
    tags: post.data?.tags || [],
    relatedPosts: relatedPosts,
    youtubeUrl: post.data?.youtubeUrl,
    youtubeTitle: post.data?.youtubeTitle,
    description: post.body ? post.body.slice(0, 150) + '...' : (post.data?.excerpt || ''),
    moreOnAstrology: moreOnAstrology,
  };
}
