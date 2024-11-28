"use client";

import BlogGrid from "@/components/blog/BlogGrid";
import BlogSidebar from "@/components/blog/BlogSidebar";
import PageLayout from "@/components/PageLayout";
import ServiceHero from "@/components/ServiceHero";
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

export default function BlogTagPage() {
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const tag = tags.find(t => t.slug === params.slug);
  const tagPosts = posts.filter(post =>
    post.tags.includes(tag?.name || "") &&
    (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (!tag) {
    return <div>Tag not found</div>;
  }

  return (
    <PageLayout>
      <ServiceHero
        title={`Posts Tagged "${tag.name}"`}
        description={`Articles and insights related to ${tag.name}`}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogGrid posts={tagPosts} />
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar
              categories={categories}
              tags={tags}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}