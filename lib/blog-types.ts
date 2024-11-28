// Ensure this file is treated as a module
export {};

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
  };
  categories: string[];
  tags: string[];
  image: string;
  readTime: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
}