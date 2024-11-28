"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  PipeOff,
  Droplets,
  Search,
  Shield,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: <Search className="w-8 h-8 text-[#0caadc]" />,
    title: "Video Inspection",
    description: "Advanced camera inspection to locate blockages"
  },
  {
    icon: <PipeOff className="w-8 h-8 text-[#0caadc]" />,
    title: "Clog Removal",
    description: "Professional removal of all types of blockages"
  },
  {
    icon: <Droplets className="w-8 h-8 text-[#0caadc]" />,
    title: "Hydro Jetting",
    description: "High-pressure cleaning for tough clogs"
  },
  {
    icon: <Shield className="w-8 h-8 text-[#0caadc]" />,
    title: "Preventive Care",
    description: "Regular maintenance to prevent future clogs"
  }
];

const services = [
  "Kitchen drain cleaning",
  "Bathroom drain cleaning",
  "Main line cleaning",
  "Floor drain cleaning",
  "Preventive maintenance",
  "Emergency service available"
];

export default function DrainCleaningPage() {
  return (
    <div>
      <ServiceHero
        title="Professional Drain Cleaning"
        description="Expert drain cleaning services for residential and commercial properties in Plano, TX"
        image="https://images.unsplash.com/photo-1599686101742-47d0ae9b9b6c?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Complete Drain Cleaning Solutions</h2>
              <p className="text-muted-foreground mb-8">
                Our professional drain cleaning services use advanced equipment and techniques to clear 
                any blockage and keep your drains flowing smoothly. We handle everything from routine 
                maintenance to emergency clogs.
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
                <h3 className="font-semibold mb-4">Our Drain Cleaning Services</h3>
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