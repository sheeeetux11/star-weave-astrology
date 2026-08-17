// src/utils/asset.ts
export function asset(path: string): string {
  if (!path) return '';
  
  // If it's an absolute URL, data URL, or already includes the base, leave it
  if (
    path.startsWith('http') || 
    path.startsWith('data:') || 
    (import.meta.env.BASE_URL !== '/' && path.startsWith(import.meta.env.BASE_URL))
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${base}${cleanPath}`;
}
