"use client";

import { Card } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "John Smith",
    rating: 5,
    date: "2024-03-15",
    content: "Excellent service! Fixed our emergency leak quickly and professionally.",
    service: "Emergency Plumbing",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    date: "2024-03-10",
    content: "Very knowledgeable team. They installed our new water heater efficiently.",
    service: "Water Heater Installation",
  },
  {
    id: 3,
    name: "Mike Davis",
    rating: 5,
    date: "2024-03-05",
    content: "Great experience with their drain cleaning service. Very thorough work.",
    service: "Drain Cleaning",
  },
];

export function Reviews() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <Card key={review.id} className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">{review.name}</h3>
              <p className="text-sm text-muted-foreground">{review.service}</p>
            </div>
            <div className="flex">
              {Array.from({ length: review.rating }).map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-5 h-5 fill-[#0caadc] text-[#0caadc]"
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{review.content}</p>
          <p className="text-xs text-muted-foreground mt-4">
            {new Date(review.date).toLocaleDateString()}
          </p>
        </Card>
      ))}
    </div>
  );
}