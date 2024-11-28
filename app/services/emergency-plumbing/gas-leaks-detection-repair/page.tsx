"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  Flame,
  AlertTriangle,
  Search,
  ShieldCheck,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: <AlertTriangle className="w-8 h-8 text-[#0caadc]" />,
    title: "Emergency Response",
    description: "Immediate 24/7 response to gas leak emergencies"
  },
  {
    icon: <Search className="w-8 h-8 text-[#0caadc]" />,
    title: "Advanced Detection",
    description: "State-of-the-art gas leak detection equipment"
  },
  {
    icon: <Flame className="w-8 h-8 text-[#0caadc]" />,
    title: "Gas Line Repair",
    description: "Expert repair of all types of gas lines"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#0caadc]" />,
    title: "Safety First",
    description: "Comprehensive safety protocols and inspections"
  }
];

const services = [
  "Emergency gas leak detection",
  "Gas line inspection",
  "Gas pipe repair",
  "Safety certification",
  "Gas system maintenance",
  "24/7 emergency response"
];

export default function GasLeaksDetectionPage() {
  return (
    <div>
      <ServiceHero
        title="Gas Leak Detection & Repair"
        description="Emergency gas leak detection and repair services in Plano, TX"
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Gas Leak Solutions</h2>
              <p className="text-muted-foreground mb-8">
                Gas leaks require immediate attention from qualified professionals. Our expert team provides rapid response with advanced detection equipment to ensure your safety.
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
                <h3 className="font-semibold mb-4">Our Gas Services</h3>
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
                <h3 className="text-2xl font-bold mb-4">Request Emergency Service</h3>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}