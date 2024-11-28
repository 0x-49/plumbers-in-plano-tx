```typescript
"use client";

import Head from "next/head";
import { generateSEOTags, generateStructuredData, generateBreadcrumbData, SEOConfig } from "@/lib/seo-config";

interface SEOTagsProps extends Partial<SEOConfig> {
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export function SEOTags({ breadcrumbs, ...config }: SEOTagsProps) {
  const tags = generateSEOTags(config);
  const structuredData = generateStructuredData(config);
  const breadcrumbData = breadcrumbs ? generateBreadcrumbData(breadcrumbs) : null;

  return (
    <Head>
      {Object.entries(tags).map(([key, value]) => {
        if (key === "title") {
          return <title key={key}>{value}</title>;
        }
        if (key.startsWith("og:")) {
          return <meta key={key} property={key} content={value} />;
        }
        return <meta key={key} name={key} content={value} />;
      })}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {breadcrumbData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData)
          }}
        />
      )}

      <link rel="canonical" href={config.url} />
    </Head>
  );
}
```