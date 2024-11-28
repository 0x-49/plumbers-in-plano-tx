"use client";

import { useState } from "react";
import { AlertTriangle, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-red-500 text-white py-2 px-4 relative">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          <span className="text-sm font-medium">24/7 Emergency Service Available</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="bg-white text-red-500 hover:bg-red-50"
            asChild
          >
            <a href="tel:+1234567890" className="flex items-center gap-1">
              <PhoneCall className="w-4 h-4" />
              <span className="hidden sm:inline">(123) 456-7890</span>
              <span className="sm:hidden">Call Now</span>
            </a>
          </Button>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}