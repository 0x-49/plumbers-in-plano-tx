"use client";

import PageLayout from "@/components/PageLayout";
import ServiceHero from "@/components/ServiceHero";
import { ServiceBreadcrumbs } from "@/components/ServiceBreadcrumbs";
import { ServiceSchema } from "@/components/ServiceSchema";
import { ServiceMetaTags } from "@/components/ServiceMetaTags";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";

interface ServicePageLayoutProps {
  title: string;
  description: string;
  image?: string;
  breadcrumbs: Array<{ name: string; href: string }>;
  children: React.ReactNode;
  contentId?: string;
  canonicalUrl: string;
}

export default function ServicePageLayout({
  title,
  description,
  image,
  breadcrumbs,
  children,
  contentId = "service-content",
  canonicalUrl
}: ServicePageLayoutProps) {
  return (
    <PageLayout showTableOfContents contentId={contentId}>
      <ServiceMetaTags
        title={title}
        description={description}
        canonicalUrl={canonicalUrl}
        image={image}
      />
      
      <ServiceSchema
        name={title}
        description={description}
        url={canonicalUrl}
        image={image}
      />
      
      <div className="container mb-4">
        <ServiceBreadcrumbs items={breadcrumbs} />
      </div>

      <ServiceHero
        title={title}
        description={description}
        image={image}
      />

      <section className="py-16 bg-background" id={contentId}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {children}
            </div>

            <div>
              <Card className="p-6 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Schedule Service</h3>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}