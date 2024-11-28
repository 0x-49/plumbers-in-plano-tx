"use client";

import ServiceHero from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceProcess } from "@/components/ServiceProcess";
import { EnhancedFAQ } from "@/components/EnhancedFAQ";
import PageLayout from "@/components/PageLayout";
import { ServiceBreadcrumbs } from "@/components/ServiceBreadcrumbs";
import { ServiceSchema } from "@/components/ServiceSchema";
import { 
  PenLine,
  Droplets,
  Camera,
  Waves,
  CheckCircle
} from "lucide-react";

const processSteps = [
  {
    title: "Inspection",
    description: "Thorough camera inspection of your drain and sewer lines",
    icon: Camera
  },
  {
    title: "Diagnosis",
    description: "Identify blockages, damage, or potential issues",
    icon: PenLine
  },
  {
    title: "Treatment",
    description: "Professional cleaning and repair solutions",
    icon: Waves
  },
  {
    title: "Prevention",
    description: "Long-term maintenance recommendations",
    icon: CheckCircle
  }
];

const serviceFAQs = [
  {
    question: "What are common signs of drain and sewer problems?",
    answer: "Common signs include slow drains, gurgling sounds, foul odors, water backing up, and wet spots in your yard."
  },
  {
    question: "How often should I have my drains cleaned?",
    answer: "We recommend professional drain cleaning every 18-24 months for preventive maintenance, or sooner if you notice any drainage issues."
  },
  {
    question: "What causes sewer line damage?",
    answer: "Common causes include tree root intrusion, aging pipes, ground shifting, grease buildup, and flushing inappropriate items."
  },
  {
    question: "Do you offer emergency drain services?",
    answer: "Yes, we provide 24/7 emergency drain and sewer services for urgent situations like severe backups or overflows."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Drain & Sewer", href: "/services/drain-and-sewer" }
];

export default function DrainAndSewerPage() {
  return (
    <>
      <ServiceSchema
        name="Drain & Sewer Services"
        description="Professional drain cleaning and sewer repair services in Plano, TX. Camera inspections, drain cleaning, and emergency services available."
        url="https://planoplumbers.com/services/drain-and-sewer"
      />
      
      <PageLayout showTableOfContents contentId="drain-sewer-content">
        <ServiceHero
          title="Drain & Sewer Services"
          description="Professional drain cleaning and sewer solutions in Plano, TX"
          image="https://images.unsplash.com/photo-1578074647378-9a659f3b9fe4?auto=format&fit=crop&q=80"
        />

        <div className="container py-4">
          <ServiceBreadcrumbs items={breadcrumbItems} />
        </div>

        <section className="py-16 bg-background" id="drain-sewer-content">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 id="overview" className="text-3xl font-bold mb-6">Professional Drain & Sewer Solutions</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our comprehensive drain and sewer services keep your plumbing system flowing smoothly. 
                  From routine maintenance to emergency repairs, we have the expertise and equipment to handle any drainage issue.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {processSteps.map((step, index) => (
                    <Card key={index} className="p-6">
                      <step.icon className="w-8 h-8 mb-4 text-primary" />
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </Card>
                  ))}
                </div>

                <ServiceProcess
                  title="Our Service Process"
                  description="How we handle your drain and sewer needs"
                  steps={processSteps}
                />

                <div className="mt-12">
                  <EnhancedFAQ
                    title="Drain & Sewer FAQ"
                    description="Common questions about our drain and sewer services"
                    faqs={serviceFAQs}
                  />
                </div>
              </div>

              <div>
                <Card className="p-6 sticky top-24">
                  <h3 className="text-2xl font-bold mb-4">Schedule Service</h3>
                  <p className="text-muted-foreground mb-6">Request a drain inspection or cleaning service</p>
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