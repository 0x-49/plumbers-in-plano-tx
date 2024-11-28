"use client";

import BlogContent from "@/components/blog/BlogContent";
import BlogSidebar from "@/components/blog/BlogSidebar";
import RelatedPosts from "@/components/blog/RelatedPosts";
import PageLayout from "@/components/PageLayout";
import ServiceHero from "@/components/ServiceHero";
import { useParams } from "next/navigation";
import { generateBlogPostSchema } from "@/lib/blog-utils";
import SEOHead from "@/components/SEOHead"; 
import type { BlogPost } from "@/lib/blog-types";

// Sample data - Replace with actual data fetching
const post: BlogPost = {
  id: "1",
  title: "Common Signs You Need Emergency Plumbing Services",
  slug: "signs-emergency-plumbing-services",
  excerpt: "Learn to identify critical plumbing emergencies and when to call a professional plumber.",
  content: `
    # Common Signs You Need Emergency Plumbing Services

    When it comes to plumbing issues, knowing what constitutes an emergency can save you from costly water damage and repairs.

    ## 1. Burst Pipes
    A burst pipe is one of the most serious plumbing emergencies. Signs include:
    - Sudden drop in water pressure
    - Water stains on walls or ceilings
    - Unusual sounds in your plumbing system
    - Unexplained increase in water bills

    ## 2. Severe Drain Clogs
    While some clogs can wait, others require immediate attention:
    - Multiple drains backing up simultaneously
    - Sewage odors coming from drains
    - Water backing up into other fixtures

    ## 3. Water Heater Failure
    Your water heater might need emergency service if you notice:
    - No hot water
    - Strange noises from the tank
    - Visible leaks around the unit
    - Rusty or discolored water

    ## When to Call an Emergency Plumber
    Don't hesitate to call for emergency service if you:
    - Can't shut off the water source
    - Risk of water damage to your property
    - Safety concerns for your family
    - Multiple plumbing fixtures affected

    Contact our emergency plumbing team 24/7 for immediate assistance.
  `,
  date: "2023-11-15",
  author: {
    name: "John Plumber"
  },
  categories: ["Emergency Services", "Plumbing Maintenance"],
  tags: ["emergency", "plumbing", "home maintenance"],
  readTime: "5 min read",
  image: "/images/emergency-plumbing.jpg"
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  // In a real app, you would fetch the post based on the slug
  // For now, we'll use our sample data

  const schema = generateBlogPostSchema(post);

  return (
    <PageLayout showTableOfContents contentId="blog-content">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonicalUrl={`https://planoplumbers.com/blog/${post.slug}`}
        structuredData={schema}
      />
      
      <ServiceHero
        title={post.title}
        description={post.excerpt}
        image={post.image}
      />
      
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div id="blog-content">
                <BlogContent post={post} />
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <RelatedPosts currentPost={post} />
              </div>
            </div>

            <div>
              <div className="sticky top-24">
                <BlogSidebar
                  categories={[]}
                  tags={[]}
                  showSearch={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}