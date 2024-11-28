"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { List, ChevronRight } from "lucide-react";

interface Section {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  contentId: string;
}

export function TableOfContents({ contentId }: TableOfContentsProps) {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const content = document.getElementById(contentId);
    if (!content) return;

    const headings = content.querySelectorAll("h2, h3");
    const sectionData: Section[] = Array.from(headings).map((heading) => ({
      id: heading.id,
      title: heading.textContent || "",
      level: parseInt(heading.tagName[1])
    }));

    setSections(sectionData);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [contentId]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4 text-[#0caadc]">
        <List className="w-5 h-5" />
        <h3 className="font-semibold">Table of Contents</h3>
      </div>
      <nav>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li
              key={section.id}
              className={cn(
                "cursor-pointer text-sm transition-colors",
                section.level === 3 && "ml-4",
                activeSection === section.id
                  ? "text-[#0caadc] font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => scrollToSection(section.id)}
            >
              <div className="flex items-center gap-1">
                <ChevronRight className="w-4 h-4" />
                <span>{section.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </Card>
  );
}