"use client";

import { BlogCard } from "./BlogCard";
import type { BlogPost } from "@/lib/blog-types";
import { useMemo } from "react";

interface RelatedPostsProps {
  currentPost: BlogPost;
  posts?: BlogPost[];
}

export default function RelatedPosts({ currentPost, posts = [] }: RelatedPostsProps) {
  const relatedPosts = useMemo(() => {
    // If posts are provided directly, use them
    if (posts.length > 0) return posts;

    // TODO: Implement logic to fetch related posts based on currentPost
    // For now, return an empty array
    return [];
  }, [currentPost, posts]);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {relatedPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}