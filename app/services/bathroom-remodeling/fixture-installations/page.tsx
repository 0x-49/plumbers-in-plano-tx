"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  ShowerHead,
  Droplets,
  Settings,
  Tool,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: <ShowerHead className="w-8 h-8 text-[#0caadc]" />,
    title: "Shower & Tub Fixtures",
    description: "Installation of modern shower heads and tub faucets"
  },
  {
    icon: <Droplets className="w-8 h-8 text-[#0caadc]" />,
    title: "Sink Fixtures",
    description: "Stylish and efficient sink faucet installation"
  },
  {
    icon: <Settings className="w-8 h-8 text-[#0caadc]" />,
    title: "Hardware Updates",
    description: "Replacement of handles, knobs, and other hardware"
  },
  {
    icon: <Tool className="w-8 h-8 text-[#0caadc]" />,
    title: "Expert Installation",
    description: "Professional installation by certified plumbers"
  }
];

const services = [
  "Faucet installation and replacement",
  "Shower head installation",
  "Tub spout replacement",
  "Valve installation",
  "Hardware upgrades",
  "Water-efficient fixture installation"
];

export default function FixtureInstallationsPage() {
  return (
    <div>
      <ServiceHero
        title="Bathroom Fixture Installations"
        description="Professional installation of modern bathroom fixtures in Plano, TX"
        image="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Fixture Installation Services</h2>
              <p className="text-muted-foreground mb-8">
                Transform your bathroom with our professional fixture installation services. We offer a wide selection of modern, water-efficient fixtures installed by experienced plumbers.
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
                <h3 className="font-semibold mb-4">Our Installation Services</h3>
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
                <h3 className="text-2xl font-bold mb-4">Schedule Installation</h3>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}