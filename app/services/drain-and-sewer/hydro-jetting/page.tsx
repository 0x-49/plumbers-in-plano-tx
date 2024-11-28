"use client";

import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Card } from "@/components/ui/card";
import { ServiceProcess } from "@/components/ServiceProcess";
import { EnhancedFAQ } from "@/components/EnhancedFAQ";
import { 
  Waves,
  Droplets,
  Search,
  Shield,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: <Waves className="w-8 h-8 text-[#0caadc]" />,
    title: "High-Pressure Cleaning",
    description: "Powerful water jets that clear even the toughest blockages"
  },
  {
    icon: <Search className="w-8 h-8 text-[#0caadc]" />,
    title: "Video Inspection",
    description: "Pre and post-service camera inspection"
  },
  {
    icon: <Shield className="w-8 h-8 text-[#0caadc]" />,
    title: "Safe & Effective",
    description: "Eco-friendly cleaning that's safe for all pipes"
  },
  {
    icon: <Droplets className="w-8 h-8 text-[#0caadc]" />,
    title: "Complete Cleaning",
    description: "Removes buildup, grease, and debris"
  }
];

const processSteps = [
  {
    title: "Initial Inspection",
    description: "Camera inspection to assess blockage and pipe condition"
  },
  {
    title: "Setup",
    description: "Positioning of hydro jetting equipment and safety measures"
  },
  {
    title: "Cleaning Process",
    description: "High-pressure water cleaning of pipes and drains"
  },
  {
    title: "Final Inspection",
    description: "Post-service camera inspection to verify results"
  }
];

const faqItems = [
  {
    question: "What is hydro jetting?",
    answer: "Hydro jetting is a powerful drain cleaning method that uses high-pressure water to remove clogs, buildup, and debris from pipes.",
    category: "General"
  },
  {
    question: "Is hydro jetting safe for pipes?",
    answer: "Yes, when performed by professionals, hydro jetting is safe for most types of pipes. We always perform a video inspection first to ensure your pipes can handle the pressure.",
    category: "Safety"
  },
  {
    question: "How long does hydro jetting take?",
    answer: "Most hydro jetting services take 1-2 hours, depending on the severity of the blockage and the length of pipe being cleaned.",
    category: "Process"
  },
  {
    question: "How often should I get hydro jetting?",
    answer: "For preventive maintenance, we recommend hydro jetting every 18-24 months. However, frequency may vary based on usage and specific needs.",
    category: "Maintenance"
  }
];

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Drain & Sewer", href: "/services/drain-and-sewer" },
  { name: "Hydro Jetting", href: "/services/drain-and-sewer/hydro-jetting" }
];

export default function HydroJettingPage() {
  return (
    <ServicePageLayout
      title="Professional Hydro Jetting Services"
      description="Advanced pipe cleaning technology for stubborn blockages in Plano, TX. Safe and effective cleaning for all types of pipes."
      image="https://images.unsplash.com/photo-1599686101742-47d0ae9b9b6c?auto=format&fit=crop&q=80"
      breadcrumbs={breadcrumbs}
      canonicalUrl="https://planoplumbers.com/services/drain-and-sewer/hydro-jetting"
    >
      <div>
        <h2 id="overview" className="text-3xl font-bold mb-6">Advanced Hydro Jetting Solutions</h2>
        <p className="text-muted-foreground mb-8">
          Our hydro jetting service uses high-pressure water to thoroughly clean pipes and remove 
          stubborn blockages. This powerful yet safe method is perfect for both preventive 
          maintenance and resolving severe clogs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <ServiceProcess
          title="Our Hydro Jetting Process"
          description="We follow a systematic approach to ensure thorough pipe cleaning."
          steps={processSteps}
        />

        <div className="mt-12">
          <EnhancedFAQ
            title="Hydro Jetting FAQ"
            description="Common questions about our hydro jetting services"
            faqs={faqItems}
            categories={["General", "Safety", "Process", "Maintenance"]}
          />
        </div>
      </div>
    </ServicePageLayout>
  );
}