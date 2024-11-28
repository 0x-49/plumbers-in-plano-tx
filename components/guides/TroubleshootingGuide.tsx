```typescript
"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle,
  Tool,
  HelpCircle,
  CheckCircle2,
  PhoneCall
} from "lucide-react";

interface Solution {
  steps: string[];
  tools?: string[];
  warnings?: string[];
  professionalHelp?: boolean;
}

interface TroubleshootingItem {
  symptom: string;
  description: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  possibleCauses: string[];
  solutions: Solution[];
}

interface TroubleshootingGuideProps {
  title: string;
  description: string;
  items: TroubleshootingItem[];
}

export function TroubleshootingGuide({
  title,
  description,
  items
}: TroubleshootingGuideProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-red-100 text-red-800";
      case "High":
        return "bg-orange-100 text-orange-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 text-[#0caadc] mb-4">
        <HelpCircle className="w-5 h-5" />
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      <p className="text-muted-foreground mb-8">{description}</p>

      <Accordion type="single" collapsible className="space-y-4">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-4">
                <span className="font-medium">{item.symptom}</span>
                <Badge className={getSeverityColor(item.severity)}>
                  {item.severity}
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-4">
                <p className="text-muted-foreground">{item.description}</p>

                <div>
                  <h4 className="font-medium mb-2">Possible Causes:</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {item.possibleCauses.map((cause, i) => (
                      <li key={i}>{cause}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Solutions:</h4>
                  {item.solutions.map((solution, i) => (
                    <div key={i} className="mb-4 last:mb-0">
                      <div className="space-y-2">
                        {solution.professionalHelp ? (
                          <div className="flex items-center gap-2 text-red-500">
                            <PhoneCall className="w-4 h-4" />
                            <span className="font-medium">
                              Professional assistance recommended
                            </span>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            {solution.steps.map((step, j) => (
                              <div key={j} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 mt-1 text-green-500" />
                                <span className="text-sm">{step}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {solution.tools && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                            <Tool className="w-4 h-4" />
                            <span>Tools needed: {solution.tools.join(", ")}</span>
                          </div>
                        )}

                        {solution.warnings && (
                          <div className="mt-2">
                            {solution.warnings.map((warning, k) => (
                              <div key={k} className="flex items-center gap-2 text-sm text-orange-500">
                                <AlertTriangle className="w-4 h-4" />
                                <span>{warning}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
}
```