"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import Link from "next/link";
import type { BlogCategory, BlogTag } from "@/lib/blog-types";

interface BlogSidebarProps {
  categories: BlogCategory[];
  tags: BlogTag[];
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  showSearch?: boolean;
}

export default function BlogSidebar({ categories, tags, onSearchChange, showSearch = true, searchQuery }: BlogSidebarProps) {
  return (
    <div className="space-y-6">
      {showSearch && (
        <Card className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10"
              onChange={(e) => onSearchChange?.(e.target.value)}
            />
          </div>
        </Card>
      )}

      <Card className="p-4">
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/blog/category/${category.slug}`}
              className="block text-sm text-muted-foreground hover:text-[#0caadc] transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link key={tag.id} href={`/blog/tag/${tag.slug}`}>
              <Badge variant="secondary" className="hover:bg-[#0caadc] hover:text-white cursor-pointer">
                {tag.name}
              </Badge>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
}