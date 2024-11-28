"use client";

import { useState, useEffect } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop ? (scrollTop / docHeight) * 100 : 0;
      setProgress(progress);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-16 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-[#0caadc] transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}