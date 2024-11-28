import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceHero } from "@/components/ServiceHero";

const faqs = [
  {
    question: "How quickly can you respond to emergency calls?",
    answer: "We provide 24/7 emergency plumbing services with typical response times of 30-60 minutes in the Plano area. Our emergency team is always ready to handle urgent plumbing issues."
  },
  {
    question: "Are your plumbers licensed and insured?",
    answer: "Yes, all our plumbers are fully licensed, bonded, and insured. We maintain strict professional standards and ensure all our team members are thoroughly vetted and certified."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes, we provide free estimates for most plumbing services. Our technician will assess the situation and provide a detailed quote before beginning any work."
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve Plano and surrounding areas including Frisco, Allen, McKinney, and Richardson. Contact us to confirm if we service your specific location."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, cash, and checks. We also offer financing options for larger plumbing projects."
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes, we offer warranties on both our workmanship and installed parts. The specific warranty terms depend on the service provided and parts used."
  },
  {
    question: "How do I know if I have a plumbing emergency?",
    answer: "Signs of a plumbing emergency include flooding, sewage backup, burst pipes, no water supply, or gas leaks. If you're unsure, call us and we'll help assess the situation."
  }
];

export default function FAQPage() {
  return (
    <div>
      <ServiceHero
        title="Frequently Asked Questions"
        description="Find answers to common questions about our plumbing services in Plano, TX"
      />
      
      <section className="py-16 bg-background">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}