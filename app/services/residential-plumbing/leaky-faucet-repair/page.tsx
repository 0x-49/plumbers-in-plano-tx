"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  Droplets,
  Tool,
  Clock,
  Shield,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-[#0caadc]" />,
    title: "Fast Response",
    description: "Quick service to stop water waste"
  },
  {
    icon: <Tool className="w-8 h-8 text-[#0caadc]" />,
    title: "Expert Repair",
    description: "Professional repair of all faucet types"
  },
  {
    icon: <Droplets className="w-8 h-8 text-[#0caadc]" />,
    title: "Water Savings",
    description: "Stop water waste and reduce bills"
  },
  {
    icon: <Shield className="w-8 h-8 text-[#0caadc]" />,
    title: "Quality Parts",
    description: "Premium replacement components"
  }
];

const services = [
  "Faucet leak diagnosis",
  "Cartridge replacement",
  "O-ring replacement",
  "Valve seat repair",
  "Complete faucet replacement",
  "Preventive maintenance"
];

export default function LeakyFaucetRepairPage() {
  return (
    <div>
      <ServiceHero
        title="Leaky Faucet Repair"
        description="Expert faucet repair services to stop drips and save water in Plano, TX"
        image="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Faucet Repair Solutions</h2>
              <p className="text-muted-foreground mb-8">
                Don't let a leaky faucet waste water and increase your bills. Our expert plumbers 
                provide fast, reliable repairs for all types of faucets, ensuring long-lasting 
                solutions that save you money.
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
                <h3 className="font-semibold mb-4">Our Faucet Services</h3>
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
                <h3 className="text-2xl font-bold mb-4">Schedule Repair</h3>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}