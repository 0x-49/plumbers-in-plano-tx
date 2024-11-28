"use client";

import ReadingProgress from "./ReadingProgress";
import ScrollToTop from "./ScrollToTop";
import { TableOfContents } from "./TableOfContents";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  showTableOfContents?: boolean;
  contentId?: string;
}

export default function PageLayout({
  children,
  showTableOfContents = false,
  contentId = "main-content"
}: PageLayoutProps) {
  return (
    <>
      <ReadingProgress />
      <div className="relative">
        {showTableOfContents && (
          <div className="hidden xl:block xl:fixed xl:right-8 xl:top-24 xl:w-64">
            <TableOfContents contentId={contentId} />
          </div>
        )}
        <div
          id={contentId}
          className={cn(
            "container mx-auto",
            showTableOfContents && "xl:max-w-[calc(100%-320px)]"
          )}
        >
          {children}
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}