import ServiceHero from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  ShowerHead, 
  Droplets, 
  Pipette,
  Wrench 
} from "lucide-react";

const services = [
  {
    icon: <ShowerHead className="w-8 h-8 text-[#0caadc]" />,
    title: "Bathroom Plumbing",
    description: "Installation and repair of toilets, sinks, showers, and bathtubs"
  },
  {
    icon: <Droplets className="w-8 h-8 text-[#0caadc]" />,
    title: "Kitchen Plumbing",
    description: "Faucet repairs, garbage disposal installation, and sink services"
  },
  {
    icon: <Pipette className="w-8 h-8 text-[#0caadc]" />,
    title: "Drain Services",
    description: "Drain cleaning, unclogging, and maintenance"
  },
  {
    icon: <Wrench className="w-8 h-8 text-[#0caadc]" />,
    title: "General Repairs",
    description: "Leak detection and repair, pipe maintenance"
  }
];

export default function ResidentialPlumbingPage() {
  return (
    <div>
      <ServiceHero
        title="Residential Plumbing Services"
        description="Complete plumbing solutions for your home in Plano, TX"
        image="https://images.unsplash.com/photo-1585128903994-9788298932a7?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Home Plumbing Services</h2>
              <p className="text-muted-foreground mb-8">
                Our residential plumbing services cover all aspects of home plumbing, from routine maintenance to complex repairs. We ensure your home's plumbing system operates efficiently and reliably.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <Card key={index} className="p-6">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </Card>
                ))}
              </div>
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