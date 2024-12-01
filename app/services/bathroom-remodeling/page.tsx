"use client";

import ServiceHero from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  ShowerHead,
  Paintbrush,
  Hammer,
  Shield,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: <ShowerHead className="w-8 h-8 text-[#0caadc]" />,
    title: "Fixture Installation",
    description: "Expert installation of modern bathroom fixtures and fittings"
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-[#0caadc]" />,
    title: "Full Renovations",
    description: "Complete bathroom makeovers and modernization"
  },
  {
    icon: <Hammer className="w-8 h-8 text-[#0caadc]" />,
    title: "Custom Solutions",
    description: "Tailored bathroom designs to match your style"
  },
  {
    icon: <Shield className="w-8 h-8 text-[#0caadc]" />,
    title: "Waterproofing",
    description: "Professional waterproofing for long-lasting protection"
  }
];

const features = [
  "Custom design consultation",
  "High-quality materials and fixtures",
  "Expert installation team",
  "Project management",
  "Warranty protection",
  "Code compliance guaranteed"
];

export default function BathroomRemodelingPage() {
  return (
    <div>
      <ServiceHero
        title="Bathroom Remodeling Services"
        description="Transform your bathroom with our expert remodeling services in Plano, TX"
        image="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Complete Bathroom Transformation</h2>
              <p className="text-muted-foreground mb-8">
                From simple updates to complete renovations, our expert team delivers beautiful, functional bathroom spaces that exceed your expectations.
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
                <h3 className="font-semibold mb-4">Our Remodeling Process</h3>
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
                <h3 className="text-2xl font-bold mb-4">Request Consultation</h3>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}