import ServiceHero from "@/components/ServiceHero";
import ServiceCards from "@/components/ServiceCards";
import { Reviews } from "@/components/Reviews";
import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <ServiceHero
        title="Expert Plumbing Services in Plano, TX"
        description="Professional plumbing solutions for your home and business"
        image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
      />
      
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <ServiceCards />
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <Reviews />
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <ContactForm />
          </Card>
        </div>
      </section>
    </div>
  );
}