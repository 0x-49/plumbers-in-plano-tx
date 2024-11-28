```typescript
"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  Tool,
  Download
} from "lucide-react";

interface GuideStep {
  title: string;
  description: string;
  image?: string;
  tips?: string[];
  warnings?: string[];
  tools?: string[];
}

interface ServiceGuideProps {
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  timeEstimate: string;
  steps: GuideStep[];
  downloadable?: boolean;
}

export function ServiceGuide({
  title,
  description,
  difficulty,
  timeEstimate,
  steps,
  downloadable
}: ServiceGuideProps) {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 text-[#0caadc] mb-4">
        <BookOpen className="w-5 h-5" />
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <Badge className={getDifficultyColor(difficulty)}>
          {difficulty}
        </Badge>
        <span className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          {timeEstimate}
        </span>
      </div>

      <p className="text-muted-foreground mb-8">{description}</p>

      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="border-b pb-8 last:border-0">
            <h3 className="font-semibold mb-4">Step {index + 1}: {step.title}</h3>
            
            {step.image && (
              <img
                src={step.image}
                alt={step.title}
                className="rounded-lg mb-4 w-full"
              />
            )}
            
            <p className="text-muted-foreground mb-4">{step.description}</p>

            {step.tools && step.tools.length > 0 && (
              <div className="mb-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Tool className="w-4 h-4" />
                  Tools Needed:
                </h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {step.tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </ul>
              </div>
            )}

            {step.tips && step.tips.length > 0 && (
              <div className="mb-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Pro Tips:
                </h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {step.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {step.warnings && step.warnings.length > 0 && (
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  Important Warnings:
                </h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {step.warnings.map((warning, i) => (
                    <li key={i}>{warning}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {downloadable && (
        <Button className="mt-8" variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Download PDF Guide
        </Button>
      )}
    </Card>
  );
}
```