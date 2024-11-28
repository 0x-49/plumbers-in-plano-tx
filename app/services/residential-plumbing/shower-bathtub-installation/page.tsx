"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  ShowerHead,
  Tool,
  Ruler,
  Shield,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: <ShowerHead className="w-8 h-8 text-[#0caadc]" />,
    title: "Expert Installation",
    description: "Professional installation of all shower and tub types"
  },
  {
    icon: <Tool className="w-8 h-8 text-[#0caadc]" />,
    title: "Quality Materials",
    description: "Premium fixtures and installation components"
  },
  {
    icon: <Ruler className="w-8 h-8 text-[#0caadc]" />,
    title: "Custom Solutions",
    description: "Tailored installations to fit your space"
  },
  {
    icon: <Shield className="w-8 h-8 text-[#0caadc]" />,
    title: "Warranty Protection",
    description: "Guaranteed workmanship and materials"
  }
];

const services = [
  "Shower installation",
  "Bathtub installation",
  "Shower-tub combo installation",
  "Custom shower enclosures",
  "Fixture upgrades",
  "Plumbing modifications",
  "Waterproofing",
  "Tile work coordination"
];

export default function ShowerBathtubInstallationPage() {
  return (
    <div>
      <ServiceHero
        title="Shower & Bathtub Installation"
        description="Professional shower and bathtub installation services in Plano, TX"
        image="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Shower & Bathtub Solutions</h2>
              <p className="text-muted-foreground mb-8">
                Transform your bathroom with our professional shower and bathtub installation services. 
                Our experienced team ensures proper installation of all components, from plumbing 
                connections to waterproofing, delivering a beautiful and functional result.
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