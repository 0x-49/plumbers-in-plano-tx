import { businessData } from './business-data';

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: businessData.name,
    description: businessData.description,
    url: businessData.url,
    logo: businessData.logo,
    image: businessData.image,
    address: {
      "@type": "PostalAddress",
      ...businessData.address
    },
    geo: {
      "@type": "GeoCoordinates",
      ...businessData.geo
    },
    telephone: businessData.telephone,
    email: businessData.email,
    openingHours: businessData.openingHours,
    priceRange: "$$",
    areaServed: businessData.serviceArea.map(city => ({
      "@type": "City",
      name: city
    })),
    sameAs: businessData.sameAs,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing Services",
      itemListElement: businessData.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service
        },
        position: index + 1
      }))
    }
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: generateLocalBusinessSchema(),
    ...service,
    areaServed: businessData.serviceArea.map(city => ({
      "@type": "City",
      name: city
    }))
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": item.url,
        name: item.name,
        url: item.url
      }
    }))
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function generateMetaTags(page: {
  title: string;
  description: string;
  url: string;
  image?: string;
}) {
  const fullTitle = `${page.title} | ${businessData.name}`;
  const image = page.image || businessData.image;

  return {
    title: fullTitle,
    description: page.description,
    openGraph: {
      title: fullTitle,
      description: page.description,
      url: page.url,
      image: image,
      type: 'website',
      siteName: businessData.name
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: page.description,
      image: image
    }
  };
}