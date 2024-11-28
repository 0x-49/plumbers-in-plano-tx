"use client";

import { businessData } from "@/lib/business-data";
import Script from "next/script";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: {
    priceRange?: string;
    telephone?: string;
    name?: string;
    image?: string;
    address?: object;
    "@type"?: string;
    phone?: string;
  };
  priceRange?: string;
}

export function ServiceSchema({ name, description, url, image, provider, priceRange }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    image: image || businessData.image,
    provider: provider || {
      "@type": "LocalBusiness",
      name: businessData.name,
      image: businessData.image,
      address: businessData.address,
      telephone: businessData.phone,
      priceRange: businessData.priceRange
    },
    areaServed: {
      "@type": "City",
      name: "Plano",
      "@id": "https://www.wikidata.org/wiki/Q982542"
    },
    serviceType: "Plumbing",
    category: "Home Services"
  };

  return (
    <Script id="service-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  );
}