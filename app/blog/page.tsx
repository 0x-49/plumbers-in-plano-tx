```typescript
"use client";

import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { PageLayout } from "@/components/PageLayout";
import { ServiceHero } from "@/components/ServiceHero";
import { useState } from "react";
import type { BlogPost, BlogCategory, BlogTag } from "@/lib/blog-types";

// Sample data - Replace with actual data fetching
const posts: BlogPost[] = [
  // ... Add sample blog posts
];

const categories: BlogCategory[] = [
  // ... Add sample categories
];

const tags: BlogTag[] = [
  // ... Add sample tags
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageLayout>
      <ServiceHero
        title="Plumbing Tips & Insights"
        description="Expert advice, maintenance tips, and industry insights from Plano's trusted plumbers"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BlogGrid posts={filteredPosts} featured />
            </div>
            <div>
              <div className="sticky top-24">
                <BlogSidebar
                  categories={categories}
                  tags={tags}
                  onSearch={setSearchQuery}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
```