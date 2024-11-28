"use client";

import { Card } from "@/components/ui/card";
import { StarIcon, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Brown",
    role: "Homeowner",
    content: "The team was incredibly professional and efficient. They fixed our emergency plumbing issue within hours of calling.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Emily Wilson",
    role: "Business Owner",
    content: "Outstanding service! They've been maintaining our commercial plumbing systems for years with exceptional reliability.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "David Martinez",
    role: "Property Manager",
    content: "Their 24/7 emergency service has saved us multiple times. Highly recommend their professional and prompt service.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  }
];

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
          <div className="flex mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <StarIcon
                key={i}
                className="w-5 h-5 fill-[#0caadc] text-[#0caadc]"
              />
            ))}
          </div>
          <div className="relative">
            <Quote className="w-8 h-8 text-[#0caadc] opacity-20 absolute -top-2 -left-2" />
            <p className="text-muted-foreground relative z-10 pl-4">
              {testimonial.content}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}