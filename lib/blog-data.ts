import { BlogPost, BlogCategory } from '@/types/blog';

export const blogCategories: BlogCategory[] = [
  {
    id: 'maintenance',
    name: 'Maintenance Tips',
    description: 'Regular maintenance advice for your plumbing systems'
  },
  {
    id: 'emergency',
    name: 'Emergency Solutions',
    description: 'What to do in plumbing emergencies'
  },
  {
    id: 'installations',
    name: 'Installation Guides',
    description: 'Professional insights on plumbing installations'
  },
  {
    id: 'water-quality',
    name: 'Water Quality',
    description: 'Information about water treatment and quality'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'prevent-frozen-pipes',
    title: 'How to Prevent Frozen Pipes in Winter',
    slug: 'prevent-frozen-pipes',
    excerpt: 'Learn essential tips to protect your pipes during cold weather.',
    content: `
      # How to Prevent Frozen Pipes in Winter

      As winter approaches in Plano, TX, protecting your pipes from freezing becomes crucial. Here's your comprehensive guide to preventing frozen pipes and avoiding costly repairs.

      ## Why Pipes Freeze
      - Temperature drops below 32°F (0°C)
      - Poor insulation
      - Exposed pipes in unheated areas

      ## Prevention Steps
      1. Insulate exposed pipes
      2. Keep garage doors closed
      3. Let faucets drip
      4. Maintain consistent indoor temperature

      ## Emergency Steps
      If you suspect frozen pipes:
      1. Keep faucets open
      2. Apply heat safely
      3. Call professional help if needed

      Remember, prevention is always better than dealing with burst pipes!
    `,
    author: {
      name: 'John Smith'
    },
    date: '2024-01-15',
    category: ['maintenance'],
    tags: ['winter', 'maintenance', 'prevention'],
    imageUrl: '/blog/frozen-pipes.jpg',
    readTime: '5 min read'
  },
  {
    id: 'water-heater-maintenance',
    title: 'Essential Water Heater Maintenance Guide',
    slug: 'water-heater-maintenance',
    excerpt: 'Maintain your water heater properly to extend its lifespan and efficiency.',
    content: `
      # Essential Water Heater Maintenance Guide

      Regular maintenance of your water heater is crucial for optimal performance and longevity. Follow this comprehensive guide to keep your water heater running efficiently.

      ## Why Maintenance Matters
      - Extends equipment lifespan
      - Improves energy efficiency
      - Prevents costly repairs
      - Ensures consistent hot water supply

      ## Maintenance Checklist
      1. Check the pressure relief valve
      2. Inspect the anode rod
      3. Flush the tank annually
      4. Test water temperature
      5. Look for signs of corrosion

      ## Warning Signs
      - Strange noises
      - Rusty water
      - Inconsistent temperature
      - Leaks around the base
      - Unusual sounds or smells

      Keep your water heater in top condition for reliable hot water year-round!
    `,
    author: {
      name: 'Sarah Johnson'
    },
    date: '2024-02-01',
    category: ['maintenance'],
    tags: ['water heater', 'maintenance', 'efficiency'],
    imageUrl: '/blog/water-heater.jpg',
    readTime: '7 min read'
  }
  // Additional blog posts can be added here
];
