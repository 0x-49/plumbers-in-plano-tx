"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Card } from "@/components/ui/card";
import { ServiceProcess } from "@/components/ServiceProcess";
import { EnhancedFAQ } from "@/components/EnhancedFAQ";
import { GasServiceChecklist } from "@/components/GasServiceChecklist";
import { 
  Flame,
  Search,
  Hammer,
  AlertTriangle,
  CheckCircle,
  ShieldCheck,
  Gauge,
  Wrench
} from "lucide-react";

const features = [
  {
    icon: <Search className="w-8 h-8 text-[#0caadc]" />,
    title: "Leak Detection",
    description: "Advanced detection technology for safe and accurate results"
  },
  {
    icon: <Hammer className="w-8 h-8 text-[#0caadc]" />,
    title: "Gas Line Installation",
    description: "Professional installation of new gas lines"
  },
  {
    icon: <Wrench className="w-8 h-8 text-[#0caadc]" />,
    title: "Repairs & Maintenance",
    description: "Expert repair and maintenance services"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#0caadc]" />,
    title: "Safety Inspections",
    description: "Comprehensive gas system safety checks"
  }
];

const processSteps = [
  {
    title: "Initial Safety Check",
    description: "Thorough inspection of gas system and potential hazards"
  },
  {
    title: "System Diagnosis",
    description: "Advanced leak detection and system analysis"
  },
  {
    title: "Solution Planning",
    description: "Detailed plan for repairs or installations"
  },
  {
    title: "Professional Service",
    description: "Expert execution of required gas work"
  },
  {
    title: "Safety Verification",
    description: "Final testing and safety certification"
  }
];

const faqItems = [
  {
    question: "How often should I have my gas lines inspected?",
    answer: "We recommend annual gas line inspections to ensure safety and compliance. More frequent inspections may be needed for older systems or if you notice any concerning signs.",
    category: "Maintenance"
  },
  {
    question: "What are signs of a gas leak?",
    answer: "Common signs include a rotten egg smell, hissing sounds near gas lines, dead plants near gas lines, and unusually high gas bills. If you suspect a leak, leave immediately and call us.",
    category: "Safety"
  },
  {
    question: "Can you install gas lines for outdoor appliances?",
    answer: "Yes, we provide professional gas line installation for outdoor kitchens, grills, fire pits, and pool heaters, ensuring proper safety measures and code compliance.",
    category: "Installation"
  },
  {
    question: "Are your gas fitters licensed?",
    answer: "Yes, all our gas fitters are fully licensed, insured, and certified to work on gas systems in Plano. We maintain strict safety standards and ongoing training.",
    category: "General"
  },
  {
    question: "How long does gas line installation take?",
    answer: "Installation time varies depending on complexity and length of the line. Most residential installations can be completed in 1-2 days, including safety testing.",
    category: "Installation"
  }
];

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gas Plumbing", href: "/services/gas-plumbing" }
];

export default function GasPlumbingPage() {
  return (
    <ServicePageLayout
      title="Professional Gas Plumbing Services"
      description="Expert gas line installation, repair, and safety services in Plano, TX. Licensed gas fitters available 24/7 for emergencies."
      image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
      breadcrumbs={breadcrumbs}
      canonicalUrl="https://planoplumbers.com/services/gas-plumbing"
    >
      <div>
        <h2 id="overview" className="text-3xl font-bold mb-6">Expert Gas Plumbing Solutions</h2>
        <p className="text-muted-foreground mb-8">
          Our licensed gas fitters provide comprehensive gas plumbing services with a focus on safety 
          and reliability. From leak detection to new installations, we ensure your gas system meets 
          all safety standards and operates efficiently.
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

        <Card className="p-6 mb-12">
          <h3 id="safety" className="text-xl font-bold mb-6">Gas Safety Checklist</h3>
          <GasServiceChecklist />
        </Card>

        <ServiceProcess
          title="Our Service Process"
          description="We follow a systematic approach to ensure safe and reliable gas services."
          steps={processSteps}
        />

        <div className="mt-12">
          <EnhancedFAQ
            title="Gas Plumbing FAQ"
            description="Common questions about gas plumbing services"
            faqs={faqItems}
            categories={["General", "Safety", "Installation", "Maintenance"]}
          />
        </div>
      </div>
    </ServicePageLayout>
  );
}