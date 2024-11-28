```typescript
export function optimizeImages(src: string, options: {
  width?: number;
  quality?: number;
  format?: 'webp' | 'avif';
} = {}) {
  const { width = 800, quality = 80, format = 'webp' } = options;
  const url = new URL(src);
  
  // Add image optimization parameters
  url.searchParams.set('w', width.toString());
  url.searchParams.set('q', quality.toString());
  url.searchParams.set('fm', format);
  url.searchParams.set('auto', 'compress');
  
  return url.toString();
}

export function lazyLoadImages() {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img[loading="lazy"]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

export function deferNonCriticalCSS() {
  if (typeof window === 'undefined') return;

  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  stylesheets.forEach(stylesheet => {
    if (!stylesheet.hasAttribute('critical')) {
      stylesheet.setAttribute('media', 'print');
      stylesheet.setAttribute('onload', "this.media='all'");
    }
  });
}

export function preloadCriticalAssets() {
  const criticalAssets = [
    '/fonts/inter-var.woff2',
    '/images/hero.webp'
  ];

  return criticalAssets.map(asset => ({
    rel: 'preload',
    href: asset,
    as: asset.endsWith('.woff2') ? 'font' : 'image',
    type: asset.endsWith('.woff2') ? 'font/woff2' : undefined,
    crossOrigin: asset.endsWith('.woff2') ? 'anonymous' : undefined
  }));
}
```