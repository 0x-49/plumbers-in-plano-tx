"use client";

import ServiceHero from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceProcess } from "@/components/ServiceProcess";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo-utils";
import { PhoneCall, Wrench, Clock, Shield } from "lucide-react";

const processSteps = [
  {
    title: "24/7 Availability",
    description: "Our emergency plumbers are available around the clock to respond to your urgent plumbing needs",
    icon: Clock
  },
  {
    title: "Rapid Response",
    description: "We aim to arrive at your location within 60 minutes of your call",
    icon: PhoneCall
  },
  {
    title: "Expert Solutions",
    description: "Our licensed plumbers quickly diagnose and fix your emergency plumbing issues",
    icon: Wrench
  },
  {
    title: "Guaranteed Work",
    description: "All our emergency plumbing repairs come with a satisfaction guarantee",
    icon: Shield
  }
];

const serviceFAQs = [
  {
    question: "What qualifies as a plumbing emergency?",
    answer: "Plumbing emergencies include burst pipes, severe leaks, flooding, sewage backups, no water supply, or any situation that poses immediate risk to your property or health."
  },
  {
    question: "How quickly can you respond to an emergency?",
    answer: "We aim to arrive at your location within 60 minutes of your call in the Plano area. Our emergency response team is available 24/7."
  },
  {
    question: "Do you charge extra for emergency services?",
    answer: "While emergency service calls may have different rates than scheduled appointments, we always provide upfront pricing before beginning any work."
  },
  {
    question: "Are your emergency plumbers licensed?",
    answer: "Yes, all our emergency plumbers are fully licensed, insured, and experienced in handling urgent plumbing situations."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Emergency Plumbing", href: "/services/emergency-plumbing" }
];

export default function EmergencyPlumbingPage() {
  const serviceSchema = generateServiceSchema({
    name: "24/7 Emergency Plumbing Services",
    description: "Professional emergency plumbing services available 24/7 in Plano, TX. Fast response for burst pipes, flooding, and other plumbing emergencies.",
    url: "https://planoplumbers.com/services/emergency-plumbing"
  });

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <SEOHead
        title="24/7 Emergency Plumbing Services in Plano TX"
        description="Professional emergency plumbing services available 24/7. Fast response for burst pipes, flooding, and other plumbing emergencies in Plano, TX."
        canonicalUrl="https://planoplumbers.com/services/emergency-plumbing"
        structuredData={[serviceSchema, breadcrumbSchema]}
      />
      
      <PageLayout showTableOfContents contentId="emergency-plumbing-content">
        <ServiceHero
          title="24/7 Emergency Plumbing Services"
          description="Professional emergency plumbing services when you need them most. Available 24/7 in Plano, TX."
          image="https://images.unsplash.com/photo-1578074647378-9a659f3b9fe4?auto=format&fit=crop&q=80"
        />

        <section className="py-16 bg-background" id="emergency-plumbing-content">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 id="overview" className="text-3xl font-bold mb-6">Emergency Plumbing Solutions</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  When plumbing emergencies strike, you need a reliable team that's ready to respond. Our emergency plumbing services are available 24/7, 
                  providing fast, professional solutions to protect your home and restore your peace of mind.
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
                  title="Our Emergency Response Process"
                  description="How we handle your plumbing emergencies"
                  steps={[
                    {
                      title: "Initial Contact",
                      description: "Call our 24/7 emergency line to speak with our team"
                    },
                    {
                      title: "Quick Assessment",
                      description: "We gather essential information about your emergency"
                    },
                    {
                      title: "Rapid Dispatch",
                      description: "Our nearest emergency plumber is sent to your location"
                    },
                    {
                      title: "Problem Resolution",
                      description: "We quickly and effectively resolve your plumbing emergency"
                    }
                  ]}
                />

                <div className="mt-12">
                  <ServiceFAQ
                    title="Emergency Plumbing FAQ"
                    description="Common questions about our emergency plumbing services"
                    faqs={serviceFAQs}
                  />
                </div>
              </div>

              <div>
                <Card className="p-6 sticky top-24">
                  <h3 className="text-2xl font-bold mb-4">Emergency Service</h3>
                  <p className="text-muted-foreground mb-6">Available 24/7 for urgent plumbing needs</p>
                  <ContactForm emergency />
                </Card>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}