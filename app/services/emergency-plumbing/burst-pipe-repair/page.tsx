"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  PipeOff,
  Clock,
  ShieldCheck,
  Wrench,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-[#0caadc]" />,
    title: "24/7 Emergency Response",
    description: "Immediate response to burst pipe emergencies"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#0caadc]" />,
    title: "Licensed Experts",
    description: "Fully licensed and insured technicians"
  },
  {
    icon: <PipeOff className="w-8 h-8 text-[#0caadc]" />,
    title: "Advanced Detection",
    description: "Latest technology for precise leak location"
  },
  {
    icon: <Wrench className="w-8 h-8 text-[#0caadc]" />,
    title: "Quality Repairs",
    description: "Durable repairs with warranty protection"
  }
];

const services = [
  "Emergency pipe repair",
  "Water damage mitigation",
  "Pipe replacement",
  "Leak detection",
  "Water cleanup",
  "Preventive maintenance"
];

export default function BurstPipeRepairPage() {
  return (
    <div>
      <ServiceHero
        title="Burst Pipe Repair"
        description="Emergency burst pipe repair services available 24/7 in Plano, TX"
        image="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Fast Response Burst Pipe Solutions</h2>
              <p className="text-muted-foreground mb-8">
                When a pipe bursts, quick action is crucial to minimize water damage. Our emergency team is available 24/7 to provide immediate response and expert repair services.
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
                <h3 className="font-semibold mb-4">Our Burst Pipe Services</h3>
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