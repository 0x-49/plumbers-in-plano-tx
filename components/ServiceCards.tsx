"use client";

import { ServiceCard } from "@/components/ServiceCard";
import {
  Wrench,
  Home,
  Building2,
  Flame,
  Bath,
  PenLine,
  Waves,
  Sprout,
  Lightbulb,
  Wrench as Tool,
  Settings
} from "lucide-react";

const serviceCategories = [
  {
    title: "Emergency Plumbing",
    description: "24/7 emergency services for urgent plumbing issues",
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
    description: "Professional services for businesses",
    icon: <Building2 className="w-full h-full" />,
    href: "/services/commercial-plumbing"
  },
  {
    title: "Water Heater Services",
    description: "Installation, repair & maintenance",
    icon: <Flame className="w-full h-full" />,
    href: "/services/water-heater-services"
  },
  {
    title: "Drain & Sewer",
    description: "Professional drain cleaning solutions",
    icon: <PenLine className="w-full h-full" />,
    href: "/services/drain-and-sewer"
  },
  {
    title: "Bathroom Remodeling",
    description: "Complete bathroom renovation services",
    icon: <Bath className="w-full h-full" />,
    href: "/services/bathroom-remodeling"
  },
  {
    title: "Gas Plumbing",
    description: "Expert gas line services",
    icon: <Flame className="w-full h-full" />,
    href: "/services/gas-plumbing"
  },
  {
    title: "Water Treatment",
    description: "Water filtration & softening systems",
    icon: <Waves className="w-full h-full" />,
    href: "/services/water-treatment-services"
  },
  {
    title: "Outdoor Plumbing",
    description: "Sprinkler & pool plumbing solutions",
    icon: <Sprout className="w-full h-full" />,
    href: "/services/outdoor-plumbing"
  },
  {
    title: "Pipework Services",
    description: "Complete pipe repair & replacement",
    icon: <Tool className="w-full h-full" />,
    href: "/services/pipework-services"
  },
  {
    title: "Smart Plumbing",
    description: "Modern plumbing technology solutions",
    icon: <Lightbulb className="w-full h-full" />,
    href: "/services/specialty-plumbing/smart-plumbing-systems"
  },
  {
    title: "Maintenance Services",
    description: "Regular maintenance & inspections",
    icon: <Settings className="w-full h-full" />,
    href: "/services/maintenance"
  }
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {serviceCategories.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
}