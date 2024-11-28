import type { BlogPost, BlogCategory, BlogTag } from "./blog-types";
import { businessData } from "./business-data";

export function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function generateBlogPostSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name
    },
    publisher: {
      "@type": "Organization",
      name: businessData.name,
      logo: {
        "@type": "ImageObject",
        url: businessData.logo
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${businessData.url}/blog/${post.slug}`
    },
    keywords: [...post.categories, ...post.tags].join(", ")
  };
}

export function generateBlogCategorySchema(category: BlogCategory, posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    description: category.description,
    url: `${businessData.url}/blog/category/${category.slug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "BlogPosting",
          headline: post.title,
          url: `${businessData.url}/blog/${post.slug}`
        }
      }))
    }
  };
}

export function generateBlogTagSchema(tag: BlogTag, posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Posts Tagged "${tag.name}"`,
    description: `Articles and insights related to ${tag.name}`,
    url: `${businessData.url}/blog/tag/${tag.slug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          url: `${businessData.url}/blog/${post.slug}`
        }
      }))
    }
  };
}

export function filterPosts(
  posts: BlogPost[],
  {
    category,
    tag,
    searchQuery,
    dateRange
  }: {
    category?: string;
    tag?: string;
    searchQuery?: string;
    dateRange?: { start: Date; end: Date };
  }
) {
  return posts.filter(post => {
    const matchesCategory = !category || post.categories.includes(category);
    const matchesTag = !tag || post.tags.includes(tag);
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDate = !dateRange || (
      new Date(post.date) >= dateRange.start &&
      new Date(post.date) <= dateRange.end
    );

    return matchesCategory && matchesTag && matchesSearch && matchesDate;
  });
}

export function sortPosts(posts: BlogPost[], sortBy: 'date' | 'popular' = 'date') {
  return [...posts].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    // Add more sorting options as needed
    return 0;
  });
}

function countMatches(post1: BlogPost, post2: BlogPost): number {
  let score = 0;
  
  // Category matches (higher weight)
  const commonCategories = post1.categories.filter(cat => 
    post2.categories.includes(cat)
  );
  score += commonCategories.length * 2;
  
  // Tag matches
  const commonTags = post1.tags.filter(tag => 
    post2.tags.includes(tag)
  );
  score += commonTags.length;
  
  return score;
}

export function getRelatedPosts(currentPost: BlogPost, allPosts: BlogPost[], limit = 2): BlogPost[] {
  // Filter out the current post and sort by relevance
  return allPosts
    .filter(post => post.id !== currentPost.id)
    .sort((a, b) => {
      const aMatches = countMatches(currentPost, a);
      const bMatches = countMatches(currentPost, b);
      return bMatches - aMatches;
    })
    .slice(0, limit);
}

export {};