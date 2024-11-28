"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  Flame,
  Clock,
  ShieldCheck,
  Wrench,
  CheckCircle,
  ThermometerHot
} from "lucide-react";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-[#0caadc]" />,
    title: "24/7 Emergency Service",
    description: "Round-the-clock emergency boiler repair"
  },
  {
    icon: <ThermometerHot className="w-8 h-8 text-[#0caadc]" />,
    title: "Expert Diagnosis",
    description: "Advanced diagnostic equipment for accurate repairs"
  },
  {
    icon: <Flame className="w-8 h-8 text-[#0caadc]" />,
    title: "All Boiler Types",
    description: "Service for all major brands and models"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#0caadc]" />,
    title: "Licensed Technicians",
    description: "Fully certified and experienced professionals"
  }
];

const services = [
  "Emergency boiler repairs",
  "Boiler maintenance",
  "System diagnostics",
  "Part replacement",
  "Performance optimization",
  "Safety inspections"
];

export default function EmergencyBoilerRepairsPage() {
  return (
    <div>
      <ServiceHero
        title="Emergency Boiler Repairs"
        description="24/7 emergency boiler repair services in Plano, TX"
        image="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Fast Response Boiler Solutions</h2>
              <p className="text-muted-foreground mb-8">
                Don't let a broken boiler leave you in the cold. Our emergency team provides rapid response and expert repairs to get your heating system back online quickly and safely.
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
                <h3 className="font-semibold mb-4">Our Emergency Boiler Services</h3>
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