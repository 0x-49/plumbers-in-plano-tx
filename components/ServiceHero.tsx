import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServiceHeroProps {
  title: string;
  description: string;
  image?: string;
}

const ServiceHero = ({ title, description, image }: ServiceHeroProps) => {
  return (
    <div className="relative bg-gradient-to-r from-[#034748] to-[#0059b8] py-20 text-white">
      {image && (
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl mb-8 text-white/90">{description}</p>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-[#0caadc] hover:bg-[#11b5e4]"
              asChild
            >
              <Link href="/contact">Schedule Service</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
              asChild
            >
              <Link href="tel:+1234567890">Call Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;