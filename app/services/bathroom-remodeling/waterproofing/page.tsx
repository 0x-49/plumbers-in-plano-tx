"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  Droplets,
  Shield,
  CheckCircle,
  Paintbrush,
  AlertTriangle
} from "lucide-react";

const features = [
  {
    icon: <Shield className="w-8 h-8 text-[#0caadc]" />,
    title: "Complete Protection",
    description: "Full waterproofing for walls, floors, and joints"
  },
  {
    icon: <Droplets className="w-8 h-8 text-[#0caadc]" />,
    title: "Moisture Control",
    description: "Advanced moisture barrier systems"
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-[#0caadc]" />,
    title: "Surface Treatment",
    description: "Professional waterproof coating application"
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-[#0caadc]" />,
    title: "Leak Prevention",
    description: "Comprehensive leak detection and prevention"
  }
];

const benefits = [
  "Prevents water damage and mold growth",
  "Extends bathroom lifespan",
  "Protects underlying structure",
  "Maintains property value",
  "Reduces maintenance costs",
  "Improves bathroom safety"
];

export default function WaterproofingPage() {
  return (
    <div>
      <ServiceHero
        title="Bathroom Waterproofing Services"
        description="Professional waterproofing solutions for your bathroom in Plano, TX"
        image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Bathroom Waterproofing</h2>
              <p className="text-muted-foreground mb-8">
                Protect your bathroom from water damage with our professional waterproofing services. 
                We use industry-leading techniques and materials to ensure long-lasting protection for 
                your bathroom surfaces and structure.
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
                <h3 className="font-semibold mb-4">Benefits of Professional Waterproofing</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-[#0caadc]" />
                      {benefit}
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