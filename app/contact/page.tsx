import ServiceHero from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      <ServiceHero
        title="Contact Us"
        description="Get in touch with our expert plumbing team in Plano, TX"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6">
              <PhoneCall className="w-8 h-8 mb-4 text-[#0caadc]" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">(123) 456-7890</p>
              <p className="text-sm text-muted-foreground mt-2">Available 24/7 for emergencies</p>
            </Card>
            <Card className="p-6">
              <Mail className="w-8 h-8 mb-4 text-[#0caadc]" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@planoplumbers.com</p>
              <p className="text-sm text-muted-foreground mt-2">We'll respond within 24 hours</p>
            </Card>
            <Card className="p-6">
              <MapPin className="w-8 h-8 mb-4 text-[#0caadc]" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">123 Main Street</p>
              <p className="text-muted-foreground">Plano, TX 75023</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </Card>
            <div>
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-muted-foreground">7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Saturday</span>
                  <span className="text-muted-foreground">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2 text-[#0caadc]">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">24/7 Emergency Service Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}