import { MetadataRoute } from 'next';
import { businessData } from '@/lib/business-data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/*.json$',
          '/search',
        ]
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/private/', '/admin/']
      }
    ],
    sitemap: `${businessData.url}/sitemap.xml`,
    host: businessData.url,
  };
}