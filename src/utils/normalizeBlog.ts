// src/utils/normalizeBlog.ts
const rawBase = import.meta.env.BASE_URL;
const base = rawBase === '/' ? '' : rawBase.replace(/\/$/, '');

export function normalizePost(post: any) {
  const rawId = post.id || post.slug || '';
  const slug = (rawId.split('/').pop() || rawId).replace(/\.[^/.]+$/, '');

  const rawRelated = post.data?.relatedPosts || [];
  const relatedPosts = rawRelated.map((p: any) => {
    let pUrl = p.url || '';
    if (pUrl.startsWith('/') && base && !pUrl.startsWith(base)) {
      pUrl = `${base}${pUrl}`;
    } else if (!pUrl.startsWith('http') && !pUrl.startsWith(base) && pUrl) {
      pUrl = `${base}/${pUrl.replace(/^\//, '')}`;
    }
    if (pUrl && !pUrl.endsWith('/') && !pUrl.includes('#')) {
      pUrl = `${pUrl}/`;
    }

    // Clean and normalize related post thumbnail path from Decap CMS
    let thumb = p.thumbnail || '';
    if (thumb.startsWith('public/')) {
      thumb = thumb.replace('public/', '/');
    }
    if (thumb && !thumb.startsWith('http') && !thumb.startsWith('data:')) {
      const cleanThumb = thumb.startsWith('/') ? thumb : `/${thumb}`;
      if (base && cleanThumb.startsWith(base)) {
        thumb = cleanThumb;
      } else {
        thumb = `${base}${cleanThumb}`;
      }
    }

    return {
      title: p.title,
      url: pUrl,
      description: p.description || '',
      thumbnail: thumb
    };
  });

  const rawMore = post.data?.moreOnAstrology || [];
  const moreOnAstrology = rawMore.map((m: any) => {
    let mUrl = m.url || '';
    if (mUrl.startsWith('/') && base && !mUrl.startsWith(base)) {
      mUrl = `${base}${mUrl}`;
    } else if (!mUrl.startsWith('http') && !mUrl.startsWith(base) && mUrl) {
      mUrl = `${base}/${mUrl.replace(/^\//, '')}`;
    }
    if (mUrl && !mUrl.endsWith('/') && !mUrl.includes('#')) {
      mUrl = `${mUrl}/`;
    }

    let thumb = m.thumbnail || '';
    if (thumb.startsWith('public/')) {
      thumb = thumb.replace('public/', '/');
    }
    if (thumb && !thumb.startsWith('http') && !thumb.startsWith('data:')) {
      const cleanThumb = thumb.startsWith('/') ? thumb : `/${thumb}`;
      if (base && cleanThumb.startsWith(base)) {
        thumb = cleanThumb;
      } else {
        thumb = `${base}${cleanThumb}`;
      }
    }

    return {
      ...m,
      url: mUrl,
      thumbnail: thumb
    };
  });

  // Clean and normalize image path from Decap CMS
  let rawImage = post.data?.image || post.data?.coverImage || '';
  if (rawImage.startsWith('public/')) {
    rawImage = rawImage.replace('public/', '/');
  }
  if (rawImage && !rawImage.startsWith('http') && !rawImage.startsWith('data:')) {
    const cleanPath = rawImage.startsWith('/') ? rawImage : `/${rawImage}`;
    if (base && cleanPath.startsWith(base)) {
      rawImage = cleanPath;
    } else {
      rawImage = `${base}${cleanPath}`;
    }
  }

  return {
    id: post.id,
    slug: slug,
    url: `${base}/blogs/${slug}/`, 
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
