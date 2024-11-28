```typescript
import { ServiceHero } from "@/components/ServiceHero";
import { PageLayout } from "@/components/PageLayout";
import { ServiceGuide } from "@/components/guides/ServiceGuide";
import { MaintenanceChecklist } from "@/components/guides/MaintenanceChecklist";
import { TroubleshootingGuide } from "@/components/guides/TroubleshootingGuide";
import { SeasonalGuideWrapper } from "@/components/guides/SeasonalGuideWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const maintenanceChecklist = {
  title: "Regular Plumbing Maintenance",
  description: "Keep your plumbing system in top condition with these regular maintenance tasks",
  items: [
    {
      id: "water-heater",
      task: "Water Heater Maintenance",
      frequency: "Every 6 months",
      importance: "High",
      tools: ["Bucket", "Garden hose", "Wrench"],
      notes: "Turn off power before maintenance"
    },
    {
      id: "drain-cleaning",
      task: "Drain Cleaning",
      frequency: "Monthly",
      importance: "Medium",
      tools: ["Drain snake", "Plunger"],
      notes: "Use natural cleaners when possible"
    }
  ]
};

const troubleshootingGuide = {
  title: "Common Plumbing Issues",
  description: "Quick solutions for common plumbing problems",
  items: [
    {
      symptom: "Dripping Faucet",
      description: "Constant dripping from faucet even when fully closed",
      severity: "Medium",
      possibleCauses: [
        "Worn out washer",
        "Damaged O-ring",
        "Corroded valve seat"
      ],
      solutions: [
        {
          steps: [
            "Turn off water supply",
            "Disassemble faucet handle",
            "Replace washer or O-ring",
            "Reassemble faucet"
          ],
          tools: ["Adjustable wrench", "Screwdriver", "Replacement parts"],
          warnings: ["Don't overtighten components"]
        }
      ]
    }
  ]
};

export default function GuidesPage() {
  return (
    <PageLayout>
      <ServiceHero
        title="Plumbing Guides & Resources"
        description="Expert guides, maintenance tips, and troubleshooting help for your plumbing needs"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <Tabs defaultValue="maintenance" className="space-y-8">
            <TabsList className="w-full">
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
              <TabsTrigger value="seasonal">Seasonal Tips</TabsTrigger>
            </TabsList>

            <TabsContent value="maintenance">
              <MaintenanceChecklist {...maintenanceChecklist} />
            </TabsContent>

            <TabsContent value="troubleshooting">
              <TroubleshootingGuide {...troubleshootingGuide} />
            </TabsContent>

            <TabsContent value="seasonal">
              <SeasonalGuideWrapper />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
}
```