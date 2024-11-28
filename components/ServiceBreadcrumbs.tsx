"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface ServiceBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function ServiceBreadcrumbs({ items }: ServiceBreadcrumbsProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
            )}
            <Link
              href={item.href}
              className={`text-sm ${
                index === items.length - 1
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}