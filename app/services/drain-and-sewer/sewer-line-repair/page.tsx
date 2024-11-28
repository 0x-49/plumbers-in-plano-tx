"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  PipeOff,
  Search,
  Tool,
  Shield,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: <Search className="w-8 h-8 text-[#0caadc]" />,
    title: "Advanced Diagnostics",
    description: "Camera inspection to pinpoint damage location"
  },
  {
    icon: <Tool className="w-8 h-8 text-[#0caadc]" />,
    title: "Expert Repairs",
    description: "Professional repair of all types of sewer line damage"
  },
  {
    icon: <PipeOff className="w-8 h-8 text-[#0caadc]" />,
    title: "Line Replacement",
    description: "Complete sewer line replacement when needed"
  },
  {
    icon: <Shield className="w-8 h-8 text-[#0caadc]" />,
    title: "Quality Guarantee",
    description: "Long-lasting repairs backed by warranty"
  }
];

const services = [
  "Video camera inspection",
  "Trenchless repairs",
  "Pipe relining",
  "Root removal",
  "Emergency repairs",
  "Preventive maintenance"
];

export default function SewerLineRepairPage() {
  return (
    <div>
      <ServiceHero
        title="Sewer Line Repair Services"
        description="Professional sewer line repair and replacement in Plano, TX"
        image="https://images.unsplash.com/photo-1599686101742-47d0ae9b9b6c?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Sewer Line Solutions</h2>
              <p className="text-muted-foreground mb-8">
                From minor repairs to complete line replacement, our experienced team provides comprehensive 
                sewer line services using the latest technology and techniques. We minimize disruption 
                while ensuring lasting repairs.
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
                <h3 className="font-semibold mb-4">Our Sewer Line Services</h3>
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