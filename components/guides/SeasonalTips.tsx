```typescript
"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Sun, 
  Snowflake, 
  Cloud, 
  Flower, 
  CheckCircle,
  AlertTriangle 
} from "lucide-react";

interface SeasonalTip {
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  tasks: string[];
  warnings?: string[];
}

interface SeasonalTipsProps {
  season: "Spring" | "Summer" | "Fall" | "Winter";
  tips: SeasonalTip[];
}

const seasonIcons = {
  Spring: <Flower className="w-5 h-5" />,
  Summer: <Sun className="w-5 h-5" />,
  Fall: <Cloud className="w-5 h-5" />,
  Winter: <Snowflake className="w-5 h-5" />
};

const seasonColors = {
  Spring: "text-green-500",
  Summer: "text-yellow-500",
  Fall: "text-orange-500",
  Winter: "text-blue-500"
};

const priorityColors = {
  High: "bg-red-100 text-red-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Low: "bg-green-100 text-green-800"
};

export function SeasonalTips({ season, tips }: SeasonalTipsProps) {
  return (
    <Card className="p-6">
      <div className={`flex items-center gap-2 mb-6 ${seasonColors[season]}`}>
        {seasonIcons[season]}
        <h2 className="text-xl font-bold">{season} Plumbing Maintenance</h2>
      </div>

      <div className="space-y-6">
        {tips.map((tip, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{tip.title}</h3>
              <Badge className={priorityColors[tip.priority]}>
                {tip.priority} Priority
              </Badge>
            </div>

            <p className="text-muted-foreground mb-4">{tip.description}</p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Maintenance Tasks:
                </h4>
                <ul className="space-y-2">
                  {tip.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {tip.warnings && tip.warnings.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    Important Warnings:
                  </h4>
                  <ul className="space-y-2">
                    {tip.warnings.map((warning, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-orange-500">
                        <span className="mt-1">•</span>
                        <span>{warning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}
```