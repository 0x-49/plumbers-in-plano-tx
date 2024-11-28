"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  Droplets,
  ClipboardCheck,
  Clock,
  ShieldCheck,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-[#0caadc]" />,
    title: "Regular Maintenance",
    description: "Scheduled cleaning and maintenance programs"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#0caadc]" />,
    title: "Code Compliance",
    description: "Full compliance with health and safety regulations"
  },
  {
    icon: <Droplets className="w-8 h-8 text-[#0caadc]" />,
    title: "Deep Cleaning",
    description: "Thorough removal of grease and debris"
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-[#0caadc]" />,
    title: "Documentation",
    description: "Detailed service reports and maintenance records"
  }
];

const services = [
  "Grease trap inspection",
  "Regular cleaning service",
  "Emergency cleaning",
  "System maintenance",
  "Compliance reporting",
  "Preventive maintenance plans"
];

export default function GreaseTrapCleaningPage() {
  return (
    <div>
      <ServiceHero
        title="Commercial Grease Trap Cleaning"
        description="Professional grease trap maintenance services for restaurants and commercial kitchens in Plano, TX"
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Grease Trap Solutions</h2>
              <p className="text-muted-foreground mb-8">
                Keep your commercial kitchen running smoothly with our professional grease trap cleaning services. 
                We help prevent costly backups and ensure compliance with local health codes through regular 
                maintenance and thorough cleaning.
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
                <h3 className="font-semibold mb-4">Our Grease Trap Services</h3>
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