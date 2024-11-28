"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock, Share2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/lib/blog-types";

interface BlogContentProps {
  post: BlogPost;
}

export default function BlogContent({ post }: BlogContentProps) {
  return (
    <Card className="p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            {post.author.avatar && (
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
            )}
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">Author</p>
            </div>
          </div>

          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>

        <div className="prose prose-neutral max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="flex flex-wrap gap-2 mt-8">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}