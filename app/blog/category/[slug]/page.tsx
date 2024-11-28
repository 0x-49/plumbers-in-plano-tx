```typescript
"use client";

import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { PageLayout } from "@/components/PageLayout";
import { ServiceHero } from "@/components/ServiceHero";
import { useState } from "react";
import { useParams } from "next/navigation";
import type { BlogPost, BlogCategory, BlogTag } from "@/lib/blog-types";

// Sample data - Replace with actual data fetching
const categories: BlogCategory[] = [
  {
    id: "plumbing-tips",
    name: "Plumbing Tips",
    slug: "plumbing-tips",
    description: "Expert advice for maintaining your plumbing system"
  },
  {
    id: "maintenance",
    name: "Maintenance",
    slug: "maintenance",
    description: "Regular maintenance tips and schedules"
  }
];

const tags: BlogTag[] = [
  {
    id: "water-heater",
    name: "Water Heater",
    slug: "water-heater"
  },
  {
    id: "drain-cleaning",
    name: "Drain Cleaning",
    slug: "drain-cleaning"
  }
];

const posts: BlogPost[] = [
  // ... Sample posts
];

export default function BlogCategoryPage() {
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  
  const category = categories.find(cat => cat.slug === params.slug);
  const categoryPosts = posts.filter(post => 
    post.categories.includes(category?.name || "") &&
    (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <PageLayout>
      <ServiceHero
        title={category.name}
        description={category.description}
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BlogGrid posts={categoryPosts} />
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