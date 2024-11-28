import { ServiceCard } from "@/components/ServiceCard";
import { 
  Wrench, 
  Home, 
  Building2, 
  Droplet, 
  Flame, 
  ShowerHead,
  PipeOff,
  Waves,
  Sprout,
  Lightbulb
} from "lucide-react";

const services = [
  {
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing services for urgent situations",
    icon: <Wrench className="w-full h-full" />,
    href: "/services/emergency-plumbing"
  },
  {
    title: "Residential Plumbing",
    description: "Complete home plumbing solutions",
    icon: <Home className="w-full h-full" />,
    href: "/services/residential-plumbing"
  },
  {
    title: "Commercial Plumbing",
    description: "Professional commercial plumbing services",
    icon: <Building2 className="w-full h-full" />,
    href: "/services/commercial-plumbing"
  },
  {
    title: "Water Heater Services",
    description: "Installation, repair, and maintenance",
    icon: <Flame className="w-full h-full" />,
    href: "/services/water-heater-services"
  },
  {
    title: "Bathroom Remodeling",
    description: "Complete bathroom renovation services",
    icon: <ShowerHead className="w-full h-full" />,
    href: "/services/bathroom-remodeling"
  },
  {
    title: "Drain & Sewer",
    description: "Professional drain and sewer solutions",
    icon: <PipeOff className="w-full h-full" />,
    href: "/services/drain-and-sewer"
  },
  {
    title: "Water Treatment",
    description: "Water filtration and softening systems",
    icon: <Waves className="w-full h-full" />,
    href: "/services/water-treatment-services"
  },
  {
    title: "Outdoor Plumbing",
    description: "Sprinkler systems and outdoor solutions",
    icon: <Sprout className="w-full h-full" />,
    href: "/services/outdoor-plumbing"
  },
  {
    title: "Smart Plumbing",
    description: "Modern plumbing technology solutions",
    icon: <Lightbulb className="w-full h-full" />,
    href: "/services/specialty-plumbing/smart-plumbing-systems"
  }
];

export default function ServicesPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#034748] to-[#0059b8] py-16 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Comprehensive plumbing solutions for residential and commercial properties in Plano, TX
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}