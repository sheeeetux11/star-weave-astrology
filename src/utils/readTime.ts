export function calculateReadTime(content: string): string {
  if (!content) return "1 min read";
  
  // Strip HTML tags if content is rendered HTML, or use raw markdown text
  const cleanText = content.replace(/<[^>]*>?/gm, '');
  const words = cleanText.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  const minutes = Math.ceil(words / wordsPerMinute);
  
  return `${minutes} min read`;
}
