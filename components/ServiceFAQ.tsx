"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title: string;
  description: string;
  faqs: FAQ[];
}

export function ServiceFAQ({ title, description, faqs }: ServiceFAQProps) {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-muted-foreground mb-8">{description}</p>
      
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
    </Card>
  );
}