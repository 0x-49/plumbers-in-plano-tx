"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  PipeOff,
  Building2,
  Tool,
  ClipboardCheck,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: <Building2 className="w-8 h-8 text-[#0caadc]" />,
    title: "Commercial Expertise",
    description: "Specialized in large-scale commercial installations"
  },
  {
    icon: <Tool className="w-8 h-8 text-[#0caadc]" />,
    title: "Professional Installation",
    description: "Expert installation by certified technicians"
  },
  {
    icon: <PipeOff className="w-8 h-8 text-[#0caadc]" />,
    title: "System Design",
    description: "Custom pipework solutions for your business"
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-[#0caadc]" />,
    title: "Code Compliance",
    description: "Full compliance with building regulations"
  }
];

const services = [
  "New construction pipework",
  "System upgrades and expansion",
  "High-pressure pipe installation",
  "Industrial grade materials",
  "Quality assurance testing",
  "Project documentation"
];

export default function PipeworkInstallationPage() {
  return (
    <div>
      <ServiceHero
        title="Commercial Pipework Installation"
        description="Professional commercial pipe installation services in Plano, TX"
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Commercial Pipework Solutions</h2>
              <p className="text-muted-foreground mb-8">
                Our commercial pipework installation services are designed to meet the demanding needs 
                of businesses. We provide reliable, efficient, and code-compliant solutions for all 
                types of commercial properties.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <Card key={index} className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Our Installation Services</h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-[#0caadc]" />
                      {service}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div>
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-4">Request Quote</h3>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}