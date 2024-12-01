import ServiceHero from "@/components/ServiceHero";
import { Gallery } from "@/components/Gallery";

export default function GalleryPage() {
  return (
    <div>
      <ServiceHero
        title="Our Work Gallery"
        description="Explore our portfolio of professional plumbing projects in Plano, TX"
      />

      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <Gallery />
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">About Our Work</h2>
            <p className="text-muted-foreground mb-4">
              Our gallery showcases the quality and professionalism we bring to every plumbing project. 
              From residential repairs to commercial installations, we take pride in delivering 
              exceptional results that meet our clients' needs.
            </p>
            <p className="text-muted-foreground">
              Each project is handled by our team of licensed plumbers who are committed to using 
              the best materials and following industry best practices. We document our work to 
              demonstrate our attention to detail and the high standards we maintain.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}