```typescript
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SeasonalTips } from "./SeasonalTips";
import { EmergencyPreparedness } from "./EmergencyPreparedness";

const springTips = [
  {
    title: "Outdoor Faucet Inspection",
    description: "Check outdoor faucets and hose bibs for winter damage",
    priority: "High",
    tasks: [
      "Test each outdoor faucet for proper operation",
      "Check for leaks and drips",
      "Inspect for frost damage",
      "Replace damaged washers or seals"
    ],
    warnings: [
      "Address any leaks immediately to prevent foundation damage",
      "Don't forget to remove winter covers and insulation"
    ]
  },
  // Add more spring tips...
];

const summerTips = [
  {
    title: "Sprinkler System Maintenance",
    description: "Ensure efficient operation of irrigation systems",
    priority: "Medium",
    tasks: [
      "Check sprinkler heads for damage",
      "Adjust spray patterns",
      "Clean or replace clogged heads",
      "Test system timing and coverage"
    ]
  },
  // Add more summer tips...
];

const fallTips = [
  {
    title: "Winter Preparation",
    description: "Prepare your plumbing system for cold weather",
    priority: "High",
    tasks: [
      "Drain and store garden hoses",
      "Install outdoor faucet covers",
      "Insulate exposed pipes",
      "Service water heater"
    ],
    warnings: [
      "Failure to winterize can lead to burst pipes",
      "Don't forget basement or crawl space pipes"
    ]
  },
  // Add more fall tips...
];

const winterTips = [
  {
    title: "Freeze Prevention",
    description: "Protect your plumbing during freezing temperatures",
    priority: "High",
    tasks: [
      "Keep cabinet doors open under sinks",
      "Let faucets drip during extreme cold",
      "Maintain consistent indoor temperature",
      "Monitor problem areas"
    ],
    warnings: [
      "Never use open flames to thaw pipes",
      "Know your main water shut-off location"
    ]
  },
  // Add more winter tips...
];

const emergencyInfo = {
  contacts: [
    {
      name: "Emergency Plumbing Service",
      phone: "(123) 456-7890",
      available: "24/7 Emergency Response"
    },
    {
      name: "Water Department",
      phone: "(123) 555-0123",
      available: "Municipal Water Emergencies"
    }
  ],
  supplies: [
    {
      item: "Pipe Wrench",
      quantity: "2",
      notes: "Different sizes for various applications"
    },
    {
      item: "Water Shut-off Tool",
      quantity: "1",
      notes: "For quick access to main valve"
    }
  ],
  steps: [
    {
      title: "Water Leak Response",
      description: "Immediate actions for water leaks",
      actions: [
        "Shut off water at source or main valve",
        "Document damage with photos",
        "Remove valuable items from area",
        "Contact emergency plumber"
      ],
      tools: ["Shut-off tool", "Bucket", "Mop", "Towels"],
      warnings: [
        "Beware of electrical hazards in standing water",
        "Don't use electrical appliances in flooded areas"
      ]
    }
  ]
};

export function SeasonalGuideWrapper() {
  return (
    <Tabs defaultValue="spring" className="space-y-6">
      <TabsList className="grid grid-cols-5 w-full">
        <TabsTrigger value="spring">Spring</TabsTrigger>
        <TabsTrigger value="summer">Summer</TabsTrigger>
        <TabsTrigger value="fall">Fall</TabsTrigger>
        <TabsTrigger value="winter">Winter</TabsTrigger>
        <TabsTrigger value="emergency">Emergency</TabsTrigger>
      </TabsList>

      <TabsContent value="spring">
        <SeasonalTips season="Spring" tips={springTips} />
      </TabsContent>

      <TabsContent value="summer">
        <SeasonalTips season="Summer" tips={summerTips} />
      </TabsContent>

      <TabsContent value="fall">
        <SeasonalTips season="Fall" tips={fallTips} />
      </TabsContent>

      <TabsContent value="winter">
        <SeasonalTips season="Winter" tips={winterTips} />
      </TabsContent>

      <TabsContent value="emergency">
        <EmergencyPreparedness {...emergencyInfo} />
      </TabsContent>
    </Tabs>
  );
}
```