"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  Paintbrush,
  Ruler,
  Hammer,
  CheckCircle,
  Layout,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: <Layout className="w-8 h-8 text-[#0caadc]" />,
    title: "Custom Design",
    description: "Personalized bathroom layouts and design plans"
  },
  {
    icon: <Hammer className="w-8 h-8 text-[#0caadc]" />,
    title: "Complete Renovation",
    description: "Full demolition and reconstruction services"
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-[#0caadc]" />,
    title: "Premium Finishes",
    description: "High-quality materials and expert installation"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#0caadc]" />,
    title: "Modern Features",
    description: "Latest bathroom technology and amenities"
  }
];

const services = [
  "Custom layout design",
  "Demolition and disposal",
  "Plumbing reconfiguration",
  "Tile installation",
  "Fixture mounting",
  "Lighting installation",
  "Vanity installation",
  "Final inspection and cleanup"
];

export default function FullRenovationsPage() {
  return (
    <div>
      <ServiceHero
        title="Full Bathroom Renovations"
        description="Transform your bathroom with our complete renovation services in Plano, TX"
        image="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Complete Bathroom Transformation</h2>
              <p className="text-muted-foreground mb-8">
                Our full bathroom renovation service covers everything from initial design to final touches. 
                We handle all aspects of your bathroom remodel, ensuring a seamless transformation that 
                matches your vision and exceeds your expectations.
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
                <h3 className="font-semibold mb-4">Our Renovation Process</h3>
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
                <h3 className="text-2xl font-bold mb-4">Schedule Consultation</h3>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}