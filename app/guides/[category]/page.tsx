```typescript
"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { PageLayout } from "@/components/PageLayout";
import { ServiceGuide } from "@/components/guides/ServiceGuide";
import { useParams } from "next/navigation";

const guides = {
  "water-heater": {
    title: "Water Heater Maintenance Guide",
    description: "Complete guide to maintaining your water heater",
    difficulty: "Intermediate",
    timeEstimate: "1-2 hours",
    steps: [
      {
        title: "Safety First",
        description: "Ensure safe working conditions",
        image: "https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?auto=format&fit=crop&q=80",
        tips: [
          "Turn off power/gas supply",
          "Let water cool before draining"
        ],
        warnings: [
          "Never work on a hot water heater",
          "Ensure proper ventilation"
        ],
        tools: ["Safety gloves", "Safety glasses"]
      }
    ]
  }
};

export default function GuidePage() {
  const params = useParams();
  const category = params.category as string;
  const guide = guides[category];

  if (!guide) {
    return <div>Guide not found</div>;
  }

  return (
    <PageLayout>
      <ServiceHero
        title={guide.title}
        description={guide.description}
      />

      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <ServiceGuide {...guide} />
        </div>
      </section>
    </PageLayout>
  );
}
```