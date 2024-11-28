"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      variant="secondary"
      size="icon"
      className="fixed bottom-8 right-8 z-50 bg-[#0caadc] hover:bg-[#1481ba] text-white rounded-full shadow-lg"
      onClick={scrollToTop}
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
}