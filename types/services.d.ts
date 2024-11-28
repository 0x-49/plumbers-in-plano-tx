export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  benefits?: string[];
  image?: string;
  icon?: string;
  slug: string;
  category: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  slug: string;
  services: Service[];
}