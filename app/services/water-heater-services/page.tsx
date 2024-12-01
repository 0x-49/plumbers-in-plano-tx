"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Card } from "@/components/ui/card";
import { ServiceProcess } from "@/components/ServiceProcess";
import { EnhancedFAQ } from "@/components/EnhancedFAQ";
import { WaterHeaterComparison } from "@/components/WaterHeaterComparison";
import { 
  Flame,
  Wrench,
  Gauge,
  Settings,
  CheckCircle,
  ThermometerSun
} from "lucide-react";

const features = [
  {
    icon: <Flame className="w-8 h-8 text-[#0caadc]" />,
    title: "Installation",
    description: "Expert installation of traditional and tankless water heaters"
  },
  {
    icon: <Wrench className="w-8 h-8 text-[#0caadc]" />,
    title: "Repairs",
    description: "Fast, reliable repairs for all water heater makes and models"
  },
  {
    icon: <Gauge className="w-8 h-8 text-[#0caadc]" />,
    title: "Maintenance",
    description: "Regular maintenance to extend your water heater's lifespan"
  },
  {
    icon: <ThermometerSun className="w-8 h-8 text-[#0caadc]" />,
    title: "Energy Efficiency",
    description: "Energy-efficient solutions to reduce utility costs"
  }
];

const processSteps = [
  {
    title: "Initial Assessment",
    description: "Thorough evaluation of your current water heater and hot water needs"
  },
  {
    title: "Solution Recommendation",
    description: "Expert advice on the best water heater options for your home"
  },
  {
    title: "Professional Installation",
    description: "Careful installation following manufacturer specifications and local codes"
  },
  {
    title: "System Testing",
    description: "Comprehensive testing to ensure optimal performance"
  },
  {
    title: "Maintenance Plan",
    description: "Custom maintenance schedule to ensure long-term reliability"
  }
];

const faqItems = [
  {
    question: "How long do water heaters typically last?",
    answer: "Traditional tank water heaters typically last 8-12 years, while tankless units can last 20+ years with proper maintenance.",
    category: "General"
  },
  {
    question: "What are the signs I need a new water heater?",
    answer: "Common signs include age (over 10 years), rusty water, unusual noises, leaks, or inconsistent heating.",
    category: "Maintenance"
  },
  {
    question: "Should I choose a tankless water heater?",
    answer: "Tankless water heaters offer endless hot water and energy savings but have a higher upfront cost. The choice depends on your household needs and budget.",
    category: "Installation"
  },
  {
    question: "How quickly can you replace a water heater?",
    answer: "Most water heater replacements can be completed in 2-4 hours. Emergency service is available for urgent situations.",
    category: "Installation"
  },
  {
    question: "How often should I maintain my water heater?",
    answer: "Annual maintenance is recommended to ensure efficiency and extend lifespan. This includes flushing the tank and checking safety components.",
    category: "Maintenance"
  }
];

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Water Heater Services", href: "/services/water-heater-services" }
];

export default function WaterHeaterServicesPage() {
  return (
    <ServicePageLayout
      title="Professional Water Heater Services"
      description="Expert water heater installation, repair, and maintenance services in Plano, TX. Available 24/7 for emergency repairs."
      image="https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?auto=format&fit=crop&q=80"
      breadcrumbs={breadcrumbs}
      canonicalUrl="https://planoplumbers.com/services/water-heater-services"
    >
      <div>
        <h2 id="overview" className="text-3xl font-bold mb-6">Complete Water Heater Solutions</h2>
        <p className="text-muted-foreground mb-8">
          From routine maintenance to emergency repairs, our expert team provides comprehensive water 
          heater services to ensure your home or business always has reliable hot water. We work with 
          all major brands and models, offering energy-efficient solutions tailored to your needs.
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
          <h3 id="comparison" className="text-xl font-bold mb-6">Water Heater Comparison</h3>
          <WaterHeaterComparison />
        </Card>

        <ServiceProcess
          title="Our Installation Process"
          description="We follow a systematic approach to ensure proper installation and optimal performance."
          steps={processSteps}
        />

        <div className="mt-12">
          <EnhancedFAQ
            title="Water Heater FAQ"
            description="Common questions about water heater services"
            faqs={faqItems}
            categories={["General", "Installation", "Maintenance"]}
          />
        </div>
      </div>
    </ServicePageLayout>
  );
}