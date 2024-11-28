"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/lib/blog-types";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured";
}

function BlogCard({ post, variant = "default" }: BlogCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <div className="aspect-video relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          {post.categories.map((category) => (
            <Badge
              key={category}
              className="absolute top-4 left-4 bg-[#0caadc] text-white"
            >
              {category}
            </Badge>
          ))}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <CalendarIcon className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
          <h3 className={`${isFeatured ? 'text-2xl' : 'text-xl'} font-semibold mb-2 group-hover:text-[#0caadc] transition-colors line-clamp-2`}>
            {post.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center text-[#0caadc] font-medium">
            Read More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </Link>
    </Card>
  );
}

export { BlogCard };