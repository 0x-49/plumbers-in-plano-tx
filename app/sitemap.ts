import { MetadataRoute } from 'next';
import { businessData } from '@/lib/business-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = businessData.url;

  // Core pages
  const staticPages = [
    '',
    '/about-us',
    '/contact',
    '/services',
    '/blog',
    '/gallery',
    '/faq',
    '/privacy-policy',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1 : 0.8,
  }));

  return [...staticPages];
}