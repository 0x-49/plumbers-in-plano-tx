"use client";

import ServiceHero from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceProcess } from "@/components/ServiceProcess";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { WaterQualityChart } from "@/components/WaterQualityChart";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { generateLocalBusinessSchema } from "@/lib/seo-utils";
import { 
  Droplets,
  Filter,
  FlaskConical,
  Gauge,
  CheckCircle,
  ShieldCheck
} from "lucide-react";

const features = [
  {
    title: "Water Quality Testing",
    description: "Comprehensive analysis of your water quality to identify contaminants and treatment needs",
    icon: FlaskConical
  },
  {
    title: "Water Filtration",
    description: "Advanced filtration systems to remove impurities and improve water quality",
    icon: Filter
  },
  {
    title: "Water Softening",
    description: "Solutions to reduce hard water and prevent scale buildup in your plumbing",
    icon: Droplets
  },
  {
    title: "Water Pressure",
    description: "Optimization of water pressure for consistent flow throughout your home",
    icon: Gauge
  }
];

const processSteps = [
  {
    title: "Assessment",
    description: "We analyze your water quality and discuss your specific needs"
  },
  {
    title: "Recommendation",
    description: "We propose the most effective water treatment solution for your situation"
  },
  {
    title: "Installation",
    description: "Professional installation of your chosen water treatment system"
  },
  {
    title: "Maintenance",
    description: "Regular maintenance to ensure optimal performance"
  }
];

const benefits = [
  {
    title: "Healthier Water",
    description: "Remove contaminants and enjoy cleaner, safer water"
  },
  {
    title: "Better Taste",
    description: "Improve the taste and odor of your drinking water"
  },
  {
    title: "Protected Plumbing",
    description: "Prevent scale buildup and extend appliance life"
  },
  {
    title: "Cost Savings",
    description: "Reduce bottled water expenses and appliance maintenance costs"
  }
];

export default function WaterTreatmentPage() {
  const pageSchema = {
    ...generateLocalBusinessSchema(),
    "@type": ["Plumber", "Service"],
    serviceType: "Water Treatment",
    description: "Professional water treatment solutions for cleaner, healthier water in Plano, TX"
  };

  return (
    <>
      <SEOHead
        title="Water Treatment Services in Plano TX"
        description="Professional water treatment solutions for cleaner, healthier water. Expert installation of water filtration, softening, and purification systems."
        canonicalUrl="https://planoplumbers.com/services/water-treatment-services"
        structuredData={pageSchema}
      />
      <PageLayout showTableOfContents contentId="water-treatment-content">
        <ServiceHero
          title="Water Treatment Services"
          description="Professional water treatment solutions for cleaner, healthier water in Plano, TX"
          image="https://images.unsplash.com/photo-1563616796230-aaac9c5b3b21?auto=format&fit=crop&q=80"
        />

        <section className="py-16 bg-background" id="water-treatment-content">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 id="overview" className="text-3xl font-bold mb-6">Complete Water Treatment Solutions</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our professional water treatment services ensure you have clean, healthy water throughout your home. 
                  We offer comprehensive solutions including water testing, filtration, and softening systems.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {features.map((feature, index) => (
                    <Card key={index} className="p-6">
                      <feature.icon className="w-8 h-8 mb-4 text-primary" />
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </Card>
                  ))}
                </div>

                <ServiceProcess
                  title="Our Process"
                  description="How we implement your water treatment solution"
                  steps={processSteps}
                />

                <div className="mt-12">
                  <h2 className="text-3xl font-bold mb-6">Benefits of Water Treatment</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex gap-4">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">{benefit.title}</h3>
                          <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <WaterQualityChart className="mt-12" />
              </div>

              <div>
                <Card className="p-6 sticky top-24">
                  <h3 className="text-2xl font-bold mb-4">Schedule Consultation</h3>
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