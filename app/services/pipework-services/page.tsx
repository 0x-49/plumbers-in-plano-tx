"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  Tool,
  Search,
  Wrench,
  Shield,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: <Search className="w-8 h-8 text-[#0caadc]" />,
    title: "Leak Detection",
    description: "Advanced technology for accurate leak detection"
  },
  {
    icon: <Tool className="w-8 h-8 text-[#0caadc]" />,
    title: "Pipe Repair",
    description: "Expert repair of damaged pipes"
  },
  {
    icon: <Wrench className="w-8 h-8 text-[#0caadc]" />,
    title: "Pipe Replacement",
    description: "Complete repiping services"
  },
  {
    icon: <Shield className="w-8 h-8 text-[#0caadc]" />,
    title: "Pipe Insulation",
    description: "Professional pipe insulation services"
  }
];

const features = [
  "Latest leak detection technology",
  "Emergency repair service",
  "Licensed plumbers",
  "Quality materials",
  "Warranty protection",
  "Code compliance"
];

export default function PipeworkServicesPage() {
  return (
    <div>
      <ServiceHero
        title="Pipework Services"
        description="Professional pipe repair, replacement, and maintenance in Plano, TX"
        image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Complete Pipework Solutions</h2>
              <p className="text-muted-foreground mb-8">
                From leak detection to complete repiping, our expert team provides comprehensive pipework services using the latest technology and highest quality materials.
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
                <h3 className="font-semibold mb-4">Our Service Features</h3>
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