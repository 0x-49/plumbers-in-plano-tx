"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80",
    title: "Water Heater Installation",
    description: "Professional installation of a modern tankless water heater system",
    category: "Water Heater Services"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
    title: "Commercial Plumbing",
    description: "Large-scale commercial plumbing project for a local business",
    category: "Commercial Services"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80",
    title: "Bathroom Remodeling",
    description: "Complete bathroom renovation with modern fixtures and design",
    category: "Bathroom Remodeling"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1599686101742-47d0ae9b9b6c?auto=format&fit=crop&q=80",
    title: "Drain Cleaning",
    description: "Professional drain cleaning using advanced hydro jetting technology",
    category: "Drain Services"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
    title: "Gas Line Installation",
    description: "Expert gas line installation with safety compliance",
    category: "Gas Services"
  }
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <Card className="overflow-hidden">
        <div className="relative aspect-video">
          <img
            src={galleryItems[currentIndex].image}
            alt={galleryItems[currentIndex].title}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <h3 className="text-xl font-bold mb-2">{galleryItems[currentIndex].title}</h3>
            <p className="text-sm text-white/80 mb-2">{galleryItems[currentIndex].description}</p>
            <span className="inline-block bg-[#0caadc] px-3 py-1 rounded-full text-sm">
              {galleryItems[currentIndex].category}
            </span>
          </div>
        </div>
      </Card>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center mt-4 gap-2">
        {galleryItems.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-[#0caadc]" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}