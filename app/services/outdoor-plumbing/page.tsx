"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  Sprout,
  Droplets,
  Pool,
  WaterOff,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: <Sprout className="w-8 h-8 text-[#0caadc]" />,
    title: "Sprinkler Systems",
    description: "Installation and repair of irrigation systems"
  },
  {
    icon: <Droplets className="w-8 h-8 text-[#0caadc]" />,
    title: "Outdoor Faucets",
    description: "Installation and repair of outdoor water fixtures"
  },
  {
    icon: <Pool className="w-8 h-8 text-[#0caadc]" />,
    title: "Pool Plumbing",
    description: "Complete pool plumbing services and maintenance"
  },
  {
    icon: <WaterOff className="w-8 h-8 text-[#0caadc]" />,
    title: "Drainage Solutions",
    description: "Yard drainage and water management systems"
  }
];

const features = [
  "Professional installation",
  "Water-efficient solutions",
  "Regular maintenance plans",
  "Emergency repair service",
  "Weather-resistant materials",
  "Code compliance guaranteed"
];

export default function OutdoorPlumbingPage() {
  return (
    <div>
      <ServiceHero
        title="Outdoor Plumbing Services"
        description="Expert outdoor plumbing solutions for your home in Plano, TX"
        image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Complete Outdoor Plumbing Solutions</h2>
              <p className="text-muted-foreground mb-8">
                From sprinkler systems to pool plumbing, we provide comprehensive outdoor plumbing services to enhance your outdoor living space while ensuring efficient water management.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <Card key={index} className="p-6">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </Card>
                ))}
              </div>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Our Service Features</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-[#0caadc]" />
                      {feature}
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