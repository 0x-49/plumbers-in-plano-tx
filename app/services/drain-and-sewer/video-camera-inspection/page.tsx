"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceProcess } from "@/components/ServiceProcess";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { DrainInspectionViewer } from "@/components/DrainInspectionViewer";
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { generateLocalBusinessSchema } from "@/lib/seo-utils";
import { 
  Camera,
  Search,
  Monitor,
  FileText,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

// ... (keep existing features, processSteps, faqItems, commonIssues arrays)

export default function VideoCameraInspectionPage() {
  const pageSchema = {
    ...generateLocalBusinessSchema(),
    "@type": ["Plumber", "Service"],
    serviceType: "Video Camera Inspection",
    description: "Advanced pipe inspection services using state-of-the-art camera technology in Plano, TX"
  };

  return (
    <>
      <SEOHead
        title="Video Camera Pipe Inspection Services in Plano TX"
        description="Professional pipe inspection using advanced camera technology. Accurate diagnosis of plumbing issues without destructive digging."
        canonicalUrl="https://planoplumbers.com/services/drain-and-sewer/video-camera-inspection"
        structuredData={pageSchema}
      />
      <PageLayout showTableOfContents contentId="inspection-content">
        <ServiceHero
          title="Video Camera Inspection"
          description="Advanced pipe inspection services using state-of-the-art camera technology in Plano, TX"
          image="https://images.unsplash.com/photo-1599686101742-47d0ae9b9b6c?auto=format&fit=crop&q=80"
        />

        <section className="py-16 bg-background" id="inspection-content">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Keep existing content structure */}
              <div className="lg:col-span-2">
                <h2 id="overview" className="text-3xl font-bold mb-6">Advanced Pipe Inspection Technology</h2>
                {/* Rest of the existing content */}
              </div>

              <div>
                <Card className="p-6 sticky top-24">
                  <h3 className="text-2xl font-bold mb-4">Schedule Inspection</h3>
                  <ContactForm />
                </Card>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}