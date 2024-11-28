"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  ShieldCheck,
  Settings,
  ClipboardCheck,
  Tool,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#0caadc]" />,
    title: "Certified Testing",
    description: "Annual backflow testing and certification"
  },
  {
    icon: <Settings className="w-8 h-8 text-[#0caadc]" />,
    title: "Installation",
    description: "Professional installation of backflow devices"
  },
  {
    icon: <Tool className="w-8 h-8 text-[#0caadc]" />,
    title: "Repairs",
    description: "Expert repair of existing systems"
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-[#0caadc]" />,
    title: "Compliance",
    description: "Full compliance with local regulations"
  }
];

const services = [
  "Backflow preventer installation",
  "Annual testing and certification",
  "Repair and maintenance",
  "Emergency service",
  "System upgrades",
  "Compliance documentation"
];

export default function BackflowPreventionPage() {
  return (
    <div>
      <ServiceHero
        title="Backflow Prevention Systems"
        description="Professional backflow prevention services for commercial properties in Plano, TX"
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Backflow Prevention Solutions</h2>
              <p className="text-muted-foreground mb-8">
                Protect your commercial water supply with our comprehensive backflow prevention services. 
                We ensure your systems meet all safety standards and local regulations while providing 
                reliable protection against contamination.
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
                <h3 className="font-semibold mb-4">Our Backflow Services</h3>
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
                <h3 className="text-2xl font-bold mb-4">Schedule Service</h3>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}