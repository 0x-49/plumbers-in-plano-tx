import ServiceHero from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { Reviews } from "@/components/Reviews";
import { WrenchIcon, ShieldCheckIcon, AwardIcon, UsersIcon } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div>
      <ServiceHero
        title="About Plano Plumbers"
        description="Your trusted plumbing experts serving the Plano community for over 20 years"
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2000, Plano Plumbers has been providing exceptional plumbing services to residential and commercial customers throughout the Plano area. Our commitment to quality workmanship and customer satisfaction has made us one of the most trusted plumbing companies in North Texas.
              </p>
              <p className="text-muted-foreground mb-6">
                We take pride in our team of skilled professionals who undergo regular training to stay current with the latest plumbing technologies and techniques. Our dedication to excellence has earned us numerous industry certifications and countless satisfied customers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <WrenchIcon className="w-8 h-8 mx-auto mb-2 text-[#0caadc]" />
                <h3 className="font-bold text-2xl mb-2">20+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </Card>
              <Card className="p-6 text-center">
                <UsersIcon className="w-8 h-8 mx-auto mb-2 text-[#0caadc]" />
                <h3 className="font-bold text-2xl mb-2">10k+</h3>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </Card>
              <Card className="p-6 text-center">
                <ShieldCheckIcon className="w-8 h-8 mx-auto mb-2 text-[#0caadc]" />
                <h3 className="font-bold text-2xl mb-2">100%</h3>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </Card>
              <Card className="p-6 text-center">
                <AwardIcon className="w-8 h-8 mx-auto mb-2 text-[#0caadc]" />
                <h3 className="font-bold text-2xl mb-2">A+</h3>
                <p className="text-sm text-muted-foreground">BBB Rating</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
          <Reviews />
        </div>
      </section>
    </div>
  );
}