"use client";

import Head from "next/head";
import { businessData } from "@/lib/business-data";

interface ServiceMetaTagsProps {
  title: string;
  description: string;
  canonicalUrl: string;
  image?: string;
}

export function ServiceMetaTags({
  title,
  description,
  canonicalUrl,
  image
}: ServiceMetaTagsProps) {
  const fullTitle = `${title} | ${businessData.name}`;
  const ogImage = image || businessData.image;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={businessData.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Location */}
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Plano" />
      <meta name="geo.position" content={`${businessData.geo.latitude};${businessData.geo.longitude}`} />
      <meta name="ICBM" content={`${businessData.geo.latitude}, ${businessData.geo.longitude}`} />
    </Head>
  );
}