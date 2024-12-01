"use client";

import ServiceHero from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceProcess } from "@/components/ServiceProcess";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { SmartDevicesList } from "@/components/SmartDevicesList";
import { 
  Lightbulb,
  Smartphone,
  WifiIcon,
  Settings,
  CheckCircle,
  Bell,
  Droplets,
  Shield
} from "lucide-react";

const features = [
  {
    icon: <Smartphone className="w-8 h-8 text-[#0caadc]" />,
    title: "Mobile Control",
    description: "Control your plumbing system from anywhere using your smartphone"
  },
  {
    icon: <Bell className="w-8 h-8 text-[#0caadc]" />,
    title: "Leak Detection",
    description: "Real-time alerts for water leaks and unusual usage patterns"
  },
  {
    icon: <Droplets className="w-8 h-8 text-[#0caadc]" />,
    title: "Usage Monitoring",
    description: "Track water consumption and identify efficiency opportunities"
  },
  {
    icon: <Shield className="w-8 h-8 text-[#0caadc]" />,
    title: "Auto Shutoff",
    description: "Automatic water shutoff when leaks are detected"
  }
];

const processSteps = [
  {
    title: "System Assessment",
    description: "We evaluate your current plumbing system and discuss your smart home goals."
  },
  {
    title: "Custom Design",
    description: "Our team designs a smart plumbing solution tailored to your needs."
  },
  {
    title: "Professional Installation",
    description: "Expert installation of smart devices and system integration."
  },
  {
    title: "System Setup",
    description: "Configuration of all smart features and mobile app setup."
  },
  {
    title: "User Training",
    description: "Comprehensive training on using your new smart plumbing system."
  }
];

const faqItems = [
  {
    question: "What are the benefits of smart plumbing systems?",
    answer: "Smart plumbing systems offer leak detection, water usage monitoring, remote control capabilities, and automatic shutoff features to prevent water damage. They can help reduce water bills and prevent costly repairs."
  },
  {
    question: "Do smart plumbing systems require internet?",
    answer: "Yes, most smart plumbing features require internet connectivity for remote monitoring and control. However, basic safety features like automatic shutoff will still work during internet outages."
  },
  {
    question: "Can smart systems be integrated with existing plumbing?",
    answer: "Yes, most smart plumbing devices can be integrated with existing plumbing systems. Our team will assess your current setup and recommend compatible solutions."
  },
  {
    question: "How secure are smart plumbing systems?",
    answer: "Our smart plumbing systems use advanced encryption and security protocols to protect your data and prevent unauthorized access."
  },
  {
    question: "What maintenance do smart plumbing systems need?",
    answer: "Smart plumbing systems require minimal maintenance beyond regular software updates and annual system checks. Battery-powered sensors typically need replacement every 2-3 years."
  }
];

export default function SmartPlumbingPage() {
  return (
    <div>
      <ServiceHero
        title="Smart Plumbing Systems"
        description="Advanced plumbing technology for modern homes in Plano, TX"
        image="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Smart Plumbing Solutions</h2>
              <p className="text-muted-foreground mb-8">
                Transform your home with intelligent plumbing technology that provides peace of mind, 
                water conservation, and convenient control from your smartphone.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {features.map((feature, index) => (
                  <Card key={index} className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>

              <Card className="p-6 mb-12">
                <h3 className="text-xl font-bold mb-6">Compatible Smart Devices</h3>
                <SmartDevicesList />
              </Card>

              <ServiceProcess
                title="Installation Process"
                description="We follow a systematic approach to implement your smart plumbing solution."
                steps={processSteps}
              />

              <div className="mt-12">
                <ServiceFAQ
                  title="Smart Plumbing FAQ"
                  description="Common questions about smart plumbing systems"
                  faqs={faqItems}
                />
              </div>
            </div>

            <div>
              <Card className="p-6 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Schedule Consultation</h3>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}