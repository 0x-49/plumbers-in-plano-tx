import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  Building2, 
  PipeOff, 
  Wrench,
  ShieldCheck,
  Clock,
  Droplets
} from "lucide-react";

const features = [
  {
    icon: <Building2 className="w-8 h-8 text-[#0caadc]" />,
    title: "Commercial Buildings",
    description: "Comprehensive plumbing solutions for office buildings, retail spaces, and industrial facilities"
  },
  {
    icon: <Clock className="w-8 h-8 text-[#0caadc]" />,
    title: "24/7 Service",
    description: "Round-the-clock emergency response for commercial properties"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#0caadc]" />,
    title: "Licensed & Insured",
    description: "Fully certified team with comprehensive insurance coverage"
  },
  {
    icon: <Droplets className="w-8 h-8 text-[#0caadc]" />,
    title: "Water Management",
    description: "Efficient water systems and conservation solutions"
  }
];

export default function CommercialPlumbingPage() {
  return (
    <div>
      <ServiceHero
        title="Commercial Plumbing Services"
        description="Professional plumbing solutions for businesses in Plano, TX"
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Commercial Plumbing Solutions</h2>
              <p className="text-muted-foreground mb-8">
                Our commercial plumbing services are designed to minimize disruption to your business operations while ensuring your plumbing systems function reliably and efficiently.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-4">Request Service Quote</h3>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}