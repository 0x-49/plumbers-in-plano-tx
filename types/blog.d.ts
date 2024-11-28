export interface BlogCategory {
  id: string;
  name: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string[] | string;
  author: { name: string };
  date: string;
  content: string;
  excerpt?: string;
  tags?: string[];
  imageUrl?: string;
  readTime?: string;
}
