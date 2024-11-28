"use client";

import { BlogCard } from "./BlogCard";
import type { BlogPost } from "@/lib/blog-types";

interface BlogGridProps {
  posts: BlogPost[];
  featured?: boolean;
}

export default function BlogGrid({ posts, featured = false }: BlogGridProps) {
  if (featured) {
    const [featuredPost, ...regularPosts] = posts;
    
    return (
      <div className="grid gap-8">
        <BlogCard post={featuredPost} variant="featured" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}