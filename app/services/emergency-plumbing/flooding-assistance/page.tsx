"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  Droplets,
  Clock,
  ShieldCheck,
  PumpIcon,
  CheckCircle,
  WaterOff
} from "lucide-react";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-[#0caadc]" />,
    title: "24/7 Emergency Response",
    description: "Immediate response to flooding emergencies"
  },
  {
    icon: <PumpIcon className="w-8 h-8 text-[#0caadc]" />,
    title: "Water Extraction",
    description: "Professional-grade water removal equipment"
  },
  {
    icon: <WaterOff className="w-8 h-8 text-[#0caadc]" />,
    title: "Flood Prevention",
    description: "Solutions to prevent future flooding"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#0caadc]" />,
    title: "Licensed Experts",
    description: "Fully certified flood remediation specialists"
  }
];

const services = [
  "Emergency water extraction",
  "Flood damage assessment",
  "Structural drying",
  "Mold prevention",
  "Drainage system repair",
  "Preventive solutions"
];

export default function FloodingAssistancePage() {
  return (
    <div>
      <ServiceHero
        title="Flooding Assistance"
        description="Emergency flooding and water damage services in Plano, TX"
        image="https://images.unsplash.com/photo-1578496781379-7dcfb995293d?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Fast Response Flood Solutions</h2>
              <p className="text-muted-foreground mb-8">
                When flooding strikes, quick action is crucial to minimize damage. Our emergency team provides rapid response with professional-grade equipment to extract water and protect your property.
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
                <h3 className="font-semibold mb-4">Our Flooding Services</h3>
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