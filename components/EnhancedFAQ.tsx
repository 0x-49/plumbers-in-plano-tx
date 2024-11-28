"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface EnhancedFAQProps {
  title: string;
  description?: string;
  faqs: FAQItem[];
  showSearch?: boolean;
  categories?: string[];
}

export function EnhancedFAQ({
  title,
  description,
  faqs,
  showSearch = true,
  categories = []
}: EnhancedFAQProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = !searchQuery || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !activeCategory || faq.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Card className="p-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {description && (
        <p className="text-muted-foreground mb-6">{description}</p>
      )}

      {showSearch && (
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search FAQs..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}

      {categories.length > 0 && (
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
              !activeCategory 
                ? "bg-[#0caadc] text-white" 
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                activeCategory === category 
                  ? "bg-[#0caadc] text-white" 
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {filteredFAQs.length > 0 ? (
        <Accordion type="single" collapsible className="space-y-4">
          {filteredFAQs.map((faq, index) => (
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
      ) : (
        <div className="text-center py-8 text-muted-foreground">
          No FAQs found matching your search.
        </div>
      )}
    </Card>
  );
}