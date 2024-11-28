```typescript
import { businessData } from './business-data';

export interface SEOConfig {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
  article?: {
    publishedTime: string;
    modifiedTime: string;
    authors: string[];
    tags: string[];
  };
}

export const defaultSEOConfig: SEOConfig = {
  title: "Professional Plumbing Services in Plano TX | Plano Plumbers",
  description: "Expert plumbing services in Plano, Texas. Available 24/7 for emergency repairs, installations, and maintenance. Licensed and insured plumbers serving residential and commercial clients.",
  url: businessData.url,
  image: businessData.image,
  type: "website"
};

export function generateSEOTags(config: Partial<SEOConfig>): Record<string, string> {
  const finalConfig = { ...defaultSEOConfig, ...config };

  return {
    // Basic Meta Tags
    title: finalConfig.title,
    description: finalConfig.description,
    "og:title": finalConfig.title,
    "og:description": finalConfig.description,
    "og:url": finalConfig.url,
    "og:image": finalConfig.image || defaultSEOConfig.image,
    "og:type": finalConfig.type || "website",
    
    // Twitter Cards
    "twitter:card": "summary_large_image",
    "twitter:title": finalConfig.title,
    "twitter:description": finalConfig.description,
    "twitter:image": finalConfig.image || defaultSEOConfig.image,
    
    // Article Tags
    ...(finalConfig.article && {
      "article:published_time": finalConfig.article.publishedTime,
      "article:modified_time": finalConfig.article.modifiedTime,
      "article:author": finalConfig.article.authors.join(","),
      "article:tag": finalConfig.article.tags.join(",")
    }),
    
    // Local Business Tags
    "business:contact_data:street_address": businessData.address.streetAddress,
    "business:contact_data:locality": businessData.address.addressLocality,
    "business:contact_data:region": businessData.address.addressRegion,
    "business:contact_data:postal_code": businessData.address.postalCode,
    "business:contact_data:country_name": "United States",
    
    // Additional Meta Tags
    "format-detection": "telephone=yes",
    "theme-color": "#0caadc",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Plano Plumbers"
  };
}

export function generateStructuredData(config: Partial<SEOConfig>) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessData.url,
    name: businessData.name,
    image: config.image || businessData.image,
    description: config.description || defaultSEOConfig.description,
    url: config.url || businessData.url,
    telephone: businessData.telephone,
    address: {
      "@type": "PostalAddress",
      ...businessData.address
    },
    geo: {
      "@type": "GeoCoordinates",
      ...businessData.geo
    },
    openingHoursSpecification: businessData.openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.split(" ")[0],
      opens: hours.split(" ")[1].split("-")[0],
      closes: hours.split(" ")[1].split("-")[1]
    })),
    sameAs: businessData.sameAs,
    priceRange: "$$",
    areaServed: businessData.serviceArea.map(city => ({
      "@type": "City",
      name: city
    }))
  };
}

export function generateBreadcrumbData(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": item.url,
        name: item.name
      }
    }))
  };
}
```